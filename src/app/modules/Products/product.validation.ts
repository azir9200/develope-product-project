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

const updateVariantValidationSchema = z.object({
  type: z.string().optional(),
  value: z.string().optional(),
});

const updateInventoryValidationSchema = z.object({
  quantity: z.number().optional(),
  inStock: z.boolean().optional(),
});

const updateProductValidationSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.number().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  variants: z.array(updateVariantValidationSchema).optional(),
  inventory: updateInventoryValidationSchema.optional(),
  isDeleted: z.boolean().optional(),
});
// });

export const ProductValidation = {
  productValidationSchema,
  updateProductValidationSchema,
};
