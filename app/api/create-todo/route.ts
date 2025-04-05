import { prisma } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the request body as JSON
    const data = await request.json();
    const { title } = data;

    // Create a new todo with the provided title
    await prisma.todo.create({
      data: {
        title,
      },
    });

    // Return a success response
    return NextResponse.json(
      { success: true, message: "Todo created successfully" },
      { status: 201 }
    );
  } catch (error) {
    // Handle any errors
    console.error("Error creating todo:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create todo" },
      { status: 500 }
    );
  }
}
