import { TOrderData } from './interface.order';
import OrderModel from './model.order';

const createOrderIntoDB = async (order: TOrderData) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrderFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};


const getOrderByEmail = async (searchEmail: string) => {
  const regex = new RegExp(searchEmail, 'i');
  const result = await OrderModel.find({ email: regex });
  return result;
};

export const OrderService = {
  createOrderIntoDB,
  getAllOrderFromDB,
  getOrderByEmail,
};
