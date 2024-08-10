/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { OrderService } from './service.order';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

const createOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.createOrderIntoDB(req.body);
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

const getAllOrders = catchAsync(async (req, res) => {
  const result = await OrderService.getAllOrderFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order are retrieved successfully',
    data: result,
  });
});

const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await OrderService.getOrderByIdFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service is retrieved successfully',
    data: result,
  });
});

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
  getSingleOrder
};
