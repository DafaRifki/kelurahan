import React, { useState, useEffect } from "react";

const EditPariwisataModal = ({ open, onClose, onSubmit, loading, data }) => {
  const [form, setForm] = useState({
    nama: "",
    kategori: "",
    deskripsi: "",
    gambar: null,
    gambarPreview: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        nama: data.nama || "",
        kategori: data.kategori || "",
        deskripsi: data.deskripsi || "",
        gambar: null,
        gambarPreview: data.gambar
          ? `${import.meta.env.VITE_API_URL}/images/${data.gambar}`
          : "",
      });
    }
  }, [data, open]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "gambar") {
      setForm({
        ...form,
        gambar: files[0],
        gambarPreview: files[0]
          ? URL.createObjectURL(files[0])
          : form.gambarPreview,
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form, () => {
      setForm({
        nama: "",
        kategori: "",
        deskripsi: "",
        gambar: null,
        gambarPreview: "",
      });
    });
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
          Edit Pariwisata
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
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Kategori
            </label>
            <input
              type="text"
              name="kategori"
              value={form.kategori}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800"
              required
            />
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
            {form.gambarPreview && (
              <img
                src={form.gambarPreview}
                alt="Preview"
                className="mb-2 w-full h-40 object-cover rounded-lg border"
              />
            )}
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
export default EditPariwisataModal;
