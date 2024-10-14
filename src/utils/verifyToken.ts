import jsonwebtoken from "jsonwebtoken";
import { NextRequest } from "next/server";
import { typeJwt } from "@/utils/types";

export function verifyToken(request: NextRequest): typeJwt | null {
    try {
        // Retrieve the token from cookies
        const cookieToken = request.cookies.get("cookieToken");
        const token = cookieToken?.value as string;

        if (!token) return null;

        // Get the secret key for verifying the JWT
        const secretKey = process.env.JWT_KEY as string;

        // Verify the token and cast it to `unknown` first to safely cast it to `typeJwt`
        const payload = jsonwebtoken.verify(token, secretKey) as unknown as typeJwt;

        return payload;  // Return the decoded payload
    } catch (error) {
        console.error("Error Verifying The Token. Try again later:", error);  // Log the actual error
        return null;  // Return null on error or token verification failure
    }
}


export function verifyTokenPage(token: string): typeJwt | null {
    try {
        if (!token) return null;

        // Get the secret key for verifying the JWT
        const secretKey = process.env.JWT_KEY as string;

        // Verify the token and cast it to `unknown` first to safely cast it to `typeJwt`
        const payload = jsonwebtoken.verify(token, secretKey) as unknown as typeJwt;
        if (!payload) return null

        return payload;  // Return the decoded payload
    } catch (error) {
        console.error("Error Verifying The Token. Try again later:", error);  // Log the actual error
        return null;  // Return null on error or token verification failure
    }
}