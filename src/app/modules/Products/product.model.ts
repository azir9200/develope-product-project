import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

// Product schema
const productSchema = new Schema<TProduct>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    tags: { type: String, required: true },
    author: { type: String, required: true },
    upVotes: { type: Number, default: 0 },
    downVotes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isPremium: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true },
);

productSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.statics.isProductExists = async function (id: string) {
  return await ProductModel.findOne({ id });
};

export const ProductModel = model<TProduct>('product', productSchema);
