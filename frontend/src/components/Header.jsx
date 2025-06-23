import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";

const Header = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) setUser(JSON.parse(userData));
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    navigate("/login");
  };

  // Ambil inisial user
  const getInitial = (user) => {
    if (!user) return "";
    if (user.name) {
      const words = user.name.trim().split(" ");
      return words.length > 1
        ? (words[0][0] + words[words.length - 1][0]).toUpperCase()
        : words[0][0].toUpperCase();
    }
    if (user.email) return user.email[0].toUpperCase();
    return "";
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-green-700 via-green-500 to-green-400 p-3 shadow-xl">
      <div className="container mx-auto flex justify-between items-center text-white">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img
            src="https://i0.wp.com/barayanews.co.id/wp-content/uploads/2021/12/1-1.jpg?w=750&ssl=1"
            alt="Logo Kelurahan Gunung Sari"
            className="w-12 h-12 object-cover rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-2xl font-extrabold tracking-wide drop-shadow-lg">
            Kelurahan <span className="text-yellow-300">Gunung Sari</span>
          </h1>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Buka navigasi">
          <FaBars size={22} />
        </button>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 font-semibold text-lg">
            <li>
              <Link to="/" className="hover:text-yellow-200 transition">
                Beranda
              </Link>
            </li>
            <li>
              <a href="#profil" className="hover:text-yellow-200 transition">
                Profil
              </a>
            </li>
            <li>
              <a href="#berita" className="hover:text-yellow-200 transition">
                Berita
              </a>
            </li>
            <li>
              <a
                href="#pariwisata"
                className="hover:text-yellow-200 transition">
                Pariwisata
              </a>
            </li>
          </ul>
          {/* Login/Profile */}
          {!user ? (
            <Link to="/login">
              <button className="ml-4 bg-white text-green-700 font-bold px-5 py-2 rounded-full shadow hover:bg-yellow-200 hover:text-green-900 transition">
                Login
              </button>
            </Link>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-white text-green-700 font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 border-green-700 shadow-lg hover:bg-yellow-200 transition uppercase"
                title={user.name || user.email}>
                {getInitial(user) || <FaUserCircle />}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-44 bg-white text-green-800 rounded-xl shadow-2xl z-10 animate-fade-in">
                  <div className="px-4 py-3 border-b font-semibold flex items-center space-x-2">
                    <FaUserCircle className="text-green-600" />
                    <span>{user.name || user.email}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-3 hover:bg-green-50 rounded-b-xl transition">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>

      {/* Navigation Mobile */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/40 z-40 transition ${
          navOpen ? "block" : "hidden"
        }`}
        onClick={() => setNavOpen(false)}>
        <nav
          className="absolute top-0 right-0 w-64 h-full bg-gradient-to-b from-green-700 via-green-500 to-green-400 shadow-2xl p-8 flex flex-col gap-6"
          onClick={(e) => e.stopPropagation()}>
          <button
            className="self-end mb-6 text-white bg-white/20 hover:bg-white/30 p-2 rounded-full"
            onClick={() => setNavOpen(false)}
            aria-label="Tutup navigasi">
            ✕
          </button>
          <Link
            to="/"
            className="hover:text-yellow-200 transition"
            onClick={() => setNavOpen(false)}>
            Beranda
          </Link>
          <a
            href="#profil"
            className="hover:text-yellow-200 transition"
            onClick={() => setNavOpen(false)}>
            Profil
          </a>
          <a
            href="#berita"
            className="hover:text-yellow-200 transition"
            onClick={() => setNavOpen(false)}>
            Berita
          </a>
          <a
            href="#pariwisata"
            className="hover:text-yellow-200 transition"
            onClick={() => setNavOpen(false)}>
            Pariwisata
          </a>
          {!user ? (
            <Link to="/login" onClick={() => setNavOpen(false)}>
              <button className="mt-4 w-full bg-white text-green-700 font-bold px-5 py-2 rounded-full shadow hover:bg-yellow-200 hover:text-green-900 transition">
                Login
              </button>
            </Link>
          ) : (
            <div className="mt-4">
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  handleLogout();
                  setNavOpen(false);
                }}
                className="w-full bg-white text-green-700 font-bold px-5 py-2 rounded-full shadow hover:bg-yellow-200 hover:text-green-900 transition">
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>

      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.2s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </header>
  );
};

export default Header;
