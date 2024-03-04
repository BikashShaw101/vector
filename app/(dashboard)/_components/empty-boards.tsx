"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/notebook.gif"}
        alt="empty-search"
        height={140}
        width={140}
      />
      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <p>Start by creating a board for your organization</p>
      <div className="mt-6">
        <Button size={"lg"}>Create board</Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
