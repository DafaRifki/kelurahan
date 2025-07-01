import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserLayout from "../components/UserLayout";
import axios from "axios";

const DetailBerita = () => {
  const { slug } = useParams();
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/berita/${slug}`)
      .then((res) => {
        setBerita(res.data);
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-50">
        <p className="text-gray-600 text-lg">Memuat data berita...</p>
      </div>
    );
  }

  if (notFound || !berita) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Berita Tidak Ditemukan
          </h2>
          <p className="text-gray-600 mb-6">
            Maaf, berita yang Anda cari tidak tersedia.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">
            Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <UserLayout>
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Gambar Header */}
          {berita.gambar && (
            <img
              src={`${import.meta.env.VITE_API_URL}/images/${berita.gambar}`}
              alt={berita.judul}
              className="w-full h-64 object-cover"
            />
          )}

          {/* Judul dan Tanggal */}
          <div className="p-6 md:p-10 border-b">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {berita.judul}
            </h1>
            <span className="text-sm text-gray-500">
              {new Date(berita.tanggal).toLocaleDateString("id-ID")}
            </span>
          </div>

          {/* Konten Deskripsi */}
          <div className="p-6 md:p-10 prose max-w-none text-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Deskripsi</h2>
            <p>{berita.isi}</p>
          </div>

          {/* Tombol Kembali */}
          <div className="flex justify-center py-6 border-t">
            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition">
              Kembali ke Daftar Berita
            </button>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default DetailBerita;
