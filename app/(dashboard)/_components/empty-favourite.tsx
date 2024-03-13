"use client";

import Image from "next/image";

const EmptyFavourite = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={"/diamond.gif"} alt="empty-search" height={140} width={140} />
      <h2 className="text-2xl font-semibold mt-6">No favourite board</h2>
      <p>Try favouriting a board</p>
    </div>
  );
};

export { EmptyFavourite };
