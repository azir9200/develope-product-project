import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';

// Define the Variant schema
const VariantSchema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

// Define the Inventory schema
const InventorySchema = new Schema({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// Define the Product schema
const ProductSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [VariantSchema], required: true },
  inventory: { type: InventorySchema, required: true },
});

// Create the Product model
const Product = model<IProduct>('Product', ProductSchema);

export default Product;
