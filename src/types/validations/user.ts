import { z } from "zod";

// Define your phone number regex pattern
const phoneNumberRegex = /^[0-9]{10}$/; // Adjust this regex according to your requirements

export const UserSchema = z.object({
    name: z.string()
        .min(1, "Name is required")
        .max(100, "Name is too long"),
    
    phone: z.string()
        .regex(phoneNumberRegex, "Invalid phone number"),
    
    email: z.string()
        .nonempty("Email is required")
        .email("Invalid email format"),
    
    password: z.string()
        .min(8, "Must be at least 8 characters in length."),
});
export type CustomerSchemaType = z.infer<typeof UserSchema>;