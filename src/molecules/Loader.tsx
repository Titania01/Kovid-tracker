import React from "react";
import CovidLogo from "../atoms/vectors/Logo";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#131736]">
      <div className="flex items-center ">
        <CovidLogo />
        <p className="text-white text-2xl font-bold">Kovid-19</p>
      </div>
    </div>
  );
};

export default Loader;
