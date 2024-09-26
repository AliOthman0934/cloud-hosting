import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    // const authToken = request.headers.get("authT")
    const cookieToken = request.cookies.get("cookieToken")
    const token = cookieToken?.value as string
    if (!token) {
        return NextResponse.json({ message: "No Token Provided" }, { status: 401 })
    }
}

export const config = {
    matcher:["/api/user/profile:path*"]
}

