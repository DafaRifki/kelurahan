import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout";

const NotFound = () => (
  <AdminLayout>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 text-white">
      <div className="text-9xl font-extrabold tracking-widest drop-shadow-lg animate-bounce">
        404
      </div>
      <div className="bg-white px-4 py-2 rounded text-blue-700 font-bold text-lg mt-6 shadow-lg">
        Oops! Halaman tidak ditemukan
      </div>
      <p className="mt-4 text-lg text-blue-100">
        Sepertinya kamu tersesat di galaksi yang salah.
      </p>
      <svg
        className="w-32 h-32 mt-8 animate-spin-slow"
        fill="none"
        viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#fff"
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
          stroke="#fff"
          strokeWidth="4"
          strokeDasharray="5 2"
        />
      </svg>
      <Link
        to="/admin/dashboard"
        className="mt-8 px-6 py-3 bg-blue-700 hover:bg-blue-900 rounded-full text-white font-semibold shadow transition">
        Kembali ke Beranda
      </Link>
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
  </AdminLayout>
);

export default NotFound;
