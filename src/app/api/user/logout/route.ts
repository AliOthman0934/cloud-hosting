// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";

// export function GET(request: NextRequest) {
//     try {
//         cookies().delete("cookieToken")
//         return NextResponse.json({ message: "Log Out" }, { status: 200 })
//     } catch (error) {
//         return NextResponse.json({ message: "Internal server error" }, { status: 500 });
//     }
// }

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const response = NextResponse.json({ message: "Log Out" }, { status: 200 });
        response.headers.set(
            "Set-Cookie",
            "cookieToken=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict"
        );
        return response;
    } catch (error) {
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}