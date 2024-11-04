"use client"
import React, { ReactEventHandler, useState } from "react"
import { toast } from "react-toastify";
import axios from "axios"
import { useRouter } from "next/navigation";
import ButtenSpinner from "../components/ButtenSpinner";

const RegisterForm = () => {
    const [userName, setUserNmae] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const submitFormHandler = async (e:React.FormEvent) => {
        e.preventDefault();
        if(userName === ""){
            return toast.error("User Name Is Required")
        }
        if(email === ""){
            return toast.error("Email Is Required")
        }
        
        if(password === ""){
            return toast.error("Password Is Required")
        }

        try {
            setLoading(true)
            await axios.post("http://localhost:3000/api/user/register",{email,password,userName})
            router.replace("/")
            router.refresh()
            setLoading(false)

        } catch (error:any) {
            toast.error(error?.response?.data.message)
            console.log(error)
        }
    }
    return (
        <form className='flex flex-col' onSubmit={submitFormHandler}>
            <input
                type='tetx'
                placeholder='User Name'
                value={userName}
                onChange={(e)=> setUserNmae(e.target.value)}
                className='mb-4 border rounded p-2 text-xl' />
            <input
                type='email'
                placeholder='Inter Your Email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                className='mb-4 border rounded p-2 text-xl' />
            <input
                type='password'
                placeholder='Inter Your Password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                className='mb-2 border rounded p-2 text-xl' />
            <button type='submit' className='text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold'>
            {loading ? <ButtenSpinner/> : "Register"}
            </button>
        </form>
    )
}

export default RegisterForm