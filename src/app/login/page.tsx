import React from 'react'

const LogIn = () => {
    return (
        <section className='fix-height container px-7 flex items-center justify-center pt-16'>
            <div className='m-auto bg-white rounded-lg p-5 w-2/3 md:h-2/3 '>
                <h1 className='text-3xl font-bold text-gray-800 mb-5'>Log In</h1>
                <form className='flex flex-col'>
                    <input type='email' placeholder='Inter Your Email' className='mb-4 border rounded p-2 text-xl'/>
                    <input type='password' placeholder='Inter Your Password' className='mb-2 border rounded p-2 text-xl'/>
                    <button type='submit' className='text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold'>Login</button>
                </form>
            </div>
        </section>
    )
}

export default LogIn