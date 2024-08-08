import { Schema, model } from 'mongoose';
import { TOrderData, TOrderModel } from './interface.order';

// Define the schema
const OrderSchema = new Schema<TOrderData>({
  email: { type: String, required: true },
  productId: {
    type: Schema.Types.ObjectId,
    required: [true, 'Product id is required'],
    ref: 'Product',
  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});


OrderSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

OrderSchema.methods.isOrderExists = async function (id: string) {
  return await OrderModel.findOne({ id });
};
// Creating a  method
OrderSchema.methods.isOrderExists = async function (email: string) {
  const existingOrder = await OrderModel.findOne({ email });
  return existingOrder;
};
export const OrderModel = model<TOrderData, TOrderModel>('Order', OrderSchema);
