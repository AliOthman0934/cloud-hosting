"use client"
import React, { ReactEventHandler, useState } from "react"
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";
import { text } from "stream/consumers";

const AddArticleForm = () => {
    const router = useRouter()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const submitFormHandler = async (e:React.FormEvent) => {
        e.preventDefault();
        if(title === ""){
            return toast.error("Title Is Required")
        }
        
        if(description === ""){
            return toast.error("Description Is Required")
        }
        try {
            await axios.post("http://localhost:3000/api/articles",{title,description})
            setTitle("")
            setDescription("")
            toast.success("New article has been added")
            router.refresh()
        } catch (error:any) {
            toast.error(error?.response?.data.message);
            console.log(error);
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