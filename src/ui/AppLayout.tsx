import { Layout, Input, Avatar, Dropdown, Badge, Button, Space } from "antd";
import {
  BellOutlined,
  QuestionCircleOutlined,
  MenuOutlined,
  DownOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar.tsx";

const { Header, Content } = Layout;

const userMenuItems = [
  { key: "profile", label: "Profile" },
  { key: "settings", label: "Settings" },
  { key: "logout", label: "Logout" },
];

function AppLayout() {
  const [collapsed, setCollapsed] = useState(true);

  const onUserSelect = ({ key }) => {
    console.log("Chọn User:", key);
  };

  return (
    <Layout className="min-h-screen">
      <Header className="bg-white h-[136px] shadow-sm flex items-center justify-between px-6 py-3">
        <Space size="middle" className="flex items-center">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold text-[#0088FF] mr-4">ShineWay</h1>
          </div>
        </Space>

        <Space size="middle" className="flex items-center">
          <Dropdown
            menu={{
              items: userMenuItems,
              onSelect: onUserSelect,
            }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <Space className="cursor-pointer">
              <Avatar size="large" className="bg-blue-500">
                NVA
              </Avatar>
              <div className="flex flex-col leading-tight">
                <span className="text-gray-700 font-medium">Nguyễn Văn A</span>
                <div className="bg-[#FEBC2F] w-[79px] h-[22px] rounded-2xl items-center flex justify-center text-xs text-white font-semibold">
                  Quản lí
                </div>
              </div>
            </Space>
          </Dropdown>
          <div className="border-r border-gray-300 h-[64px] ml-2"></div>
          <Button
            type="text"
            icon={<QuestionCircleOutlined className="text-lg" />}
            size="large"
            className="text-gray-700"
          />
          <Badge count={5} offset={[0, 10]} className="text-gray-700">
            <Button
              type="text"
              icon={<BellOutlined className="text-lg" />}
              size="large"
            />
          </Badge>
          <Button
            type="text"
            icon={<MenuOutlined className="text-xl" />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-700"
          />
        </Space>
      </Header>
      <Layout className="grid grid-cols-[8rem_1fr] md:grid-cols-[306px_1fr] h-[calc(100vh-64px)]">
        <Sidebar className="row-span-full" />
        <main className="overflow-y-auto p-16 pb-20">
          <Content className="max-w-screen mx-auto">
            <Outlet />
          </Content>
        </main>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
