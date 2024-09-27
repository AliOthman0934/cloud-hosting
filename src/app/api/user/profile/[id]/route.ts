import { NextRequest, NextResponse } from "next/server"
import { Prisma } from "@prisma/client"
import prisma from "@/utils/db";
import jsonwebtoken from 'jsonwebtoken';
import { typeJwt } from "@/utils/types"
import {verifyToken} from "@/utils/verifyToken"

/**
 * @method DELETE
 * @route http://localhost:3000/api/profile:id
 * @access private
 * @description 
 *  - Implemented DELETE request to remove a user account by ID.
    - Added validation to check if the user account exists before attempting deletion.
    - Handled errors and return appropriate status codes (404 for not found, 200 for successful deletion, 500 for internal errors).
    - Implemented JWT authentication to verify that the user is authorized to delete their own account.
    - Added a check to ensure the auth token is provided in the request headers.
    - Used `jsonwebtoken.verify()` to decode the token and compare the user ID with the account to be deleted.
    - Added proper error handling for missing or invalid tokens and unauthorized actions.
 */

interface props {
    params: { id: string }
}

export async function DELETE(request: NextRequest, { params }: props) {
    try {
        const userAccount = await prisma.user.findUnique({ where: { id: parseInt(params.id) } })
        if (!userAccount) {
            return NextResponse.json({ message: "User Not Found" }, { status: 404 })
        }

        // const authToken = request.headers.get("authToken") as string


        const authTokenFromTheUser = verifyToken(request)
        if ( authTokenFromTheUser !== null && authTokenFromTheUser.id === userAccount.id) {
            await prisma.user.delete({ where: { id: parseInt(params.id) } })
            return NextResponse.json({ message: "Your Profile Account Has Been Deleted" }, { status: 200 })
        }

        return NextResponse.json({ message: "The User Can Only DeleteThere Account" }, { status: 403 })

    } catch (error) {
        console.error("Error Deleting Your Account.Try again later:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }

}

