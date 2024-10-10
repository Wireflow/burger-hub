import { z } from 'zod';

// Define the ModifierOption schema
export const ModifierOptionSchema = z.object({
    modifierOptionId: z.number(),
    modifierOptionName: z.string(),
    modifierOptionPrice: z.number(),
});

// Define the Option schema
export const OptionSchema = z.object({
    modifireId: z.number(),
    modifierName: z.string(),
    modifireOptions: z.array(ModifierOptionSchema).optional(),
});

// Define the Product schema
export const ProductSchema = z.object({
    id: z.number(),
    imageUrl: z.string().nullable().optional(),  // Allows null
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    options: z.array(OptionSchema).optional(),
});
// Define the enum to match your PostgreSQL enum type
export enum OrderType {
    Delivery = 'Delivery',
    Pickup = 'Pick up',
  }

// Define the CartType schema
export const OrderSchema = z.object({
    products: z.array(ProductSchema),
    orderType: z.enum([OrderType.Delivery, OrderType.Pickup]).optional(),
    paymentId: z.number(),
    addressId: z.number().nullable(),
    totalAmount:z.number().optional(),
    totalQuantity:z.number().optional()
});

export type OrderSchemaType = z.infer<typeof OrderSchema>;