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