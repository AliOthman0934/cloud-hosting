import { NextRequest, NextResponse } from "next/server";
import { articlesData } from "../../../utils/data"
import { typeArticles } from "@/utils/types";


/**
 * @method GET 
 * @route http://localhost:3000/api/articles
 * @access public
 * @description 
 *  - Created GET handler for fetching articles data using Next.js API routes.
    - Utilized `NextRequest` and `NextResponse` from "next/server" to return the data.
    - Added a status code of 200 for successful responses.
    - Imported articles data from the utils/data file for the response.
 */

export function GET(request: NextRequest) {
    return NextResponse.json(articlesData, { status: 200 })
}


interface createArticle {
    body: string,
    title: string
}

export async function POST(request: NextRequest) {
    const body = await (request.json()) as createArticle;
    console.log(body);
    const newArticle: typeArticles = {
        title: body.title,
        body: body.body,
        id: articlesData.length + 1,
        userId: 202
    }
    articlesData.push(newArticle)
    return NextResponse.json(newArticle, { status: 201 })
}