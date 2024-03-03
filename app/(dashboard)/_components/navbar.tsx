"use client";

import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="bg-green-500 flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1 bg-yellow-300">search</div>
      <UserButton />
    </div>
  );
};

export { Navbar };
