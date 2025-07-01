import Berita from "../models/BeritaModel.js";

export const getAllBerita = async (req, res) => {
  try {
    const berita = await Berita.find().sort({ tanggal: -1 });
    res.json(berita);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getBeritaBySlug = async (req, res) => {
  try {
    const berita = await Berita.findOne({ slug: req.params.slug });
    if (!berita) return res.status(404).json({ message: "Tidak ditemukan" });
    res.json(berita);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createBerita = async (req, res) => {
  try {
    const { judul, slug, tanggal, isi } = req.body;
    const gambar = req.file ? req.file.filename : null;
    const berita = new Berita({ judul, slug, tanggal, isi, gambar });
    await berita.save();
    res.status(201).json(berita);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateBerita = async (req, res) => {
  try {
    const { judul, slug, tanggal, isi } = req.body;
    const data = { judul, slug, tanggal, isi };
    if (req.file) data.gambar = req.file.filename;
    const berita = await Berita.findOneAndUpdate(
      { slug: req.params.slug },
      data,
      { new: true }
    );
    if (!berita) return res.status(404).json({ message: "Tidak ditemukan" });
    res.json(berita);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteBerita = async (req, res) => {
  try {
    const berita = await Berita.findOneAndDelete({ slug: req.params.slug });
    if (!berita) return res.status(404).json({ message: "Tidak ditemukan" });
    res.json({ message: "Berita dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
