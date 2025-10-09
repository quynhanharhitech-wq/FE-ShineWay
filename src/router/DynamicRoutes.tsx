import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";
import Login from "../pages/Login.tsx";
import EmployeeInfoPage from "../modules/employees/pages/EmployeeList.tsx";
import PositionPage from "../modules/roles/pages/RoleList.tsx";
import AppLayout from "../ui/AppLayout.tsx";
import Menu from "../components/Menu.tsx";
// import CategoryPage from '../pages/CategoryPage';
// import ProductPage from '../pages/ProductPage';

const HomePage: React.FC = () => (
  <div>
    <Menu />
  </div>
);

const pageMap: { [key: string]: React.FC } = {
  "/nhan-su/thong-tin-nhan-vien": EmployeeInfoPage,
  "/nhan-su/chuc-vu": PositionPage,
  //   '/kho/phan-loai': CategoryPage,
  //   '/kho/san-pham': ProductPage,
};

const DynamicRoutes: React.FC = () => {
  const permissions = useSelector((state: RootState) => state.auth.permissions);
  console.log("DynamicRoutes - Permissions:", permissions); // Debug để kiểm tra

  if (!permissions) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route element={<AppLayout />}>
        {" "}
        {/* AppLayout wrap tất cả routes sau login */}
        <Route path="/" element={<HomePage />} />{" "}
        {/* Home chỉ Header + Menu, không sidebar */}
        {permissions.menus.map((menu) => (
          <Route
            key={menu.url}
            path={menu.url}
            element={<Navigate to={menu.subItems[0]?.url || "/"} replace />}
          />
        ))}
        {permissions.menus.flatMap((menu) =>
          menu.subItems.map((sub) => {
            const PageComponent = pageMap[sub.url];
            if (!PageComponent) {
              console.warn(`No component for sub URL: ${sub.url}`); // Debug missing
              return null;
            }
            return (
              <Route key={sub.url} path={sub.url} element={<PageComponent />} />
            );
          })
        )}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default DynamicRoutes;
