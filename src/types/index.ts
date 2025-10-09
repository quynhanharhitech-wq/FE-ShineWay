export interface PermissionItem {
  name: string;
  url: string;
  permissions: {
    view: boolean;
    add: boolean;
    edit: boolean;
    delete: boolean;
  };
}

export interface MenuItem {
  name: string;
  url: string;
  subItems: PermissionItem[];
}

export interface UserPermissions {
  menus: MenuItem[];
}
