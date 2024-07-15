import { z } from 'zod';

const variantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  // body: z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
  variants: z.array(variantValidationSchema).optional(),
  inventory: inventoryValidationSchema.optional(),
  isDeleted: z.boolean(),
});
// });

export default productValidationSchema;
