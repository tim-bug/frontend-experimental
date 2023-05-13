import { memo } from "react";

const Screen = memo(
  ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
      <div className="md:max-w-3xl lg:max-w-5xl duration-500 xl:max-w-7xl w-screen flex flex-col items-stretch grow flex-shrink-0 gap-x-4">
        <div className="p-0 md:p-2 flex flex-col gap-4">{children}</div>
      </div>
    );
  }
);

Screen.displayName = "Screen";
export default Screen;
