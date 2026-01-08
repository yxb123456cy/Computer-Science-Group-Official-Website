import type { VueElement } from 'vue'

/**
 * @description 轮播图项 首页走马灯配置
 */
export interface Revolvinglantern {
  // 轮播图标题
  title: string
  // 轮播图描述
  desc: string
  // 轮播图对应图片
  image: string
}
export interface Coreadvantage {
  // 核心优势标题
  title: string
  // 核心优势描述
  desc: string
  // 所选ArcoDesignVue icon图标名称;
  icon: string
}
export interface HomeNew {
  // 最新动态标题
  title: string
  // 最新动态日期
  date: string
  // 分类标签
  category: string
  // 最新动态内容
  content: string
}
interface Department {
  // 部门名称
  name: string
  // 部门介绍
  desc: string
  // 部门负责人
  manager: string
  // 部门负责人头像
  avatar: string
  // 所用ArcoDesignVue icon图标名称;
  icon: string
}
interface Honor {
  // 荣誉名称
  title: string
  // 荣誉图标URL链接;
  image: string
}
export interface OrganizationalBasicinfo {
  // 关于我们的内容;
  introText: string
  // 组织架构信息
  departments: Department[]
  // 荣誉列表
  honors: Honor[]
}
// 发展历程;
export interface HistoryEvent {
  // 发展历程名称
  title: string
  // 发展历程时间 (按年)
  year: string
  // 发展历程描述
  desc: string
}
