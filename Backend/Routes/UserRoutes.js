import express from "express";
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  logoutUser,
} from "../Controllers/userController.js";

import {protect } from "../Middlewares/authMiddleware.js"

const router = express.Router();

router.post("/auth", authUser);
router.post('/', registerUser)
router.route('/profile').get(protect, getUserProfile ).put(protect, updateUserProfile)
router.post('/logout', logoutUser)

export default router;
