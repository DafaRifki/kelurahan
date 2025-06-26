import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  // Hilangkan state dan logic dark mode
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar di kiri */}
      <Sidebar />
      {/* Konten utama di kanan */}
      <div className="flex flex-col flex-1">
        {/* Navbar di atas konten utama */}
        <Navbar />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="rounded-2xl p-8 min-h-[80vh] shadow-md border bg-white border-gray-100">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
