"use client";

import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/vector.png"}
        alt="Logo"
        id="Freepik"
        width={200}
        height={200}
        className=""
      />
      <h2 className="text-2xl mt-6 font-semibold">Welcome to Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"lg"}>Create an organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 m-0 bg-transparent border-none max-w-[540px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export { EmptyOrg };
