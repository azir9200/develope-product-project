import { z } from 'zod';

// const variantValidationSchema = z.object({
//   type: z.string(),
//   value: z.string(),
// });

// const inventoryValidationSchema = z.object({
//   quantity: z.number(),
//   inStock: z.boolean(),
// });

// const productValidationSchema = z.object({
//   body: z.object({
//     name: z.string(),
//     description: z.string(),
//     price: z.number(),
//     category: z.string(),
//     tags: z.array(z.string()).optional(),
//     variants: z.array(variantValidationSchema).optional(),
//     inventory: inventoryValidationSchema.optional(),
//   }),
// });

const variantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    variants: z.array(variantValidationSchema).optional(),
    inventory: inventoryValidationSchema.optional(),
  }),
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
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.number().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  variants: z.array(updateVariantValidationSchema).optional(),
  inventory: updateInventoryValidationSchema.optional(),
});
// });

export const ProductValidation = {
  productValidationSchema,
  updateProductValidationSchema,
};
