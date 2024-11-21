"use client"
import { useState, Dispatch, SetStateAction, FormEvent } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast  } from "react-toastify"
import { IoMdCloseCircleOutline } from "react-icons/io"

interface UpdateCommentModalProps{
    setOpen : Dispatch<SetStateAction<boolean>>
    text : string
    commentId : number
}
function UpdateCommentModal({setOpen,text,commentId}:UpdateCommentModalProps) {
    const[updateComment,setUpdateComment]= useState(text)
    const router = useRouter()
    const formSubmitHandler = async (e:FormEvent)=>{
        e.preventDefault()
        if(updateComment === "") toast.info("Please write somthing");
        try {
            await axios.put(`http://localhost:3000/api/${commentId}`,{text :updateComment})
            router.refresh()
            setUpdateComment("")
            setOpen(false)
        } catch (error:any) {
            toast.error(error?.response?.message)
            console.log(error)
        }
    }
    return (
        <div className="fixed top-0 bottom-0 right-0 left-0 z-10 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="lg:w-2/4 w-11/12  bg-white rounded-lg p-5">
                <div className="flex justify-end items-start mb-5">
                    <IoMdCloseCircleOutline onClick={()=> setOpen(false) } className="text-red-500 cursor-pointer text-3xl"/>
                </div>
                <form onSubmit={formSubmitHandler}>
                    <input
                    type="text"
                    placeholder="Edit Comment..."
                    className="text-xl rounded-lg p-2 w-full bg-white mb-2"
                    value={updateComment}
                    onChange={(e)=> setUpdateComment(e.target.value)}
                    />
                    <button type="submit" className="bg-green-700 w-full text-white mt-2 p-1 text-xl rounded-lg hover:bg-green-900 transition">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateCommentModal