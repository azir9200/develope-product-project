/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { OrderService } from './service.order';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;

    const result = await OrderService.createOrderIntoDB(orderData);

    res.status(200).json({
      success: true,
      message: 'Order is created successfully !',
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

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getAllOrderFromDB();
    res.status(200).json({
      success: true,
      message: 'Orders are retrieved  successfully !',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};


// const getOrderSearch = async (req: Request, res: Response) => {
//   try {
//     const result = await OrderService.getAllOrderFromDB();
//     res.status(200).json({
//       success: true,
//       message: 'Order Retrieve Successfully !',
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || 'Something went wrong  !',
//       error: err.message,
//     });
//   }
// };
const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    console.log(req.body, 'order controller');
    const result = await OrderService.getOrderByEmail(email as string);
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
