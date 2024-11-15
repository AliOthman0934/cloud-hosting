import Link from "next/link";
import ArticlePage from "../components/Article/Article";
import SearchArticle from "../components/Article/SearchArticle";
import Pagination from "../components/Article/pagination";
import { resolve } from "dns/promises";
import { Article } from "@prisma/client";
import { getArticles,getArticlesCount } from "@/apiCalles/getArticlesApi";
import { numberOfArticles } from "@/utils/constants";

interface pageNumber {
    searchParams: { pageNumber: string }
}

const Articlepage = async ({ searchParams }: pageNumber) => {
    const { pageNumber } = searchParams
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const articles: Article[] = await getArticles(pageNumber);
    const count:number = await getArticlesCount();
    console.log(count)
    const pages = Math.ceil(count / numberOfArticles) 
    console.log("pages",pages)
    return (
        <section className="container m-auto px-5 h-screen">
            <SearchArticle />
            <div className="flex justify-center items-center flex-wrap gap-7">
                {articles.slice(0, 6).map(item =>
                    <ArticlePage article={item} key={item.id} />
                )}
            </div>
            <Pagination pageNumber={parseInt(pageNumber)} route="/article" page={pages}/>
        </section>

    )
}

export default Articlepage