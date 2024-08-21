import Link from "next/link";
import Article from "../components/Article/Article";
import {typeArticles} from "@/utils/types"





const Articlepage = async () => {
    const getArticles = await fetch("https://jsonplaceholder.typicode.com/posts");
    const articles: typeArticles[] = await getArticles.json();
    return (
        <section className="container m-auto px-5">
            <div className="flex justify-center items-center flex-wrap gap-7">
                {articles.map(item =>
                    <Article article={item} key={item.id}/>
                )}
            </div>

        </section>

    )
}

export default Articlepage