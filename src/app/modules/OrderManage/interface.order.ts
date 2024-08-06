import { Model, Types } from 'mongoose';

export type TOrderData = {
  email: string;
  productId: Types.ObjectId;
  price: number;
  quantity: number;
};
export interface TOrderModel extends Model<TOrderData> {
  isOrderExists(email: string): Promise<TOrderData | null>;
}
