import express from 'express';
import { OrderController } from './controller.order';
import validateRequest from '../../middlewares/zodValidateRequest';
import orderValidationSchema from './validation.order';

const router = express.Router();

router.post(
  '/orders',
  validateRequest(orderValidationSchema),
  OrderController.createOrder,
);

router.get('/orders', OrderController.getAllOrders);

router.get('/orders/:id', OrderController.getSingleOrder);

router.get('/orders/:email', OrderController.getOrderByEmail);

export const OrderRoute = router;
