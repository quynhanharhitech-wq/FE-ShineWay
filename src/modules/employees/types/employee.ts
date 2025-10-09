export interface Employee {
  id: string;
  fullname: string;
  password: string;
  department: "chef" | "waiter";
  email: string;
  createdAt: Date;
  employeeId: string;
  salary: number;
}
