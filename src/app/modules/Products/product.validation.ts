// import { z } from 'zod';

// // Define the Zod schema for TVariants
// const variantValidationSchema = z.object({
//   type: z.string(),
//   value: z.string(),
// });

// // Define the Zod schema for TInventory
// const inventoryValidationSchema = z.object({
//   quantity: z.number(),
//   inStock: z.boolean(),
// });

// // Define the Zod schema for TProduct
// const productValidationSchema = z.object({
//   id: z.string(),
//   password: z.string().max(20),
//   name: z.string(),
//   description: z.string(),
//   price: z.number(),
//   category: z.string(),
//   tags: z.array(z.string()),
//   variants: z.array(variantValidationSchema),
//   inventory: z.array(inventoryValidationSchema),
//   isDeleted: z.boolean().default(false),
//   viewCount: z.number().default(0),
// });

// export const ProductValidation = {
//   productValidationSchema,
// };
