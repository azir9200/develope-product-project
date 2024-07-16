import { Schema, model } from 'mongoose';
import { TOrderData } from './interface.order';

const OrderSchema = new Schema<TOrderData>({
  email: { type: String, required: true },

  productId: {
    type: Schema.Types.ObjectId,
    required: [true, 'Product id is required'],
    unique: true,
    ref: 'Product',
  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const OrderModel = model<TOrderData>('Order', OrderSchema);

export default OrderModel;
