import { TenantInterface } from "@arkasuryawan/gp-interfaces";
import { useState } from "react";
import { LoadingSVG, X } from "lib/Icons";
import ImageLoader from "./ImageLoader";
import { BackendFetch } from "lib/FetchAxios";
import { useCtx } from "lib/Context";
import getConfig from "next/config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useToasts } from "@geist-ui/core";

interface Props {
  referenceCode: TenantInterface[];
  setReferenceCode: (s: TenantInterface[]) => void;
}

const ViewTenantByReferenceCode = (props: Props) => {
  const [isFetch, setIsFetch] = useState(false);
  const { state, dispatch } = useCtx();
  const router = useRouter();
  const { setToast } = useToasts();
  const action = {
    name: "close",
    passive: true,
    handler: (_: any, cancel: any) => cancel("error"),
  };

  const postTenant = async (id: any) => {
    const { publicRuntimeConfig } = getConfig();
    initializeApp(publicRuntimeConfig?.firebaseConfig);
    setIsFetch(true);
    try {
      const auth = getAuth();
      const toJSON = auth.currentUser?.toJSON();

      if (!toJSON?.hasOwnProperty("stsTokenManager"))
        return setToast({
          text: "wait a moment",
          actions: [action],
          type: "error",
        });

      // @ts-ignore
      const accessToken = toJSON?.stsTokenManager?.accessToken;

      const rr = await BackendFetch("agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          data: {
            tenantId: id,
            _id: state?.profile?._id,
          },
        }),
      });

      if (!rr.status) throw new Error("Failed Update");

      const post = await BackendFetch("login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!post.status) throw new Error("Failed Update");

      if (post?.data && post.data?.data) {
        setIsFetch(false);
        props.setReferenceCode([]);
        dispatch({
          type: "SET_PROFILE",
          payload: {
            profile: post.data?.data,
          },
        });
        setToast({
          text: "Success join the tenant",
          actions: [action],
          type: "success",
        });
        return router.replace("/dashboard");
      }
    } catch (e) {
      setIsFetch(false);
      setToast({
        text: "Something went wrong",
        actions: [action],
        type: "error",
      });
    }
  };

  return (
    <div
      className={`${
        props?.referenceCode?.length > 0 ? "translate-x-0" : "translate-x-full"
      } w-full md:w-2/4 lg:w-2/6 bg-white h-screen duration-200 fixed z-40 right-0 top-0 border border-gray-300 rounded-tl-xl py-20 overflow-y-auto`}
    >
      <div className="flex items-center justify-between mt-2 mr-4 ml-4">
        <button
          disabled={isFetch}
          className="bg-gray-100 w-10 h-10 rounded-xl flex items-center justify-center"
          onClick={() => props.setReferenceCode([])}
        >
          <X color="red" />
        </button>
        <div className="bg-blue-500/20 py-2 px-4 rounded-full text-blue-500 text-sm md:text-normal">
          Tenant
        </div>
      </div>

      {props?.referenceCode?.map((data: TenantInterface, index) => {
        return (
          <div className="p-4 border-b" key={index}>
            <div className="flex pt-2 gap-2 justify-between items-center">
              <div className="flex pt-2 gap-2">
                <ImageLoader
                  key={data?.thumbnailURL}
                  imageSource={data?.thumbnailURL as string}
                />
                <div className="flex flex-col gap-2">
                  <p
                    className={`m-0 px-4 w-fit text-sm rounded-full 
                  ${
                    data?.status === "Active"
                      ? "bg-green-500/20 text-green-500"
                      : "bg-gray-500/20 text-gray-500"
                  }
                  `}
                  >
                    {data?.status ? data?.status : "Inactive"}
                  </p>
                  <p className="text-xl font-bold m-0">{data?.name}</p>
                </div>
              </div>
              {isFetch ? (
                <LoadingSVG />
              ) : (
                <button
                  disabled={isFetch}
                  onClick={() => postTenant(data?._id)}
                  className="text-white bg-green-500 w-20 h-8 rounded-full"
                >
                  Join
                </button>
              )}
            </div>
            <div>
              <p className="font-bold text-sm">Short Description</p>
              <p className="font-light bg-gray-100 p-2 rounded-md border border-gray-300">
                {data?.shortDescription}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewTenantByReferenceCode;
