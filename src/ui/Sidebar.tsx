import React from "react";
import { Menu } from "antd";
import { TeamOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-50 row-span-full flex flex-col gap-8 border-r border-gray-200 p-8 md:min-w-72 xl:max-w-none">
      {/* Menu */}
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ border: "none", background: "transparent" }}
        items={[
          {
            key: "1",
            icon: <TeamOutlined />,
            label: <Link to="/employees">Thông tin nhân viên</Link>,
          },
          {
            key: "2",
            icon: <SettingOutlined />,
            label: <Link to="/employees/roles">Chức vụ</Link>, // Thêm route cho chức vụ, tùy chỉnh theo nhu cầu
          },
        ]}
      />
    </aside>
  );
};

export default Sidebar;
