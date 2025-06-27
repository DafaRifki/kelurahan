import mongoose from "mongoose";

const PariwisataSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    kategori: {
      type: String,
      required: true,
    },
    deskripsi: {
      type: String,
      required: true,
    },
    gambar: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // otomatis buat createdAt & updatedAt
  }
);

const Pariwisata = mongoose.model("Pariwisata", PariwisataSchema);
export default Pariwisata;
