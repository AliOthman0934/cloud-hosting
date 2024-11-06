import { getSingleArticle } from "@/apiCalles/getArticlesApi"
import AddArticleForm from "@/app/admin/AddArticleForm"
import AddCommentForm from "@/app/components/Comment/AddCommentForm"
import CommentItem from "@/app/components/Comment/CommentItem"
import { typeSingleArticle } from "@/utils/types"
import { Article } from "@prisma/client"
import { promises } from "dns"
import { resolve } from "path"

interface singleArticle{
    params: {id: string}
}

const singleArticlePage = async ({params}:singleArticle) => {

    const singleArticle: typeSingleArticle = await getSingleArticle(params.id);
    return (
        <section className="fix-height container m-auto w-full px-5 pt-8 md:w-3/4">
            <div className="bg-white p-7 rounded-lg mb-7">
                <h1 className=" text-3xl font-bold text-gray-700 mb-2">{singleArticle.title}</h1>
                <div className="text-gray-400">{new Date(singleArticle.createdAt).toDateString()}</div>
                <p className="text-gray-800 text-xl mt-5">{singleArticle.description}</p>
            </div>
            <AddCommentForm articleId={singleArticle.id}/>
            <h4 className="text-xl text-gray-800 ps-1 font-semibold mb-2 mt-7">
                Commemt
            </h4>
            {singleArticle.comments.map(comment =>(
                <CommentItem key={comment.id} comment={comment}/>
            ))}
            
        </section>
    )
}

export default singleArticlePage