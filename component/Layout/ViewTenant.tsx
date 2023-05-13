import { TenantInterface } from "@arkasuryawan/gp-interfaces";
import { X, PhoneSVG, LocationSVG, EmailSVG, Info } from "lib/Icons";
import HtmlParser from "component/Layout/HtmlParser";
import Image from "next/image";
interface Props {
  data?: TenantInterface | undefined;
  setView: (d: TenantInterface) => void;
}

const ViewTenant = ({ data, setView }: Props) => {
  return (
    <div
      className={`${
        data?._id !== undefined ? "translate-x-0" : "translate-x-full"
      } w-full md:w-2/4 lg:w-2/6 bg-white h-screen duration-200 fixed z-40 right-0 top-0 border border-gray-300 rounded-tl-xl py-20 overflow-y-auto`}
    >
      <div className="flex items-center justify-between mt-2 mr-4 ml-4">
        <button
          className="bg-gray-100 w-10 h-10 rounded-xl flex items-center justify-center"
          onClick={() =>
            setView({
              createdAt: "",
              createdBy: "",
            })
          }
        >
          <X color="red" />
        </button>
        <div className="bg-blue-500/20 py-2 px-4 rounded-full text-blue-500 text-sm md:text-normal">
          Developer
        </div>
      </div>

      <div className="px-4 pb-24">
        {data?.thumbnailURL ? (
          <div className="relative py-2">
            <Image
              src={data?.thumbnailURL as string}
              alt={data?.name as string}
              width={500}
              className="w-52 h-52 rounded-xl"
              height={500}
            />
          </div>
        ) : null}
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold m-0">{data?.legalName}</p>
          <p
            className={`m-0 px-4 rounded-full ${
              data?.status === "Active"
                ? "bg-green-500/20 text-green-500"
                : "bg-red-500/20 text-red-500"
            }`}
          >
            {data?.status ? data?.status : "Inactive"}
          </p>
        </div>

        <div>
          <p className="font-bold text-sm">Short Description</p>
          <p className="font-light bg-gray-100 p-2 rounded-md border border-gray-300">
            {data?.shortDescription}
          </p>
        </div>
        <div>
          <p className="font-bold text-sm">Description</p>

          <HtmlParser
            className="font-light"
            // @ts-ignore
            data={
              // @ts-ignore
              data?.description?.length > 0
                ? data?.description
                : "This tenant has no description"
            }
          />
        </div>
        <div>
          <p className="font-bold text-sm">Developer Address</p>
          {/* @ts-ignore */}
          {data?.address?.length > 0 &&
            data?.address?.map((a, i) => {
              return (
                <div className="flex items-center gap-x-2" key={a._id}>
                  <LocationSVG size={20} color="green" />
                  <p className="font-light m-0">
                    {a.streetAddress}, {a.suburb}, {a.state}, {a.postcode},{" "}
                    {a.country}
                  </p>
                </div>
              );
            })}
        </div>
        <div>
          <p className="font-bold text-sm">Website</p>
          <div className="flex items-center gap-x-2">
            <Info size={20} color="blue" />
            <p className="m-0 font-light">{data?.website}</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-sm">Phone</p>
          <div className="flex items-center gap-x-2">
            <PhoneSVG size={20} color="blue" />
            <p className="m-0 font-light">{data?.phone}</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-sm">Email</p>
          <div className="flex items-center gap-x-2">
            <EmailSVG size={20} color="blue" />
            <p className="m-0 font-light">{data?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTenant;
