import type { Employee } from "../types/employee.ts";

export const fakeEmployees: Employee[] = [
  {
    id: "1",
    fullname: "John Doe",
    password: "pass1234",
    department: "chef",
    email: "john.doe@restaurant.com",
    createdAt: new Date("2025-10-01"),
    employeeId: "EMP001",
    salary: 50000,
  },
  {
    id: "2",
    fullname: "Jane Smith",
    password: "jane5678",
    department: "waiter",
    email: "jane.smith@restaurant.com",
    createdAt: new Date("2025-09-15"),
    employeeId: "EMP002",
    salary: 35000,
  },
  {
    id: "3",
    fullname: "Mike Johnson",
    password: "mike9101",
    department: "chef",
    email: "mike.johnson@restaurant.com",
    createdAt: new Date("2025-08-20"),
    employeeId: "EMP003",
    salary: 52000,
  },
];
