import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white px-8 py-4 flex justify-between items-center shadow-lg">
    <div className="flex items-center space-x-3">
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#fff"
          strokeWidth="2"
          fill="#2563eb"
        />
        <path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" fill="none" />
      </svg>
      <span className="font-extrabold text-2xl tracking-wide">Admin Panel</span>
    </div>
    <div className="flex items-center space-x-4">
      <button
        className="btn btn-error btn-sm rounded-full px-6 font-bold text-white shadow hover:scale-105 transition"
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}>
        Logout
      </button>
    </div>
  </nav>
);

export default Navbar;
