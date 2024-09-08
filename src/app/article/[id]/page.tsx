import AddArticleForm from "@/app/admin/AddArticleForm"
import AddCommentForm from "@/app/components/Comment/AddCommentForm"
import CommentItem from "@/app/components/Comment/CommentItem"
import {typeArticles} from "@/utils/types"
import { promises } from "dns"
import { resolve } from "path"

interface singleArticle{
    params: {id: string}
}

const singleArticlePage = async ({params}:singleArticle) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    if(!response.ok){
        throw new Error("Error fetching single article")
    }
    const singleArticle: typeArticles = await response.json();
    return (
        <section className="fix-height container m-auto w-full px-5 pt-8 md:w-3/4">
            <div className="bg-white p-7 rounded-lg mb-7">
                <h1 className=" text-3xl font-bold text-gray-700 mb-2">{singleArticle.title}</h1>
                <div className="text-gray-400">1/1/2024</div>
                <p className="text-gray-800 text-xl mt-5">{singleArticle.body}</p>
            </div>
            <AddCommentForm/>
            <h4 className="text-xl text-gray-800 ps-1 font-semibold mb-2 mt-7">
                Commemt
            </h4>
            <CommentItem/>
        </section>
    )
}

export default singleArticlePage