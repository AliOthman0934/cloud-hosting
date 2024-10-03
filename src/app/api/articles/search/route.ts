import prisma from "@/utils/db";
import { NextRequest,NextResponse } from "next/server";

/**
 * @method GET 
 * @route http://localhost:3000/api/articles/search?searchText=Java
 * @access public
 * @description 
 *  - Implemented search functionality in the GET handler to fetch articles based on a search query.
    - If `searchText` is provided in the request parameters, articles are filtered by their title.
    - If no search query is provided, a default set of 6 articles is returned.
    - Added error handling for potential server issues during article fetching.
    - This feature allows users to search for articles by title through a search bar, improving user experience and discoverability.
 */

export async function GET(request:NextRequest){
    try {
        const searchText = request.nextUrl.searchParams.get("searchText")
        let articles;
        if(searchText){
            articles = await prisma.article.findMany({where : {title : {
                startsWith: searchText,
                mode : "insensitive"
            }}})
        } else{
            articles = await prisma.article.findMany({take : 6})
        }

        return NextResponse.json(articles,{status:200})

    } catch (error) {
        console.error("Error fetching article form search bar:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}