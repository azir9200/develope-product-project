import express from 'express';
import { OrderController } from './controller.order';

const router = express.Router();

router.post('/create-order', OrderController.createOrder);

router.get('/:email', OrderController.getOrderSearch);
router.get('/', OrderController.getOrderSearch);

export const OrderRoute = router;
