import { z } from 'zod';

const productValidationSchema = z.object({
  body: z.object({
  
    title: z.string().min(1, { message: 'Title is required' }),
    content: z.string().min(1, { message: 'Content is required' }),
    image: z.string().min(1, { message: 'Images URL is required' }),
    category: z.string().min(1, { message: 'Category is required' }),
    tags: z.string().min(1, { message: 'Tags are required' }),
    author: z.string().min(1, { message: 'Author is required' }),
    upVotes: z
      .number()
      .int()
      .min(0, { message: 'UpVotes cannot be negative' })
      .default(0),
    downVotes: z
      .number()
      .int()
      .min(0, { message: 'DownVotes cannot be negative' })
      .default(0),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
    isPremium: z.boolean().default(false),
    isVerified: z.boolean().default(false),
  }),
});

export const ProductValidation = {
  productValidationSchema,
};
