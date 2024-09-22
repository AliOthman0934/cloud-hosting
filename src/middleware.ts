import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log("Middleware is called");

    return NextResponse.next();
}

export const config = {
    matcher:["/"]
}

