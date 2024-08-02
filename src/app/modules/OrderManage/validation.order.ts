// import { z } from 'zod';

// export const orderValidationSchema = z.object({
//   email: z.string(),
//   productId: z.string(),
//   price: z.number(),
//   quantity: z.number(),
// });


import { z } from 'zod';

const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventorySchema = z.object({
  quantity: z.number().int().nonnegative(),
  inStock: z.boolean(),
});

export const orderValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantSchema),
  inventory: inventorySchema,
});
