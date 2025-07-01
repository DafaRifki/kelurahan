import React, { useEffect, useState } from "react";

const EditUserModal = ({ open, onClose, onSave, user, loading }) => {
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
        uuid: user.uuid || "", // optional, used for patch
      });
    }
  }, [user, open]);

  const isFormValid =
    form.name && form.email && form.role && form.password === form.confPassword;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  if (!open) return null;

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
              className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800"
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
              className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800"
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
              className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800"
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
                }`}>
                {form.role}
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800"
                placeholder="Opsional"
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
                className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-green-500 text-gray-800"
                placeholder="Opsional"
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
              onClick={onClose}
              disabled={loading}>
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
              disabled={!isFormValid || loading}>
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
