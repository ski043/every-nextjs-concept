import { getUsers } from "@/app/data/user/get-users";
import Link from "next/link";
import React, { Suspense } from "react";

const UsersPage = () => {
  return (
    <div className="flex items-center flex-col justify-center w-full">
      <h1 className="text-4xl font-bold mt-52">Dashboard users page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <GetUsersList />
      </Suspense>
    </div>
  );
};

export default UsersPage;

async function GetUsersList() {
  const data = await getUsers();

  return (
    <ul>
      {data.map((user) => (
        <Link key={user.id} href={`/dashboard/users/${user.id}`}>
          <li key={user.id}>{user.name}</li>
        </Link>
      ))}
    </ul>
  );
}
