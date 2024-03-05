import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export const GET = async (req, { params }) => {
  try {
    await connectMongoDB();

    const { query } = params;

    const searchedContacts = await User.find({
      $or: [
        { username: { $regex: query, $options: "i" } },
        { email: { $regex: query, $options: "i" } },
      ],
    });

    return new Response(JSON.stringify(searchedContacts), { status: 200 });
  } catch (err) {
    return new Response("Failed to search contact", { status: 500 });
  }
};
