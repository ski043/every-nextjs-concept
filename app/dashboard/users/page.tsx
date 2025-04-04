import { getUsers } from "@/app/data/user/get-users";
import Link from "next/link";
import React from "react";

const UsersPage = async () => {
  const data = await getUsers();
  return (
    <div className="flex items-center flex-col justify-center w-full">
      <h1 className="text-4xl font-bold mt-52">Dashboard users page</h1>
      <ul>
        {data.map((user) => (
          <Link key={user.id} href={`/dashboard/users/${user.id}`}>
            <li key={user.id}>{user.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
