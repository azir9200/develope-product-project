import { model, Schema } from 'mongoose';
import { TInventory, TProduct, TVariant } from './product.interface';

const variantSchema = new Schema<TVariant>({
  type: { type: String },
  value: { type: String },
});

const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number },
  inStock: { type: Boolean },
});

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: { type: [String] },
  variants: [variantSchema],
  inventory: { inventorySchema },
});

productSchema.pre('save', async function (next) {
  const isProductExists = await Product.find({
    id: this._id,
  });

  if (!isProductExists) {
    throw new Error('Product is not exists anymore !');
  }
  next();
});

export const Product = model<TProduct>('Product', productSchema);
