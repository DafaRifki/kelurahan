import React, { useState, useEffect } from "react";

const EditBeritaModal = ({ open, onClose, onSave, berita }) => {
  const [form, setForm] = useState(berita || {});

  useEffect(() => {
    if (berita) setForm(berita);
  }, [berita]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(form);
  };

  if (!open || !berita) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box w-11/12 max-w-3xl">
        <h3 className="font-bold text-lg mb-4">Edit Berita</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="judul"
            onChange={handleChange}
            value={form.judul}
            placeholder="Judul"
            className="input input-bordered w-full"
          />

          <input
            name="slug"
            onChange={handleChange}
            value={form.slug}
            placeholder="Slug"
            className="input input-bordered w-full"
          />

          <input
            name="tanggal"
            type="date"
            onChange={handleChange}
            value={form.tanggal?.split("T")[0]}
            className="input input-bordered w-full"
          />

          <input
            name="gambar"
            onChange={handleChange}
            value={form.gambar}
            placeholder="URL Gambar"
            className="input input-bordered w-full"
          />

          <textarea
            name="deskripsi"
            onChange={handleChange}
            value={form.Deskripsi}
            placeholder="Deskripsi"
            className="textarea textarea-bordered w-full"
          />

          <div className="modal-action">
            <button type="submit" className="btn btn-warning">
              Update
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

export default EditBeritaModal;
