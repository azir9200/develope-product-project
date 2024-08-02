/* eslint-disable @typescript-eslint/no-explicit-any */
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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong  !',
      error: err,
    });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductFromDB();
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
    console.log(id, 'controller id');
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

const searchProductByIphone = async (req: Request, res: Response) => {
  try {
    const { iPhone } = req.params;
    console.log(iPhone, 'controller iphone id');
    const result = await ProductService.getSingleProductFromDB(iPhone);

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
    const { id } = req.params;
    const result = await ProductService.updateProductFromDB(id, req.body);

    res.status(200).json({
      success: true,
      message: 'Product updated successfully !',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong to delete data !',
      error: err,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductService.deleteProductFromDB(id);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully !',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong to delete data !',
      error: err,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  searchProductByIphone,
  updateProduct,
  deleteProduct,
};
