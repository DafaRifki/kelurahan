import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex">
    {/* Sidebar di kiri */}
    <Sidebar />
    {/* Konten utama di kanan */}
    <div className="flex flex-col flex-1">
      {/* Navbar di atas konten utama */}
      <Navbar />
      <main className="flex-1 p-8 overflow-y-auto bg-white rounded-tl-3xl shadow-2xl m-4">
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl p-8 min-h-[80vh] shadow-inner">
          {children}
        </div>
      </main>
    </div>
  </div>
);

export default AdminLayout;
