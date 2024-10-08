import { Article } from "@prisma/client";

export async function getArticles(pageNumber: string | undefined): Promise<Article[]> {
    const getArticles = await fetch(`http://localhost:3000/api/articles?pageNumber=${pageNumber}`);

    if (!getArticles.ok) {
        throw new Error("Somthing went wrong try agin")
    }
    return getArticles.json();
}

export async function getArticlesCount(): Promise<number> {
    const getArticles = await fetch(`http://localhost:3000/api/articles/count`);

    if (!getArticles.ok) {
        throw new Error("Somthing went wrong try agin")
    }
    const{count} = await getArticles.json() as {count:number};
    return count
}