import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  // Jika belum login atau bukan admin, redirect ke halaman utama
  if (!user || user.role !== "admin") {
    return <Navigate to="/" state={{ accessDeniedDashboard: true }} replace />;
  }

  return children;
};

export default ProtectedRoute;
