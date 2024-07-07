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

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: 'Product are retrieved  successfully !',
      data: result,
    });
  } catch (err) {
    console.log(err);
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

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
