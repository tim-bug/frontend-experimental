import { useClickAway } from "@geist-ui/core";
import { ReactNode, useMemo, useState, useRef, memo } from "react";

interface Props {
  children: ReactNode;
  menu: JSX.Element;
  backgroundColor?: string;
  onMenuClickClose?: boolean;
  onBackdropClose?: boolean;
}

const Dropdown = memo((props: Props) => {
  const { children, menu, backgroundColor, onMenuClickClose, onBackdropClose } =
    useMemo(() => props, [props]);
  const [hover, setHover] = useState(false);
  const ref = useRef<any>(null);

  useClickAway(ref, () => hover && setHover(false));

  return (
    <div className="relative" ref={onBackdropClose ? ref : null}>
      <div
        ref={onMenuClickClose ? ref : null}
        // onMouseEnter={() => setHover(true)}
        onClick={() => setHover((e: boolean) => !e)}
        className="rounded-full"
      >
        {children}
      </div>
      <div
        style={{
          backgroundColor: backgroundColor,
        }}
        className={`border duration-100 right-2 top-12  z-10  absolute rounded-xl shadow-xl ${
          hover
            ? "max-h-96 after:scale-100 max-w-96"
            : "max-h-0 scale-0 min-w-2"
        }`}
      >
        <div>{menu}</div>
      </div>
    </div>
  );
});

Dropdown.displayName = "Dropdown";
export default Dropdown;
