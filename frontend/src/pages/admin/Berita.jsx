import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import Table from "../../components/Table";
import AddBeritaModal from "../../components/AddBeritaModal";
import EditBeritaModal from "../../components/EditBeritaModal";
import { FiSearch } from "react-icons/fi";

const dummyBerita = [
  {
    slug: "pelayanan-administrasi-online",
    judul: "Pelayanan Administrasi Online",
    tanggal: "2025-07-01",
  },
  {
    slug: "program-pemberdayaan-masyarakat",
    judul: "Program Pemberdayaan Masyarakat",
    tanggal: "2025-06-30",
  },
  {
    slug: "lomba-kebersihan-lingkungan",
    judul: "Lomba Kebersihan Lingkungan",
    tanggal: "2025-06-29",
  },
];

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
    render: (v, row, idx, handleEdit, handleDelete) => (
      <div className="flex gap-2 justify-center">
        <button
          className="btn btn-warning btn-sm"
          onClick={() => handleEdit(row)}>
          Edit
        </button>
        <button
          className="btn btn-error btn-sm"
          onClick={() => handleDelete(row)}>
          Hapus
        </button>
      </div>
    ),
  },
];

const Berita = () => {
  const [beritaList, setBeritaList] = useState(dummyBerita);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editBerita, setEditBerita] = useState(null);
  const [search, setSearch] = useState("");

  const handleSaveAdd = (form) => {
    setBeritaList([...beritaList, form]);
    setShowAdd(false);
  };

  const handleEdit = (berita) => {
    setEditBerita(berita);
    setShowEdit(true);
  };

  const handleSaveEdit = (form) => {
    const updated = beritaList.map((item) =>
      item.slug === form.slug ? form : item
    );
    setBeritaList(updated);
    setShowEdit(false);
    setEditBerita(null);
  };

  const handleDelete = (berita) => {
    if (window.confirm(`Hapus berita: ${berita.judul}?`)) {
      const filtered = beritaList.filter((b) => b.slug !== berita.slug);
      setBeritaList(filtered);
    }
  };

  const columnsWithAction = columns.map((col) =>
    col.accessor === "aksi"
      ? {
          ...col,
          render: (v, row, idx) =>
            col.render(v, row, idx, handleEdit, handleDelete),
        }
      : col
  );

  const filteredBerita = beritaList.filter((b) =>
    b.judul.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-green-700">Halaman Berita</h3>
          <div className="flex gap-2">
            <div className="relative">
              <FiSearch className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                className="input pl-10 pr-4 rounded-full bg-white"
                placeholder="Cari berita..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              className="btn btn-success rounded-full"
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
        onSave={handleSaveAdd}
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
    </AdminLayout>
  );
};

export default Berita;
