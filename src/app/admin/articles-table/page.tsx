import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const AdminArticlePage = () => {
    const token = cookies().get("cookieToken")?.value || ""
    if(!token) redirect("/")
    return (
        <div>Admin Article Page</div>
    )
}

export default AdminArticlePage