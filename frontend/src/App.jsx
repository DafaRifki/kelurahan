import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Dashboard from "./pages/admin/Dashboard";
import User from "./pages/admin/User";
import NotFound from "./components/NotFound";
import PariwisataSection from "./components/PariwisataSection";
import MainContent from "./components/MainContent";
import Berita from "./components/Berita";
import DetailBerita from "./pages/DetailBerita";
import BeritaAdmin from "./pages/admin/Berita";
import UserLayout from "./components/UserLayout";
import BudayaLokal from "./pages/BudayaLokal";
import WisataAlam from "./pages/WisataAlam";
import Kuliner from "./pages/Kuliner";
import Register from "./components/Register";
import Profil from "./pages/Profil";
import ProtectedRoute from "./components/ProtectedRoute";
import Pariwisata from "./pages/admin/Pariwisata";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route
          path="/login"
          element={
            <UserLayout>
              <Login />
            </UserLayout>
          }
        />
        {/* Halaman admin tanpa UserLayout */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/data-user" element={<User />} />
        <Route path="/admin/data-pariwisata" element={<Pariwisata />} />
        {/* Halaman lain (opsional, jika ingin layout user) */}
        <Route path="/main" element={<MainContent />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:slug" element={<DetailBerita />} />
        <Route path="/pariwisata" element={<PariwisataSection />} />
        <Route path="/not-found" element={<NotFound />} />
        {/* Route default */}
        <Route
          path="/register"
          element={
            <UserLayout>
              <Register />
            </UserLayout>
          }
        />
        <Route path="/admin/data-berita" element={<BeritaAdmin />} />
        <Route path="/wisata-alam" element={<WisataAlam />} />
        <Route path="/kuliner" element={<Kuliner />} />
        <Route path="/budaya-lokal" element={<BudayaLokal />} />
      </Routes>
    </Router>
  );
}

export default App;
