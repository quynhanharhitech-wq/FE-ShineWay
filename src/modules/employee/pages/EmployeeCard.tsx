import React from "react";
import { fakeEmployees } from "../data/employee.ts";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table/InternalTable.js";
import type { Employee } from "../types/employee.ts";
import { Eye, Pencil, Trash2 } from "lucide-react";

const EmployeeCard: React.FC = () => {
  const handleEdit = (record: Employee) => {
    console.log("Edit:", record);
  };

  const handleDelete = (record: Employee) => {
    console.log("Delete:", record);
  };
  const columns: ColumnsType<Employee> = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Tên",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Chức vụ",
      dataIndex: "department",
      key: "department",
      render: (text) => (text === "chef" ? "Chef" : "Waiter"),
    },
    {
      title: "Mã chức vụ",
      dataIndex: "employeeId",
      key: "employeeId",
    },
    {
      title: "Lương",
      dataIndex: "salary",
      key: "salary",
      render: (text) => `$${text}`,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Hành Động",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleEdit(record)}
            className=" hover:text-blue-700 transition-colors"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => handleDelete(record)}
            className=" hover:text-red-700 transition-colors"
          >
            <Trash2 size={18} />
          </button>
          <button
            onClick={() => handleDelete(record)}
            className=" hover:text-red-700 transition-colors"
          >
            <Eye size={18} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={fakeEmployees}
      rowKey="id"
      components={{
        header: {
          cell: (props) => (
            <th {...props} className="!bg-[#0088FF] !text-white">
              {props.children}
            </th>
          ),
        },
      }}
    />
  );
};

export default EmployeeCard;
