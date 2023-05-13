import { useRouter } from "next/router";

function Custom404() {
  const router = useRouter();

  const handleClick = (url: string) => {
    if (router.asPath !== url) {
      router.replace(url);
    }
  };

  return (
    <div className="w-full h-screen bg-main-bg/90 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-8">
        <p className="text-white text-3xl font-bold">
          404 - Page not found, let me navigate you back
        </p>
        <button
          onClick={() => handleClick("/")}
          className="text-white font-bold text-xl"
        >
          Navigate me
        </button>
      </div>
    </div>
  );
}

export default Custom404;
