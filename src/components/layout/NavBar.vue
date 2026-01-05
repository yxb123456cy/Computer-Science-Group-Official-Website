<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const activeKey = computed(() => {
  const path = route.path
  if (path === '/')
    return 'home'
  return path.substring(1) // simple mapping
})
</script>

<template>
  <div class="nav-bar">
    <div class="nav-container container">
      <div class="logo">
        <img src="@/assets/images/team-logo.png" alt="Logo">
        <span class="title">计算机科技小组</span>
      </div>
      <div class="menu">
        <a-menu mode="horizontal" :default-selected-keys="['home']" :selected-keys="[activeKey]">
          <a-menu-item key="home" @click="router.push('/')">
            首页
          </a-menu-item>
          <a-menu-item key="about" @click="router.push('/about')">
            关于我们
          </a-menu-item>
          <a-menu-item key="activities" @click="router.push('/activities')">
            核心活动
          </a-menu-item>
          <a-menu-item key="projects" @click="router.push('/projects')">
            项目成果
          </a-menu-item>
          <a-menu-item key="members" @click="router.push('/members')">
            成员风采
          </a-menu-item>
          <a-menu-item key="join" @click="router.push('/join')">
            加入我们
          </a-menu-item>
          <a-menu-item key="resources" @click="router.push('/resources')">
            资源导航
          </a-menu-item>
          <a-menu-item key="contact" @click="router.push('/contact')">
            联系我们
          </a-menu-item>
        </a-menu>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.nav-bar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  height: 64px;
  display: flex;
  align-items: center;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  img {
    height: 32px;
    width: 32px;
  }

  .title {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-color);
  }
}

.menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;

  :deep(.arco-menu-horizontal) {
    background-color: transparent;
  }
}
</style>
