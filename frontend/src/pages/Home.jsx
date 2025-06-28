import UserLayout from "../components/UserLayout";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import Berita from "../components/Berita";
import PariwisataSection from "../components/PariwisataSection";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const Home = () => {
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);

  const beranda = useRef(null);
  const profilRef = useRef(null);
  const beritaRef = useRef(null);
  const pariwisataRef = useRef(null);

  useEffect(() => {
    if (location.state?.accessDeniedDashboard) {
      setShowAlert(true);
      const timer = setTimeout(() => setShowAlert(false), 3000);
      return () => clearTimeout(timer);
    }

    // Scroll ke target bagian jika ada state scrollTarget
    if (location.state?.scrollTarget) {
      const refs = {
        beranda: beranda,
        profil: profilRef,
        berita: beritaRef,
        pariwisata: pariwisataRef,
      };
      refs[location.state.scrollTarget]?.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location.state]);

  return (
    <UserLayout>
      {showAlert && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg z-50 text-lg font-bold animate-fade-in">
          Anda tidak memiliki akses ke dashboard!
        </div>
      )}
      <div ref={beranda}>
        <Hero />
      </div>
      <div ref={profilRef}>
        <MainContent />
      </div>
      <div ref={beritaRef}>
        <Berita />
      </div>
      <div ref={pariwisataRef}>
        <PariwisataSection />
      </div>
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.4s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </UserLayout>
  );
};

export default Home;