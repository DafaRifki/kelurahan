import Berita from "../models/BeritaModel.js";
// GET semua berita
export const getAllBerita = async (req, res) => {
  try {
    const berita = await Berita.find().sort({ tanggal: -1 });
    res.json(berita);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET berita berdasarkan slug
export const getBeritaBySlug = async (req, res) => {
  try {
    const berita = await Berita.findOne({ slug: req.params.slug });
    if (!berita)
      return res.status(404).json({ message: "Berita tidak ditemukan" });
    res.json(berita);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST tambah berita
export const createBerita = async (req, res) => {
  try {
    const berita = new Berita(req.body);
    await berita.save();
    res.status(201).json(berita);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update berita berdasarkan slug
export const updateBerita = async (req, res) => {
  try {
    const berita = await Berita.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );
    if (!berita)
      return res.status(404).json({ message: "Berita tidak ditemukan" });
    res.json(berita);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE hapus berita berdasarkan slug
export const deleteBerita = async (req, res) => {
  try {
    const berita = await Berita.findOneAndDelete({ slug: req.params.slug });
    if (!berita)
      return res.status(404).json({ message: "Berita tidak ditemukan" });
    res.json({ message: "Berita berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
