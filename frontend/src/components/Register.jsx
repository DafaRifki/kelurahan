import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confPassword) {
      setMsg("Password dan konfirmasi tidak cocok.");
      return;
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/users`,
        {
          name,
          email,
          password,
          confPassword,
          role: "user",
        },
        { withCredentials: true }
      );

      setMsg("Register berhasil, silakan login.");
      setTimeout(() => navigate("/login"), 1200);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      } else {
        setMsg("Terjadi kesalahan.");
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/img/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Transparan */}
      <div className="absolute inset-0" />

      {/* Konten Form Register */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="relative bg-white/90 p-8 rounded-3xl shadow-2xl max-w-sm w-full border-t-8 border-blue-400">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-100 border-4 border-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg -mt-8">
            <FaUser className="text-blue-500 text-3xl" />
          </div>
          <h2 className="text-2xl font-extrabold mb-2 mt-8 text-center text-blue-700 tracking-wide">
            Daftar Akun Baru
          </h2>
          <p className="text-sm text-gray-500 text-center mb-4">
            Silakan isi data untuk mendaftar
          </p>
          {msg && (
            <div className="mb-2 text-center text-red-600 font-semibold animate-pulse">
              {msg}
            </div>
          )}
          <form className="flex flex-col space-y-4" onSubmit={handleRegister}>
            <div>
              <label className="block mb-1 text-gray-700 font-semibold">
                Nama
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
                  <FaUser />
                </span>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-semibold">
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  placeholder="Masukkan email"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
            <div>
              <label className="block mb-1 text-gray-700 font-semibold">
                Konfirmasi Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
                  <FaLock />
                </span>
                <input
                  type="password"
                  placeholder="Konfirmasi password"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 mt-2">
              Daftar
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:underline font-semibold">
                Login di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
