import React from 'react';
import { useParams } from 'react-router-dom';
import UserLayout from '../components/UserLayout';

const beritaData = {
  'pelayanan-administrasi-online': {
    judul: 'Pelayanan Administrasi Online',
    tanggal: '20 Oktober 2023',
    gambar: 'https://febi.umkendari.ac.id/assets/img/img_andalan/lo2.jpg',
    isi: 'Kelurahan Melati meluncurkan layanan administrasi online untuk memudahkan warga mengurus surat-menyurat. Dengan layanan ini, warga dapat mengajukan permohonan surat, memperpanjang dokumen, dan melakukan berbagai administrasi tanpa harus datang ke kantor secara langsung.',
    detail: 'Layanan administrasi online ini memungkinkan warga untuk mengakses berbagai layanan administrasi melalui website resmi kelurahan. Fitur-fitur termasuk pendaftaran surat keterangan, pengajuan perpanjangan dokumen, cek status permohonan, dan layanan pelanggan online. Pengguna cukup mengisi formulir dan mengunggah dokumen yang diperlukan. Setelah permohonan diajukan, warga dapat memantau status secara real-time dan menerima notifikasi melalui email atau SMS.',
  },
  // Tambahkan berita lain di sini jika perlu
};

const DetailBerita = () => {
  const { slug } = useParams();
  const berita = beritaData[slug];

  if (!berita) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Berita Tidak Ditemukan</h2>
          <p className="text-gray-600 mb-6">Maaf, berita yang Anda cari tidak tersedia.</p>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
          >
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
          <img
            src={berita.gambar}
            alt={berita.judul}
            className="w-full h-64 object-cover"
          />

          {/* Judul dan Tanggal */}
          <div className="p-6 md:p-10 border-b">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{berita.judul}</h1>
            <span className="text-sm text-gray-500">{berita.tanggal}</span>
          </div>

          {/* Konten Deskripsi */}
          <div className="p-6 md:p-10 prose max-w-none text-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Deskripsi</h2>
            <p>{berita.isi}</p>
            <p className="mt-4">{berita.detail}</p>
          </div>

          {/* Tombol Kembali */}
          <div className="flex justify-center py-6 border-t">
            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition"
            >
              Kembali ke Daftar Berita
            </button>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default DetailBerita;
