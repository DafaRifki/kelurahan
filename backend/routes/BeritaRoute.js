import express from "express";
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
router.post("/berita", createBerita);
router.put("/berita/:slug", updateBerita);
router.delete("/berita/:slug", deleteBerita);

export default router;
