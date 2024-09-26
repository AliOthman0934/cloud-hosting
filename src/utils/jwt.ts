import { typeJwt } from "@/utils/types"
import jsonwebtoken from 'jsonwebtoken';
import { serialize } from "cookie"

export function jwt(jwtPayload: typeJwt): string {
    const tokenKey = process.env.JWT_KEY as string
    const token = jsonwebtoken.sign(jwtPayload, tokenKey, {
        expiresIn: '1d', // Token expires in 1 day
        algorithm: 'HS256', // HMAC with SHA-256 (default algorithm, so this is optional)
    });

    return token
}

export function sitCookie(JwtPayload: typeJwt) {
    const tokenKey = jwt(JwtPayload)
    const cookie = serialize("cookieToken", tokenKey, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 30 * 30 * 60
    })
    return cookie

}