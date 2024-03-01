import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
const User = require("@/lib/models");
const jwtSecret = process.env.JWT_SECRET;

export async function POST(req) {
  const { username, password } = req.body;

  const createdUser = await User.create({ username, password });

  jwt.sign({ userId: createdUser._id }, jwtSecret);
}
