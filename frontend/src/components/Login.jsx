import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        { email, password },
        { withCredentials: true }
      );

      const { role, name, email: userEmail } = response.data;
      // Simpan data user ke localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({ role, name, email: userEmail || email })
      );

      if (role === "admin") {
        window.location.href = "/admin/dashboard";
      } else {
        window.location.href = "/";
      }
      // setMsg("Login berhasil!");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/img/bg.jpg')" }}>
      <div className="container mx-auto px-4 pt-35 py-16 flex items-center justify-center relative">
        {/* Form container */}
        <div className="relative bg-white bg-opacity-90 p-7 rounded-lg shadow-lg max-w-sm w-full z-10">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Login
          </h2>
          {msg && <div className="mb-2 text-center text-red-600">{msg}</div>}
          <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
