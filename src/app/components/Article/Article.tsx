import Link from "next/link"
// import {typeArticles} from "@/utils/types"
import { Article } from "@prisma/client"

interface articleProps {
    article: Article
}

const ArticlepPage = ({ article }: articleProps) => {
    return (
        <div key={article.id} className="p-5 rounded-lg my-1 border-2 border-gray-400 hover:bg-slate-200 w-full md:w-2/5 lg:w-1/4">
            <h1 className="text-xl font-bold text-gray-900 line-clamp-1">{article.title}</h1>
            <p className="my-2 text-xl text-gray-700 p-1 line-clamp-1">{article.description}</p>
            <Link href={`./article/${article.id}`} className="text-xl bg-purple-700 hover:bg-purple-800 w-full block text-center p-1 text-white rounder-lg">read more</Link>
        </div>
    )
}

export default ArticlepPage