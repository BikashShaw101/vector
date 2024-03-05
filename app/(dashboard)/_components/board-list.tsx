"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import EmptyBoards from "./empty-boards";
import EmptyFavourite from "./empty-favourite";
import EmptySearch from "./empty-search";
import BoardCard from "./board-card";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favourite?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId });

  if (data === undefined) {
    return <div>Loading...</div>;
  }

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }
  if (!data?.length && query.favourite) {
    return <EmptyFavourite />;
  }
  if (!data?.length) {
    return <EmptyBoards />;
  }
  return (
    <div>
      <h2 className="text-3xl">
        {query.favourite ? "Favourite board" : "Team board"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            authorId={board.authorId}
            authorName={board.authorName}
            imageUrl={board.imageUrl}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavourite={false}
          />
        ))}
      </div>
    </div>
  );
};
