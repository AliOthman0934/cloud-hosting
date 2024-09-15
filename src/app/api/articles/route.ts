import { NextRequest, NextResponse } from "next/server";
import { string, z } from "zod";
import { articlesData } from "../../../utils/data"
import { typeArticles } from "@/utils/types";
import { newArticleSchema } from "@/utils/validation"
import { createArticle } from "@/utils/postType"
import prisma from "@/utils/db"
import { title } from "process";
import { error } from "console";




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

export async function GET(request: NextRequest) {
    try {
        const getArticle = await prisma.article.findMany();
        return NextResponse.json(getArticle, { status: 200 })
    } catch (error) {
        console.error("Error fetching articles:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}



/**
 * @method POST 
 * @route http://localhost:3000/api/articles
 * @access public
 * @description 
 *   Add POST handler to create a new article:
        - Implemented POST method to accept JSON data and create a new article.
        - Defined `createArticle` interface to validate incoming request body.
        - Created new article with auto-incremented `id` and default `userId`.
        - Appended new article to `articlesData` and returned a 201 response with the new article.
 */


export async function POST(request: NextRequest) {
    try {
        const body = await (request.json()) as createArticle;
        const validation = newArticleSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 })
        }
        const newArticle = await prisma.article.create({
            data:{
                title: body.title,
                description : body.description

            }
        })
        return NextResponse.json(newArticle, { status: 201 })
    } catch (error) {
        console.error("Error creating article:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}