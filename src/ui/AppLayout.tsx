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

const { Header, Sider, Content } = Layout;

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
      <Layout>
        <Header className="bg-white shadow-sm flex items-center justify-between px-6 py-3">
          <Space size="middle" className="flex items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900 mr-4">
                ShineWay
              </h1>
              <Input
                placeholder="Tìm kiếm..."
                prefix={<SearchOutlined className="text-gray-400" />}
                className="w-64 rounded-full border-gray-300"
                size="middle"
              />
            </div>
          </Space>

          <Space size="middle" className="flex items-center">
            <Badge count={5} offset={[0, 10]} className="text-gray-700">
              <Button
                type="text"
                icon={<BellOutlined className="text-lg" />}
                size="large"
              />
            </Badge>

            <Button
              type="text"
              icon={<QuestionCircleOutlined className="text-lg" />}
              size="large"
              className="text-gray-700"
            />

            <Dropdown
              menu={{
                items: userMenuItems,
                onSelect: onUserSelect,
              }}
              placement="bottomRight"
              trigger={["click"]}
            >
              <Space className="cursor-pointer">
                <Avatar size="small" className="bg-blue-500">
                  NVA
                </Avatar>
                <span className="text-gray-700 font-medium">Nguyễn Văn A</span>
                <DownOutlined className="text-gray-400" />
              </Space>
            </Dropdown>

            <Button
              type="text"
              icon={<MenuOutlined className="text-xl" />}
              onClick={() => setCollapsed(!collapsed)}
              className="text-gray-700"
            />
          </Space>
        </Header>

        <Content className="p-8 bg-gray-50">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
