import React, { useState } from "react";

const initialForm = {
  nama: "",
  kategori: "",
  deskripsi: "",
  gambar: null,
};

const kategoriOptions = ["wisata alam", "budaya", "kuliner", "perkebunan"];

const AddPariwisataModal = ({ open, onClose, onSubmit, loading }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "gambar") {
      setForm({ ...form, gambar: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form, () => setForm(initialForm));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg border border-gray-100 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl"
          onClick={onClose}
          aria-label="Tutup">
          &times;
        </button>
        <h3 className="text-xl font-bold mb-6 text-green-700 text-center">
          Tambah Pariwisata
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Nama
            </label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800"
              required
            />
          </div>

          {/* Dropdown Kategori */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Kategori
            </label>
            <select
              name="kategori"
              value={form.kategori}
              onChange={handleChange}
              className="select select-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800"
              required>
              <option value="" disabled>
                -- Pilih Kategori --
              </option>
              {kategoriOptions.map((kategori) => (
                <option key={kategori} value={kategori}>
                  {kategori.charAt(0).toUpperCase() + kategori.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Deskripsi
            </label>
            <textarea
              name="deskripsi"
              value={form.deskripsi}
              onChange={handleChange}
              className="textarea textarea-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Gambar
            </label>
            <input
              type="file"
              name="gambar"
              accept="image/*"
              onChange={handleChange}
              className="file-input file-input-bordered w-full"
            />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={onClose}
              disabled={loading}>
              Batal
            </button>
            <button
              type="submit"
              className="btn btn-success text-white"
              disabled={loading}>
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPariwisataModal;
