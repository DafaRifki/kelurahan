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
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Gunung dan Hutan"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Gunung dan Hutan</h2>
            <p className="text-gray-600">
              Menikmati keindahan alam pegunungan yang hijau dan hutan yang asri, tempat yang sempurna untuk berpetualang dan bersantai.
            </p>
          </div>
        </div>
        {/* Tambahkan gambar dan deskripsi lainnya sesuai kebutuhan */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Air Terjun"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Air Terjun Menawan</h2>
            <p className="text-gray-600">
              Rasakan segarnya suara air terjun yang mengalir deras dan suasana alami yang menenangkan jiwa.
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Gunung dan Hutan"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Gunung dan Hutan</h2>
            <p className="text-gray-600">
              Menikmati keindahan alam pegunungan yang hijau dan hutan yang asri, tempat yang sempurna untuk berpetualang dan bersantai.
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Gunung dan Hutan"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Gunung dan Hutan</h2>
            <p className="text-gray-600">
              Menikmati keindahan alam pegunungan yang hijau dan hutan yang asri, tempat yang sempurna untuk berpetualang dan bersantai.
            </p>
          </div>
        </div>
      </div>
    </div>
    </UserLayout>
  );
};

export default WisataAlam;