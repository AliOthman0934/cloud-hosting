import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyTokenPage } from '@/utils/verifyToken'
import { numberOfArticles } from '@/utils/constants'
import { Article, Prisma } from '@prisma/client'
import Link from 'next/link'
import { getArticles,getArticlesCount } from '@/apiCalles/getArticlesApi'
import Pagination from '@/app/components/Article/pagination'
import DeleteArticleButton from './DeleteArticleButton'
import prisma from "@/utils/db";
import { DOMAIN } from '@/utils/constants'

interface AdminArticleTableProps{
    searchParams : {pageNumber : string}
}

const AdminArticlePage = async ({searchParams : {pageNumber}} : AdminArticleTableProps) => {
    const token = cookies().get("cookieToken")?.value || ""
    if(!token) redirect("/")
    const article: Article[] = await getArticles(pageNumber)
    const count:number = await prisma.article.count()
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
                                <DeleteArticleButton articleId={article.id}/>
                            </td>
                            <td className='hidden lg:inline-block p-3'>
                                <Link href={`${DOMAIN}/article/${article.id}`} className='text-white bg-blue-600 rounded-lg p-2 hover:bg-blue-800'>Read More</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination pageNumber={parseInt(pageNumber)} page={pages} route='/admin/articles-table'/>
        </section>
    )
}

export default AdminArticlePage


// Querying the database directly in server-side functions in Next.js allows you to fetch data during the server-side rendering (SSR) process, ensuring that the data is ready before the page is sent to the client. This approach is beneficial for pages that need dynamic, frequently updated, or user-specific content.

// How It Works:
// Server-Side Functions in Next.js: Next.js provides two primary functions for fetching data on the server:

// getServerSideProps: Runs at request time and fetches data for every request.
// getStaticProps: Fetches data at build time (only for static generation).
// Database Queries: In these server-side functions, you can directly use your database client (like Prisma, Sequelize, or Mongoose) to perform queries. Since these functions are executed on the server, they can securely interact with the database without exposing sensitive credentials to the client.

// Steps to Query:

// Import your database client or connection.
// Write the query inside the server-side function.
// Return the fetched data as props, which will be passed to the React component of the page.
// The React component uses these props to render the content.
// Advantages:

// Fresh Data: For getServerSideProps, the database is queried for every request, ensuring users see the most up-to-date information.
// Secure: Database credentials and sensitive logic remain on the server, not exposed to the client.
// SEO-Friendly: Content fetched server-side is included in the HTML sent to the browser, which is beneficial for search engines.
// When to Use:

// When you need data that changes frequently or is user-specific (e.g., dashboards, personalized feeds).
// When you want to ensure sensitive data fetching is done securely on the server.