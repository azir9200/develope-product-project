import { model, Schema } from 'mongoose';
import { TInventory, TProduct, TVariants } from './product.interface';

const variantSchema = new Schema<TVariants>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema<TInventory>({
  // quantity: {type: Number},
  // inStock: {type: Boolean},
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },

  tags: {
    type: [String],
    required: [true, 'Tags is required'],
  },

  variants: {
    type: [variantSchema],
    required: true,
  },

  inventory: {
    type: [inventorySchema],
  },

  isDeleted: {
    type: Boolean,
    default: false,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
});

export const ProductModel = model<TProduct>('Product', productSchema);
