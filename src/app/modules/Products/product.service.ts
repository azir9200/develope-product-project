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
  console.log(id, 'service id');
  const result = await Product.findOne({ id: id });
  console.log(result, 'result service');
  return result;
};


const searchProductByIphoneFromDB = async (iPhone: string) => {
  console.log(iPhone, 'service id');
  const result = await Product.findOne({ name: iPhone });
  console.log(result, 'result service');
  return result;
};

const updateProductFromDB = async (id: string, payload: Partial<TProduct>) => {
  console.log(payload, 'payload');
  const result = await Product.findOneAndUpdate({ id }, payload, { new: true });

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
  searchProductByIphoneFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
