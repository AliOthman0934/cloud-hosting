import { logInUser } from "@/utils/postType";
import { NextRequest, NextResponse } from "next/server"
import { logInUserSchema } from "../../../../utils/validation"
import bcrypt from "bcryptjs"
import prisma from "@/utils/db";
import {jwt} from "@/utils/jwt"
import { JwtPayload } from "jsonwebtoken";
import { typeJwt } from "@/utils/types";
import {serialize} from "cookie"
import {sitCookie} from "@/utils/jwt" 

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as logInUser
        const validation = logInUserSchema.safeParse(body)
        if (!validation.success) {
            return NextResponse.json({ message: "Error Login To Your Account" })
        }

        const usre = await prisma.user.findUnique({ where: { email: body.email } })
        if (!usre) {
            return NextResponse.json({ message: "Invalid Email" })
        }
        const matchPassword = await bcrypt.compare(body.password, usre.password)
        if (!matchPassword) {
            return NextResponse.json({ message: "Invalid Password" }, { status: 400 })
        }

        const payload:typeJwt = {
            id :usre.id,
            userName : usre.userName,
            isAdmin : usre.isAdmin
        }

        // const token = jwt(payload)

        // const cookie = serialize("cookieToken", token,{
        //     httpOnly : true,
        //     secure : process.env.NODE_ENV === "production",
        //     path : "/",
        //     maxAge : 30 * 30 * 60 
        // })

        const cookie = sitCookie(payload)

        return NextResponse.json({ message: "Authenticated User"}, { status: 200, headers :{
            "Set-Cookie" : cookie
        } })

    } catch (error) {
        console.error("Error loging In.Try again later:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }

}