"use client"
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

interface DeleteArticleButtonProps{
    articleId : number
}

const DeleteArticleButton = ({articleId}:DeleteArticleButtonProps) => {
    const router = useRouter()
    const DeleteArticleButtonHandler = async()=>{
        try {
            if(confirm("You Want To Delete This Article, Are You Sure")){
                await axios.delete(`http://localhost:3000/api/articles/${articleId}`)
                router.refresh()
                toast.success("You Article Has Been Deleted")
            }
            
        } catch (error:any) {
            toast.error(error?.response?.data.message)
            console.log(error)
        }
    }
    return (
        <div onClick={DeleteArticleButtonHandler}>
            Delete
        </div>
    )
}

export default DeleteArticleButton