import User from "@/models/user";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    await connectMongoDB();
    await User.create({ name, email });

    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    console.error("Error processing request", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
