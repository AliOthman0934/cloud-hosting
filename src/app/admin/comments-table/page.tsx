import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const AdminCommentPage = () => {
    const token = cookies().get("cookieToken")?.value || ""
    if(!token) redirect("/")
    return (
        <div>Admin Comment Page</div>
    )
}

export default AdminCommentPage