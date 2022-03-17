import express from 'express';
import {
  addOrderItems
} from '../controller/orderController.js';
import { protect } from '../middleware/authMIddleware.js';

const router = express.Router();
router.route('/').post(protect, addOrderItems)

export default router;