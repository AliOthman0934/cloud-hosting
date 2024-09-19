import { typeJwt } from "@/utils/types"
import jsonwebtoken from 'jsonwebtoken';

export function jwt(jwtPayload: typeJwt): string {
    const tokenKey = process.env.JWT_KEY as string
    const token = jsonwebtoken.sign(jwtPayload, tokenKey, {
        expiresIn: '1d', // Token expires in 1 day
        algorithm: 'HS256', // HMAC with SHA-256 (default algorithm, so this is optional)
    });

    return token
}