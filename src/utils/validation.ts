import { string, z } from "zod";

export const newArticleSchema = z.object({
    title: z.string({
        required_error: "Title is required",
        invalid_type_error: "Title shoud be string"
    }).min(2).max(200),
    description: z.string({
        required_error: "Description is required",
        invalid_type_error: "Description shoud be string"
    }).min(10)
});