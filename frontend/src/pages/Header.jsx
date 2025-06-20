import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const Header = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) setUser(JSON.parse(userData));
  }, []);

  // Tutup dropdown jika klik di luar
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

  return (
    <header className="fixed top-0 w-full z-50 bg-green-500 p-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center text-white">
        <div className="flex items-center space-x-2">
    <img
     src="https://i0.wp.com/barayanews.co.id/wp-content/uploads/2021/12/1-1.jpg?w=750&ssl=1" // Ganti dengan URL gambar yang kamu inginkan
     alt="Logo Kelurahan Gunung Sari"
     className="w-10 h-10 object-cover rounded-full"
   />
  <h1 className="text-xl font-bold">Kelurahan Gunung Sari</h1>
</div>

        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-6 font-semibold">
            <Link to="/">
              <li>
                <a href="#home" className="hover:underline">
                  Beranda
                </a>
              </li>
            </Link>
            <li>
              <a href="#profil" className="hover:underline">
                Profil
              </a>
            </li>
            <li>
              <a href="#berita" className="hover:underline">
                Berita
              </a>
            </li>
            <li>
              <a href="#pariwisata" className="hover:underline">
                Pariwisata
              </a>
            </li>
          </ul>
          {/* Login/Profile */}
          {!user ? (
          <Link to="/login">
              <button className="bg-green-700 text-white font-semibold px-4 py-2 rounded hover:bg-green-400 transition">
              Login
            </button>
          </Link>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-white text-green-700 font-bold rounded-full w-10 h-10 flex items-center justify-center uppercase"
                title={user.name || user.email}>
                {(user.name ? user.name[0] : user.email[0]).toUpperCase()}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-10">
                  <div className="px-4 py-2 border-b">
                    {user.name || user.email}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
