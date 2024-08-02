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


const getOrderByEmail = async (email: string) => {
  const result = await OrderModel.find({ email });
  return result;
};

export const OrderService = {
  createOrderIntoDB,
  getAllOrderFromDB,
  getOrderByEmail,
};
