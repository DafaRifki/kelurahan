const Profil = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-8">
        {/* Judul */}
        <h2 className="text-4xl font-bold mb-8 text-green-800 text-center">
          Profil Lengkap Kelurahan Gunung Sari
        </h2>

        {/* Konten utama */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
          
          {/* Gambar Profil */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80" // Ganti gambar sesuai kebutuhan
              alt="Profil Kelurahan Gunung Sari"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Isi Profil */}
          <div className="w-full lg:w-1/2 bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4 text-green-700">Tentang Kelurahan Gunung Sari</h3>
            <p className="mb-4 text-gray-700 text-lg">
              Kelurahan Gunung Sari terletak di pusat kota, dikenal dengan kekayaan budaya dan keindahan alamnya. 
              Wilayah ini memiliki sejarah panjang dan komunitas yang ramah. Kami berkomitmen untuk memberikan layanan terbaik kepada warga dan pengunjung.
            </p>
            <p className="mb-4 text-gray-700 text-lg">
              Di sini, Anda dapat menemukan informasi lengkap mengenai layanan publik, acara komunitas, wisata, dan berbagai kegiatan lainnya yang memperkaya kehidupan masyarakat.
            </p>
            <p className="mb-4 text-gray-700 text-lg">
              Mari bergabung dan jadikan Kelurahan Gunung Sari tempat yang lebih baik untuk semua!
            </p>

            {/* Tombol Kembali */}
            <button
              onClick={() => window.history.back()}
              className="mt-4 bg-yellow-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-500 transition"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profil;