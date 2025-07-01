import mongoose from "mongoose";

const BeritaSchema = new mongoose.Schema(
  {
    judul: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    tanggal: { type: Date, required: true },
    gambar: { type: String },
    isi: { type: String, required: true },
    detail: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Berita", BeritaSchema);
