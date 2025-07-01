import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import Table from "../../components/Table";
import AddBeritaModal from "../../components/AddBeritaModal";
import EditBeritaModal from "../../components/EditBeritaModal";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

const columns = [
  { label: "No", accessor: "no", render: (v, row, idx) => idx + 1 },
  { label: "Judul", accessor: "judul" },
  { label: "Slug", accessor: "slug" },
  {
    label: "Tanggal",
    accessor: "tanggal",
    render: (v) => new Date(v).toLocaleDateString("id-ID"),
  },
  {
    label: "Aksi",
    accessor: "aksi",
    render: (v, row, idx, handleEdit, handleDelete, handleDetail) => (
      <div className="flex gap-2 justify-center">
        <button
          className="px-3 py-1.5 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition text-sm"
          onClick={() => handleDetail(row)}>
          Detail
        </button>
        <button
          className="px-3 py-1.5 bg-yellow-400 text-white rounded-lg font-semibold shadow hover:bg-yellow-500 transition text-sm"
          onClick={() => handleEdit(row)}>
          Edit
        </button>
        <button
          className="px-3 py-1.5 bg-red-500 text-white rounded-lg font-semibold shadow hover:bg-red-600 transition text-sm"
          onClick={() => handleDelete(row)}>
          Hapus
        </button>
      </div>
    ),
  },
];

const Berita = () => {
  const [beritaList, setBeritaList] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editBerita, setEditBerita] = useState(null);
  const [search, setSearch] = useState("");
  const [detailBerita, setDetailBerita] = useState(null);

  useEffect(() => {
    fetchBerita();
  }, []);

  const fetchBerita = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/berita`)
      .then((res) => setBeritaList(res.data))
      .catch(() => setBeritaList([]));
  };

  const handleSaveAdd = (form, reset) => {
    const formData = new FormData();
    formData.append("judul", form.judul);
    formData.append("slug", form.slug);
    formData.append("tanggal", form.tanggal);
    formData.append("isi", form.isi);
    if (form.gambar) formData.append("gambar", form.gambar);

    axios
      .post(`${import.meta.env.VITE_API_URL}/berita`, formData)
      .then(() => {
        fetchBerita();
        setShowAdd(false);
        reset();
      })
      .catch((err) => {
        alert("Gagal menambahkan berita: " + err.response?.data?.message);
      });
  };

  const handleEdit = (berita) => {
    setEditBerita(berita);
    setShowEdit(true);
  };

  const handleSaveEdit = (form, reset) => {
    const formData = new FormData();
    formData.append("judul", form.judul);
    formData.append("slug", form.slug);
    formData.append("tanggal", form.tanggal);
    formData.append("isi", form.isi);
    if (form.gambar) formData.append("gambar", form.gambar);

    axios
      .put(`${import.meta.env.VITE_API_URL}/berita/${form.slug}`, formData)
      .then(() => {
        fetchBerita();
        setShowEdit(false);
        setEditBerita(null);
        if (reset) reset();
      })
      .catch((err) => {
        alert("Gagal mengubah berita: " + err.response?.data?.message);
      });
  };

  const handleDelete = (berita) => {
    if (window.confirm(`Yakin ingin menghapus berita "${berita.judul}"?`)) {
      axios
        .delete(`${import.meta.env.VITE_API_URL}/berita/${berita.slug}`)
        .then(() => fetchBerita())
        .catch((err) => {
          alert("Gagal menghapus berita: " + err.response?.data?.message);
        });
    }
  };

  const filteredBerita = beritaList.filter((b) =>
    b.judul.toLowerCase().includes(search.toLowerCase())
  );

  const columnsWithAction = columns.map((col) =>
    col.accessor === "aksi"
      ? {
          ...col,
          render: (v, row, idx) =>
            col.render(v, row, idx, handleEdit, handleDelete, setDetailBerita),
        }
      : col
  );

  return (
    <AdminLayout>
      <div className="mb-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h3 className="font-bold text-2xl text-green-700 tracking-tight">
            Halaman Berita
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto md:justify-end">
            <div className="relative w-full sm:w-64">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FiSearch className="text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Cari berita..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input input-bordered pl-10 w-full bg-white text-gray-800 rounded-full"
              />
            </div>
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-full shadow transition"
              onClick={() => setShowAdd(true)}>
              + Tambah Berita
            </button>
          </div>
        </div>
      </div>

      <Table columns={columnsWithAction} data={filteredBerita} />

      <AddBeritaModal
        open={showAdd}
        onClose={() => setShowAdd(false)}
        onSubmit={handleSaveAdd}
      />

      <EditBeritaModal
        open={showEdit}
        berita={editBerita}
        onClose={() => {
          setShowEdit(false);
          setEditBerita(null);
        }}
        onSave={handleSaveEdit}
      />

      {detailBerita && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-xl p-6 max-w-xl w-full shadow-lg overflow-y-auto max-h-[90vh] relative">
            <button
              onClick={() => setDetailBerita(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
              aria-label="Tutup">
              &times;
            </button>
            <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
              Detail Berita
            </h2>
            <div className="space-y-3 text-gray-800">
              <div>
                <strong>Judul:</strong> {detailBerita.judul}
              </div>
              <div>
                <strong>Slug:</strong> {detailBerita.slug}
              </div>
              <div>
                <strong>Tanggal:</strong>{" "}
                {new Date(detailBerita.tanggal).toLocaleDateString("id-ID")}
              </div>
              <div>
                <strong>Isi Berita:</strong>
                <p className="mt-1 whitespace-pre-line text-gray-700">
                  {detailBerita.isi}
                </p>
              </div>
              {detailBerita.gambar && (
                <div>
                  <strong>Gambar:</strong>
                  <img
                    src={`${import.meta.env.VITE_API_URL}/images/${
                      detailBerita.gambar
                    }`}
                    alt="Gambar Berita"
                    className="mt-2 rounded-md border w-full object-cover max-h-64"
                  />
                </div>
              )}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setDetailBerita(null)}
                className="btn btn-success text-white">
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default Berita;
