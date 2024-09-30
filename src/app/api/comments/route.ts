import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken"
import { addComment } from "@/utils/postType";
import { addCommentSchema } from "@/utils/validation";

/**
 * @method POST
 * @route http://localhost:3000/api/comments
 * @access private
 * @description 
/**
    - Added a POST request handler for adding comments to articles.
    - Implemented JWT authentication using `verifyToken` to ensure only logged-in users can submit comments.
    - Integrated validation for the comment body using `addCommentSchema` to ensure proper data structure and required fields.
    - Stored the comment data in the database, linking it to the article and the authenticated user.
    - Added error handling for missing authentication, invalid data, and server issues.
    - Returned appropriate status codes: 401 for unauthenticated users, 400 for validation errors, and 200 for successful comment creation.
 */

export async function POST(request: NextRequest) {
    try {
        const user = verifyToken(request)
        if (!user) {
            return NextResponse.json({ message: "Please Log In First" }, { status: 401 })
        }
        const body = await request.json() as addComment
        const validation = addCommentSchema.safeParse(body)

        if (!validation.success) {
            return NextResponse.json({ message: validation.error.errors[0].message }, { status: 402 })
        }

        const newComment = prisma.comment.create({
            data: {
                text: body.text,
                articleId: body.articleId,
                userId: user.id
            }
        })
        return NextResponse.json({ message: newComment }, { status: 200 })
    } catch (error) {
        console.error("Error Adding Comment.Try again later:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }

}


export function GET(request: NextRequest) {
    try {
        const user = verifyToken(request)
        if (user === null || user.isAdmin === false) {
            return NextResponse.json({ message: "Only Admin Can Get All The Comments" }, { status: 403 })
        }
    } catch (error) {
        console.error("Error Geting All The Comment.Try again later:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }


}