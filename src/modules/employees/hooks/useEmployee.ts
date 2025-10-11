import { useCallback } from "react";
import type { Employee } from "../types/employee.ts";

export const useEmployeeActions = (
    setEditingEmployee: (employee: Employee | null) => void,
    setIsModalVisible: (visible: boolean) => void
  ) => {
  const handleEdit = useCallback((record: Employee) => {
    console.log("Sửa:", record);
    setEditingEmployee(record);
    setIsModalVisible(true);
  }, [setEditingEmployee, setIsModalVisible]);

  const handleDelete = useCallback((record: Employee) => {
    console.log("Xóa:", record);
    // Thêm logic xóa tại đây (ví dụ: hiển thị xác nhận, gọi API)
  }, []);

  const handleView = useCallback((record: Employee) => {
    console.log("Xem:", record);
    // Thêm logic xem chi tiết tại đây (ví dụ: mở modal chi tiết)
  }, []);

  return { handleEdit, handleDelete, handleView };
};
