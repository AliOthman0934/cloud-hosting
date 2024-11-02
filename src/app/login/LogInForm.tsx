"use client"
import React, { ReactEventHandler, useState } from "react"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios"
import { boolean } from "zod";

const LogInForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitFormHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email === "") {
            return toast.error("Email Is Required")
        }

        if (password === "") {
            return toast.error("Password Is Required")
        }

        try {
            setLoading(true)
            await axios.post("http://localhost:3000/api/user/login", { password, email })
            router.replace("./")
            setLoading(false)
            
        } catch (error: any) {
            toast.error(error?.response?.data.error)
        }
    }

    return (
        <form className='flex flex-col' onSubmit={submitFormHandler}>
            <input
                type='email'
                placeholder='Inter Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mb-4 border rounded p-2 text-xl' />
            <input
                type='password'
                placeholder='Inter Your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='mb-2 border rounded p-2 text-xl' />
            <button type='submit' className='text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold'>
                    {loading ? "Loding..." : "LogIn"}
            </button>
        </form>
    )
}

export default LogInForm
