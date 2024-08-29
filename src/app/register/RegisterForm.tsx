"use client"
import React, { ReactEventHandler, useState } from "react"
import { toast } from "react-toastify";

const RegisterForm = () => {
    const [userName, setUserNmae] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitFormHandler = (e:React.FormEvent) => {
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
            <button type='submit' className='text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold'>Register</button>
        </form>
    )
}

export default RegisterForm