import { z } from 'zod';

// Define the Zod schema for TVariants
const variantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Define the Zod schema for TInventory
const inventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

// Define the Zod schema for TProduct
const productValidationSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
  variants: z.array(variantValidationSchema),
  inventory: z.array(inventoryValidationSchema),
});

export default productValidationSchema;
