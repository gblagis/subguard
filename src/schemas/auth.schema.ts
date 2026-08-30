import {email, z} from "zod";

export const registerSchema = z.object({
    email: z.string().email({ message: "Invalid email format"}),
    password: z.string().min(6, {message: "The password must be at least 6 characters long."}),
    name: z.string().min(3)
});

export const loginSchema = z.object({
    email: z.string().email({message:"Invalid email format"}),
    password: z.string().min(1)
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;