import React from "react";
import AdminLayout from "../../components/AdminLayout";

const Dashboard = () => {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold text-black mb-4">Dashboard</h2>
      {user && (
        <div className="text-blue-700 text-md font-medium mb-4">
          <p>Welcome, {user.name || user.email}</p>
          <button
            onClick={handleLogout}
            className="btn btn-error hover:bg-red-700 transition">
            Logout
          </button>
        </div>
      )}
    </AdminLayout>
  );
};

export default Dashboard;
