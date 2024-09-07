"use client"
import React, { ReactEventHandler, useState } from "react"
import { toast } from "react-toastify";

const AddCommentForm = () => {
    const [text, setText] = useState("");
    const submitFormHandler = (e:React.FormEvent) => {
        e.preventDefault();
        if(text === ""){
            return toast.error("Please Add A Comment")
        }
    }
    return (
        <form onSubmit={submitFormHandler}>
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