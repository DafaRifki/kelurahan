import React, { useState } from "react";

const initialForm = {
  judul: "",
  slug: "",
  tanggal: "",
  gambar: null,
  gambarPreview: "",
  isi: "",
  deskripsi: "",
};

const AddBeritaModal = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "gambar") {
      const file = files[0];
      setForm((prev) => ({
        ...prev,
        gambar: file,
        gambarPreview: file ? URL.createObjectURL(file) : "",
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form, () => setForm(initialForm)); // callback optional jika onSave ingin reset
  };

  if (!open) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box w-11/12 max-w-3xl">
        <h3 className="font-bold text-lg mb-4">Tambah Berita</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="judul"
            onChange={handleChange}
            value={form.judul}
            placeholder="Judul"
            className="input input-bordered w-full"
            required
          />

          <input
            name="slug"
            onChange={handleChange}
            value={form.slug}
            placeholder="Slug (unique)"
            className="input input-bordered w-full"
            required
          />

          <input
            name="tanggal"
            type="date"
            onChange={handleChange}
            value={form.tanggal}
            className="input input-bordered w-full"
            required
          />

          {/* Choose File Input Gambar */}
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

          <textarea
            name="deskripsi"
            onChange={handleChange}
            value={form.deskripsi}
            placeholder="Deskripsi Lengkap"
            className="textarea textarea-bordered w-full"
            rows={5}
            required
          />

          <div className="modal-action">
            <button type="submit" className="btn btn-success">
              Simpan
            </button>
            <button type="button" className="btn" onClick={onClose}>
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBeritaModal;
