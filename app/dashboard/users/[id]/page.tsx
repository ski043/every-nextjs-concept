import { getUser } from "@/app/data/user/get-user";
import React from "react";
import { Metadata } from "next";

type Params = Promise<{ id: string }>;

// Generate dynamic metadata based on the user ID
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  // Get the user ID
  const { id } = await params;

  // Fetch user data
  const user = await getUser(id);

  return {
    title: `${user.name} | User Profile`,
    description: `View and manage details for ${user.name} working at ${user.company.name}`,
    keywords: ["user profile", "user details", user.name, user.company.name],
    openGraph: {
      title: `${user.name} | User Profile`,
      description: `Contact: ${user.email} | Company: ${user.company.name}`,
      type: "profile",
    },
  };
}

const UserIdPage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const data = await getUser(id);
  return (
    <div className="flex flex-col items-center justify-center w-full mt-52">
      <h1 className="text-4xl font-bold ">Dashboard users id page {id}</h1>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <p>{data.website}</p>
      <p>{data.company.name}</p>
      <p>{data.company.catchPhrase}</p>
      <p>{data.company.bs}</p>
    </div>
  );
};

export default UserIdPage;
