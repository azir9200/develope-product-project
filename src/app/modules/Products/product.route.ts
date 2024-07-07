import express from 'express';
import { ProductController } from './product.controller';
import { ProductValidation, productValidation } from './product.validation';



const router = express.Router();

// router.post('/create-product', productValidation(productValidationSchema), ProductController.createProduct);

router.post('/create-product', ProductValidation.productValidationSchema, ProductController.createProduct,  )

router.get('/', ProductController.getProductsAndSearch);

router.get('/:id', ProductController.getSingleProduct);

router.patch('/:productId', ProductController.updateProduct);

router.delete('/:productId', ProductController.deleteProduct);

export const ProductRoute = router;
