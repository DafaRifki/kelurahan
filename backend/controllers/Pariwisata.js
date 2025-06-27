import Pariwisata from "../models/PariwisataModel.js";

// GET all (dengan pagination)
export const getPariwisata = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const total = await Pariwisata.countDocuments();
    const data = await Pariwisata.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

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

// GET by ID
export const getPariwisataById = async (req, res) => {
  try {
    const data = await Pariwisata.findById(req.params.id);
    if (!data) return res.status(404).json({ msg: "Data tidak ditemukan" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// CREATE
export const createPariwisata = async (req, res) => {
  try {
    const { nama, kategori, deskripsi } = req.body;
    const gambar = req.file ? req.file.filename : null;
    const newData = new Pariwisata({ nama, kategori, deskripsi, gambar });
    await newData.save();
    res.status(201).json({ msg: "Data pariwisata berhasil ditambahkan" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// UPDATE
export const updatePariwisata = async (req, res) => {
  try {
    const { nama, kategori, deskripsi } = req.body;
    const data = await Pariwisata.findById(req.params.id);
    if (!data) return res.status(404).json({ msg: "Data tidak ditemukan" });

    const gambar = req.file ? req.file.filename : data.gambar;
    data.nama = nama;
    data.kategori = kategori;
    data.deskripsi = deskripsi;
    data.gambar = gambar;

    await data.save();
    res.json({ msg: "Data pariwisata berhasil diupdate" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// DELETE
export const deletePariwisata = async (req, res) => {
  try {
    const data = await Pariwisata.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ msg: "Data tidak ditemukan" });
    res.json({ msg: "Data pariwisata berhasil dihapus" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
