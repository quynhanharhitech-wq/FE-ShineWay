import { Button, Card } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import EmployeeList from "./modules/employee/pages/EmployeeList.tsx";
import RoleList from "./modules/role/pages/RoleList.tsx";

function App() {
  return (
    <div className="min-h-screen font-sans text-2xl text-gray-700">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="employees" element={<EmployeeList />} />
            <Route path="employees/roles" element={<RoleList />} />
          </Route>

          <Route
            path="*"
            element={
              <div className="text-center p-8">404 - Không tìm thấy trang!</div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
