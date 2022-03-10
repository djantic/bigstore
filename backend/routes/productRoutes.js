import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// fetch all products, /api/products


const router = express.Router();

router.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// fetch one product, /api/products/:id

router.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404)
      throw new Error('Product is not found')
    }
  })
);

export default router;
