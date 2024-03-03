import Image from "next/image";
import React from "react";

export const Loadng = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-slate-900 ">
      <Image
        src={"/vector3.png"}
        alt="Logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
