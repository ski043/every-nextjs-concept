"use server";

import { redirect } from "next/navigation";
import { prisma } from "./utils/db";

export async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;
  await prisma.todo.create({
    data: {
      title,
    },
  });

  redirect("/dashboard/creation");
}
