export const userApi = {
  userList: {
    method: 'get',
    url: '/user/list',
  },
  addUser: {
    method: 'post',
    url: '/user/register',
  },
  updateUser: {
    method: 'post',
    url: '/user/update',
  },
  deleteUser: {
    method: 'post',
    url: 'user/delete',
  },
  getInfo: {
    method: 'get',
    url: '/user/getUserInfo',
  },
};
export const roleApi = {
  roleList: {
    method: 'get',
    url: 'role/list',
  },
  addRole: {
    method: 'post',
    url: '/role/add',
  },
  updateRole: {
    method: 'post',
    url: '/role/update',
  },
  deleteRole: {
    method: 'post',
    url: '/role/delete',
  },
  getInfo: {
    method: 'get',
    url: '/role/getRoleInfo',
  },
  addAuthToRole: {
    method: 'post',
    url: '/role/addAuthToRole',
  },
  authByRole: {
    method: 'get',
    url: '/role/authByRole',
  },
};
export const authApi = {
  authList: {
    method: 'get',
    url: '/authority/list',
  },
  addAuth: {
    method: 'post',
    url: '/authority/add',
  },
  updateAuth: {
    method: 'post',
    url: '/authority/update',
  },
  deleteAuth: {
    method: 'post',
    url: '/authority/delete',
  },
  authTree: {
    method: 'get',
    url: '/authority/tree',
  },
  getInfo: {
    method: 'get',
    url: '/authority/getAuthInfo',
  },
};
export const organizationApi = {
  add: {
    method: 'post',
    url: '/organization/add',
  },
  addUser: {
    method: 'post',
    url: '/organization/addUser',
  },
  update: {
    method: 'update',
    url: '/organization/update',
  },
  delete: {
    method: 'update',
    url: '/organization/delete',
  },
  info: {
    method: 'get',
    url: '/organization/getOrganizationInfo',
  },
  list: {
    method: 'get',
    url: '/organization/list',
  },
  // 组织用户树
  organizationUserTree: {
    method: 'get',
    url: '/organization/organizationUserTree',
  },
  organizationTree: {
    method: 'get',
    url: '/organization/organizationTree',
  },
};
export const categoryApi = {
  add: {
    method: 'post',
    url: '/category/add',
  },
  addUser: {
    method: 'post',
    url: '/category/add',
  },
  update: {
    method: 'update',
    url: '/category/update',
  },
  delete: {
    method: 'update',
    url: '/organization/delete',
  },
  info: {
    method: 'get',
    url: '/category/info',
  },
  list: {
    method: 'get',
    url: '/category/list',
  },
  tree: {
    method: 'get',
    url: '/category/categoryTree',
  },
};
export const tagApi = {
  add: {
    method: 'post',
    url: '/tag/add',
  },
  update: {
    method: 'update',
    url: '/tag/update',
  },
  delete: {
    method: 'delete',
    url: '/tag/delete',
  },
  info: {
    method: 'get',
    url: '/tag/info',
  },
  list: {
    method: 'get',
    url: '/tag/list',
  },
  all: {
    method: 'get',
    url: '/tag/all',
  },
};
export const postApi = {
  add: {
    method: 'post',
    url: '/post/add',
  },
  update: {
    method: 'update',
    url: '/post/update',
  },
  delete: {
    method: 'delete',
    url: '/post/delete',
  },
  info: {
    method: 'get',
    url: '/post/info',
  },
  list: {
    method: 'get',
    url: '/post/list',
  },
  reCover: {
    method: 'delete',
    url: '/post/recover',
  },
};

export const cmmentApi = {
  add: {
    method: 'post',
    url: '/comment/add',
  },
  update: {
    method: 'update',
    url: '/comment/update',
  },
  delete: {
    method: 'delete',
    url: '/comment/delete',
  },
  info: {
    method: 'get',
    url: '/comment/info',
  },
  list: {
    method: 'get',
    url: '/comment/list',
  },
};

