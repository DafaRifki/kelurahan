import { FaRegNewspaper } from "react-icons/fa";

const Berita = () => {
  const beritaList = [
    {
      judul: "Pelayanan Administrasi Online",
      tanggal: "20 Oktober 2023",
      isi: "Kelurahan Melati meluncurkan layanan administrasi online untuk memudahkan warga mengurus surat-menyurat.",
    },
    {
      judul: "Program Pemberdayaan Masyarakat",
      tanggal: "15 Oktober 2023",
      isi: "Dukung program pemberdayaan ekonomi warga melalui pelatihan dan pelaksanaan UMKM.",
    },
    {
      judul: "Lomba Kebersihan Lingkungan",
      tanggal: "10 Oktober 2023",
      isi: "Ayo ikuti lomba kebersihan lingkungan antar RT untuk menciptakan lingkungan yang sehat dan asri.",
    },
  ];

  return (
    <section
      id="berita"
      className="py-27 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold mb-10 text-center text-blue-800 flex items-center justify-center gap-3 drop-shadow-lg">
          <FaRegNewspaper className="text-blue-500" size={36} />
          Berita & Pengumuman
        </h3>
        <div className="flex flex-wrap gap-8 justify-center">
          {beritaList.map((berita, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[260px] max-w-[350px] flex flex-col group border border-blue-100">
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-500 text-white rounded-full p-3 shadow-lg group-hover:bg-blue-700 transition">
                <FaRegNewspaper size={24} />
              </span>
              <h4 className="text-xl font-bold mb-2 text-blue-700 mt-6 text-center">
                {berita.judul}
              </h4>
              <p className="text-xs text-gray-500 mb-4 text-center">
                {berita.tanggal}
              </p>
              <p className="text-gray-700 text-center">{berita.isi}</p>
              <div className="mt-6 flex justify-center">
                <button className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold shadow hover:bg-blue-600 hover:text-white transition">
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
