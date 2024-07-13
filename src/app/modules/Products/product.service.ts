import { IProduct } from './product.interface';
import Product from './product.model';

const createProductIntoDB = async (product: IProduct) => {
  // if (await ProductModel.isUserExists(product.id)) {
  //   throw new Error('Oi, This User is Already Exists !');
  // }
  // const userData: Partial<TProduct> = {};
  // const newUser = await ProductModel.create(userData);
  // if (Object.keys(newUser).length) {
  //   product.id = newUser.id;
  //   product.user = newUser._id;

  //   const newProduct = await ProductModel.create(product);
  //   return newProduct;
  // }

  const result = await Product.create(product);
  console.log('create  Product from DB', result);
  return result;
};
const searchProductsFromDB = async (searchProduct: string) => {
  const regex = new RegExp(searchProduct, 'i');
  const result = await Product.find({
    $or: [{ name: regex }, { description: regex }, { category: regex }],
  });
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
//aggregate here

const updateProductFromDB = async (id: string, payload: Partial<IProduct>) => {
  const { name, price, ...remainingProductData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingProductData,
  };

  console.log('update data  from service', modifiedUpdatedData);

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (price && Object.keys(price).length) {
    for (const [key, value] of Object.entries(price)) {
      modifiedUpdatedData[`price.${key}`] = value;
    }
  }
  console.log('update data  from service after code', modifiedUpdatedData);

  const result = await Product.findOneAndUpdate({ id }, modifiedUpdatedData, {
    new: true,
  });
  return result;
  console.log('update data  from service after result', result);
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.updateOne({ id }, { isDeleted: true });
  return result;
};

export const ProductService = {
  createProductIntoDB,
  searchProductsFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
