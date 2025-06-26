import {
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-gray-100 py-10 mt-12 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-extrabold text-xl mb-2 tracking-wide text-white drop-shadow">
            Kelurahan Gunung Sari
          </h4>
          <p className="text-sm flex items-center justify-center md:justify-start gap-2">
            <FaMapMarkerAlt className="inline-block text-green-300" /> 8MG8+CQG, Gn. Sari, Kec. Pamijahan, Kabupaten Bogor, Jawa Barat 16810
          </p>
          <p className="text-sm flex items-center justify-center md:justify-start gap-2 mt-1">
            <FaPhoneAlt className="inline-block text-green-300" /> (021)
            56744533
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} Kelurahan Gunung Sari. Semua hak cipta
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
