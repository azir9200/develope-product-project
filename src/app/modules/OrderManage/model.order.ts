// import { Schema, model } from 'mongoose';
// import { TOrderData } from './interface.order';

// const OrderSchema = new Schema<TOrderData>({
//   email: { type: String, required: true },
//   productId: {
//     type: Schema.Types.ObjectId,
//     required: [true, 'Product id is required'],
//     unique: true,
//     ref: 'Product',
//   },
//   price: { type: Number, required: true },
//   quantity: { type: Number, required: true },
// });

// const OrderModel = model<TOrderData>('Order', OrderSchema);

// export default OrderModel;


import { Schema, model } from 'mongoose';
import { TOrderData } from './interface.order';

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

// Define and export the model
const OrderModel = model<TOrderData>('Order', OrderSchema);

export default OrderModel;
