import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";

const Sidebar: React.FC = () => {
  const permissions = useSelector((state: RootState) => state.auth.permissions);
  const location = useLocation();

  if (!permissions) return null;

  const currentMenu = permissions.menus.find((menu) =>
    location.pathname.startsWith(menu.url)
  );

  if (!currentMenu) return null; // Không render sidebar nếu không ở menu chính

  return (
    <aside className="h-full bg-white p-4 border-r border-gray-200">
      <ul className="space-y-2">
        {currentMenu.subItems.map((sub) => (
          <li key={sub.name}>
            <Link
              to={sub.url}
              className={`block p-2 rounded ${
                location.pathname === sub.url
                  ? "bg-blue-100 text-blue-500 font-bold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {sub.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
