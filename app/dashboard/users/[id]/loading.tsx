import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const UserLoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-52">
      {/* Title skeleton */}
      <Skeleton className="h-12 w-3/4 max-w-md mb-8" />

      {/* User details skeletons */}
      <div className="w-full max-w-md space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-6 w-3/5" />

        {/* Company info skeletons */}
        <Skeleton className="h-6 w-4/5 mt-6" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-2/3" />
      </div>
    </div>
  );
};

export default UserLoadingPage;
