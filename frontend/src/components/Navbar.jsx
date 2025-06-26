import React from "react";

const Navbar = () => (
  <nav className="border-b border-gray-200 px-8 py-3 flex justify-between items-center shadow-sm bg-white">
    <div className="flex items-center space-x-3">
      <svg
        className="w-9 h-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#22c55e"
          strokeWidth="2"
          fill="#dcfce7"
        />
        <path d="M8 12l2 2 4-4" stroke="#22c55e" strokeWidth="2" fill="none" />
      </svg>
      <span className="font-extrabold text-2xl tracking-wide text-gray-800">
        Admin Panel
      </span>
    </div>
    <div className="flex items-center space-x-4">
      {/* Logout */}
      <button
        className="flex items-center gap-2 bg-gradient-to-r from-orange-400 to-red-600 hover:from-orange-500 hover:to-red-700 text-white font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-green-300"
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
          />
        </svg>
        <span className="font-medium">Logout</span>
      </button>
    </div>
  </nav>
);

export default Navbar;
