import { NextRequest, NextResponse } from "next/server";
import { articlesData } from "@/utils/data"
import { updateArticle } from "@/utils/postType"
import prisma from "@/utils/db";



/**
 * @method GET 
 * @route http://localhost:3000/api/articles/:id
 * @access public
 * @description 
 *  - Created GET handler for fetching single article data using Next.js API routes.
    - Utilized `NextRequest` and `NextResponse` from "next/server" to return the data.
    - Added a status code of 200 for successful responses.
    - Imported articles data from the utils/data file for the response.
 */

interface articleId {
    params: { id: string }
}

export async function GET(request: NextRequest, { params }: articleId) {
    try {
        const singleArticle = prisma.article.findUnique({ where: { id: parseInt(params.id) } })
        if (!singleArticle) {
            return NextResponse.json({ message: "Article Not Found" }, { status: 404 })
        }
        return NextResponse.json({ singleArticle }, { status: 200 });
    } catch (error) {
        console.error("Error fetching article:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}


/**
 * @method PUT 
 * @route http://localhost:3000/api/articles/:id
 * @access public
 * @description 
 *  - Created PUT handler for update single article data using Next.js API routes.
    - Utilized `NextRequest` and `NextResponse` from "next/server" to return the data.
    - Added a status code of 200 for successful responses.
    - Imported articles data from the utils/data file for the response.
 */

interface articleId {
    params: { id: string }
}

export async function PUT(request: NextRequest, { params }: articleId) {
    try {
        const singleArticle = prisma.article.findUnique({ where: { id: parseInt(params.id) } });
        if (!singleArticle) {
            return NextResponse.json({ message: "Article Not Found" }, { status: 404 })
        }
        const body = (await request.json()) as updateArticle;
        const updatedArticle = await prisma.article.update({
            where: { id: parseInt(params.id) },
            data: {
                title: body.title,
                description: body.description,
            },
        });
        return NextResponse.json({ updatedArticle }, { status: 200 });
    } catch (error) {
        console.error("Error updating article:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}


/**
* @method DELETE 
* @route http://localhost:3000/api/articles/:id
* @access public
* @description 
*  - Created delete handler for delete single article data using Next.js API routes.
- Utilized `NextRequest` and `NextResponse` from "next/server" to return the data.
- Added a status code of 200 for successful responses.
- Imported articles data from the utils/data file for the response.
*/

interface articleId {
    params: { id: string }
}

export async function DELETE(request: NextRequest, { params }: articleId) {
    const singleArticle = await prisma.article.findUnique({ where: { id: parseInt(params.id) } });
    if (!singleArticle) {
        return NextResponse.json({ message: "Article Not Found" }, { status: 404 })
    }
    await prisma.article.delete({ where: { id: parseInt(params.id) } })
    return NextResponse.json({ message: "Article deleted" }, { status: 200 });
}