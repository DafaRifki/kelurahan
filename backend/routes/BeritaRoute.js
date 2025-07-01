import express from "express";
import upload from "../middleware/upload.js";
import {
  getAllBerita,
  getBeritaBySlug,
  createBerita,
  updateBerita,
  deleteBerita,
} from "../controllers/Berita.js";

const router = express.Router();

router.get("/berita", getAllBerita);
router.get("/berita/:slug", getBeritaBySlug);
router.post("/berita", upload.single("gambar"), createBerita);
router.put("/berita/:slug", upload.single("gambar"), updateBerita);
router.delete("/berita/:slug", deleteBerita);

export default router;
