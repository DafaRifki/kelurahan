const Berita = () => {
  const beritaList = [
    {
      judul: "Pelayanan Administrasi Online",
      tanggal: "20 Oktober 2023",
      isi: "Kelurahan Melati meluncurkan layanan administrasi online untuk memudahkan warga mengurus surat-menyurat."
    },
    {
      judul: "Program Pemberdayaan Masyarakat",
      tanggal: "15 Oktober 2023",
      isi: "Dukung program pemberdayaan ekonomi warga melalui pelatihan dan pelaksanaan UMKM."
    },
    {
      judul: "Program Pemberdayaan Masyarakat",
      tanggal: "15 Oktober 2023",
      isi: "Dukung program pemberdayaan ekonomi warga melalui pelatihan dan pelaksanaan UMKM."
    }
  ];

  return (
    <section id="berita" className="py-25 pt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">Berita dan Pengumuman</h3>
        {/* Gunakan flex container untuk kartu */}
        <div className="flex flex-wrap gap-4 justify-center">
          {beritaList.map((berita, index) => (
            <div
              key={index}
              className="flex-1 min-w-[250px] max-w-[400px] bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-blue-700">{berita.judul}</h4>
              <p className="text-sm text-gray-500 mb-4">{berita.tanggal}</p>
              <p className="text-gray-700">{berita.isi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Berita;