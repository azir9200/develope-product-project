import express from 'express';
import { OrderController } from './controller.order';
import { orderValidationSchema } from './validation.order';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/orders',
  validateRequest(orderValidationSchema),
  OrderController.createOrder,
);

router.get('/orders', OrderController.getAllOrders);


router.get('/:email', OrderController.getOrderByEmail);

export const OrderRoute = router;
