import Image from "next/image";
import React from "react";

export const Loadng = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Image
        src={"/bicycle.gif"}
        alt="Logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
