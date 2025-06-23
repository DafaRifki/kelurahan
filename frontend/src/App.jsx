import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Login from "./components/Login";
import Dashboard from "./pages/admin/Dashboard";
import User from "./pages/admin/User";
import NotFound from "./components/NotFound";
import PariwisataSection from "./components/PariwisataSection";
import MainContent from "./components/MainContent";
import Berita from "./components/Berita";
import UserLayout from "./components/UserLayout";

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
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/data-user" element={<User />} />
        <Route path="/admin/data-pariwisata" element={<NotFound />} />
        {/* Halaman lain (opsional, jika ingin layout user) */}
        <Route path="/main" element={<MainContent />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/pariwisata" element={<PariwisataSection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
