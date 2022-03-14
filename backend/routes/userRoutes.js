import express from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controller/userController.js';
import { protect } from '../middleware/authMIddleware.js';

const router = express.Router();
router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
