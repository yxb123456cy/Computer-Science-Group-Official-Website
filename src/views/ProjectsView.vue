<script setup lang="ts">
import {
  IconGithub,
  IconLink,
} from '@arco-design/web-vue/es/icon'
import { ref } from 'vue'

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

    <div class="filter-bar">
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

    <div class="projects-grid">
      <a-card
        v-for="item in activeType === 'all' ? projects : projects.filter(p => p.type === activeType)"
        :key="item.id"
        class="project-card"
        hoverable
      >
        <template #cover>
          <div class="card-cover" :style="{ backgroundImage: `url(${item.image})` }">
            <div class="cover-overlay">
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
        </div>
      </a-card>
    </div>
  </div>
</template>

<style scoped lang="less">
.projects-view {
  padding-top: 40px;
  padding-bottom: 60px;
}

.header {
  text-align: center;
  margin-bottom: 40px;

  .page-title {
    font-size: 36px;
    font-weight: 700;
    color: var(--color-text-1);
    margin-bottom: 12px;
  }

  .page-desc {
    font-size: 16px;
    color: var(--color-text-3);
  }
}

.filter-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
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
}

.cover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  opacity: 0;
  transition: opacity 0.3s;
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
</style>
