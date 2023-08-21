import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Post from "@/database/models/Post";
import connect from "@/database/db";
export const GET = async (req) => {
  // fetch
  try {
    await connect();
    console.log("connected");

    const posts = await Post.find();
    console.log("fetched");

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("errors", { status: 500 });
  }
};
