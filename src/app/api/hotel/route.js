import { restaurantSchema } from "@/app/lib/restaurantModel";
import { connectionStr } from "@/app/lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
  try {
    await mongoose.connect(connectionStr);
    console.log("Connected to MongoDB");
    const data = await restaurantSchema.find();
    console.log("Retrieved data:" + data);
    return NextResponse.json({ Result: data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to retrieve data" });
  }
}

export async function POST(request) {
  let payload = await request.json();
  let result;
  let success = false;
  await mongoose.connect(connectionStr);

  if (payload.login) {
    result = await restaurantSchema.findOne({
      email: payload.email,
      password: payload.password,
    });
    if (result) {
      success = true;
    }
  } else {
    let res = await restaurantSchema(payload);
    result = await res.save();
    if (result) {
      success = true;
    }
  }

  return NextResponse.json({ result, success });
}
