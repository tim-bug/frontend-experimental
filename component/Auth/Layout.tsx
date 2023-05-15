const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      {/* <div className="w-full h-screen bg-black"></div> */}
      <div className="w-full h-screen bg-white flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
