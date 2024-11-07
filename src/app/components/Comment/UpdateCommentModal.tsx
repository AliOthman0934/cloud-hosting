"use client"
import { useState, Dispatch, SetStateAction } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast  } from "react-toastify"
import { IoMdCloseCircleOutline } from "react-icons/io"

interface UpdateCommentModalProps{
    setOpen : Dispatch<SetStateAction<boolean>>
}
function UpdateCommentModal({setOpen}:UpdateCommentModalProps) {
    return (
        <div className="fixed top-0 bottom-0 right-0 z-10 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="w-2/4 bg-white rounded-lg p-3">
                <div className="flex justify-end items-start mb-5">
                    <IoMdCloseCircleOutline onClick={()=> setOpen(false) } className="text-red-500 cursor-pointer text-3xl"/>
                </div>
                <form>
                    <input
                    type="text"
                    placeholder="Edit Comment..."
                    className="text-xl rounded-lg p-2 w-full bg-white mb-2"
                    />
                    <button type="submit" className="bg-green-700 w-full text-white mt-2 p-1 text-xl rounded-lg hover:bg-green-900 transition"></button>
                </form>
            </div>
        </div>
    )
}

export default UpdateCommentModal