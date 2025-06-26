import React, { useState, useEffect } from "react";

const EditUserModal = ({ open, user, onClose, onSave }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    confPassword: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        role: user.role || "",
        password: "",
        confPassword: "",
      });
    }
  }, [user, open]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validasi: nama, email, role wajib. Password & confPassword opsional (jika salah satu diisi, keduanya wajib dan harus sama)
  const isFormValid =
    form.name &&
    form.email &&
    form.role &&
    ((form.password === "" && form.confPassword === "") ||
      (form.password &&
        form.confPassword &&
        form.password === form.confPassword));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...user, ...form });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center tracking-tight">
          Edit User
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Nama
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800 placeholder-gray-400"
              required
              autoFocus
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800 placeholder-gray-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Role
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800 placeholder-gray-400"
              required>
              <option value="">Pilih Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            {form.role && (
              <span
                className={`badge badge-lg mt-2 px-4 py-2 font-semibold capitalize
        ${
          form.role === "admin"
            ? "badge-success text-white"
            : form.role === "user"
            ? "badge-info text-white"
            : "badge-ghost"
        }
      `}>
                {form.role}
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Password (opsional)
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800 placeholder-gray-400"
                placeholder="Kosongkan jika tidak ingin mengubah"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Konfirmasi Password
              </label>
              <input
                type="password"
                name="confPassword"
                value={form.confPassword}
                onChange={handleChange}
                className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800 placeholder-gray-400"
                placeholder="Kosongkan jika tidak ingin mengubah"
              />
            </div>
          </div>
          {form.password &&
            form.confPassword &&
            form.password !== form.confPassword && (
              <div className="text-sm text-red-500 font-medium">
                Password dan konfirmasi password tidak sama.
              </div>
            )}
          <div className="flex justify-end gap-3 mt-8">
            <button
              type="button"
              className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold shadow transition"
              onClick={onClose}>
              Batal
            </button>
            <button
              type="submit"
              className={`px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold shadow transition
                ${
                  !isFormValid
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:from-green-600 hover:to-green-800"
                }`}
              disabled={!isFormValid}>
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
