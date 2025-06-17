// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Hero from './pages/Hero';
import MainContent from './pages/MainContent';
import Berita from './pages/Berita';
import Footer from './pages/Footer';
import Login from './components/Login';

function Beranda() {
  return (
    <div className='pt-15'>
      <Hero />
      <MainContent />
      <Berita />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* Header ditampilkan di semua halaman */}
<Header />

      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<Beranda />} />

        {/* Halaman login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
