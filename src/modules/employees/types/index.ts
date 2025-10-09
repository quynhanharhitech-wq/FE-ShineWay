export const API_ENDPOINTS = {
  GET_ALL: "/api/employee",
  CREATE: "/api/employee",
  UPDATE: (id: string) => `/api/employee/${id}`,
  DELETE: (id: string) => `/api/employee/${id}`,
  GET_BY_ID: (id: string) => `/api/employee/${id}`,
} as const;
