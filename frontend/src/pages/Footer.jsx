const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Kelurahan Melati. Semua hak cipta dilindungi.</p>
        <p className="mt-2 text-sm">Alamat: Jl. Melati No. 123, Kota, Negara | Telp: (021) 12345678</p>
      </div>
    </footer>
  );
};

export default Footer;