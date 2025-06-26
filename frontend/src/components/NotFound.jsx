import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

const NotFound = () => {
  const navigate = useNavigate();

  // Cek role user dari localStorage
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const isAdmin = user?.role === "admin";

  const handleBack = () => {
    if (isAdmin) {
      navigate("/admin/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-blue-900">
      <div className="text-8xl md:text-9xl font-extrabold tracking-widest drop-shadow-lg mb-2">
        404
      </div>
      <div className="bg-white px-6 py-3 rounded shadow text-blue-700 font-bold text-lg mt-4 border border-blue-200">
        Oops! Halaman tidak ditemukan
      </div>
      <p className="mt-4 text-base md:text-lg text-blue-600 text-center max-w-md">
        Sepertinya kamu tersesat di galaksi yang salah.
        <br />
        Silakan kembali ke halaman utama.
      </p>
      <svg
        className="w-28 h-28 mt-8 animate-spin-slow"
        fill="none"
        viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#60a5fa"
          strokeWidth="8"
          strokeDasharray="20 10"
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke="#3b82f6"
          strokeWidth="6"
          strokeDasharray="10 5"
        />
        <circle
          cx="50"
          cy="50"
          r="15"
          stroke="#a5b4fc"
          strokeWidth="4"
          strokeDasharray="5 2"
        />
      </svg>
      <button
        onClick={handleBack}
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow transition">
        Kembali ke {isAdmin ? "Dashboard Admin" : "Beranda"}
      </button>
      <style>
        {`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}
      </style>
    </div>
  );
};

export default NotFound;
