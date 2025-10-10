import React, { useState } from "react";
import { Modal, Form, Input, Select, InputNumber, Button } from "antd";
import type { Employee } from "../types/employee.ts";

const { Option } = Select;

interface AddEmployeeModalProps {
  visible: boolean;
  onCancel: () => void;
  onAdd: (employee: Employee) => void;
}

const AddEmployeeModal: React.FC<AddEmployeeModalProps> = ({
  visible,
  onCancel,
  onAdd,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const newEmployee: Employee = {
      id: Date.now().toString(),
      fullname: values.fullname,
      password: values.password,
      department: values.department,
      email: values.email,
      createdAt: new Date(),
      employeeId: `EMP${(Math.floor(Math.random() * 1000) + 1)
        .toString()
        .padStart(3, "0")}`,
      salary: values.salary,
      status: "active", 
      recentActivities: [],
      dateOfBirth: "",
      gender: "Nam",      
      address: "",
      phone: "",
    };
    console.log("Data Employêe:", newEmployee);
    onAdd(newEmployee);
    form.resetFields();
  };

  return (
    <Modal
      title="Thêm nhân viên mới"
      visible={visible}
      onOk={() => form.submit()}
      onCancel={onCancel}
      okText="Thêm"
      cancelText="Hủy"
    >
      <Form
        form={form}
        name="addEmployee"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="fullname"
          label="Tên"
          rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Mật khẩu"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="department"
          label="Chức vụ"
          rules={[{ required: true, message: "Vui lòng chọn chức vụ!" }]}
        >
          <Select placeholder="Chọn chức vụ">
            <Option value="chef">Chef</Option>
            <Option value="waiter">Waiter</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="salary"
          label="Lương"
          rules={[{ required: true, message: "Vui lòng nhập lương!" }]}
        >
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddEmployeeModal;
