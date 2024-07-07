/* eslint-disable no-console */
import { Request, Response } from 'express';
import { ProductService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    const result = await ProductService.createProductIntoDB(productData);
    console.log('product data', result);

    res.status(200).json({
      success: true,
      message: 'Product are created successfully !',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// const getAllProducts = async (req: Request, res: Response) => {
//   try {
//     const result = await ProductService.getAllProductsFromDB(req.query);

//     res.status(200).json({
//       success: true,
//       message: 'Product are retrieved  successfully !',
//       data: result,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };


const getProductsAndSearch = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    if (searchTerm) {
      // If searchTerm is provided, search products
      const result = await ProductService.searchProductsFromDB(
        searchTerm as string
      );
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } else {
      // If no searchTerm, get all products
      const result = await ProductService.searchProductsFromDB();
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await ProductService.getSingleProductFromDB(id);
    
    console.log('Hei Azir, single product', result);

    res.status(200).json({
      success: true,
      message: 'Product are retrieved  successfully !',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { product } = req.body;
    const result = await ProductService.updateProductFromDB(productId, product);

    res.status(200).json({
      success: true,
      message: 'Product updated successfully !',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.deleteProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully !',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductController = {
  createProduct,
  // getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getProductsAndSearch,
};
