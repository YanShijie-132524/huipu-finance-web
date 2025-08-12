/**
 * 用户相关类型定义
 */
declare namespace Api {
  namespace Role {
    interface RoleListData {
      roleName: string
      status: boolean
      createBy: string
      createTime: string
      updateBy: string
      updateTime: string
      remark: string
    }
    interface RoleParams {
      roleName: string
    }
    interface Role {
      roleName: string
      createBy?: string
      createTime?: string
      updateBy?: string
      updateTime?: string
      status: string
      remark: string
    }
  }
}
