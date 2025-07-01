import React, { useEffect, useState, useRef } from "react";
import AdminLayout from "../../components/AdminLayout";
import axios from "axios";
import { FiUsers, FiMapPin, FiFileText } from "react-icons/fi";

const Dashboard = () => {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  // State counters
  const [userCount, setUserCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [pariwisataCount, setPariwisataCount] = useState(0);
  const [displayPariwisata, setDisplayPariwisata] = useState(0);
  const [beritaCount, setBeritaCount] = useState(0);
  const [displayBerita, setDisplayBerita] = useState(0);

  const userRef = useRef();
  const pariwisataRef = useRef();
  const beritaRef = useRef();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/users`, { withCredentials: true })
      .then((res) => setUserCount(res.data.length))
      .catch(() => setUserCount(0));

    axios
      .get(`${import.meta.env.VITE_API_URL}/pariwisata?page=1&limit=1`)
      .then((res) => setPariwisataCount(res.data.total || 0))
      .catch(() => setPariwisataCount(0));

    axios
      .get(`${import.meta.env.VITE_API_URL}/berita`)
      .then((res) => setBeritaCount(res.data.length))
      .catch(() => setBeritaCount(0));
  }, []);

  const animateCount = (start, end, setter, ref) => {
    const duration = 700;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setter(value);
      if (progress < 1) ref.current = requestAnimationFrame(animate);
    };

    ref.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(ref.current);
  };

  useEffect(
    () => animateCount(displayCount, userCount, setDisplayCount, userRef),
    [userCount]
  );
  useEffect(
    () =>
      animateCount(
        displayPariwisata,
        pariwisataCount,
        setDisplayPariwisata,
        pariwisataRef
      ),
    [pariwisataCount]
  );
  useEffect(
    () => animateCount(displayBerita, beritaCount, setDisplayBerita, beritaRef),
    [beritaCount]
  );

  return (
    <AdminLayout>
      <div className="py-10 px-4 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-2">
            Dashboard Admin
          </h2>
          <p className="text-gray-500">
            Kelola data pengguna, pariwisata, dan berita dengan mudah.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 - User */}
          <div className="bg-white rounded-xl shadow-md border p-6 flex items-center gap-4 hover:shadow-lg transition">
            <div className="bg-green-100 text-green-600 p-4 rounded-full">
              <FiUsers className="text-2xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total User</p>
              <h3 className="text-2xl font-bold text-green-700">
                {displayCount}
              </h3>
            </div>
          </div>

          {/* Card 2 - Pariwisata */}
          <div className="bg-white rounded-xl shadow-md border p-6 flex items-center gap-4 hover:shadow-lg transition">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
              <FiMapPin className="text-2xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Pariwisata</p>
              <h3 className="text-2xl font-bold text-blue-700">
                {displayPariwisata}
              </h3>
            </div>
          </div>

          {/* Card 3 - Berita */}
          <div className="bg-white rounded-xl shadow-md border p-6 flex items-center gap-4 hover:shadow-lg transition">
            <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full">
              <FiFileText className="text-2xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Berita</p>
              <h3 className="text-2xl font-bold text-yellow-700">
                {displayBerita}
              </h3>
            </div>
          </div>
        </div>

        {/* Info login user */}
        {user && (
          <div className="mt-10 max-w-xl mx-auto bg-white border shadow-md rounded-xl p-6 flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full font-bold text-white text-xl shadow-lg bg-gradient-to-br from-green-500 to-green-700">
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
            <div>
              <p className="text-green-800 font-semibold">
                {user.name || user.email}
              </p>
              <p className="text-sm text-gray-500">{user.email}</p>
              <span className="inline-block mt-1 text-xs text-white bg-green-600 rounded-full px-3 py-0.5 capitalize">
                {user.role}
              </span>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
