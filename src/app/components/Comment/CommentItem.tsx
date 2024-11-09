"use client"
import { commentWithUser, typeSingleArticle } from "@/utils/types"
import { FaEdit, FaTrash } from "react-icons/fa"
import UpdateCommentModal from "./UpdateCommentModal"
import { useState } from "react"

interface CommentItemPropes{
    comment : commentWithUser
}

const CommentItem = ({comment}:CommentItemPropes) => {
    const [open,setOpen] = useState(false)
    return (
        <div className='mb-5 rounded-lg p-3 bg-gray-200 border-2 border-gray-300'>
            <div className='flex items-center justify-between mb-2'>
                <strong className='text-gray-800 capitalize'>{comment.user.userName}</strong>
                <span className='bg-yellow-700 px-1 rounded-lg text-white'>{new Date(comment.createdAt).toDateString()}</span>
            </div>
            <p className="text-gray-800 mb-2">{comment.text}</p>
            <div className="flex justify-end items-center gap-3">
                <FaEdit onClick={()=>setOpen(true)} className="text-green-600 text-xl cursor-pointer"/>
                <FaTrash className="text-red-600 text-xl cursor-pointer"/>
            </div>
            {open && <UpdateCommentModal setOpen={setOpen}  text={comment.text} commentId= {comment.id}/>}
        </div>
    )
}

export default CommentItem