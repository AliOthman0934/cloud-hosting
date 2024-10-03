import prisma from "@/utils/db";
import { NextRequest,NextResponse } from "next/server";


export async function GET(request:NextRequest){
    try {
        const searchText = request.nextUrl.searchParams.get("searchText")
        let articles;
        if(searchText){
            articles = await prisma.article.findMany({where : {title : searchText}})
        } else{
            articles = await prisma.article.findMany({take : 6})
        }

        return NextResponse.json(articles,{status:200})

    } catch (error) {
        console.error("Error fetching article form search bar:", error); // Log the actual error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}