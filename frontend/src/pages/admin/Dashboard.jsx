import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Ambil data user dari localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    // Hapus data user dari localStorage
    localStorage.removeItem("user");
    setUser(null);
    // Redirect ke halaman utama
    window.location.href = "/";
  };

  return (
    <div className="py-20 px-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {user && (
        <div>
          <p>Welcome, {user.name || user.email}</p>
          <button
            onClick={handleLogout}
            className="btn btn-error hover:bg-red-700 transition">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
