import { z } from 'zod';

// Define the Zod schema
const orderValidationSchema = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    productId: z
      .string()
      .regex(/^[0-9a-fA-F]{24}$/, { message: 'Invalid product ID format' }),
    price: z.number().positive({ message: 'Price must be a positive number' }),
    quantity: z
      .number()
      .int()
      .positive({ message: 'Quantity must be a positive integer' }),
  }),
});

export default orderValidationSchema;
