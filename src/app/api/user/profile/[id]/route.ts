import { NextRequest, NextResponse } from "next/server"
import { Prisma } from "@prisma/client"
import prisma from "@/utils/db";

interface props{
    params:{id:string}
}

export async function DELETE(request:NextRequest, {params}:props){
    try {
        const userAccount = await prisma.user.findUnique({where:{id: parseInt(params.id)}})
        if(!userAccount){
            return NextResponse.json({message:"User Not Found"},{status:404})
        }
        await prisma.user.delete({where:{id:parseInt(params.id)}})
        return NextResponse.json({message:"Your Profile Account Has Been Deleted"},{status:200})
    } catch (error) {
        console.error("Error Deleting Your Account.Try again later:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }

}

