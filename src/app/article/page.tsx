import Link from "next/link";
import ArticlePage from "../components/Article/Article";
import { typeArticles } from "@/utils/types"
import SearchArticle from "../components/Article/SearchArticle";
import Pagination from "../components/Article/pagination";
import { resolve } from "dns/promises";
import { Article } from "@prisma/client";


const Articlepage = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const getArticles = await fetch(`http://localhost:3000/api/articles?pageNumber=${1}`);

    if (!getArticles.ok) {
        throw new Error("Somthing went wrong try agin")
    }
    const articles: Article[] = await getArticles.json();
    return (
        <section className="container m-auto px-5 h-screen">
            <SearchArticle />
            <div className="flex justify-center items-center flex-wrap gap-7">
                {articles.slice(0, 6).map(item =>
                    <ArticlePage article={item} key={item.id} />
                )}
            </div>
            <Pagination />
        </section>

    )
}

export default Articlepage