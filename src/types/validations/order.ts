// import { z } from "zod";
// import { ProductSchema } from "./product";

// export const orderSchema = z.object({
//   address_id: z.number().int().positive(),
//   payment_method_id: z.number().int().positive(),
//   deliveryAt: z
//     .string()
//     .refine((val) => !isNaN(Date.parse(val)), "Invaild timestamp"),
//   order_type: z.enum(["delivery", "Pick up"]).optional(),
//   status: z
//     .enum([
//       "received",
//       "pending",
//       "confirmed",
//       "preparing",
//       "out for delivery",
//       "reject",
//     ])
//     .default("received"),
//     products:z.array(ProductSchema).min(1,"At least one product is required"),
//     totalAmount: z.number().min(0, "total must be at least 0"),
//     totalQuantity:z.number().optional().nullable(),
//   user_id: z.number().int().positive(),
// });
// export type orderSchemaType=z.infer<typeof orderSchema>;