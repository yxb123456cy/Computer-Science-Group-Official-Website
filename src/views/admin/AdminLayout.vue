<script setup lang="ts">
import {
  IconApps,
  IconBarChart,
  IconCaretRight,
  IconDashboard,
  IconHome,
  IconMenuFold,
  IconMenuUnfold,
  IconNotification,
  IconSearch,
  IconSettings,
  IconUser,
} from '@arco-design/web-vue/es/icon'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const collapsed = ref(false)
const openKeys = ref<string[]>(['admin-site'])
const selectedKeys = computed(() => {
  const name = route.name as string | undefined
  if (!name)
    return []
  return [name]
})

function handleMenuClick(key: string) {
  router.push({ name: key })
}

function goLogin() {
  router.push('/admin/login')
}
</script>

<template>
  <a-layout class="admin-layout">
    <a-layout-sider
      class="admin-sider"
      :collapsed="collapsed"
      collapsible
      :collapsed-width="64"
      :width="248"
      breakpoint="xl"
      @collapse="collapsed = $event"
    >
      <div class="sider-brand" @click="handleMenuClick('admin-home')">
        <div class="brand-icon">
          <IconApps />
        </div>
        <div v-if="!collapsed" class="brand-text">
          <div class="brand-title">
            后台管理
          </div>
          <div class="brand-sub">
            Official Website Console
          </div>
        </div>
      </div>

      <a-menu
        v-model:open-keys="openKeys"
        class="admin-menu"
        :selected-keys="selectedKeys"
        @menu-item-click="handleMenuClick"
      >
        <a-menu-item key="admin-home">
          <template #icon>
            <IconHome />
          </template>
          首页
        </a-menu-item>

        <a-sub-menu key="admin-site">
          <template #icon>
            <IconSettings />
          </template>
          <template #title>
            官网前台管理
          </template>

          <a-menu-item key="admin-site-home">
            <template #icon>
              <IconDashboard />
            </template>
            首页设置
          </a-menu-item>
          <a-menu-item key="admin-site-about">
            <template #icon>
              <IconUser />
            </template>
            关于我们设置
          </a-menu-item>
          <a-menu-item key="admin-site-activities">
            <template #icon>
              <IconCaretRight />
            </template>
            核心活动设置
          </a-menu-item>
          <a-menu-item key="admin-site-projects">
            <template #icon>
              <IconDashboard />
            </template>
            项目成功设置
          </a-menu-item>
          <a-menu-item key="admin-site-members">
            <template #icon>
              <IconUser />
            </template>
            成员风采设置
          </a-menu-item>
          <a-menu-item key="admin-site-join">
            <template #icon>
              <IconCaretRight />
            </template>
            加入我们设置
          </a-menu-item>
          <a-menu-item key="admin-site-resources">
            <template #icon>
              <IconApps />
            </template>
            资源导航设置
          </a-menu-item>
          <a-menu-item key="admin-site-competition">
            <template #icon>
              <IconDashboard />
            </template>
            竞赛大全设置
          </a-menu-item>
          <a-menu-item key="admin-site-contact">
            <template #icon>
              <IconUser />
            </template>
            联系我们设置
          </a-menu-item>
        </a-sub-menu>

        <a-menu-item key="admin-analytics">
          <template #icon>
            <IconBarChart />
          </template>
          数据分析
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout class="admin-main">
      <a-layout-header class="admin-header">
        <div class="header-left">
          <a-button type="text" class="collapse-btn" @click="collapsed = !collapsed">
            <template #icon>
              <IconMenuUnfold v-if="collapsed" />
              <IconMenuFold v-else />
            </template>
          </a-button>

          <div class="breadcrumb">
            <a-breadcrumb>
              <a-breadcrumb-item>后台</a-breadcrumb-item>
              <a-breadcrumb-item>{{ route.meta?.title || '控制台' }}</a-breadcrumb-item>
            </a-breadcrumb>
          </div>

          <a-tag color="arcoblue" class="env-tag">
            Production Ready
          </a-tag>
        </div>

        <div class="header-center">
          <a-input
            class="global-search"
            placeholder="搜索菜单 / 页面"
            allow-clear
          >
            <template #prefix>
              <IconSearch />
            </template>
          </a-input>
        </div>

        <div class="header-right">
          <a-tooltip content="通知">
            <a-button type="text" class="icon-btn">
              <template #icon>
                <a-badge :count="3" dot>
                  <IconNotification />
                </a-badge>
              </template>
            </a-button>
          </a-tooltip>

          <a-dropdown>
            <a-button type="text" class="user-btn">
              <template #icon>
                <IconUser />
              </template>
              <span class="user-name">Admin</span>
            </a-button>
            <template #content>
              <a-doption>
                <template #icon>
                  <IconSettings />
                </template>
                个人设置
              </a-doption>
              <a-doption @click="goLogin">
                <template #icon>
                  <IconCaretRight />
                </template>
                退出登录
              </a-doption>
            </template>
          </a-dropdown>
        </div>
      </a-layout-header>

      <a-layout-content class="admin-content">
        <RouterView />
      </a-layout-content>

      <a-layout-footer class="admin-footer">
        <div class="footer-left">
          © 2026 南昌航空大学科技学院-计算机科技小组
        </div>
        <div class="footer-right">
          Admin Console v1.0.0
        </div>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="less">
.admin-layout {
  min-height: 100vh;
  background: var(--color-fill-2);
}

.admin-sider {
  border-right: 1px solid var(--color-border-2);
  background: #fff;
}

.sider-brand {
  height: 64px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 14px;
  cursor: pointer;
  border-bottom: 1px solid var(--color-border-2);
}

.brand-icon {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--primary-6), 0.12);
  color: rgb(var(--primary-6));
  flex-shrink: 0;
}

.brand-text {
  min-width: 0;
}

.brand-title {
  font-size: 14px;
  font-weight: 900;
  color: var(--color-text-1);
  line-height: 1.1;
}

.brand-sub {
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-text-3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.admin-menu {
  padding: 10px 10px 14px;
}

.admin-main {
  min-width: 0;
}

.admin-header {
  height: 64px;
  background: #fff;
  border-bottom: 1px solid var(--color-border-2);
  display: grid;
  grid-template-columns: 1fr 460px 1fr;
  align-items: center;
  padding: 0 14px;
  gap: 12px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.collapse-btn {
  width: 36px;
  height: 36px;
  border-radius: 12px;
}

.breadcrumb {
  min-width: 0;
  display: flex;
  align-items: center;
}

.env-tag {
  border-radius: 999px;
}

.header-center {
  display: flex;
  justify-content: center;
}

.global-search {
  width: 100%;
  max-width: 460px;
  border-radius: 12px;
}

.header-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}

.icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 12px;
}

.user-btn {
  height: 36px;
  border-radius: 12px;
}

.user-name {
  margin-left: 6px;
  font-weight: 700;
  color: var(--color-text-2);
}

.admin-content {
  padding: 14px 14px;
  min-height: 0;
}

.admin-footer {
  background: transparent;
  color: var(--color-text-3);
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
}

@media (max-width: 900px) {
  .admin-header {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'left right'
      'center center';
    height: auto;
    padding: 10px 14px;
  }

  .header-left {
    grid-area: left;
  }

  .header-center {
    grid-area: center;
  }

  .header-right {
    grid-area: right;
  }
}
</style>
