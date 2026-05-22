import { z } from "zod";

export const signupSchema = z.object({
    email: z.email("Invalid email address."),
    username: z.string().min(3, "Username must be at least 3 characters."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string(),
    }).refine(data => data.password === data.confirmPassword, {
        message: "Passwords do not match.",
        path: ["confirmPassword"]
    });
