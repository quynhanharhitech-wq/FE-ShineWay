import { Button, Card } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";

function App() {
  return (
    <div className="min-h-screen font-sans text-2xl text-gray-700">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
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
