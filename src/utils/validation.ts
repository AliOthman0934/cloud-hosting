import { string, z } from "zod";

export const newArticleSchema = z.object({
    title: z.string().min(2).max(200),
    description: z.string().min(10)
});