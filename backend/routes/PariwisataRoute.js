import express from "express";
import upload from "../middleware/upload.js";
import {
  getPariwisata,
  getPariwisataById,
  createPariwisata,
  updatePariwisata,
  deletePariwisata,
} from "../controllers/Pariwisata.js";

const router = express.Router();

router.get("/pariwisata", getPariwisata);
router.get("/pariwisata/:id", getPariwisataById);
router.post("/pariwisata", upload.single("gambar"), createPariwisata);
router.put("/pariwisata/:id", upload.single("gambar"), updatePariwisata);
router.delete("/pariwisata/:id", deletePariwisata);

export default router;
