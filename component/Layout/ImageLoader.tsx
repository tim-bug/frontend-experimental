import Image from "next/image";
import { useState, memo } from "react";
import { CameraSVG, LoadingSVG } from "lib/Icons";
interface Props {
  imageSource: string;
}

const ImageLoader = memo((props: Props) => {
  const [load, setLoad] = useState(false);

  return (
    <div className="relative w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-xl overflow-hidden border border-gray-400 flex-none">
      {props?.imageSource?.length > 0 ? (
        <Image
          alt="projectImage"
          loading="lazy"
          onLoad={() => setLoad(true)}
          onLoadingComplete={() => setTimeout(() => setLoad(false), 1000)}
          width={500}
          height={500}
          src={props?.imageSource}
          className="w-full h-full"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <CameraSVG color="gray" size={30} />
        </div>
      )}
      <div
        className={`w-full flex items-center justify-center h-full absolute bg-white top-0 duration-200 ${
          load ? "opacity-50" : "opacity-0"
        }`}
      >
        <LoadingSVG color="black" size={30} />
      </div>
    </div>
  );
});
ImageLoader.displayName = "ImageLoader";
export default ImageLoader;
