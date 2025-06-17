import { useState, useEffect } from 'react';

const MainContent = () => {
  // Daftar gambar slideshow
  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.4&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.4&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1494526585095-c4185f1d6e65?ixlib=rb-4.0.4&auto=format&fit=crop&w=1600&q=80',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Otomatis berganti gambar setiap 3 detik
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="py-12 bg-white" id="profil">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">Profil Kelurahan Melati</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Konten teks */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Tentang Kelurahan</h4>
            <p className="mb-4 text-gray-700">
              Kelurahan Melati terletak di pusat kota, memiliki sejarah panjang dan masyarakat yang ramah. Kami berkomitmen untuk meningkatkan kesejahteraan warga dan menyediakan layanan terbaik.
            </p>
            <p className="text-gray-700">
              Fasilitas umum lengkap, pendidikan berkualitas, dan program pembangunan berkelanjutan menjadi prioritas utama kami.
            </p>
          </div>
          {/* Gambar slideshow */}
          <div className="w-full h-64 relative overflow-hidden rounded-lg">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
