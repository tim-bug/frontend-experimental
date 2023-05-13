import dynamic from "next/dynamic";
import { memo, ReactNode } from "react";

const DynamicNavbar = dynamic(() => import("./Navbar"), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-200 h-16 flex items-center animate-pulse justify-end p-2">
      <div className="flex items-center gap-x-4">
        <div className="bg-gray-200 rounded-full w-12 h-12 animate-pulse" />
      </div>
    </div>
  ),
});

const DynamicSidebar = dynamic(() => import("./Sidebar"), {
  ssr: false,
  loading: () => <div className="bg-gray-200 animate-pulse h-screen w-10" />,
});

const DynamicFooter = dynamic(() => import("./Footer"), {
  ssr: false,
  loading: () => <div className="bg-gray-200 animate-pulse h-screen w-10" />,
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row w-full bg-white">
      <DynamicNavbar />
      <DynamicSidebar />
      <div className="w-full h-full relative z-20 pt-20">
        <div className="w-full bg-gradient-to-b from-dashboard-bg via-dashboard-bg to-transparent z-20 h-auto flex justify-center md:py-12 overflow-hidden md:pb-72 md:mb-72">
          {children}
        </div>
      </div>
      <DynamicFooter />
    </div>
  );
};

export default Layout;
