import Link from "next/link";
import { NotificationSVG } from "lib/Icons";
import Image from "next/image";
import { UserSVG, SignOutSVG, MailSVG, SearchSVG } from "../../lib/Icons";
import { useRouter } from "next/router";
import { memo, useCallback, useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { useModal, Modal } from "@geist-ui/core";
import { BackendFetch } from "lib/FetchAxios";
import { ADMINISTRATOR, AGGREGATOR, AGENCY, DEVELOPER } from "lib/Route";
import { useClickAway } from "@geist-ui/core";
import { TInternalType } from "lib/Interface";
import { useCtx } from "lib/Context";
import { getAuth, signOut } from "firebase/auth";

const DynamicDropdown = dynamic(() => import("./Dropdown"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center gap-x-4 pl-2 active:scale-75 duration-200 pr-4 bg-gray-200 h-12 animate-pulse w-auto md:w-44 rounded-xl border" />
  ),
});

const Navbar = memo(() => {
  const ref = useRef<any>();
  const { setVisible, bindings } = useModal();
  const [isFetch, setIsFetch] = useState(false);
  const [search, setSearch] = useState(false);
  const { state, dispatch } = useCtx();
  const router = useRouter();
  const { query } = router;
  const newQuery = { ...query, mail: "read" };

  useClickAway(ref, () => {
    if (search) {
      setSearch(false);
    }
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const switcher = (role: TInternalType) => {
    if (role === "Administrator") {
      return ADMINISTRATOR;
    }

    if (role === "Aggregator") {
      return AGGREGATOR;
    }

    if (role === "Agency") {
      return AGENCY;
    }

    if (role === "Developer") {
      return DEVELOPER;
    }
    return [];
  };

  const getMail = useCallback(() => {
    if (router?.query?.mail) {
      delete query.mail;
      return router.replace(
        {
          pathname: router.pathname,
          query: router.query,
        },
        undefined,
        { shallow: true }
      );
    }

    return router.replace(
      {
        pathname: router.pathname,
        query: newQuery,
      },
      undefined,
      { shallow: true }
    );
  }, [router.query]);

  const handleFullScreenClick = useCallback(() => {
    const element = document.documentElement;
    if (element) {
      if (document.fullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        }
      }
    }
  }, []);

  const poster = async () => {
    const auth = await getAuth();
    try {
      setIsFetch(true);
      const post = await BackendFetch("logout", {
        method: "POST",
      });

      if (!post.status) throw new Error("FAILED");
      await signOut(auth);
      await router.replace("/");
      dispatch({
        type: "SET_PROFILE",
        payload: {
          profile: undefined,
        },
      });
      setIsFetch(false);
    } catch (err) {
      setIsFetch(false);
      alert("something went wrong");
    }
  };

  useEffect(() => {
    return () => {
      () => setSearch(false);
    };
  }, []);

  return (
    <>
      <Modal {...bindings} disableBackdropClick={isFetch}>
        <Modal.Title>Logout</Modal.Title>
        <Modal.Content>
          <p>
            {state.profile?.fullName} Are you sure want to exit your account?.
          </p>
        </Modal.Content>
        <Modal.Action
          passive
          onClick={() => setVisible(false)}
          disabled={isFetch}
        >
          Cancel
        </Modal.Action>
        <Modal.Action onClick={poster} disabled={isFetch} loading={isFetch}>
          Yes
        </Modal.Action>
      </Modal>
      <div className="bg-white w-full fixed h-20 top-0 z-30">
        <div className="h-20  items-center justify-end relative inline-flex w-full gap-4 shadow">
          {/* <div
            ref={ref}
            className={`relative hidden  ${
              search ? "w-2/4" : "w-10"
            } md:flex items-center duration-500 gap-10`}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push(`/dashboard/${e.currentTarget.search.value}`);
              }}
              className={`${
                search ? "w-full" : "w-32"
              } right-0 h-10 bg-black/20 absolute duration-500 px-2 rounded-full`}
            >
              <input
                name="search"
                placeholder="Search..."
                value={searchTerm}
                onClick={() => setSearch(true)}
                onChange={handleSearch}
                autoComplete="off"
                className="w-full h-full bg-transparent rounded-full overflow-hidden"
              />
            </form>
            <button
              onClick={() => {
                setSearch(true);
              }}
              className={`bg-white shadow rounded-full w-10 h-10 z-50 absolute flex items-center justify-center active:scale-75 duration-200 right-0 ${
                search ? "scale-90" : ""
              }`}
            >
              <SearchSVG size={30} color={"black"} />
            </button>
            <div
              className={`bg-white w-full  h-auto top-10 absolute z-30 duration-500 border rounded-b-xl `}
            >
              {search &&
                filteredAggregator.map((category) => (
                  <div key={category.category} className="p-4 border">
                    <h3>{category.category}</h3>
                    {category.menu
                      .filter((item) =>
                        item.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                      .map((item) => (
                        <Link
                          onClick={() => {
                            setSearchTerm(item?.name.toLowerCase());
                            setSearch(false);
                          }}
                          href={`${item?.route}`}
                          key={item.name}
                          className="hover:bg-blue-500/20 p-2 rounded-xl "
                        >
                          {item.name}
                        </Link>
                      ))}
                  </div>
                ))}
            </div>
          </div> */}
          <button
            onClick={getMail}
            className="bg-white shadow rounded-full w-10 h-10 flex items-center justify-center active:scale-75 duration-200"
          >
            <NotificationSVG size={30} color={"black"} />
          </button>
          <button
            onClick={handleFullScreenClick}
            className="bg-secondary rounded-md text-white p-2 active:scale-75 duration-200 hidden md:hidden lg:block"
          >
            Full Screen
          </button>
          <DynamicDropdown
            onMenuClickClose={true}
            backgroundColor={"white"}
            menu={
              <div className="w-36 md:w-44 h-auto flex flex-col items-start gap-3 p-4">
                <Link
                  href={"/dashboard/profile"}
                  className="group flex flex-row items-center gap-4"
                >
                  <UserSVG size={25} color="gray" />
                  <p className="m-0 text-gray-500">My Profile</p>
                </Link>
                <button className="group flex flex-row items-center gap-4">
                  <MailSVG size={25} color="gray" />
                  <p className="m-0 text-gray-500">Inbox</p>
                </button>
                <button
                  onClick={() => setVisible(true)}
                  className="group flex flex-row items-center gap-4"
                >
                  <SignOutSVG size={25} color="gray" />
                  <p className="m-0 text-gray-500">Sign out</p>
                </button>
              </div>
            }
          >
            <div className="flex items-center gap-x-4 pl-2 active:scale-75 duration-200 pr-4 w-auto md:w-52">
              <div className="md:flex flex-col items-end hidden">
                <p className="font-bold text-xl text-gray-800 m-0">
                  {/* @ts-ignore */}
                  {state?.profile?.fullName
                    ? state?.profile?.fullName?.substring(0, 10) + ".."
                    : "Username not set"}
                </p>
                <p className="font-light text-xs text-gray-800 m-0">
                  {/* @ts-ignore */}
                  {state?.profile?.tenant?.tenantType
                    ? state?.profile?.tenant?.tenantType
                    : "Not set"}
                </p>
              </div>
              <div className="bg-white rounded-full w-12 h-12 overflow-hidden border border-gray-500">
                {state?.profile === undefined ? (
                  <div className="w-full h-full bg-gray-200" />
                ) : (
                  <Image
                    // @ts-ignore
                    src={state.profile.image}
                    alt={"profile"}
                    className="w-full h-full"
                    width={500}
                    height={500}
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
            </div>
          </DynamicDropdown>
        </div>
      </div>
    </>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
