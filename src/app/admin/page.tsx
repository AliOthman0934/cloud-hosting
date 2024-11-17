import React from 'react'
import AddArticleForm from './AddArticleForm'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const AdminPage = () => {
    const token = cookies().get("cookieToken")?.value || ""
    if(!token) redirect("/")
        
    return (
        <div className='h-[70vh] flex items-center justify-center px-5 lg:px-20'>
            <div className='shadow p-4 bg-purple-200 rounded w-full'>
                <h2 className='text-xl lg:text-2xl text-gray-700 font-semibold mb-4r'>Add New Article</h2>
                <AddArticleForm/>
            </div>
        </div>
    )
}

export default AdminPage