import { memo } from "react";
const Footer = memo(() => {
  return (
    <div className="fixed bottom-0 w-full h-72 bg-white z-0 items-center hidden md:flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fixed bottom-0 z-0 fill-secondary/30"
        viewBox="0 0 1440 320"
      >
        <path
          fillOpacity="1"
          d="M0,160L48,181.3C96,203,192,245,288,229.3C384,213,480,139,576,128C672,117,768,171,864,186.7C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
});

Footer.displayName = "Footer";
export default Footer;
