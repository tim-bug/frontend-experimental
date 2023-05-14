import { memo, useCallback, useState, useMemo } from "react";
import { MenuSVG } from "lib/Icons";
import dynamic from "next/dynamic";
import { useCtx } from "lib/Context";

const DynamicComponentMenu = dynamic(() => import("lib/Route"), {
  ssr: false,
  loading: () => <></>,
});

const Sidebar = memo(() => {
  const [open, setOpen] = useState<boolean>(true);
  const { state } = useCtx();
  const opens = useCallback(() => {
    setOpen((v) => !v);
  }, []);

  return (
    <div
      className={`relative duration-300 shadow-xl ${
        open ? "w-0 md:w-0 lg:w-0" : "w-80"
      }`}
    >
      <div
        className={`bg-gradient-to-br from-main-bg to-blue-900 duration-300 ${
          open ? "w-0 md:w-0 lg:w-0" : "w-72"
        } z-30 h-screen space-y-2 fixed md:fixed lg:fixed`}
      >
        {useMemo(() => {
          return (
            <button
              className={`m-4 p-3 rounded-2xl active:scale-75 gap-4 flex items-center duration-300 z-10 absolute ${
                open
                  ? "bg-secondary border-secondary"
                  : "border-transparent bg-gradient-to-br from-secondary to-secondary/20"
              }`}
              onClick={opens}
            >
              <MenuSVG size={25} color={"white"} />
              <p className={`m-0 text-white font-bold`}>SM</p>
            </button>
          );
        }, [open])}

        <div className="sidescroll w-full h-screen overflow-y-scroll pt-20">
          <div className="rounded-xl overflow-hidden mx-2 mb-64">
            <DynamicComponentMenu
              open={open}
              setOpen={setOpen}
              // @ts-ignore
              role={"Administrator"}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";
export default Sidebar;
