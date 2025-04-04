import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex items-center flex-col justify-center w-full">
      <h1 className="text-4xl font-bold mt-52">Dashboard index page</h1>
      <Link href="/dashboard/users">Users</Link>
    </div>
  );
};

export default DashboardPage;
