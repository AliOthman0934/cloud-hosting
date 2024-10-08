export interface createArticle {
    description: string,
    title: string
}

export interface updateArticle {
    description?: string,
    title?: string
}

export interface newUser{
    userName: string,
    email: string,
    password: string
}

export interface logInUser{
    email : string,
    password : string
}

export interface updateUser{
    userName ? : string
    email? : string,
    password? : string
}

export interface addComment{
    text: string,
    articleId: number
}

export interface editComment{
    text: string,
}