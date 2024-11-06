"use client"
import React, { ReactEventHandler, useState } from "react"
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { number } from "zod";

interface AddCommentFormProps{
    articleId : number
}

const AddCommentForm = ({articleId}: AddCommentFormProps) => {
    const router = useRouter()
    const [text, setText] = useState("");
    const submitFormHandler = async (e:React.FormEvent) => {
        e.preventDefault();
        if(text === ""){
            return toast.error("Please Add A Comment")
        }
        try {
            await axios.post("http://localhost:3000/api/comments",{text,articleId})
            router.refresh()
            setText("")
        } catch (error:any) {
            toast.error(error?.response?.data.message)
            console.log(error)
        }
    }
    return (
        <form onSubmit={submitFormHandler} className="mb-7">
            <input
                type='text'
                placeholder='Add A comment'
                value={text}
                onChange={(e)=> setText(e.target.value)}
                className='rounded-lg text-xl p-2 w-full bg-white focus:shadow-md' />
            <button type='submit' className='text-xl text-white bg-green-700 rounded-lg font-bold mt-2 p-1 hover:bg-green-900 transition '>Comment</button>
        </form>
    )
}

export default AddCommentForm