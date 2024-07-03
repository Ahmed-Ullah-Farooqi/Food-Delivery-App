import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function POST(request){ //request parameter give same 
    let payload = await request.json();
    let success = false;
    await mongoose.connect(connectionStr)
    const food = await foodSchema(payload)
    const result =await food.save();
    if(result){
        success= true
    }
    return NextResponse.json({result,success});
}