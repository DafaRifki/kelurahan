const Hero = () => {
  return (
    <section className=" bg-green-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-green-800">Selamat Datang di Website Resmi Kelurahan Gunung Sari</h2>
        <p className="text-lg mb-6 text-gray-700">
          Informasi lengkap, layanan publik, berita terbaru, dan pariwisata ada di sini.
        </p>
        <a href="/profil" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-500 transition">Pelajari Lebih Lanjut</a>
      </div>
    </section>
  );
};

export default Hero;