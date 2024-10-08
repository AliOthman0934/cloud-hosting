import { Article } from "@prisma/client";

export async function getArticles(pageNumber: string | undefined): Promise<Article[]> {
    const getArticles = await fetch(`http://localhost:3000/api/articles?pageNumber=${pageNumber}`);

    if (!getArticles.ok) {
        throw new Error("Somthing went wrong try agin")
    }
    return getArticles.json();
}