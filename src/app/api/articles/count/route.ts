import prisma from "@/utils/db";
import { NextRequest,NextResponse } from "next/server";

/**
 * @method GET 
 * @route http://localhost:3000/api/articles/count
 * @access public
 * @description 
 *  - Implemented a `GET` handler to return the total number of articles in the database.
    - Used `prisma.article.count()` to efficiently count the number of records in the `article` table.
    - Returns the total article count in the response with a status of 200.
    - Added error handling to return a 500 status in case of server-side issues.
 */

export async function GET (request:NextRequest){
    try {
        const numberOfArticles = await prisma.article.count()
        return NextResponse.json(numberOfArticles,{status:200})
    } catch (error) {
        console.error("Error Fetching The Number Of Article Form Search Bar:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}