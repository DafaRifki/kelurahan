import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdEditCalendar, MdPeople } from "react-icons/md";

const menu = [
  {
    label: "Dashboard",
    to: "/admin/dashboard",
    icon: <MdDashboard className="w-6 h-6 mr-3" />,
  },
  {
    label: "Pariwisata",
    to: "/admin/data-pariwisata",
    icon: <MdEditCalendar className="w-6 h-6 mr-3" />,
  },
  {
    label: "Users",
    to: "/admin/data-user",
    icon: <MdPeople className="w-6 h-6 mr-3" />,
  },
];

const getInitials = (name) => {
  if (!name) return "A";
  const words = name.trim().split(" ");
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};

const Sidebar = () => {
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userName = user?.name || "ADMIN";
  const initials = getInitials(userName);
  return (
    <aside className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white w-64 min-h-screen p-6 shadow-2xl flex flex-col">
      <div className="mb-10 flex items-center justify-center">
        <div className="bg-white rounded-full p-2 shadow-lg">
          <svg
            className="w-12 h-12 text-blue-700"
            fill="currentColor"
            viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fontSize="10"
              fontWeight="bold"
              style={{ textTransform: "uppercase" }}
              className="text-blue-300">
              {initials}
            </text>
          </svg>
        </div>
      </div>
      <ul className="space-y-2 flex-1">
        {menu.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 font-semibold
                ${
                  location.pathname === item.to
                    ? "bg-blue-300 text-blue-900 shadow-lg scale-105"
                    : "hover:bg-blue-800 hover:scale-105"
                }
              `}>
              {item.icon}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10 text-xs text-blue-200 text-center opacity-70">
        &copy; {new Date().getFullYear()} Admin Panel <br /> Powered by{" "}
        <span className="font-bold text-blue-300">React</span>
      </div>
    </aside>
  );
};

export default Sidebar;
