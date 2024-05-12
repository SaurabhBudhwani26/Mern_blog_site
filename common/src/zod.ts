import z from "zod"

export const signUpInput = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().optional()

})

//Type inference in zod
// The frontend will need this to figure out the type of input
export type SignUpInput = z.infer<typeof signUpInput>

// Hence this zod type file should be kept in monorepos so that the frontend and backend both have the access to this file
// This file will be known as commons
// This way the frontend dont need to import anything from the backend project as the common folder will be published to the npm until we havent understood the monorepos

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

export type SigninInput = z.infer<typeof signinInput>

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
})

export type CreateBlogInput = z.infer<typeof createBlogInput>

export const updateBlogInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    id: z.number()
})

export type UpdateBlogInput = z.infer<typeof updateBlogInput> 