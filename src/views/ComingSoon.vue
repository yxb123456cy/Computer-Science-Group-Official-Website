<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => {
  const map: Record<string, string> = {
    activities: '核心活动',
    projects: '项目成果',
    members: '成员风采',
    join: '加入我们',
    resources: '资源导航',
    contact: '联系我们',
    news: '近期动态',
  }
  const key = route.path.substring(1)
  return map[key] || 'Coming Soon'
})
</script>

<template>
  <div class="coming-soon">
    <div class="container">
      <h1>{{ title }}</h1>
      <p>页面正在开发中，敬请期待...</p>
      <a-button type="primary" @click="$router.push('/')">
        返回首页
      </a-button>
    </div>
  </div>
</template>

<style scoped>
.coming-soon {
  padding: 100px 0;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  color: var(--text-color);
}

p {
  margin-bottom: 30px;
  color: var(--text-secondary);
}
</style>
