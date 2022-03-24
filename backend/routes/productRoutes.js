import express from 'express';
import {
  getProductById,
  getProducts,
} from '../controller/productController.js';

// fetch all products, /api/products

const router = express.Router();

router.route('/').get(getProducts);

// fetch one product, /api/products/:id

router.route('/:id').get(getProductById);

export default router;
