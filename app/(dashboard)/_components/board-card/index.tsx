"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import { Actions } from "@/components/actions";
import { Skeleton } from "@/components/ui/skeleton";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";

import Overlay from "./overlay";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import Footer from "./footer";
import { MoreHorizontal } from "lucide-react";

interface BoardCardProps {
  id: string;
  title: string;
  authorId: string;
  authorName: string;
  imageUrl: string;
  createdAt: number;
  orgId: string;
  isFavourite: boolean;
}

const BoardCard = ({
  id,
  title,
  authorId,
  authorName,
  createdAt,
  imageUrl,
  isFavourite,
  orgId,
}: BoardCardProps) => {
  const { userId } = useAuth();

  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  const { mutate: onFavourite, pending: pendingFavourite } = useApiMutation(
    api.board.favourite
  );
  const { mutate: onUnfavourite, pending: pendingUnfavourite } = useApiMutation(
    api.board.unfavourite
  );

  const toggleFavourite = () => {
    if (isFavourite) {
      onUnfavourite({ id }).catch(() => toast.error("Failed to unfavourite"));
    } else {
      onFavourite({ id, orgId }).catch(() =>
        toast.error("Failed to favourite")
      );
    }
  };

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/120] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={title} fill className="object-fill" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button
              title="more"
              className="absolute top-1 right-1 group-hover:opacity-100 opacity-0 transition-opacity px-3 py-2 outline-none"
            >
              <MoreHorizontal className="opacity-75 hover:opacity-100 text-white transition-opacity " />
            </button>
          </Actions>
        </div>
        <Footer
          isFavourite={isFavourite}
          title={title}
          createdAt={createdAtLabel}
          authorLabel={authorLabel}
          onClick={toggleFavourite}
          disabled={pendingFavourite || pendingUnfavourite}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/120]  rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};

export default BoardCard;
