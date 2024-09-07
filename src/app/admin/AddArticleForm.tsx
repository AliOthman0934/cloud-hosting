"use client"
import React, { ReactEventHandler, useState } from "react"
import { toast } from "react-toastify";

const AddArticleForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const submitFormHandler = (e:React.FormEvent) => {
        e.preventDefault();
        if(title === ""){
            return toast.error("Title Is Required")
        }
        
        if(description === ""){
            return toast.error("Description Is Required")
        }
    }
    return (
        <form className='flex flex-col ' onSubmit={submitFormHandler}>
            <input
                type='text'
                placeholder='Inter Title'
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                className='mb-4 border rounded p-2 text-xl' />
                <textarea
                rows={5}
                placeholder="Inter Description"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                className="mb-4 p-2 lg:text-xl rounded resize-none"
                />
            <button type='submit' className='text-2xl text-white bg-blue-700 hover:bg-blue-900 p-2 rounded-lg font-bold'>Login</button>
        </form>
    )
}

export default AddArticleForm