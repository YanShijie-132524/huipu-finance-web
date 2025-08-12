// 角色接口
import request from '@/utils/http'

export const RoleService = {
  getRoleList(params: Api.Role.RoleParams) {
    return request.get<Api.Role.RoleListData[]>({
      url: '/api/role/list',
      params
    })
  }
}
