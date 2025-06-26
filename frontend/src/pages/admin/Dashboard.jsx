import React, { useEffect, useState, useRef } from "react";
import AdminLayout from "../../components/AdminLayout";
import axios from "axios";

const Dashboard = () => {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  // User counter
  const [userCount, setUserCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const userAnimationRef = useRef();

  // Pariwisata counter
  const [pariwisataCount, setPariwisataCount] = useState(0);
  const [displayPariwisata, setDisplayPariwisata] = useState(0);
  const pariwisataAnimationRef = useRef();

  // Fetch user count
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/users`, { withCredentials: true })
      .then((res) => setUserCount(res.data.length))
      .catch(() => setUserCount(0));
  }, []);

  // Fetch pariwisata count
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/pariwisata?page=1&limit=1`)
      .then((res) => setPariwisataCount(res.data.total || 0))
      .catch(() => setPariwisataCount(0));
  }, []);

  // Animasi counter user
  useEffect(() => {
    let start = displayCount;
    let end = userCount;
    if (start === end) return;
    let duration = 700;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setDisplayCount(value);
      if (progress < 1) {
        userAnimationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayCount(end);
      }
    };

    userAnimationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(userAnimationRef.current);
    // eslint-disable-next-line
  }, [userCount]);

  // Animasi counter pariwisata
  useEffect(() => {
    let start = displayPariwisata;
    let end = pariwisataCount;
    if (start === end) return;
    let duration = 700;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setDisplayPariwisata(value);
      if (progress < 1) {
        pariwisataAnimationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayPariwisata(end);
      }
    };

    pariwisataAnimationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(pariwisataAnimationRef.current);
    // eslint-disable-next-line
  }, [pariwisataCount]);

  return (
    <AdminLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        {/* Judul Dashboard di atas */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Dashboard Admin
          </h2>
          <p className="text-gray-600">
            Selamat datang di halaman dashboard. Kelola data user dan sistem
            dengan mudah.
          </p>
        </div>
        <div className="w-full max-w-3xl flex flex-col md:flex-row gap-6">
          {/* Kartu Total User */}
          <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center border border-gray-100 transition-colors">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700 text-3xl font-extrabold shadow mb-2 transition-all duration-300">
              {displayCount}
            </span>
            <p className="font-semibold text-lg text-green-800 mb-1">
              Total User Terdaftar
            </p>
            <p className="text-gray-400 text-sm text-center">
              Jumlah seluruh user yang terdaftar di sistem.
            </p>
          </div>
          {/* Kartu Total Pariwisata */}
          <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center border border-gray-100 transition-colors">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700 text-3xl font-extrabold shadow mb-2 transition-all duration-300">
              {displayPariwisata}
            </span>
            <p className="font-semibold text-lg text-green-800 mb-1">
              Total Data Pariwisata
            </p>
            <p className="text-gray-400 text-sm text-center">
              Jumlah seluruh data pariwisata yang terdaftar.
            </p>
          </div>
          {/* Kartu Info User Login */}
          {user && (
            <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center border border-gray-100 transition-colors">
              <span
                className={
                  "inline-flex items-center justify-center w-14 h-14 rounded-full text-2xl font-bold shadow mb-2 " +
                  (user.role === "admin"
                    ? "bg-green-600 text-white"
                    : user.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-700")
                }>
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </span>
              <p className="font-semibold text-base text-green-800 mt-2">
                {user.name || user.email}
              </p>
              <p className="text-sm text-green-600">{user.email}</p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
