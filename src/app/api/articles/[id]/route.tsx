import { NextRequest,NextResponse } from "next/server";
import {articlesData} from "@/utils/data"

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