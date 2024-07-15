import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post(
  '/create-product',
  // validateRequest(productValidationSchema),
  ProductController.createProduct,
);

router.get('/', ProductController.getAllProduct);

router.get('/:productId', ProductController.getSingleProduct);

// router.patch('/:productId', ProductController.updateProduct);

router.delete('/:productId', ProductController.deleteProduct);

export const ProductRoute = router;
