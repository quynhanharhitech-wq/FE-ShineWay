import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // Tùy chỉnh theme Antd nếu cần (ví dụ: màu primary)
          colorPrimary: "#3b82f6",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
