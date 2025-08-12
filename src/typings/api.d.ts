/**
 * namespace: Api
 *
 * 所有接口相关类型定义
 * 在.vue文件使用会报错，需要在 eslint.config.mjs 中配置 globals: { Api: 'readonly' }
 * 此文件已重构为模块化结构，请在 types/api/ 目录下查看具体类型定义
 */
// 导入各个模块的类型定义
import '../types/api/common'
import '../types/api/auth'
import '../types/api/user'
import '../types/api/role'
