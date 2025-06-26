import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import Table from "../../components/Table";
import AddUserModal from "../../components/AddUserModal";
import EditUserModal from "../../components/EditUserModal";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

const columns = [
  { label: "No", accessor: "no", render: (v, row, idx) => idx + 1 },
  { label: "Nama", accessor: "name" },
  { label: "Email", accessor: "email" },
  {
    label: "Role",
    accessor: "role",
    render: (v) => (
      <span
        className={`badge badge-sm px-3 py-2 font-semibold capitalize
          ${
            v === "admin"
              ? "badge-success text-white"
              : v === "user"
              ? "badge-info text-white"
              : "badge-ghost"
          }
        `}>
        {v}
      </span>
    ),
  },
  {
    label: "Aksi",
    accessor: "aksi",
    render: (v, row, idx, handleEdit, handleDelete) => (
      <div className="flex gap-2 justify-center">
        <button
          className="px-4 py-1.5 bg-yellow-400 text-white rounded-lg font-semibold shadow hover:bg-yellow-500 transition text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
          onClick={() => handleEdit(row)}>
          Edit
        </button>
        <button
          className="px-4 py-1.5 bg-red-500 text-white rounded-lg font-semibold shadow hover:bg-red-600 transition text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
          onClick={() => handleDelete(row)}>
          Delete
        </button>
      </div>
    ),
  },
];

const User = () => {
  const [users, setUsers] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/users`, { withCredentials: true })
      .then((res) => setUsers(res.data))
      .catch(() => setUsers([]));
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSaveAdd = (form) => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/users`, form, {
        withCredentials: true,
      })
      .then(() => {
        fetchUsers();
        setShowAdd(false);
      });
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setShowEdit(true);
  };

  const handleSaveEdit = (form) => {
    axios
      .patch(
        `${import.meta.env.VITE_API_URL}/users/${
          form.id || form.uuid || editUser.id
        }`,
        form,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        fetchUsers();
        setShowEdit(false);
        setEditUser(null);
      });
  };

  const handleDelete = (user) => {
    if (window.confirm(`Yakin ingin menghapus user ${user.name}?`)) {
      axios
        .delete(`${import.meta.env.VITE_API_URL}/users/${user.id}`, {
          withCredentials: true,
        })
        .then(() => fetchUsers());
    }
  };

  // Kolom dengan handler aksi
  const columnsWithAction = columns.map((col) =>
    col.accessor === "aksi"
      ? {
          ...col,
          render: (v, row, idx) =>
            col.render(v, row, idx, handleEdit, handleDelete),
        }
      : col
  );

  return (
    <AdminLayout>
      <div className="mb-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h3 className="font-bold text-2xl text-gray-800 tracking-tight">
            Halaman Data User
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto md:w-auto md:justify-end">
            <div className="relative w-full sm:w-64 md:w-72">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                <FiSearch className="w-5 h-5 text-gray-700" />
              </span>
              <input
                type="text"
                className="input input-bordered w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
                placeholder="Cari user berdasarkan nama..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-full shadow transition focus:outline-none focus:ring-2 focus:ring-green-300"
              onClick={() => setShowAdd(true)}>
              + Tambah User
            </button>
          </div>
        </div>
      </div>
      <Table columns={columnsWithAction} data={filteredUsers} />
      <AddUserModal
        open={showAdd}
        onClose={() => setShowAdd(false)}
        onSave={handleSaveAdd}
      />
      <EditUserModal
        open={showEdit}
        user={editUser}
        onClose={() => {
          setShowEdit(false);
          setEditUser(null);
        }}
        onSave={handleSaveEdit}
      />
    </AdminLayout>
  );
};

export default User;
