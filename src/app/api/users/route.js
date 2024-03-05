import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectMongoDB();

    const userExists = await User.find();
    const allUsersData = JSON.stringify(userExists);

    return new Response(allUsersData, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get all users", { status: "500" });
  }
};
