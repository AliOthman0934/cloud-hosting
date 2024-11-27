"use client"
import React, { ReactEventHandler, useState } from "react"
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";
import { text } from "stream/consumers";
import { Article } from "@prisma/client";

interface EditArticleFormProps {
    article : Article
}

const EditArticleForm = ({article} : EditArticleFormProps) => {
    const router = useRouter()
    const [title, setTitle] = useState(article.title);
    const [description, setDescription] = useState(article.description);
    const submitFormHandler = async (e:React.FormEvent) => {
        e.preventDefault();
        if(title === ""){
            return toast.error("Title Is Required")
        }
        
        if(description === ""){
            return toast.error("Description Is Required")
        }
        try {
            await axios.put(`http://localhost:3000/api/articles/${article.id}`,{title,description})
            toast.success("New article has been updated")
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
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                className='mb-4 border rounded p-2 text-xl' />
                <textarea
                rows={5}
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                className="mb-4 p-2 lg:text-xl rounded resize-none"
                />
            <button type='submit' className='text-2xl text-white bg-green-700 hover:bg-green-900 p-2 rounded-lg font-bold'>Edit</button>
        </form>
    )
}

export default EditArticleForm