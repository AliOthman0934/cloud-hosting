import Link from "next/link";
import ArticlePage from "../components/Article/Article";
import { typeArticles } from "@/utils/types"
import SearchArticle from "../components/Article/SearchArticle";
import Pagination from "../components/Article/pagination";
import { resolve } from "dns/promises";
import { Article } from "@prisma/client";

interface pageNumber {
    searchParams: { pageNumber: string }
}

async function getArticles(pageNumber: string | undefined): Promise<Article[]> {
    const getArticles = await fetch(`http://localhost:3000/api/articles?pageNumber=${pageNumber}`);

    if (!getArticles.ok) {
        throw new Error("Somthing went wrong try agin")
    }
    return getArticles.json();
}


const Articlepage = async ({ searchParams }: pageNumber) => {
    const { pageNumber } = searchParams
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const articles: Article[] = await getArticles(pageNumber);
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