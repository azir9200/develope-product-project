import { TOrderData } from './interface.order';
import { OrderModel } from './model.order';

const createOrderIntoDB = async (data: TOrderData) => {
  const order = new OrderModel(data);

  if (await order.isOrderExists(data.email)) {
    throw new Error('Order Already Exists!');
  }
  const result = await order.save();
  return result;
};

const getAllOrderFromDB = async () => {
  const result = await OrderModel.find();
  if (!result) {
    throw new Error('Order not found');
  }
  return result;
};

// const getOrderByIdFromDB = async (id: string) => {
//   const result = await OrderModel.findById(id);
//   if (!result) {
//     throw new Error('Order not found');
//   }
//   return result;
// };

const getOrderByIdFromDB = async (id: string) => {
  try {
    const result = await OrderModel.find({ id: id });
    if (!result) {
      return Error('Order not found');
    }
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return Error('An error occurred while fetching the order');
    console.log(error);
  }
};

const getOrderByEmail = async (query: Record<string, unknown>) => {
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const result = await OrderModel.find({
    $or: ['name', 'email'].map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });
  return result;
};

export const OrderService = {
  createOrderIntoDB,
  getAllOrderFromDB,
  getOrderByIdFromDB,
  getOrderByEmail,
};
