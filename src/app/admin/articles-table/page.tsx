import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyTokenPage } from '@/utils/verifyToken'
import { numberOfArticles } from '@/utils/constants'
import { Article } from '@prisma/client'
import Link from 'next/link'
import { getArticles,getArticlesCount } from '@/apiCalles/getArticlesApi'
import Pagination from '@/app/components/Article/pagination'

interface AdminArticleTableProps{
    searchParams : {pageNumber : string}
}

const AdminArticlePage = async ({searchParams : {pageNumber}} : AdminArticleTableProps) => {
    const token = cookies().get("cookieToken")?.value || ""
    if(!token) redirect("/")
    const article: Article[] = await getArticles(pageNumber)
    const count:number = await getArticlesCount()
    const pages = Math.ceil(count/numberOfArticles)
    return (
        <section className='p-5'>
            <h1 className='mb-7 text-2xl font-semibold text-gray-700'>Articles</h1>
            <table className='table w-full text-left'>
                <thead className='border-t-2 border-b-2 border-gray-500 lg:text-xl'>
                    <tr>
                        <th className='p-1 lg:p-2'>Title</th>
                        <th className='hidden lg:inline-block'> Created At</th>
                        <th className=''>Action</th>
                        <th className='hidden lg:inline-block'></th>
                    </tr>
                </thead>
                <tbody>
                    {article.map(article =>(
                        <tr key={article.id} className='border-b border-t border-gray-300'>
                            <td className='p-3 text-gray-700'>{article.title}</td>
                            <td className='hidden lg:inline-block text-gray-700 font-normal p-3'>{new Date(article.createdAt).toDateString()}</td>
                            <td className='p-3'>
                                <Link href={`/admin/articles-table/edit/${article.id}`} className='bg-green-600 text-white rounded-lg py-1 px-2 inline-block text-center mb-2 me-2 lg:me-3 hover:bg-green-800 transition'>Edit</Link>
                                <button>Delete</button>
                            </td>
                            <td className='hidden lg:inline-block p-3'>
                                <Link href={`article/${article.id}`} className='text-white bg-blue-600 rounded-lg p-2 hover:bg-blue-800'>Read More</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default AdminArticlePage