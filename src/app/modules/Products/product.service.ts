import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

// const getAllProductsFromDB = async (query: Record<string, unknown>) => {
//   console.log('bae query', query);
//   const queryObj = { ...query };

//   const productSearchFields = ['name', 'price'];

//   let searchTerm = '';

//   if (query?.searchTerm) {
//     searchTerm = query?.searchTerm as string;
//   }

//   const searchQuery = ProductModel.find({
//     $or: productSearchFields.map((field) => ({
//       [field]: { $regex: searchTerm, $options: '1' },
//     })),
//   });

//   const excludeFields = ['searchTerm'];
//   excludeFields.forEach((el) => delete queryObj[el]);

//   console.log(query, queryObj)

//   const result = await searchQuery.find(query);
//   return result;
// };

// copy here
const searchProductsFromDB = async (searchProduct: string) => {
  const regex = new RegExp(searchProduct, 'i');
  const result = await ProductModel.find({
    $or: [{ name: regex }, { description: regex }, { category: regex }],
  });
  return result;
};
//copy end

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

const updateProductFromDB = async (id: string, payload: Partial<TProduct>) => {
  const { name, price, ...remainingProductData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingProductData,
  };

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
  console.log(modifiedUpdatedData);

  const result = await ProductModel.findOneAndUpdate(
    { id },
    modifiedUpdatedData,
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const ProductService = {
  createProductIntoDB,
  //   getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
  searchProductsFromDB,
};
