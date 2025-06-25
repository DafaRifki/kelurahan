import axios from "axios";
import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        { email, password },
        { withCredentials: true }
      );

      const { role, name, email: userEmail } = response.data;
      // Simpan data user ke localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({ role, name, email: userEmail || email })
      );

      if (role === "admin") {
        window.location.href = "/admin/dashboard";
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/img/bg.jpg')" }}>
      <div className="relative bg-white/90 p-8 rounded-3xl shadow-2xl max-w-sm w-full z-10 border-t-8 border-blue-400">
        {/* Ornamen lingkaran kecil */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-100 border-4 border-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg -mt-8">
          <FaUser className="text-blue-500 text-3xl" />
        </div>
        <h2 className="text-2xl font-extrabold mb-2 mt-8 text-center text-blue-700 tracking-wide">
          Login Admin
        </h2>
        <p className="text-sm text-gray-500 text-center mb-4">
          Silakan masuk untuk melanjutkan
        </p>
        {msg && (
          <div className="mb-2 text-center text-red-600 font-semibold animate-pulse">
            {msg}
          </div>
        )}
        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
                <FaUser />
              </span>
              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
                <FaLock />
              </span>
              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 mt-2">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Belum punya akun?{' '}
            <a href="/register"
              className="text-blue-500 hover:underline font-semibold"
            >
              Daftar di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
