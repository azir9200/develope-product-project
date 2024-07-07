import { z } from 'zod';

// Define the Zod schema for TVariants
const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Define the Zod schema for TInventory
const inventorySchema = z.object({
  quantity: z.number().nonnegative('Quantity must be a non-negative number'),
  inStock: z.boolean(),
});

// Define the Zod schema for TProduct
const productValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().optional(),
  category: z.string(),
  tags: z.array(z.string()).min(1, 'Tags is required'),
  variants: z.array(variantSchema).min(1, 'Variants are required'),
  inventory: z.array(inventorySchema).optional(),
  isDeleted: z.boolean().default(false),
  viewCount: z.number().default(0),
});

export const ProductValidation = {
  productValidationSchema,
};
