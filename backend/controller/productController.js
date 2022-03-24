import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

const getProductById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product is not found');
  }
});

export { getProducts, getProductById };
