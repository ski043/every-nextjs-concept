import { prisma } from "@/app/utils/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import TodoForm from "./TodoForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo Creation | Dashboard",
  description: "Create and manage your todo items in this dashboard",
  keywords: ["todo", "task management", "productivity"],
};

export const revalidate = 3600; // invalidate every hour

async function getTodos() {
  const todos = await prisma.todo.findMany();
  return todos;
}

const CreationPage = async () => {
  const todos = await getTodos();
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <h1 className="text-4xl font-bold">Creation Page</h1>

      <Card className="max-w-2xl w-full mt-20">
        <CardHeader>
          <CardTitle>Create a new todo</CardTitle>
        </CardHeader>
        <CardContent>
          <TodoForm />
        </CardContent>
      </Card>

      <ul className="mt-8 space-y-2">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CreationPage;
