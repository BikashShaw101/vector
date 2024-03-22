export const Participants = () => {
  return (
    <div className="absolute h-12 top-2 right-2 flex bg-white rounded-md p-3 items-center shadow-md">
      list of user
    </div>
  );
};

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute h-12 top-2 right-2 flex bg-white rounded-md p-3 items-center shadow-md w-[100px]" />
  );
};
