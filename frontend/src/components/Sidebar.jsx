import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdMap, MdPeople} from "react-icons/md";
import { IoNewspaper } from "react-icons/io5"

const menu = [
  {
    label: "Dashboard",
    to: "/admin/dashboard",
    icon: <MdDashboard />,
  },
  {
    label: "Pariwisata",
    to: "/admin/data-pariwisata",
    icon: <MdMap />,
  },
  {
    label: "User",
    to: "/admin/data-user",
    icon: <MdPeople />,
  },
  {
    label: "Berita",
    to: "/admin/data-berita",
    icon: <IoNewspaper />,
  },
];

const getInitials = (name) => {
  if (!name) return "A";
  const words = name.trim().split(" ");
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};

const Sidebar = ({ dark }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userName = user?.name || "ADMIN";
  const initials = getInitials(userName);

  return (
    <aside
      className={`w-64 min-h-screen flex flex-col justify-between shadow-lg
        ${dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}
        border-r transition-colors duration-300`}>
      {/* User Info */}
      <div>
        <div className="flex flex-col items-center py-10">
          <div
            className={`rounded-full w-16 h-16 flex items-center justify-center shadow-md
              ${
                dark
                  ? "bg-gradient-to-br from-green-900 to-green-700"
                  : "bg-gradient-to-br from-green-200 to-green-400"
              }
            `}>
            <span
              className={`text-2xl font-bold ${
                dark ? "text-green-200" : "text-green-800"
              }`}>
              {initials}
            </span>
          </div>
          <div
            className={`mt-4 font-semibold text-base tracking-wide ${
              dark ? "text-gray-100" : "text-gray-800"
            }`}>
            {userName}
          </div>
        </div>
        {/* Menu */}
        <nav>
          <ul className="space-y-1 px-4">
            {menu.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-150 font-medium
                    ${
                      location.pathname === item.to
                        ? dark
                          ? "bg-green-900 text-green-200 shadow"
                          : "bg-green-100 text-green-800 shadow"
                        : dark
                        ? "hover:bg-gray-800 text-gray-200"
                        : "hover:bg-green-50 text-gray-700"
                    }
                  `}>
                  <span className="mr-3 text-xl flex items-center">
                    {React.cloneElement(item.icon, {
                      color:
                        location.pathname === item.to
                          ? dark
                            ? "#bbf7d0"
                            : "#15803d"
                          : dark
                          ? "#a3a3a3"
                          : "#a3a3a3",
                    })}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Footer */}
      <div
        className={`mb-4 px-4 py-2 text-center text-sm ${
          dark ? "text-gray-400" : "text-gray-500"
        }`}>
        &copy; 2023 Your Company. All rights reserved.
      </div>
    </aside>
  );
};

export default Sidebar;
