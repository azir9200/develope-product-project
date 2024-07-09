import { model, Schema } from 'mongoose';
import { TOrderData } from './interface.order';

const orderSchema = new Schema<TOrderData>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const OrderModel = model<TOrderData>('Order', orderSchema);


