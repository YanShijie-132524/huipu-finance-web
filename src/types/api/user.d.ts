/**
 * 用户相关类型定义
 */
declare namespace Api {
  namespace User {
    /** 用户信息 */
    interface UserInfo {
      userId: number
      username: string
      roles: string[]
      buttons: string[]
      avatar?: string
      email?: string
      phone?: string
    }

    /** 用户列表数据 */
    interface UserListData {
      records: UserListItem[]
      current: number
      size: number
      total: number
    }

    /** 用户列表项 */
    interface UserListItem {
      id: number
      avatar: string
      createBy: string
      createTime: string
      updateBy: string
      updateTime: string
      status: '1' | '2' | '3' | '4' // 1: 在线 2: 离线 3: 异常 4: 注销
      userName: string
      userGender: string
      nickName: string
      userPhone: string
      userEmail: string
      userRoles: string[]
    }
  }
}
