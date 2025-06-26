import axios from "axios";
import AddPariwisataModal from "../../components/AddPariwisataModal";
import EditPariwisataModal from "../../components/EditPariwisataModal";
import React, { useState, useEffect } from "react";
import AdminLayout from "../../components/AdminLayout";

const Pariwisata = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch data function
  const fetchData = async (pageNum = 1) => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/pariwisata?page=${pageNum}&limit=6&order=asc`
      );
      setData(res.data.data);
      setPage(res.data.page);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      setData([]);
    }
  };

  useEffect(() => {
    fetchData(page);
    // eslint-disable-next-line
  }, [page]);

  // Handler for add
  const handleAdd = async (form, resetForm) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("nama", form.nama);
      formData.append("kategori", form.kategori);
      formData.append("deskripsi", form.deskripsi);
      if (form.gambar) formData.append("gambar", form.gambar);

      await axios.post(`${import.meta.env.VITE_API_URL}/pariwisata`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      setShowAdd(false);
      resetForm();
      fetchData(page);
    } catch (err) {
      alert("Gagal menambah data.");
    }
    setLoading(false);
  };

  // Handler for edit
  const handleEdit = async (form, resetForm) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("nama", form.nama);
      formData.append("kategori", form.kategori);
      formData.append("deskripsi", form.deskripsi);
      if (form.gambar) formData.append("gambar", form.gambar);

      await axios.put(
        `${import.meta.env.VITE_API_URL}/pariwisata/${editData.id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      setShowEdit(false);
      setEditData(null);
      resetForm();
      fetchData(page);
    } catch (err) {
      alert("Gagal mengedit data.");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus data ini?")) return;
    setLoading(true);
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/pariwisata/${id}`, {
        withCredentials: true,
      });
      fetchData(page);
    } catch (err) {
      alert("Gagal menghapus data.");
    }
    setLoading(false);
  };

  return (
    <>
      <AdminLayout>
        <AddPariwisataModal
          open={showAdd}
          onClose={() => setShowAdd(false)}
          onSubmit={handleAdd}
          loading={loading}
        />
        <EditPariwisataModal
          open={showEdit}
          onClose={() => {
            setShowEdit(false);
            setEditData(null);
          }}
          onSubmit={handleEdit}
          loading={loading}
          data={editData}
        />

        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-green-700 tracking-tight">
            Data Pariwisata
          </h2>
          <button
            className="btn btn-success text-white rounded-full shadow px-6"
            onClick={() => setShowAdd(true)}>
            + Tambah Pariwisata
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.length === 0 ? (
            <div className="col-span-3 text-center text-gray-400 italic py-16">
              Tidak ada data pariwisata.
            </div>
          ) : (
            data.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col overflow-hidden hover:shadow-xl transition">
                {item.gambar ? (
                  <img
                    src={`${import.meta.env.VITE_API_URL}/images/${
                      item.gambar
                    }`}
                    alt={item.nama}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-5xl">
                    <span className="material-icons">image</span>
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-green-700 mb-1 truncate">
                    {item.nama}
                  </h3>
                  <div className="mb-2 text-sm text-gray-500 flex items-center gap-2">
                    <span
                      className={
                        "inline-block px-2 py-0.5 rounded-full text-xs font-semibold " +
                        (item.kategori === "wisata alam"
                          ? "bg-green-100 text-green-700"
                          : item.kategori === "budaya"
                          ? "bg-yellow-100 text-yellow-700"
                          : item.kategori === "perkebunan"
                          ? "bg-red-100 text-red-700"
                          : "bg-blue-100 text-blue-700")
                      }>
                      {item.kategori}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {item.deskripsi}
                  </p>
                  <div className="flex gap-2 mt-auto self-end">
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => {
                        setEditData(item);
                        setShowEdit(true);
                      }}>
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => handleDelete(item.id)}
                      disabled={loading}>
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <div className="join">
              <button
                className="join-item btn btn-success bg-gradient-to-r from-green-500 to-green-700 text-white"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}>
                &laquo;
              </button>
              <button className="join-item btn bg-green-100 text-green-700 font-semibold cursor-default">
                Page {page} / {totalPages}
              </button>
              <button
                className="join-item btn btn-success bg-gradient-to-r from-green-500 to-green-700 text-white"
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}>
                &raquo;
              </button>
            </div>
          </div>
        )}
      </AdminLayout>
    </>
  );
};

export default Pariwisata;
