import express from 'express';
import { OrderController } from './controller.order';

const router = express.Router();

router.post('/create-order', OrderController.createOrder);

router.get('/:email', OrderController.getOrderByEmail);
router.get('/mm', OrderController.getOrderSearch);

export const OrderRoute = router;
