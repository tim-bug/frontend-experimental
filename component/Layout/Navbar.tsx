import Image from "next/image";
import { memo, useCallback } from "react";
import { useCtx } from "lib/Context";

const Navbar = memo(() => {
  const { state } = useCtx();

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

  return (
    <>
      <div className="bg-white w-full fixed h-20 top-0 z-30">
        <div className="h-20  items-center justify-end relative inline-flex w-full gap-4 shadow">
          <button
            onClick={handleFullScreenClick}
            className="bg-secondary rounded-md text-white p-2 active:scale-75 duration-200 hidden md:hidden lg:block"
          >
            Full Screen
          </button>

          <div className="flex items-center gap-x-4 pl-2 active:scale-75 duration-200 pr-4 w-auto md:w-52">
            <div className="md:flex flex-col items-end hidden">
              <p className="font-bold text-xl text-gray-800 m-0">
                {/* @ts-ignore */}
                Fandy
              </p>
              <p className="font-light text-xs text-gray-800 m-0">
                {/* @ts-ignore */}
                Admin
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
        </div>
      </div>
    </>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
