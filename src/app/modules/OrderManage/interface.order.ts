import { Model, Types } from 'mongoose';

export type TOrderData = {
  email: string;
  productId: Types.ObjectId;
  price: number;
  quantity: number;
};

export type TOrderMethods = {
  isOrderExists(email: string): Promise<TOrderData | null>;
};
export type TOrderModel = Model<
  TOrderData,
  Record<string, never>,
  TOrderMethods
>;
