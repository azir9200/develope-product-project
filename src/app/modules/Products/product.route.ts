import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post(
  '/products',
  // validateRequest(productValidationSchema),
  ProductController.createProduct,
);

router.get('/products', ProductController.getAllProduct);

router.get('/products/:id', ProductController.getSingleProduct);
router.get('/products/:', ProductController.getSingleProduct);

router.put('/products/:id', ProductController.updateProduct);

router.delete('/products/:id', ProductController.deleteProduct);

export const ProductRoute = router;
