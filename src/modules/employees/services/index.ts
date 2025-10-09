import axios, { AxiosError } from "axios";
import { API_ENDPOINTS } from "../types/index.ts";

import type { Employee } from "../types/employee.ts";

const BASE_URL = "http://localhost:3000";

// Lấy danh sách tất cả nhân viên
export const getAll = async (): Promise<Employee[]> => {
  try {
    const response = await axios.get<Employee[]>(
      `${BASE_URL}${API_ENDPOINTS.GET_ALL}`
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(
      err.response?.data?.message || "Lỗi khi lấy danh sách nhân viên"
    );
  }
};

// Tạo nhân viên mới
export const createEmployee = async (employee: Employee): Promise<Employee> => {
  try {
    const response = await axios.post<Employee>(
      `${BASE_URL}${API_ENDPOINTS.CREATE}`,
      employee
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.response?.data?.message || "Lỗi khi tạo nhân viên");
  }
};

// Cập nhật nhân viên
export const updateEmployee = async (
  id: string,
  employee: Employee
): Promise<Employee> => {
  try {
    const response = await axios.put<Employee>(
      `${BASE_URL}${API_ENDPOINTS.UPDATE(id)}`,
      employee
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(
      err.response?.data?.message || "Lỗi khi cập nhật nhân viên"
    );
  }
};

// Xóa nhân viên
export const deleteEmployee = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}${API_ENDPOINTS.DELETE(id)}`);
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.response?.data?.message || "Lỗi khi xóa nhân viên");
  }
};

// Lấy thông tin một nhân viên
export const getEmployee = async (id: string): Promise<Employee> => {
  try {
    const response = await axios.get<Employee>(
      `${BASE_URL}${API_ENDPOINTS.GET_BY_ID(id)}`
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.response?.data?.message || "Lỗi khi xem nhân viên");
  }
};
