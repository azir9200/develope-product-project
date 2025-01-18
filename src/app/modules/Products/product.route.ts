import express from 'express';
import { ProductController } from './product.controller';
import validateRequest from '../../middlewares/zodValidateRequest';
import { ProductValidation } from './product.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ProductValidation.productValidationSchema),
  ProductController.createProduct,
);

router.get('/', ProductController.getAllProduct);

router.get('/', ProductController.getSingleProduct);

router.put('/:id', ProductController.updateProduct);

router.delete('/:id', ProductController.deleteProduct);

export const ProductRoute = router;
