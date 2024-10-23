import { z } from "zod";


export const VisaSuperVisaSchema = z.object({
    card_number: z.string().length(16, 'card Number you must be 16'),
    expire_date: z.string().min(5, 'expireDate invaild'),
    card_cvc: z.string().length(3, 'CVV you must be 3'),
  });
 export type VisaSuperVisaFormValues = z.infer<typeof VisaSuperVisaSchema>;
  export type VisaSuperVisaType = {
    card_number: string;
    expire_date: string;
    card_cvc: string;
}

 

 