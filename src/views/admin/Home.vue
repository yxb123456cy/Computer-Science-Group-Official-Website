<script setup lang="ts">
import {
  IconClockCircle,
  IconDashboard,
  IconHome,
  IconSettings,
} from '@arco-design/web-vue/es/icon'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const stats = computed(() => ([
  { title: '待完善配置', value: '9', icon: IconSettings, color: 'arcoblue' },
  { title: '今日访问', value: '—', icon: IconHome, color: 'gray' },
  { title: '本周活跃', value: '—', icon: IconDashboard, color: 'gray' },
  { title: '最近更新', value: '—', icon: IconClockCircle, color: 'gray' },
]))

const quickLinks = [
  { title: '首页设置', name: 'admin-site-home' },
  { title: '核心活动设置', name: 'admin-site-activities' },
  { title: '竞赛大全设置', name: 'admin-site-competition' },
  { title: '数据分析', name: 'admin-analytics' },
]
</script>

<template>
  <div class="admin-page">
    <div class="page-head">
      <div class="head-left">
        <div class="title">
          后台首页
        </div>
        <div class="sub">
          统一入口、快捷操作与核心指标总览
        </div>
      </div>
      <div class="head-right">
        <a-button type="primary" shape="round" @click="router.push({ name: 'admin-site-home' })">
          去配置官网首页
        </a-button>
      </div>
    </div>

    <div class="grid">
      <div class="stats-row">
        <a-card v-for="s in stats" :key="s.title" class="stat-card" hoverable>
          <div class="stat-inner">
            <div class="stat-icon">
              <component :is="s.icon" />
            </div>
            <div class="stat-main">
              <div class="stat-value">
                {{ s.value }}
              </div>
              <div class="stat-title">
                {{ s.title }}
              </div>
            </div>
          </div>
        </a-card>
      </div>

      <div class="main-row">
        <a-card class="panel" title="快捷入口" :bordered="false">
          <div class="link-grid">
            <div
              v-for="l in quickLinks"
              :key="l.name"
              class="link-item"
              @click="router.push({ name: l.name })"
            >
              <div class="link-title">
                {{ l.title }}
              </div>
              <div class="link-sub">
                进入配置与管理
              </div>
            </div>
          </div>
        </a-card>

        <a-card class="panel" title="最近操作" :bordered="false">
          <a-table
            :data="[
              { time: '—', action: '进入后台', operator: 'Admin' },
              { time: '—', action: '打开首页设置', operator: 'Admin' },
              { time: '—', action: '查看数据分析', operator: 'Admin' },
            ]"
            :pagination="false"
            size="small"
          >
            <template #columns>
              <a-table-column title="时间" data-index="time" />
              <a-table-column title="操作" data-index="action" />
              <a-table-column title="操作者" data-index="operator" />
            </template>
          </a-table>
        </a-card>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.admin-page {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.page-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
}

.title {
  font-size: 18px;
  font-weight: 900;
  color: var(--color-text-1);
}

.sub {
  margin-top: 6px;
  font-size: 12px;
  color: var(--color-text-3);
}
.head-right {
  position: relative;
  right: 25px;
}

.grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.stat-card {
  border-radius: 14px;
}

.stat-inner {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stat-icon {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--primary-6), 0.12);
  color: rgb(var(--primary-6));
  flex-shrink: 0;
}

.stat-main {
  min-width: 0;
}

.stat-value {
  font-size: 18px;
  font-weight: 900;
  color: var(--color-text-1);
  line-height: 1.1;
}

.stat-title {
  margin-top: 6px;
  font-size: 12px;
  color: var(--color-text-3);
}

.main-row {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 12px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.panel {
  border-radius: 14px;
}

.link-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.link-item {
  border: 1px solid var(--color-border-2);
  border-radius: 14px;
  padding: 12px 12px;
  background: var(--color-fill-1);
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(var(--primary-6), 0.35);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  }
}

.link-title {
  font-weight: 900;
  color: var(--color-text-1);
  font-size: 13px;
}

.link-sub {
  margin-top: 8px;
  font-size: 12px;
  color: var(--color-text-3);
}
</style>
