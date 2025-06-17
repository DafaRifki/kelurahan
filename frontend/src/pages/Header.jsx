// pages/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-green-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center text-white">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white text-blue-700 font-bold flex items-center justify-center rounded-full">
            K
          </div>
          <h1 className="text-xl font-bold">Kelurahan Melati</h1>
        </div>

        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-6 font-semibold">
            <Link to="/">
            {/* <button className='btn btn-link text-white hover:underline'>Beranda</button> */}
            <li><a href="#home" className="hover:underline">Beranda</a></li>
            </Link>
            <li><a href="#profil" className="hover:underline">Profil</a></li>
            <li><a href="#berita" className="hover:underline">Berita</a></li>
            <li><a href="#kontak" className="hover:underline">Kontak</a></li>
          </ul>
          {/* Tombol Login */}
          <Link to="/login">
            <button className="bg-green-700 text-white-700 font-semibold px-4 py-2 rounded hover:bg-green-400 transition">
              Login
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
