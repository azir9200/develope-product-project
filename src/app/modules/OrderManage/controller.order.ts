/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { OrderService } from './service.order';

const createOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.createOrderIntoDB(req.body);
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

// const createOrder = async (req: Request, res: Response) => {
//   try {
//     const result = await OrderService.createOrderIntoDB(req.body);
//     console.log('product data', result);
//     res.status(200).json({
//       success: true,
//       message: 'Order is created successfully !',
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || 'Something went wrong  !',
//       error: err,
//     });
//   }
// };

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getAllOrderFromDB();
    res.status(200).json({
      success: true,
      message: 'Orders are retrieved  successfully !',
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

const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    const result = await OrderService.getOrderByEmail(req.query);
    res.status(200).json({
      success: true,
      message: `Products matching search term '${email}' fetched successfully!`,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong  !',
      error: err.message,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
  getOrderByEmail,
};
