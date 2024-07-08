import { model, Schema } from 'mongoose';
import {
  TInventory,
  TProduct,
  TVariants,
  TYPProductModel,
} from './product.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const variantSchema = new Schema<TVariants>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new Schema<TProduct, TYPProductModel>(
  {
    id: {
      type: String,
      required: [true, 'ID is required'],
      // unique: true,
    },
    password: {
      type: String,
      required: [true, 'AZIR, here need password'],
      maxlength: [20, 'Password can not be more than 20 characters !'],
    },
    name: {
      type: String,
      required: [true, 'hey Azir,  Name is required'],
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
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// virtual
productSchema.virtual('myIdeas').get(function () {
  return this.name + this.price;
});

// Query Middleware
productSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// static method
productSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await ProductModel.findOne({ id });
  return existingUser;
};

//pre hook middleware
productSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook: WE will save data');
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

//post hook middleware
productSchema.post('save', function (doc, next) {
  doc.password = '';
  // console.log(this, 'post hook, we save data');
  next();
});

export const ProductModel = model<TProduct, TYPProductModel>(
  'Product',
  productSchema,
);
