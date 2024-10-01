import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken"
import { string } from "zod";
import { editComment } from "@/utils/postType";


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

