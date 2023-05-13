import { memo } from "react";
import { useCtx } from "lib/Context";
import Image from "next/image";
const SidebarProfile = memo(({ open }: { open: boolean }) => {
  const { state } = useCtx();

  return (
    <div
      className={`w-full h-24 md:h-44 flex flex-row md:flex-col gap-2 items-center md:justify-center px-4 md:px-0 pt-14 duration-200 overflow-hidden ${
        open ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="rounded-full w-14 md:w-20 h-14 md:h-20 overflow-hidden border-2 border-white/70 shadow">
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
      <div className="flex flex-col md:items-center justify-center">
        <p className="m-0 text-white text-sm">{state?.profile?.email}</p>
        {/* @ts-ignore */}
        <p className="m-0 text-white text-xs">{state?.profile?.fullName}</p>
      </div>
    </div>
  );
});

SidebarProfile.displayName = "SidebarProfile";
export default SidebarProfile;
