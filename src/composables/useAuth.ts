import { useRoute } from 'vue-router'
import type { AppRouteRecord } from '@/types/router'

type AuthItem = NonNullable<AppRouteRecord['meta']['authList']>[number]

/**
 * 按钮权限（前后端模式通用）
 * 用法：
 * const { hasAuth } = useAuth()
 * hasAuth('add') // 检查是否拥有新增权限
 */
export const useAuth = () => {
  const route = useRoute()

  // 后端路由 meta 配置的权限列表（例如：[{ authMark: 'add' }]）
  const backendAuthList: AuthItem[] = Array.isArray(route.meta.authList)
    ? (route.meta.authList as AuthItem[])
    : []

  /**
   * 检查是否拥有某权限标识（前后端模式通用）
   * @param auth 权限标识
   * @returns 是否有权限
   */
  const hasAuth = (auth: string): boolean => {
    // 后端模式
    return backendAuthList.some((item) => item?.authMark === auth)
  }

  return {
    hasAuth
  }
}
