import { NextRequest, NextResponse } from "next/server";
import { articlesData } from "../../../utils/data"


export function GET(request: NextRequest) {
    return NextResponse.json(articlesData, { status: 200 })
}