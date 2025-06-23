import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-gray-100 py-10 mt-12 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-extrabold text-xl mb-2 tracking-wide text-white drop-shadow">
            Kelurahan Melati
          </h4>
          <p className="text-sm flex items-center justify-center md:justify-start gap-2">
            <FaMapMarkerAlt className="inline-block text-green-300" /> Jl.
            Melati No. 123, Kota, Negara
          </p>
          <p className="text-sm flex items-center justify-center md:justify-start gap-2 mt-1">
            <FaPhoneAlt className="inline-block text-green-300" /> (021)
            12345678
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-4 mb-2">
            <a
              href="#"
              className="bg-white/10 hover:bg-green-500 p-2 rounded-full transition"
              aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-green-500 p-2 rounded-full transition"
              aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} Kelurahan Melati. Semua hak cipta
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
