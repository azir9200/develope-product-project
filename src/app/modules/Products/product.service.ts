import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findOne({ id });
  return result;
};
const updateProductFromDB = async (id: string, payload: Partial<TProduct>) => {
  console.log(payload, 'payload');
  const result = await Product.findOneAndUpdate({ id }, payload);

  console.log(result, 'from service');
  return result;
};

//delete product
const deleteProductFromDB = async (id: string) => {
  const result = await Product.deleteOne({ id }, { isDeleted: true });
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
