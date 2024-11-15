import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const cookieToken = request.cookies.get("cookieToken");
    const token = cookieToken?.value as string;

    if (!token) {
        if (request.nextUrl.pathname.startsWith("/api/user/profile")) {
            return NextResponse.json({ message: "No Token Provided" }, { status: 401 });
        }
    } else {
        if (
            request.nextUrl.pathname === "/login" ||
            request.nextUrl.pathname === "/register"
        ) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }
}

export const config = {
    matcher: ["/api/user/profile", "/login", "/register"],
};




