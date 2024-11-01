import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    try {
        cookies().delete("cookieToken")
        return NextResponse.json({ message: "Log Out" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}

