"use client"
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { DOMAIN } from '@/utils/constants'
import { Domain } from 'domain'


interface DeleteArticleButtonProps{
    articleId : number
}

const DeleteArticleButton = ({articleId}:DeleteArticleButtonProps) => {
    const router = useRouter()
    const DeleteArticleButtonHandler = async()=>{
        try {
            if(confirm("You Want To Delete This Article, Are You Sure")){
                await axios.delete(`${Domain}/api/articles/${articleId}`)
                router.refresh()
                toast.success("You Article Has Been Deleted")
            }
            
        } catch (error:any) {
            toast.error(error?.response?.data.message)
            console.log(error)
        }
    }
    return (
        <div onClick={DeleteArticleButtonHandler} className='bg-red-600 text-white rounded-lg cursor-pointer inline-block text-center py-1 px-2 hover:bg-red-800 transition'>
            Delete
        </div>
    )
}

export default DeleteArticleButton