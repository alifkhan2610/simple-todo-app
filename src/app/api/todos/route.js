import Todo from "@/app/lib/model/todo"
import connectionToDB from "@/app/lib/mongoose"
import { NextResponse } from "next/server"

export const GET = async (req) =>{
    try {
        connectionToDB()
        const result = await Todo.find()
        return NextResponse.json(result);
    } catch (error) {
        
    }
}