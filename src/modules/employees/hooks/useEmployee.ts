import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Employee } from '../types/employee.ts';

export const useEmployeeActions = () => {
   const navigate = useNavigate();

   const handleEdit = useCallback((record: Employee) => {
      console.log('Sửa:', record);
      // Thêm logic sửa tại đây (ví dụ: mở modal, điều hướng đến trang sửa)
   }, []);

   const handleDelete = useCallback((record: Employee) => {
      console.log('Xóa:', record);
      // Thêm logic xóa tại đây (ví dụ: hiển thị xác nhận, gọi API)
   }, []);

   const handleView = useCallback((record: Employee) => {
      console.log('Xem:', record);
      // Điều hướng đến trang chi tiết: /nhan-su/thong-tin-nhan-vien/{id}
      navigate(`/nhan-su/thong-tin-nhan-vien/${record.employeeId}`);
   }, []);

   const handleSave = useCallback((record: Employee) => {
      console.log('Save:', record);
   }, []);

   return { handleEdit, handleDelete, handleView, handleSave };
};
