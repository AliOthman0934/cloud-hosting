import Link from "next/link";
import Article from "../components/Article/Article";
import {typeArticles} from "@/utils/types"
import { error } from "console";
import SearchArticle from "../components/Article/SearchArticle";
import Pagination from "../components/Article/pagination";


const Articlepage = async () => {
    const getArticles = await fetch("https://jsonplaceholder.typicode.com/posts");

    if(!getArticles.ok){
        throw new Error("Somthing went wrong try agin")
    }
    const articles: typeArticles[] = await getArticles.json();
    return (
        <section className="container m-auto px-5">
            <SearchArticle/>
            <div className="flex justify-center items-center flex-wrap gap-7">
                {articles.slice(0,6).map(item =>
                    <Article article={item} key={item.id}/>
                )}
            </div>
            <Pagination/>
        </section>

    )
}

export default Articlepage