import { NextRequest, NextResponse } from "next/server"
import { Prisma } from "@prisma/client"
import prisma from "@/utils/db";
import jsonwebtoken from 'jsonwebtoken';
import { typeJwt } from "@/utils/types"
import { verifyToken } from "@/utils/verifyToken"
import { updateUser } from "@/utils/postType";
import { date } from "zod";
import bcrypt from "bcryptjs"

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
        const userAccount = await prisma.user.findUnique({ where: { id: parseInt(params.id) },include :{
            comments : true
        } })

        if (!userAccount) {
            return NextResponse.json({ message: "User Not Found" }, { status: 404 })
        }

        // const authToken = request.headers.get("authToken") as string


        const authTokenFromTheUser = verifyToken(request)
        if (authTokenFromTheUser !== null && authTokenFromTheUser.id === userAccount.id) {
            await prisma.user.delete({ where: { id: parseInt(params.id) } })
            const userCommentId = userAccount?.comments.map(comment => comment.id)
            await prisma.comment.deleteMany({where:{id : {in : userCommentId}}})
            return NextResponse.json({ message: "Your Profile Account Has Been Deleted" }, { status: 200 })
        }

        return NextResponse.json({ message: "The User Can Only DeleteThere Account" }, { status: 403 })

    } catch (error) {
        console.error("Error Deleting Your Account.Try again later:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }

}


/**
 * @method GET
 * @route http://localhost:3000/api/profile:id
 * @access private
 * @description 
 * - Added a GET request handler to retrieve a user account by ID.
    - Implemented validation to check if the user exists in the database before attempting to return the account data.
    - Integrated JWT authentication using `verifyToken` to ensure only the authorized user can access their own account.
    - Returned appropriate status codes: 404 if the user is not found, 400 for token verification errors, and 200 for successful account retrieval.
    - Included error handling for invalid tokens or internal server issues, with proper logging of errors.
 */

export async function GET(request: NextRequest, { params }: props) {
    try {
        const user = await prisma.user.findUnique({ where: { id: parseInt(params.id) } })
        if (!user) {
            return NextResponse.json({ message: "User Not Found" }, { status: 400 })
        }

        const userToken = verifyToken(request)
        if (userToken === null || userToken.id !== user.id) {
            return NextResponse.json({ message: "Error Verifying User Token" }, { status: 400 })
        }

        return NextResponse.json({ message: `Welcome Back ${user.userName}` }, { status: 200 })

    } catch (error) {
        console.error("Error Geting Your Account.Try again later:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}



/**
 * @method PUT
 * @route http://localhost:3000/api/profile:id
 * @access private
 * @description 
 * - Added a PUT request handler to update a user's profile information by ID.
    - Included validation to check if the user exists before proceeding with the update.
    - Integrated JWT authentication using `verifyToken` to ensure only authorized users can update their own profile.
    - Added password encryption with bcrypt if the password is provided in the update request.
    - Ensured sensitive data (password) is excluded from the response after updating the user.
    - Returned appropriate status codes: 404 for user not found, 400 for token verification errors, and 200 for successful updates.
    - Added error handling for any issues during the update process, with proper logging of errors.
 */

export async function PUT(request: NextRequest, { params }: props) {
    try {
        const user = await prisma.user.findUnique({ where: { id: parseInt(params.id) } })
        if (!user) {
            return NextResponse.json({ message: "User Not Found" }, { status: 400 })
        }

        const userToken = verifyToken(request)
        if (userToken === null || userToken.id !== user.id) {
            return NextResponse.json({ message: "Error Verifying User Token" }, { status: 400 })
        }

        const body = await request.json() as updateUser
        if(body.password){
            if(body.password.length < 6){
                return NextResponse.json({message:"Passsword Shold Be At Minimum 6 Characters"},{status:400})
            }
            const salt = await bcrypt.genSalt(10)
            body.password = await bcrypt.hash(body.password, salt)
        }
        const updatedUser = await prisma.user.update({where:{id: parseInt(params.id)},data : {
            userName : body.userName,
            email : body.email,
            password : body.password
        }})

        const {password, ...other} = updatedUser
        return NextResponse.json({...other},{status:200})

    } catch (error) {
        console.error("Error Updating Your Account.Try again later:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}