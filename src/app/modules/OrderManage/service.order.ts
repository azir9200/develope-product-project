import { Product } from '../Products/product.model';
import { TOrderData } from './interface.order';
import { OrderModel } from './model.order';

const createOrderIntoDB = async (data: TOrderData) => {
  const { productId } = data;

  const findProduct = await Product.findById(productId);
  if (!findProduct) {
    throw new Error('Product not found');
  } else {
    const availableQuantity = findProduct?.inventory.quantity - data.quantity;
    if (findProduct?.inventory.quantity > 0 && 0 <= availableQuantity) {
      const result = await OrderModel.create(data);
      await Product.findByIdAndUpdate(productId, {
        'inventory.quantity': availableQuantity,
        'inventory.inStock': availableQuantity > 0,
      });
      return result;
    } else {
      throw new Error('Insufficient quantity available in inventory');
    }
  }
};

const getAllOrderFromDB = async () => {
  const result = await OrderModel.find();
  if (!result) {
    throw new Error('Order not found');
  }
  return result;
};

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
