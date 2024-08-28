"use client"
import React, {useState} from "react"

const LogInForm = () => {
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    return (
        <form className='flex flex-col'>
            <input type='email' placeholder='Inter Your Email' className='mb-4 border rounded p-2 text-xl' />
            <input type='password' placeholder='Inter Your Password' className='mb-2 border rounded p-2 text-xl' />
            <button type='submit' className='text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold'>Login</button>
        </form>
    )
}

export default LogInForm
