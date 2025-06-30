import React, { useEffect, useState } from "react";
import axios from "axios";
import UserLayout from "./UserLayout";

const KategoriPariwisata = ({ kategoriList = [], title, description }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/pariwisata`);
      const allData = res.data.data || [];

      const filtered = allData.filter((item) =>
        kategoriList.includes(item.kategori.toLowerCase())
      );

      setData(filtered);
    } catch (err) {
      console.error("Gagal mengambil data:", err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UserLayout>
      <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100 py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-green-700 mb-4">
            {title}
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Memuat data...</p>
        ) : data.length === 0 ? (
          <p className="text-center text-gray-400 italic">
            Tidak ada data ditemukan.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {data.map((item) => (
              <div
                key={item._id}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition duration-300">
                <div className="overflow-hidden h-60">
                  <img
                    src={
                      item.gambar
                        ? `${import.meta.env.VITE_API_URL}/images/${
                            item.gambar
                          }`
                        : "https://via.placeholder.com/400x300?text=No+Image"
                    }
                    alt={item.nama}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-green-700 mb-2">
                    {item.nama}
                  </h2>
                  <span className="inline-block text-sm font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full mb-2 capitalize">
                    {item.kategori}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {item.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </UserLayout>
  );
};

export default KategoriPariwisata;
