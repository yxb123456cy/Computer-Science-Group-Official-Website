<script setup lang="ts">
import {
  IconGithub,
  IconLink,
} from '@arco-design/web-vue/es/icon'
import { computed, ref } from 'vue'

const activeType = ref('all')

const projects = [
  {
    id: 1,
    title: '校园二手交易平台',
    type: 'self-developed',
    tags: ['Vue3', 'SpringBoot', 'MySQL'],
    desc: '服务于校内师生的闲置物品交易平台，支持商品发布、即时聊天、在线支付等功能。',
    image: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    title: '智能排课系统',
    type: 'competition',
    tags: ['Python', 'Algorithm', 'Django'],
    desc: '基于遗传算法的自动排课系统，解决了传统人工排课冲突多、效率低的问题。',
    image: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    github: 'https://github.com',
    demo: '',
  },
  {
    id: 3,
    title: '社团官网 (本站)',
    type: 'self-developed',
    tags: ['Vue3', 'Vite', 'Arco Design'],
    desc: '展示社团风采、活动动态、项目成果的官方门户网站。',
    image: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 4,
    title: '个人博客系统',
    type: 'member',
    tags: ['React', 'Next.js', 'Tailwind'],
    desc: '成员自主开发的轻量级博客系统，支持Markdown编辑、暗黑模式。',
    image: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

const filteredProjects = computed(() => (activeType.value === 'all'
  ? projects
  : projects.filter(p => p.type === activeType.value)))

const totalCount = computed(() => projects.length)
const selfCount = computed(() => projects.filter(p => p.type === 'self-developed').length)
const competitionCount = computed(() => projects.filter(p => p.type === 'competition').length)
const memberCount = computed(() => projects.filter(p => p.type === 'member').length)
const currentCount = computed(() => filteredProjects.value.length)

const topTags = computed(() => {
  const counter = new Map<string, number>()
  filteredProjects.value.forEach((p) => {
    p.tags.forEach((t) => {
      counter.set(t, (counter.get(t) || 0) + 1)
    })
  })
  return [...counter.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([t]) => t)
})
</script>

<template>
  <div class="projects-view container">
    <div class="header">
      <h1 class="page-title">
        项目成果
      </h1>
      <p class="page-desc">
        从创意到落地，见证代码的力量
      </p>
    </div>

    <div class="hero-strip">
      <div class="hero-left">
        <div class="hero-title">
          以项目驱动成长，沉淀可展示的作品集
        </div>
        <div class="hero-sub">
          支持社团自研、竞赛项目、成员作品等多类型成果展示，持续迭代与复盘
        </div>
        <div class="hero-chips">
          <a-tag v-for="t in topTags" :key="t" color="arcoblue" class="chip">
            {{ t }}
          </a-tag>
        </div>
      </div>
      <div class="hero-right">
        <div class="stat-grid">
          <div class="stat-card">
            <div class="stat-value">
              {{ totalCount }}
            </div>
            <div class="stat-label">
              全部项目
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-value">
              {{ selfCount }}
            </div>
            <div class="stat-label">
              社团自研
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-value">
              {{ competitionCount }}
            </div>
            <div class="stat-label">
              竞赛项目
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-value">
              {{ memberCount }}
            </div>
            <div class="stat-label">
              成员作品
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="filter-bar">
      <div class="filter-left">
        <a-radio-group v-model="activeType" type="button" size="large">
          <a-radio value="all">
            全部项目
          </a-radio>
          <a-radio value="self-developed">
            社团自研
          </a-radio>
          <a-radio value="competition">
            竞赛获奖
          </a-radio>
          <a-radio value="member">
            成员作品
          </a-radio>
        </a-radio-group>
      </div>
      <div class="filter-right">
        <span class="count-text">共 {{ currentCount }} 项</span>
      </div>
    </div>

    <div class="projects-grid">
      <a-card
        v-for="item in filteredProjects"
        :key="item.id"
        class="project-card"
        hoverable
      >
        <template #cover>
          <div class="card-cover" :style="{ backgroundImage: `url(${item.image})` }">
            <div class="cover-badge">
              <a-tag v-if="item.type === 'self-developed'" color="arcoblue">社团自研</a-tag>
              <a-tag v-else-if="item.type === 'competition'" color="orangered">竞赛项目</a-tag>
              <a-tag v-else color="purple">成员作品</a-tag>
            </div>
            <div class="cover-overlay">
              <div class="overlay-title">
                {{ item.title }}
              </div>
              <a-button v-if="item.demo" type="primary" shape="circle" size="large" :href="item.demo" target="_blank">
                <IconLink />
              </a-button>
              <a-button v-if="item.github" shape="circle" size="large" :href="item.github" target="_blank">
                <IconGithub />
              </a-button>
            </div>
          </div>
        </template>
        <div class="card-body">
          <h3 class="title">
            {{ item.title }}
          </h3>
          <div class="tags">
            <a-tag v-for="tag in item.tags" :key="tag" size="small" color="arcoblue" bordered>
              {{ tag }}
            </a-tag>
          </div>
          <p class="desc">
            {{ item.desc }}
          </p>
          <div class="card-footer">
            <a-button v-if="item.demo" type="primary" size="small" class="footer-btn" :href="item.demo" target="_blank">
              <template #icon>
                <IconLink />
              </template>
              在线演示
            </a-button>
            <a-button v-if="item.github" size="small" class="footer-btn" :href="item.github" target="_blank">
              <template #icon>
                <IconGithub />
              </template>
              源码
            </a-button>
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>

<style scoped lang="less">
.projects-view {
  padding-top: 8px;
  padding-bottom: 60px;
}

.header {
  text-align: center;
  margin-bottom: 40px;

  .page-title {
    font-size: 24px;
    font-weight: 800;
    color: var(--color-text-1);
    margin-bottom: 12px;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 6px;
      background: var(--primary-color);
      margin: 10px auto 0;
      border-radius: 3px;
    }
  }

  .page-desc {
    font-size: 16px;
    color: var(--color-text-3);
  }
}

.hero-strip {
  display: grid;
  grid-template-columns: 1fr 460px;
  gap: 18px;
  border: 1px solid var(--color-border-2);
  border-radius: 14px;
  padding: 20px 20px;
  background:
    radial-gradient(1000px 420px at 20% 0%, rgba(var(--primary-6), 0.16), transparent 55%),
    radial-gradient(700px 340px at 90% 30%, rgba(var(--primary-6), 0.10), transparent 55%),
    #fff;
  margin-bottom: 22px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.hero-title {
  font-size: 18px;
  font-weight: 800;
  color: var(--color-text-1);
  line-height: 1.25;
}

.hero-sub {
  margin-top: 10px;
  font-size: 13px;
  color: var(--color-text-3);
  line-height: 1.7;
  max-width: 560px;
}

.hero-chips {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  border-radius: 999px;
}

.hero-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.stat-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.stat-card {
  border: 1px solid var(--color-border-2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.85);
  padding: 12px 12px;
}

.stat-value {
  font-size: 18px;
  font-weight: 900;
  color: var(--color-text-1);
  line-height: 1.1;
}

.stat-label {
  margin-top: 8px;
  font-size: 12px;
  color: var(--color-text-3);
}

.filter-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  align-items: center;
  gap: 16px;
}

.filter-left {
  display: flex;
  justify-content: center;
}

.filter-right {
  color: var(--color-text-3);
  font-size: 12px;
}

.count-text {
  white-space: nowrap;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.project-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  border: 1px solid var(--color-border-2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

    .cover-overlay {
      opacity: 1;
    }
  }
}

.card-cover {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.42));
    opacity: 0;
    transition: opacity 0.3s;
  }
}

.cover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 1;
}

.project-card:hover {
  .card-cover::after {
    opacity: 1;
  }
}

.cover-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
}

.overlay-title {
  color: rgba(255, 255, 255, 0.92);
  font-weight: 900;
  font-size: 16px;
  padding: 0 16px;
  text-align: center;
  line-height: 1.4;
}

.card-body {
  padding: 20px;
}

.title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--color-text-1);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.desc {
  font-size: 14px;
  color: var(--color-text-3);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  overflow: hidden;
  height: 66px;
}

.card-footer {
  display: flex;
  gap: 10px;
  margin-top: 14px;
}

.footer-btn {
  border-radius: 999px;
}
</style>
