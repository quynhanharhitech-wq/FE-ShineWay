import type { UserPermissions } from "../types/index.ts";

export const fakePermissions: UserPermissions = {
  menus: [
    {
      name: "Nhân sự",
      url: "/nhan-su",
      subItems: [
        {
          name: "Thông tin nhân viên",
          url: "/nhan-su/thong-tin-nhan-vien",
          permissions: { view: true, add: true, edit: true, delete: true },
        },
        {
          name: "Chức vụ",
          url: "/nhan-su/chuc-vu",
          permissions: { view: true, add: true, edit: true, delete: false },
        },
      ],
    },
    {
      name: "Kho",
      url: "/kho",
      subItems: [
        {
          name: "Phân loại",
          url: "/kho/phan-loai",
          permissions: { view: true, add: false, edit: true, delete: true },
        },
        {
          name: "Sản phẩm",
          url: "/kho/san-pham",
          permissions: { view: true, add: true, edit: true, delete: true },
        },
      ],
    },
  ],
};
