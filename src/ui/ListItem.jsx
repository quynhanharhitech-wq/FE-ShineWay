import React from "react";
import { Card, Button } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

function ListItem({ title, description, time, onClick }) {
  return (
    <Card
      className="mb-4 shadow-md hover:shadow-lg transition-shadow"
      title={
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-800">{title}</span>
          <span className="text-xs text-gray-500 flex items-center">
            <ClockCircleOutlined className="mr-1" />
            {time}
          </span>
        </div>
      }
      extra={
        <Button type="link" onClick={onClick} className="text-blue-500">
          Xem chi tiết
        </Button>
      }
    >
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}

export default ListItem;
