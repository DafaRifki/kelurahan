import { useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const fullText = "Kelurahan Gunung Sari";
  const [typed, setTyped] = useState("");
  const [dir, setDir] = useState(1); // 1: ketik, -1: hapus
  const typingRef = useRef({ direction: 1, pause: false });

  useEffect(() => {
    let pauseTimeout = null;
    let interval = setInterval(() => {
      if (typingRef.current.pause) return;

      setTyped((prev) => {
        if (typingRef.current.direction === 1) {
          if (prev.length < fullText.length) {
            return fullText.slice(0, prev.length + 1);
          } else {
            typingRef.current.pause = true;
            pauseTimeout = setTimeout(() => {
              typingRef.current.direction = -1;
              setDir(-1);
              typingRef.current.pause = false;
            }, 1200); // jeda setelah selesai ketik
            return prev;
          }
        } else {
          if (prev.length > 0) {
            return fullText.slice(0, prev.length - 1);
          } else {
            typingRef.current.pause = true;
            pauseTimeout = setTimeout(() => {
              typingRef.current.direction = 1;
              setDir(1);
              typingRef.current.pause = false;
            }, 700); // jeda setelah selesai hapus
            return "";
          }
        }
      });
    }, 90);

    return () => {
      clearInterval(interval);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
  }, [fullText]);

  return (
    <section className="bg-green-100 py-20 relative overflow-hidden">
      {/* Ornamen lingkaran dekoratif */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-green-200 rounded-full opacity-50 z-0"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-300 rounded-full opacity-30 z-0"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-green-800 drop-shadow-lg animate-fade-in-down">
          Selamat Datang di Website Resmi <br className="hidden md:block" />
          <span
            className="text-green-700 border-r border-green-700 pr-1 align-middle animate-cursor font-extrabold"
            style={{
              borderRightWidth: "2px",
              fontFamily: "inherit", // samakan dengan h2
              fontSize: "inherit", // samakan dengan h2
              letterSpacing: "inherit",
              lineHeight: "inherit",
            }}>
            {typed}
          </span>
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl mx-auto animate-fade-in">
          Informasi lengkap, layanan publik, berita terbaru, dan pariwisata ada
          di sini.
        </p>
        <a
          href="/profil"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-500 transition text-lg animate-fade-in-up">
          Pelajari Lebih Lanjut
          <FaArrowRight />
        </a>
      </div>
      <style>
        {`
          .animate-fade-in-down {
            animation: fadeInDown 0.7s;
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.7s;
          }
          .animate-fade-in {
            animation: fadeIn 1s;
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeIn {
            from { opacity: 0;}
            to { opacity: 1;}
          }
          .animate-cursor {
            animation: blink-cursor 1s steps(2) infinite;
          }
          @keyframes blink-cursor {
            0%, 100% { border-color: transparent; }
            50% { border-color: #15803d; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
