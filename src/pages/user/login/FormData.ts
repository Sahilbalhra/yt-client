import { z } from "zod"; // Add new import

export const UserSchema = z.object({
    email: z.string().email("Please enter proper email"),
    password: z
        .string()
        .min(8, { message: "Password is too short" })
        .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
});
