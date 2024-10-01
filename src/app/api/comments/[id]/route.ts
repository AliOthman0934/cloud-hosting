import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken"
import { date, string } from "zod";
import { editComment } from "@/utils/postType";


/**
 * @method PUT
 * @route http://localhost:3000/api/comments:id
 * @access private
 * @description 
/**
    - Added a PUT request handler to allow users to edit their comments.
    - Implemented JWT authentication using `verifyToken` to ensure that only the comment owner can edit the comment.
    - Added validation to check if the comment exists before attempting to update.
    - Restricted access to editing, returning a 403 status if the user is not the owner of the comment.
    - Updated the comment text using `prisma.comment.update()` for the authorized user.
    - Included error handling for cases of missing comments, unauthorized access, and internal server errors.
    - Returned appropriate status codes: 404 for not found, 403 for unauthorized, and 200 for successful update.
 */


interface props {
    params: { id: string }
}


export async function PUT(request: NextRequest, { params }: props) {
    try {
        const comment = await prisma.comment.findUnique({ where: { id: parseInt(params.id) } })
        if (!comment) {
            return NextResponse.json({ message: "Comment Not Foun" }, { status: 404 })
        }

        const user = verifyToken(request)

        if (user === null || user.id !== comment.id) {
            return NextResponse.json({ message: "You Are Not Allowed To Edit The Comment" }, { status: 403 })
        }

        const body = await request.json() as editComment

        const updatdeComment = await prisma.comment.update({
            where: { id: parseInt(params.id) }, data: {
                text: body.text
            }
        })

        return NextResponse.json(updatdeComment, { status: 200 })
    } catch (error) {
        console.error("Error Editing Comment.Try again later:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}



/**
 * @method DELETE
 * @route http://localhost:3000/api/comments:id
 * @access private
 * @description 
/**
    - Implemented DELETE request to remove a comment by ID using Prisma.
    - Added validation to check if the comment exists before attempting deletion, returning a 404 status if not found.
    - Used JWT authentication (`verifyToken`) to ensure that only the comment owner or an admin can delete the comment.
    - Admins are allowed to delete any comment, while regular users can only delete their own comments.
    - Added error handling for unauthorized access with a 403 status code.
    - Included appropriate status codes: 404 for not found, 403 for unauthorized, and 200 for successful deletion.
 */

export async function DELETE(request:NextRequest,{ params }: props){
    try {
        const comment = await prisma.comment.findUnique({ where: { id: parseInt(params.id) } })
        if (!comment) {
            return NextResponse.json({ message: "Comment Not Foun" }, { status: 404 })
        }
        
        const user = verifyToken(request)

        if (user === null) {
            return NextResponse.json({ message: "You Are Not Allowed To Edit The Comment" }, { status: 403 })
        }

        if(user.isAdmin === true || user.id === comment.id){
            await prisma.comment.delete({where:{id:parseInt(params.id)}})
            return NextResponse.json({message:"Your Comment Has Been Deleted"},{status:200})
        }

        return NextResponse.json({message:"Somthing Went Wron Try Letter"},{status:403})
    } catch (error) {
        console.error("Error Deleting Comment.Try again later:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}

