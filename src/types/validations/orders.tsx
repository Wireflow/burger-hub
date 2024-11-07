 import { nullable, z } from 'zod';
  enum PaymentMethod {
   Visa = "Visa",
   SuperVisa = "Super Visa",
   PayPal = "PayPal",
   Cash = "Cash",
}
 export const ModifierOptionSchema = z.object({
    modifierOptionName: z.string(),

    modifierOptionId: z.number().nullable(),
    modifierOptionPrice: z.number().nullable(),
});

 export const OptionSchema = z.object({
    modifierName: z.string(),

    modifireId: z.number(),
    modifireOptions: z.array(ModifierOptionSchema).nullable().optional(),
});

 export const ProductSchema = z.object({
    id: z.number(),
    imageUrl: z.string().nullable().optional(),  
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    note:z.string().nullable().optional(),
    options: z.array(OptionSchema).nullable(),
});
 export enum OrderType {
    Delivery = 'Delivery',
    Pickup = 'Pick up',
  }

 export const OrderSchema = z.object({
    products: z.array(ProductSchema),
    orderType: z.enum([OrderType.Delivery, OrderType.Pickup]).optional(),
    paymentId: z.number().nullable(),
    addressId: z.number().nullable(),
    totalAmount:z.number().optional(),
    totalQuantity:z.number().optional(),
    paymentType: z.enum([PaymentMethod.Visa, PaymentMethod.SuperVisa, PaymentMethod.PayPal, PaymentMethod.Cash]).optional()
});
  

export type OrderSchemaType = z.infer<typeof OrderSchema>;