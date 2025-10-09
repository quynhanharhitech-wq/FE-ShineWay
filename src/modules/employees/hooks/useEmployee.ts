import { useCallback } from "react";
import type { Employee } from "../types/employee.ts";

export const useEmployeeActions = () => {
  const handleEdit = useCallback((record: Employee) => {
    console.log("Sửa:", record);
    // Thêm logic sửa tại đây (ví dụ: mở modal, điều hướng đến trang sửa)
  }, []);

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
