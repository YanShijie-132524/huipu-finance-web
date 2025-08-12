import request from '@/utils/http'
import { menuDataToRouter } from '@/router/utils/menuToRouter'
import { AppRouteRecord } from '@/types/router'

interface MenuResponse {
  menuList: AppRouteRecord[]
}

// 菜单接口
export const menuService = {
  async getMenuList(): Promise<MenuResponse> {
    try {
      // 从后端获取菜单数据
      const menuList = await request.get<AppRouteRecord[]>({
        url: '/api/menu/list'
      })
      console.log('menuList', menuList)

      // 处理菜单数据
      const processedMenuList = menuList.map((route) => menuDataToRouter(route))

      return { menuList: processedMenuList }
    } catch (error) {
      throw error instanceof Error ? error : new Error('获取菜单失败')
    }
  }
}
