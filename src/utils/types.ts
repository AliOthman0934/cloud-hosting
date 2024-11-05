import { Article,User,comment } from "@prisma/client"

export type typeJwt = {
    id : number,
    userName :string,
    isAdmin : boolean
}

export type commentWithUser = comment & {user : User}
export type typeSingleArticle = Article & {commentes : commentWithUser[]}