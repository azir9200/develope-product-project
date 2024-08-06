/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Request, Response } from 'express';
import { ProductService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.createProductIntoDB(req.body);
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
    const { productId } = req.params;
    console.log(productId, 'controller productId');
    const result = await ProductService.getSingleProductFromDB(productId);

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
    const { iPhone } = req.query; // Extract the 'id' parameter from the query string

    if (!iPhone) {
      return res.status(400).json({
        success: false,
        message: 'Product ID is required',
      });
    }
    console.log(req.query, 'controller iphone id');
    const result = await ProductService.getSingleProductFromDB(
      iPhone as string,
    );

    console.log('Hei Azir, single product', result);

    res.status(200).json({
      success: true,
      message: 'Product are retrieved  successfully !',
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving the product',
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.updateProductFromDB(
      productId,
      req.body,
    );

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
    const { productId } = req.params;
    const result = await ProductService.deleteProductFromDB(productId);
    if (result.deletedCount === 1) {
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully!',
        data: null,
      });
    }
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
