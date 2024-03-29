"use client";
import { useSelf, useOthers } from "@/liveblocks.config";
import { UserAvatar } from "./user-avatar";
import { connectionIDToColor } from "@/lib/utils";

const MAX_SHOWN_USER = 2;

export const Participants = () => {
  const user = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = user.length > MAX_SHOWN_USER;
  return (
    <div className="absolute h-12 top-2 right-2 flex bg-white rounded-md p-3 items-center shadow-md">
      <div className="flex ga-x-2">
        {user.slice(0, MAX_SHOWN_USER).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              borderColor={connectionIDToColor(connectionId)}
              key={connectionId}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.[0] || "T"}
            />
          );
        })}
        {currentUser && (
          <UserAvatar
            borderColor={connectionIDToColor(currentUser.connectionId)}
            src={currentUser?.info?.picture}
            name={`${currentUser?.info?.name} (You)`}
            fallback={currentUser?.info?.name?.[0]}
          />
        )}
        {hasMoreUsers && (
          <UserAvatar
            src={`${user.length - MAX_SHOWN_USER} more`}
            fallback={`+${user.length - MAX_SHOWN_USER}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 flex bg-white rounded-md p-3 items-center shadow-md w-[100px]" />
  );
};
