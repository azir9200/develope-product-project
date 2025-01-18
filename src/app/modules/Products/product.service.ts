import httpStatus from 'http-status';
import AppError from '../../errors/handleAppError';
import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (data: TProduct) => {
  try {
    const result = await ProductModel.create(data);
    return result;
  } catch (error) {
    console.log(error);
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create service.');
  }
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  if (!result || result.length === 0) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }
  return result;
};
const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }
  return result;
};

const updateProductFromDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await ProductModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findOneAndUpdate({ id });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
