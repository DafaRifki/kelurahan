import React, { useEffect, useState } from "react";

const EditBeritaModal = ({ open, onClose, onSave, berita, loading }) => {
  const [form, setForm] = useState({
    judul: "",
    slug: "",
    tanggal: "",
    isi: "",
    gambar: null,
    gambarPreview: "",
  });

  useEffect(() => {
    if (berita) {
      setForm({
        judul: berita.judul || "",
        slug: berita.slug || "",
        tanggal: berita.tanggal ? berita.tanggal.split("T")[0] : "",
        isi: berita.isi || "",
        gambar: null,
        gambarPreview: berita.gambar
          ? `${import.meta.env.VITE_API_URL}/images/${berita.gambar}`
          : "",
      });
    }
  }, [berita, open]);

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
    onSave(form, () => {
      setForm({
        judul: "",
        slug: "",
        tanggal: "",
        isi: "",
        gambar: null,
        gambarPreview: "",
      });
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg border border-gray-100 relative max-h-screen overflow-y-auto">
        <button
          className="sticky top-4 right-4 float-right text-gray-400 hover:text-red-500 text-2xl z-10 px-4"
          onClick={onClose}
          aria-label="Tutup">
          &times;
        </button>
        <div className="p-8">
          <h3 className="text-xl font-bold mb-6 text-green-700 text-center">
            Edit Berita
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Judul
              </label>
              <input
                type="text"
                name="judul"
                value={form.judul}
                onChange={handleChange}
                className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Slug
              </label>
              <input
                type="text"
                name="slug"
                value={form.slug}
                disabled
                className="input input-bordered w-full bg-gray-100 text-gray-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Tanggal
              </label>
              <input
                type="date"
                name="tanggal"
                value={form.tanggal}
                onChange={handleChange}
                className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Isi Berita
              </label>
              <textarea
                name="isi"
                value={form.isi}
                onChange={handleChange}
                className="textarea textarea-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800"
                rows={4}
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
    </div>
  );
};

export default EditBeritaModal;
