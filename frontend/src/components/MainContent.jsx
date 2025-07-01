import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MainContent = () => {
  // Daftar gambar slideshow
  const images = [
    "https://www.liputan12.id/media/images/2025/01/116776216f6b283.jpeg?location=1&width=&height=&quality=90&fit=1",
    "https://scontent.fcgk43-1.fna.fbcdn.net/v/t1.6435-9/65465572_2314522895454490_32412988606513152_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=y5sk9VotPJ4Q7kNvwHBGH-v&_nc_oc=Adn2canoENVTBWe3bCo-V25bHsb8mANzSId7vmL0s5n3T1Xc_Mss5EHJ4nMkUDKVHrA&_nc_zt=23&_nc_ht=scontent.fcgk43-1.fna&_nc_gid=p0F01nwpSTww118bXJzeQw&oh=00_AfMpamBXcjaoz5PeVhahZB8x5RPC8wZJNQXvBGUxJrcXcg&oe=6878EF9D",
    "https://asset-2.tstatic.net/bogor/foto/bank/images/curug-seribu.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Otomatis berganti gambar setiap 3 detik
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, [images.length]);

  // Navigasi manual
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);

  return (
    <section
      className="pt-24 py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100"
      id="profil">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold mb-10 text-center text-yellow-600 drop-shadow-lg">
          Profil <span className="text-yellow-400">Kelurahan Gunung Sari</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Konten teks */}
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-green-700 flex items-center gap-2">
              <span className="inline-block w-2 h-8 bg-yellow-400 rounded-full mr-2"></span>
              Tentang Kelurahan
            </h4>
            <p className="mb-4 text-gray-700 text-lg leading-relaxed">
              Gunung Sari adalah sebuah desa yang terletak di Kecamatan
              Pamijahan, Kabupaten Bogor. Desa ini dikenal dengan keindahan
              alamnya yang asri dan suasana yang tenang, cocok buat yang ingin
              menikmati suasana pedesaan dan udara segar.
            </p>
            <ul className="mb-4 pl-5 list-disc text-gray-700 text-base">
              <li>Fasilitas umum lengkap</li>
              <li>Pendidikan berkualitas</li>
              <li>Program pembangunan berkelanjutan</li>
            </ul>
          </div>
          {/* Gambar slideshow */}
          <div className="w-full h-72 relative overflow-hidden rounded-3xl shadow-xl group">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 rounded-3xl
                  ${
                    index === currentSlide
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-105 z-0"
                  }`}
                style={{ transitionProperty: "opacity, transform" }}
              />
            ))}
            {/* Navigasi manual */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-blue-200 text-blue-700 p-2 rounded-full shadow-lg transition z-20 opacity-0 group-hover:opacity-100"
              aria-label="Sebelumnya">
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-blue-200 text-blue-700 p-2 rounded-full shadow-lg transition z-20 opacity-0 group-hover:opacity-100"
              aria-label="Selanjutnya">
              <FaChevronRight size={20} />
            </button>
            {/* Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full border-2 border-white shadow transition-all duration-300
                    ${
                      idx === currentSlide
                        ? "bg-blue-600 scale-125"
                        : "bg-white bg-opacity-60"
                    }`}
                  onClick={() => setCurrentSlide(idx)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
