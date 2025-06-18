// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import MainContent from "./pages/MainContent";
import Berita from "./pages/Berita";
import Footer from "./pages/Footer";
import Login from "./components/Login";
import Dashboard from "./pages/admin/Dashboard";

function Beranda() {
  return (
    <>
      <Header />
      <div className="pt-15">
        <Hero />
        <MainContent />
        <Berita />
        <Footer />
      </div>
    </>
  );
}

function LoginPage() {
  return (
    <>
      <Header />
      <Login />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<Beranda />} />

        {/* Halaman login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Halaman dashboard admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
