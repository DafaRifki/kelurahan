import Pariwisata from "../models/PariwisataModel.js";

// Get all
export const getPariwisata = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;

    const total = await Pariwisata.count();

    const data = await Pariwisata.findAll({
      limit: limit,
      offset: offset,
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json({
      data,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get by ID
export const getPariwisataById = async (req, res) => {
  try {
    const data = await Pariwisata.findByPk(req.params.id);
    if (!data) return res.status(404).json({ msg: "Data tidak ditemukan" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Create
export const createPariwisata = async (req, res) => {
  try {
    const { nama, kategori, deskripsi } = req.body;
    const gambar = req.file ? req.file.filename : null;
    await Pariwisata.create({ nama, kategori, deskripsi, gambar });
    res.status(201).json({ msg: "Data pariwisata berhasil ditambahkan" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Update
export const updatePariwisata = async (req, res) => {
  try {
    const { nama, kategori, deskripsi } = req.body;
    const data = await Pariwisata.findByPk(req.params.id);
    if (!data) return res.status(404).json({ msg: "Data tidak ditemukan" });
    const gambar = req.file ? req.file.filename : data.gambar;
    await data.update({ nama, kategori, deskripsi, gambar });
    res.json({ msg: "Data pariwisata berhasil diupdate" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Delete
export const deletePariwisata = async (req, res) => {
  try {
    const data = await Pariwisata.findByPk(req.params.id);
    if (!data) return res.status(404).json({ msg: "Data tidak ditemukan" });
    await data.destroy();
    res.json({ msg: "Data pariwisata berhasil dihapus" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
