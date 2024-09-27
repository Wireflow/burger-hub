import { string, z } from "zod";
const phoneNumberRegex = /^[+]?[1-9]\d{1,14}$/;
export const userSchema=z.object({
   id:string(),
   name:z.string().min(0,"name is required").max(100,"name is too long"),
   phone:z.string(),
   email:z.string().email("Invalid email format"),
   password: z.string()
   .min(8, "Must be at least 8 characters in length.")
 
});
export type userSchemaType=z.infer<typeof userSchema>