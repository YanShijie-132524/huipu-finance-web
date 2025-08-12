/**
 * 用户相关类型定义
 */
declare namespace Api {
  namespace Role {
    interface RoleListData {
      roleName: string
      roleCode: string
      des: string
      date: string
      enable: boolean
    }
    interface RoleParams {
      username: string
    }
  }
}
