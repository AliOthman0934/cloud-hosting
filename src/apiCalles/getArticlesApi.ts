import { typeSingleArticle } from "@/utils/types";
import { Article } from "@prisma/client";
import { promises } from "dns";
import {DOMAIN} from "@/utils/constants"

export async function getArticles(pageNumber: string | undefined): Promise<Article[]> {
    const getArticles = await fetch(`${DOMAIN}/api/articles?pageNumber=${pageNumber}`,{cache : "no-store"});

    if (!getArticles.ok) {
        throw new Error("Somthing went wrong try agin")
    }
    return getArticles.json();
}

export async function getArticlesCount(): Promise<number> {
    try {
        const response = await fetch(`${DOMAIN}/api/articles/count`,{cache : "no-store"});
        
        if (!response.ok) {
            console.error("Failed to fetch articles count. Status:", response.status);
            throw new Error("Something went wrong. Try again.");
        }

        // Parse the response as text, since it's a plain number
        const countText = await response.text();
        
        // Convert the text to a number
        const count = Number(countText);
        if (isNaN(count)) {
            console.error("Invalid count format:", countText);
            throw new Error("Invalid data format from API");
        }

        console.log("countFromFunction:", count);
        return count;

    } catch (error) {
        console.error("Error in getArticlesCount:", error);
        throw error;
    }
}

export async function getSearchedArticle(searchText: string): Promise<Article[]> {
    const SearchedArticle = await fetch(`${DOMAIN}/api/articles/search?searchText=${searchText}`);

    if (!SearchedArticle.ok) {
        throw new Error("Error Fetching Searched Article ")
    }
    return SearchedArticle.json();
}


export async function getSingleArticle(articleId: string):Promise<typeSingleArticle>{
    const response = await fetch(`${DOMAIN}/api/articles/${articleId}`,{cache:"no-store"})
    if(!response.ok){
        throw new Error("Error fetching single article")
    }
    return response.json();
}