import UserLayout from "../components/UserLayout";

const Profil = () => {
  return (
    <UserLayout>
      <section className="bg-white py-16 relative overflow-hidden">
        {/* Ornamen lingkaran dekoratif */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-100 rounded-full opacity-40 blur-2xl z-0"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-yellow-100 rounded-full opacity-30 blur-2xl z-0"></div>
        <div className="container mx-auto px-8 relative z-10">
          {/* Judul */}
          <h2 className="text-4xl font-bold mb-10 text-green-800 text-center drop-shadow-lg tracking-wide">
            Profil Lengkap Kelurahan Gunung Sari
          </h2>

          {/* Konten utama */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
            {/* Gambar Profil */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative group">
                <img
                  src="https://scontent.fcgk43-1.fna.fbcdn.net/v/t1.6435-9/65465572_2314522895454490_32412988606513152_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=y5sk9VotPJ4Q7kNvwHBGH-v&_nc_oc=Adn2canoENVTBWe3bCo-V25bHsb8mANzSId7vmL0s5n3T1Xc_Mss5EHJ4nMkUDKVHrA&_nc_zt=23&_nc_ht=scontent.fcgk43-1.fna&_nc_gid=p0F01nwpSTww118bXJzeQw&oh=00_AfMpamBXcjaoz5PeVhahZB8x5RPC8wZJNQXvBGUxJrcXcg&oe=6878EF9D"
                  alt="Profil Kelurahan Gunung Sari"
                  className="w-full rounded-3xl shadow-xl group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-4 right-4 bg-green-700/80 text-white px-4 py-2 rounded-full text-sm shadow-lg opacity-0 group-hover:opacity-100 transition">
                  Kantor Desa Gunung Sari
                </div>
              </div>
            </div>

            {/* Isi Profil */}
            <div className="w-full lg:w-1/2 bg-gray-50 p-10 rounded-3xl shadow-xl border-l-4 border-green-200">
              <h3 className="text-3xl font-semibold mb-4 text-green-700 flex items-center gap-2">
                <span className="inline-block w-2 h-8 bg-yellow-400 rounded-full mr-2"></span>
                Tentang Kelurahan Gunung Sari
              </h3>
              <ul className="mb-6 space-y-3">
                <li className="text-gray-700 text-lg leading-relaxed">
                  <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-3 align-middle"></span>
                 Desa Gunungsari merupakan salah satu desa yang terletak di Kecamatan Pamijahan Kabupaten Bogor Provinsi Jawa Barat. 
                 Desa Gunungsari berjarak sekitar 45 km atau 90 menit dari Ibukota Kabupaten Bogor. Rute menuju Desa Gunungsari dapat dilalui dengan menggunakan angkutan umum perkotaan dan kendaraan pribadi. 
                </li>
                <li className="text-gray-700 text-lg leading-relaxed">
                  <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-3 align-middle"></span>
                  Jumlah penduduk di Desa Gunungsari yaitu sebanyak 11.501 jiwa.  
                  Pengembangan Desa Wisata Lembur Anyar dimulai pada Tahun 2022.
                </li>
                <li className="text-gray-700 text-lg leading-relaxed">
                  <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-3 align-middle"></span>
                  Desa Gunungsari memiliki banyak ATTRACTION, mulai dari wisata alam (air terjun, kawah, hutan wisata, terasering pesawahan dan lain-lain), wisata budaya (kampung budaya Lembur anyar), serta wisata buatan yang sangat menarik (resort, kolam renang, dan lain-lain). 
                </li>
              </ul>
              {/* Tombol Kembali */}
              <button
                onClick={() => window.history.back()}
                className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-500 transition">
                Kembali
              </button>
            </div>
          </div>
        </div>
        <style>
          {`
          .blur-2xl {
            filter: blur(40px);
          }
        `}
        </style>
      </section>
    </UserLayout>
  );
};

export default Profil;
