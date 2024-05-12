"use client";

import {
  DropdownMenuContentProps,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";

import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import ConfirmModal from "@/components/confirm-modal";
import { Button } from "./ui/button";
import { useRenameModal } from "@/store/use-rename-modal";
import { useAuth } from "@clerk/clerk-react";
interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionsProps) => {
  const { orgRole } = useAuth();
  const { onOpen } = useRenameModal();
  const { mutate, pending } = useApiMutation(api.board.remove);
  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => {
        toast.success("Link copied to clipboard");
      })
      .catch((err) => toast.error("falied to copy link"));
  };
  const onDelete = () => {
    mutate({ id })
      .then(() => {
        toast.success("Board removed");
      })
      .catch(() => toast.error("Failed to remove board"));
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className="w-60 border-none"
      >
        <DropdownMenuItem
          onClick={onCopyLink}
          className="p-3 cursor-pointer flex items-center outline-none hover:bg-slate-100 transition-colors"
        >
          <Link2 className="h-4 w-4 mr-2" /> Copy board link
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onOpen(id, title)}
          className="p-3 cursor-pointer flex items-center outline-none hover:bg-slate-100 transition-colors"
        >
          <Pencil className="h-4 w-4 mr-2" /> Rename
        </DropdownMenuItem>
        {orgRole === "org:admin" && (
          <ConfirmModal
            header="Delete board?"
            description="This will remove the board and its contents"
            onConfirm={onDelete}
            disabled={pending}
          >
            <Button
              variant={"ghost"}
              className="p-3 w-full justify-start cursor-pointer flex items-center "
            >
              <Trash2 className="h-4 w-4 mr-2" /> Delete
            </Button>
          </ConfirmModal>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
