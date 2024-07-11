import { Request, Response } from 'express';
import { OrderService } from './service.order';

const createOrder = async (req: Request, res: Response) => {
  try {
    // const { orderInfo } = req.body;
    // const zodParseDta = orderValidationSchema.parse(orderInfo);
    // const result = await OrderService.createOrderIntoDB(zodParseDta);

    const { order: orderData } = req.body;
    const result = await OrderService.createOrderIntoDB(orderData);

    res.status(200).json({
      success: true,
      message: 'Order is created successfully !',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong  !',
      error: err,
    });
  }
};

// const getAllOrders = async (req: Request, res: Response) => {
//   try {
//     const result = await OrderService.getAllOrderFromDB();
//     console.log(result);
//     res.status(200).json({
//       success: true,
//       message: 'All orders are retrieve successfully !',
//       data: result,
//     });
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || 'Something went wrong  !',
//       error: err,
//     });
//   }
// };

const getOrderSearch = async (req: Request, res: Response) => {
  try {
    const { searchEmail } = req.body;
    if (searchEmail) {
      const result = await OrderService.getOrderByEmail(searchEmail as string);
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchEmail}' fetched successfully!`,
        data: result,
      });
    } else {
      const result = await OrderService.getAllOrderFromDB();
      res.status(200).json({
        success: true,
        message: 'Order Retrieve Successfully !',
        data: result,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // getAllOrders,
  getOrderSearch,
};
