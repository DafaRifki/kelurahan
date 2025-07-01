import { useEffect, useState } from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Berita = () => {
  const navigate = useNavigate();
  const [beritaList, setBeritaList] = useState([]);

  useEffect(() => {
    fetchBerita();
  }, []);

  const fetchBerita = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/berita`);
      setBeritaList(res.data);
    } catch (err) {
      console.error("Gagal memuat berita:", err);
    }
  };

  return (
    <section
      id="berita"
      className="py-27 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold mb-10 text-center text-green-700 flex items-center justify-center gap-3 drop-shadow-lg">
          <FaRegNewspaper className="text-yellow-500" size={36} />
          Berita & Pengumuman
        </h3>

        {/* 3 Berita Terbaru */}
        <div className="flex flex-wrap gap-8 justify-center">
          {beritaList.slice(0, 3).map((berita, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[260px] max-w-[350px] flex flex-col group border border-blue-100">
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-600 text-white rounded-full p-3 shadow-lg group-hover:bg-yellow-500 transition">
                <FaRegNewspaper size={24} />
              </span>
              <h4 className="text-xl font-bold mb-2 text-black mt-6 text-center">
                {berita.judul}
              </h4>
              <p className="text-xs text-gray-500 mb-4 text-center">
                {new Date(berita.tanggal).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="text-gray-700 text-center line-clamp-3">
                {berita.isi?.slice(0, 100)}...
              </p>
              <div className="mt-6 flex justify-center">
                <button
                  className="px-5 py-2 rounded-full bg-green-50 text-green-500 font-semibold shadow hover:bg-green-700 hover:text-white transition"
                  onClick={() => navigate(`/berita/${berita.slug}`)}>
                  Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Berita;
