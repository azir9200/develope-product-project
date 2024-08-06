import { Schema, model } from 'mongoose';
import { TOrderData, TOrderModel,  } from './interface.order';

// Define the schema
const OrderSchema = new Schema<TOrderData>({
  email: { type: String, required: true },
  productId: {
    type: Schema.Types.ObjectId,
    required: [true, 'Product id is required'],
    ref: 'Product', // Ensure 'Product' model exists
  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});


// Creating a custom static method
OrderSchema.statics.isUserExists = async function (email: string) {
  const existingUser = await this.findOne({ email });
  return existingUser;
};
export const OrderModel = model<TOrderData, TOrderModel>('Order', OrderSchema);
