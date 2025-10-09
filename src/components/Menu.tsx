import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";

const Menu: React.FC = () => {
  const permissions = useSelector((state: RootState) => state.auth.permissions);

  if (!permissions) return null;

  return (
    <nav className="flex space-x-4">
      {permissions.menus.map((menu) => (
        <Link
          key={menu.name}
          to={menu.url}
          className="text-gray-700 hover:text-blue-500"
        >
          {menu.name}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
