"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";

const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: "untitled",
    })
      .then((id) => {
        toast.success("Board created");
        // TODO: redirect to if
      })
      .catch((err) => toast.error("Failed to create board"));
  };

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
        <Button disabled={pending} onClick={onClick} size={"lg"}>
          Create board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
