import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/create-product', ProductController.createProduct);

router.get('/', ProductController.getProductsAndSearch);

router.get('/:id', ProductController.getSingleProduct);

router.patch('/:productId', ProductController.updateProduct);

router.delete('/:productId', ProductController.deleteProduct);

export const ProductRoute = router;
