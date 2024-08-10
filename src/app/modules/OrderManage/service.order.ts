import { Product } from '../Products/product.model';
import { TOrderData } from './interface.order';
import { OrderModel } from './model.order';

const createOrderIntoDB = async (data: TOrderData) => {
  const { productId } = data;

  const findProduct = await Product.findById(productId);
  console.log(findProduct?.inventory.quantity, 'fres');
  // const findProduct = await Product.findById(productId);
  console.log(findProduct?.inventory.inStock, 'fre334');
  // const availableQuantity = findProduct?.inventory.quantity;
  // const availableStock = findProduct?.inventory.inStock;

  if (!findProduct) {
    throw new Error('Product not found');
  } else {
    const availableQuantity = findProduct?.inventory.quantity - data.quantity;
    if (findProduct?.inventory.quantity > 0 && 0 <= availableQuantity) {
      const result = await OrderModel.create(data);
      const updateProduct = await Product.findByIdAndUpdate(productId, {
        'inventory.quantity': availableQuantity,
        'inventory.stock': availableQuantity > 0,
      });
      return result;
    } else {
      throw new Error('insufficient stock.');
    }
  }

  const availableQuantity = findProduct?.inventory.quantity;
  const availableStock = findProduct?.inventory.inStock;

  if( availableQuantity > 0){
    availableStock = false;
  }else{
    availableStock = true;
  }

  // const result = await order.create();
  // return result;
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
