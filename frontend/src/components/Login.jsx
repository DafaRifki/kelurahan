import React from 'react';

const Login = () => {
  return (
    <div 
    className="min-h-screen w-full bg-cover bg-no-repeat"
    style={{backgroundImage: "url('/img/bg.jpg')"}}>
      <div className='container mx-auto px-4 py-16 flex items-center justify-center relative'>
      
      {/* Form container */}
      <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-sm w-full z-10">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Login</h2>
        <form className="flex flex-col space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Masukkan email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Masukkan password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
      </div>
  );
};

export default Login;