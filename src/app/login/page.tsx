import React from 'react'
import LogInForm from './LogInForm'

const LogIn = () => {
    return (
        <section className='fix-height container px-7 flex items-center justify-center pt-16'>
            <div className='m-auto bg-white rounded-lg p-5 w-2/3 md:h-2/3 '>
                <h1 className='text-3xl font-bold text-gray-800 mb-5'>Log In</h1>
                <LogInForm/>
            </div>
        </section>
    )
}

export default LogIn