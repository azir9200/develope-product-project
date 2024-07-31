/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { OrderService } from './service.order';
import { orderValidationSchema } from './validation.order';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;
    const zodParseDta = orderValidationSchema.parse(orderData);
    const result = await OrderService.createOrderIntoDB(zodParseDta);

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

const getOrderSearch = async (req: Request, res: Response) => {
  try {
    // const { searchEmail } = req.body;
    // if (searchEmail) {
    //   const result = await OrderService.getOrderByEmail(searchEmail as string);
    //   res.status(200).json({
    //     success: true,
    //     message: `Products matching search term '${searchEmail}' fetched successfully!`,
    //     data: result,
    //   });
    // } else {
    const result = await OrderService.getAllOrderFromDB();
    res.status(200).json({
      success: true,
      message: 'Order Retrieve Successfully !',
      data: result,
    });
    // }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong  !',
      error: err.message,
    });
  }
};
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
  getOrderSearch,
  getOrderByEmail,
};
