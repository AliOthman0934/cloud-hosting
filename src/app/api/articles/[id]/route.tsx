import { NextRequest,NextResponse } from "next/server";
import {articlesData} from "@/utils/data"
import {updateArticle} from "@/utils/postType"



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

interface articleId{
    params: {id:string}
}

export function GET(request:NextRequest, {params}:articleId){
    const singleArticle = articlesData.find(a => a.id === parseInt(params.id));
    if(!singleArticle){
        return NextResponse.json({message:"Article Not Found"},{status:404})
    }
    return NextResponse.json({singleArticle},{status:200});
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

    interface articleId{
        params: {id:string}
    }
    
    export async function PUT(request:NextRequest, {params}:articleId){
        const singleArticle = articlesData.find(a => a.id === parseInt(params.id));
        if(!singleArticle){
            return NextResponse.json({message:"Article Not Found"},{status:404})
        }
        const body = (await request.json()) as updateArticle ;
        console.log(body)
        return NextResponse.json({message:"Article updated"},{status:200});
    }