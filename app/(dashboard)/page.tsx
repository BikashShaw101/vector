"use client";
import { BoardList } from "./_components/board-list";
import EmptyOrg from "./_components/empty-org";
import { useOrganization } from "@clerk/nextjs";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favourite?: string;
  };
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();
  return (
    <div className="p-6 h-[calc(100%-80px)] flex-1">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <p className="h-full">
          <BoardList orgId={organization.id} query={searchParams} />
        </p>
      )}
    </div>
  );
};

export default DashboardPage;
