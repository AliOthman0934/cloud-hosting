import { NextRequest, NextResponse } from "next/server"
import { Prisma } from "@prisma/client"
import prisma from "@/utils/db";
import jsonwebtoken from 'jsonwebtoken';
import { typeJwt } from "@/utils/types"

interface props {
    params: { id: string }
}

export async function DELETE(request: NextRequest, { params }: props) {
    try {
        const userAccount = await prisma.user.findUnique({ where: { id: parseInt(params.id) } })
        if (!userAccount) {
            return NextResponse.json({ message: "User Not Found" }, { status: 404 })
        }

        const authToken = request.headers.get("authToken")
        if (!authToken) {
            return NextResponse.json({ message: "No Token Provided" }, { status: 401 })
        }

        const authTokenFromTheUser = jsonwebtoken.verify(authToken, process.env.JWT_KEY as string) as typeJwt
        if (authTokenFromTheUser.id === userAccount.id) {
            await prisma.user.delete({ where: { id: parseInt(params.id) } })
            return NextResponse.json({ message: "Your Profile Account Has Been Deleted" }, { status: 200 })
        }

        return NextResponse.json({ message: "The User Can Only DeleteThere Account" }, { status: 403 })

    } catch (error) {
        console.error("Error Deleting Your Account.Try again later:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }

}

