import prisma from "@/utils/db";
import { newUser } from "@/utils/postType";
import { newUserSchema } from "@/utils/validation";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import {jwt,sitCookie} from "@/utils/jwt"
import { JwtPayload } from "jsonwebtoken";
import { typeJwt } from "@/utils/types";


/**
 * @method POST
 * @route http://localhost:3000/api/user/register
 * @access public
 * @description 
 * - Implemented POST method to handle user sign-up with request body validation using Zod schema.
    - Added check to ensure that the email is unique, returning an error if the account already exists.
    - Created a new user in the database with provided details (username, email, password, isAdmin flag).
    - Returned appropriate status codes for validation errors, successful creation, and internal server errors.
    - Logged server errors to the console for debugging purposes.
 */


export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as newUser
        const validation = newUserSchema.safeParse(body)
        if (!validation.success) {
            return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 })
        }
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
            },
        });
        if (user) {
            return NextResponse.json({ message: "This Accout Is Already Used" }, { status: 400 })
        }

        const sult = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password , sult) 

        const newUser = await prisma.user.create({
            data: {
                userName: body.userName,
                email: body.email,
                password: hashedPassword,
                isAdmin: false
            },
            select:{
                userName:true,
                email:true,
                isAdmin:true,
                id: true
            
            }
        });

        const payload:typeJwt = {
            id :newUser.id,
            userName : newUser.userName,
            isAdmin : newUser.isAdmin
        }

        // const token = jwt(payload)
        const cookie = sitCookie(payload)

        return NextResponse.json({ ...newUser }, { status: 200, headers: {
            "Sit-Cookie" : cookie
        } })
    } catch (error) {
        console.error("Error Signing In.Try again later:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}