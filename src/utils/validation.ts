import { number, string, z } from "zod";

export const newArticleSchema = z.object({
    title: z.string({
        required_error: "Title Is Required",
        invalid_type_error: "Title Shoud Be String"
    }).min(2).max(200),
    description: z.string({
        required_error: "Description is required",
        invalid_type_error: "Description shoud be string"
    }).min(10)
});

export const newUserSchema = z.object({
    userName: z.string({
        required_error: "User Name Is Required"
    }). min(10).max(20),
    email : z.string().email(),
    password: z.string().min(6)
})

export const logInUserSchema = z.object({
    email : z.string().email(),
    password: z.string().min(6)
})

export const addCommentSchema = z.object({
    text : z.string().min(2).max(500),
    articleId : number()
})