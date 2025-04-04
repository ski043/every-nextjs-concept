import { getUser } from "@/app/data/user/get-user";
import React from "react";

type Params = Promise<{ id: string }>;

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
