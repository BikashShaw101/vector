"use client";

import Image from "next/image";

const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/astronaut.gif"}
        alt="empty-search"
        height={140}
        width={140}
      />
      <h2 className="text-2xl font-semibold mt-6">No results found</h2>
      <p>Try searching for something else</p>
    </div>
  );
};

export { EmptySearch };
