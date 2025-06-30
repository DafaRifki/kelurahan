import React from 'react';
import UserLayout from '../components/UserLayout';

const WisataAlam = () => {
  return (
    <UserLayout>
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-green-800">
        Wisata Alam
      </h1>
      <p className="max-w-3xl mx-auto text-center mb-8 text-gray-700">
        Jelajahi keindahan alam pegunungan dan hutan yang memikat hati pengunjung. Nikmati panorama yang menakjubkan dan pengalaman tak terlupakan saat berkunjung ke destinasi wisata alam terbaik.
      </p>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Contoh gambar dan deskripsi */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://jadesta.kemenparekraf.go.id/imgpost/137907.jpg"
            alt="Gunung dan Hutan"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Air Terjun Cigamea</h2>
            <p className="text-gray-600">
              Curug Cigamea merupakan salah satu air terjun terindah di daerah tersebut. Perjalanan dimulai dari titik awal trekking yang terletak di tengah-tengah keindahan alam pegunungan yang hijau dan mempesona. Rute trekking ini membawa pengunjung melalui jalan setapak yang terbentang di antara pepohonan rimbun, dengan sungai yang mengalir di sampingnya.
            </p>
          </div>
        </div>
        {/* Tambahkan gambar dan deskripsi lainnya sesuai kebutuhan */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://jadesta.kemenparekraf.go.id/imgpost/137908.jpg"
            alt="Air Terjun"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Air Terjun Curug Seribu</h2>
            <p className="text-gray-600">
              Curug Seribu di Desa Wisata Gunungsari adalah petualangan yang memukau di tengah keindahan alam Jawa Barat. Jalur trekking menantang melewati hutan yang rimbun dan sungai-sungai yang mengalir jernih. Setiap langkah membawa pengunjung lebih dekat pada keajaiban alam.
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p3/27/2024/04/22/WhatsApp-Image-2024-04-22-at-093859-2274225440.jpeg"
            alt="Gunung dan Hutan"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Kawah Ratu</h2>
            <p className="text-gray-600">
              Kawah Ratu bekas letusan Gunung Salak berada di ketinggian 1.437 mdpl dengan luas sekitar dua hektar, 
              merupakan kawah aktif mengandung gas belerang. Kawah Ratu salah satu destinasi wisata alam untuk pendakian serta camping, rute menuju puncaknya cukup mudah dilalui pemula.
              </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://klikbmi.com/wp-content/uploads/2025/05/IMG-20250515-WA0041-1024x768.jpg"
            alt="Gunung dan Hutan"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Bukit Manik</h2>
            <p className="text-gray-600">
              Berlokasi di kawasan Pamijahan, Kabupaten Bogor, Bukit Manik Indonesia menawarkan pengalaman menyegarkan jauh dari hiruk-pikuk kota.Menikmati keindahan alam pegunungan yang hijau dan hutan yang asri, tempat yang sempurna untuk berpetualang dan bersantai.
            </p>
          </div>
        </div>
      </div>
    </div>
    </UserLayout>
  );
};

export default WisataAlam;