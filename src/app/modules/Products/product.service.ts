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
  const result = await Product.findById(id);
  return result;
};

const updateProductFromDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

const searchProductByIphoneFromDB = async (query: Record<string, unknown>) => {
  const result = await Product.find({
    name: { $regex: query.searchTerm, $options: 1 },
  });

  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  searchProductByIphoneFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
