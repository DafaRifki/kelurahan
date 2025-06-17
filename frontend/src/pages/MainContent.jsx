import { useState, useEffect } from 'react';

const MainContent = () => {
  // Daftar gambar slideshow
  const images = [
    'https://www.liputan12.id/media/images/2025/01/116776216f6b283.jpeg?location=1&width=&height=&quality=90&fit=1',
    'https://scontent.fcgk43-1.fna.fbcdn.net/v/t1.6435-9/65465572_2314522895454490_32412988606513152_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=y5sk9VotPJ4Q7kNvwHBGH-v&_nc_oc=Adn2canoENVTBWe3bCo-V25bHsb8mANzSId7vmL0s5n3T1Xc_Mss5EHJ4nMkUDKVHrA&_nc_zt=23&_nc_ht=scontent.fcgk43-1.fna&_nc_gid=p0F01nwpSTww118bXJzeQw&oh=00_AfMpamBXcjaoz5PeVhahZB8x5RPC8wZJNQXvBGUxJrcXcg&oe=6878EF9D',
    'https://asset-2.tstatic.net/bogor/foto/bank/images/curug-seribu.jpg',
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
    <section className="pt-19 py-12 bg-white" id="profil">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">Profil Kelurahan Gunung Sari</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Konten teks */}
          <div>
            <h4 className="text-xl font-semibold mb-3 text-black">Tentang Kelurahan</h4>
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
