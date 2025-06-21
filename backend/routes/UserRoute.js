import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/Users.js";
import { adminOnly, verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/users", verifyUser, getUsers);
router.get("/users/:id", verifyUser, getUserById);
router.post("/users", adminOnly, createUser);
router.patch("/users/:id", adminOnly, updateUser);
router.delete("/users/:id", adminOnly, deleteUser);

export default router;
