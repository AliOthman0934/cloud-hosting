"use client"
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

interface DeleteCommentButtonProps{
    commentId : number
}

const DeleteCommentButton = ({commentId}:DeleteCommentButtonProps) => {
    const router = useRouter()
    const deleteCommentHandler = async()=>{
        try {
            if(confirm("You Want To Delete This Comment, Are You Sure")){
                await axios.delete(`http://localhost:3000/api/comments/${commentId}`)
                router.refresh()
                toast.success("You Comment Has Been Deleted")
            }
            
        } catch (error:any) {
            toast.error(error?.response?.data.message)
            console.log(error)
        }
    }
    return (
        <div onClick={deleteCommentHandler} className='bg-red-600 text-white rounded-lg cursor-pointer inline-block text-center py-1 px-2 hover:bg-red-800 transition'>
            Delete
        </div>
    )
}

export default DeleteCommentButton