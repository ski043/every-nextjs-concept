import { getUsers } from "@/app/data/user/get-users";
import Link from "next/link";
import React from "react";

// Define User type inline since there are import issues
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const UsersPage = async () => {
  const data = await getUsers();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <div className="flex items-center gap-2">
            <select className="h-9 rounded-md border border-input px-3 py-1 text-sm shadow-sm">
              <option value="all">All Users</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <button className="h-9 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary/90">
              Add User
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 rounded-full bg-gray-100 items-center justify-center">
              <span className="text-gray-800 font-medium text-lg">
                {user.name.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-medium text-lg">{user.name}</h3>
              <p className="text-sm text-muted-foreground">@{user.username}</p>
            </div>
          </div>
          <Link
            href={`/dashboard/users/${user.id}`}
            className="text-sm text-primary hover:underline"
          >
            View
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-muted-foreground">Email</p>
            <p className="truncate">{user.email}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Phone</p>
            <p className="truncate">{user.phone}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Website</p>
            <p className="truncate">{user.website}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Company</p>
            <p className="truncate">{user.company.name}</p>
          </div>
        </div>

        <div className="pt-2 text-sm">
          <p className="text-muted-foreground">Address</p>
          <p className="truncate">
            {user.address.street}, {user.address.suite}
          </p>
          <p className="truncate">
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
