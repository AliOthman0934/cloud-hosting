import { Article } from "@prisma/client";

export async function getArticles(pageNumber: string | undefined): Promise<Article[]> {
    const getArticles = await fetch(`http://localhost:3000/api/articles?pageNumber=${pageNumber}`);

    if (!getArticles.ok) {
        throw new Error("Somthing went wrong try agin")
    }
    return getArticles.json();
}

export async function getArticlesCount(): Promise<number> {
    try {
        const response = await fetch(`http://localhost:3000/api/articles/count`);
        
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