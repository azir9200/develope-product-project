import { model, Schema } from 'mongoose';
import { TOrderData } from './interface.order';

const orderSchema = new Schema<TOrderData>({
  id: {
    type: String,
    required: [true, 'ID is required'],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'Userrerer id is required'],
    unique: true,
    ref: 'User',
  },

  // productIdData: {
  //   type: Schema.Types.ObjectId,
  //   required: [ true,  'Order Id is Required ! '],
  //   ref: 'productIdData',
  // },
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
