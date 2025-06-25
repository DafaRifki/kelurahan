import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="w-full text-black max-w-md p-8 bg-white rounded-lg shadow-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Daftar Akun Baru</h2>
      <form className="space-y-4">
        {/* Nama */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">Nama</label>
          <input
            id="name"
            type="text"
            placeholder="Masukkan nama lengkap"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Email */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Masukkan email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Password */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Masukkan password"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Tombol submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Daftar
        </button>
      </form>
      {/* Link ke login */}
      <p className="mt-4 text-center text-sm text-gray-600">
        Sudah punya akun?{' '}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login di sini
        </Link>
      </p>
    </div>
  );
}

export default Register;