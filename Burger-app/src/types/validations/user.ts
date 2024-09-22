import { string, z } from "zod";
const phoneNumberRegex = /^[+]?[1-9]\d{1,14}$/;
export const userSchema=z.object({
   id:string(),
   name:z.string().min(0,"name is required").max(100,"name is too long"),
   phone:z.string(),
   email:z.string().email(),
 
});
export type userSchemaType=z.infer<typeof userSchema>