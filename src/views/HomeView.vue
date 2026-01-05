<script setup lang="ts">
import {
  IconArrowRight,
  IconBook,
  IconBulb,
  IconCalendar,
  IconCode,
  IconTrophy,
  IconUserAdd,
  IconUserGroup,
} from '@arco-design/web-vue/es/icon'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Back from '@/assets/images/back.png'
import Code from '@/assets/images/code.png'
import Python from '@/assets/images/python.png'

import ArcoIcon from '@/assets/svg/arcoDesign.svg'
import EChartsIcon from '@/assets/svg/ECharts.svg'
import JavaIcon from '@/assets/svg/java.svg'
import LessIcon from '@/assets/svg/less.svg'
import PiniaIcon from '@/assets/svg/pinia.svg'
import SpringBootIcon from '@/assets/svg/springboot.svg'
import TSIcon from '@/assets/svg/typescript.svg'
import VercelIcon from '@/assets/svg/vercel.svg'
import ViteIcon from '@/assets/svg/vite.svg'
import VitestIcon from '@/assets/svg/vitest.svg'
import VueIcon from '@/assets/svg/Vue.svg'
import VueUseIcon from '@/assets/svg/VueUse.svg'

const router = useRouter()

const carouselItems = ref([
  {
    title: '以技术赋能兴趣，以实战提升能力',
    desc: '加入我们，探索计算机科学的无限可能',
    image: Code,
  },
  {
    title: '丰富的社团活动',
    desc: '技术分享、黑客马拉松、企业参访',
    image: Back,
  },
  {
    title: '卓越的项目成果',
    desc: '从想法到落地，我们一起创造',
    image: Python,
  },
])

const highlights = ref([
  {
    title: '定期技术分享',
    desc: '定期进行团队技术分享，拓宽视野',
    icon: IconBulb,
  },
  {
    title: '全国竞赛获奖',
    desc: '带领成员征战各类计算机相关竞赛，斩获佳绩',
    icon: IconTrophy,
  },
  {
    title: '校企合作资源',
    desc: '对接知名企业，提供实习就业直通车',
    icon: IconUserGroup,
  },
  {
    title: '实战项目历练',
    desc: '参与真实项目开发，积累宝贵经验',
    icon: IconCode,
  },
])

const quickEntries = ref([
  { label: '查看活动', path: '/activities', icon: IconCalendar },
  { label: '了解招新', path: '/join', icon: IconUserAdd },
  { label: '浏览成果', path: '/projects', icon: IconBook },
])

const newsList = ref([
  {
    title: '2024秋季招新正式启动',
    date: '2024-09-01',
    category: '招新',
    content: '我们正在寻找热爱技术的你！无论你是编程大牛还是萌新小白，只要有热情，这里就是你的舞台。',
  },
  {
    title: '第十届编程马拉松圆满落幕',
    date: '2024-08-15',
    category: '活动',
    content: '经过48小时的激烈角逐，本次黑客马拉松共诞生了10个优秀项目，恭喜获奖团队！',
  },
  {
    title: '暑期技术训练营开营啦',
    date: '2024-07-10',
    category: '培训',
    content: '为期两周的Web全栈开发训练营，带你从零开始构建自己的应用。',
  },
])

const techStack = ref([
  {
    name: 'Vue 3',
    desc: '渐进式 JavaScript 框架',
    icon: VueIcon,
  },
  {
    name: 'TypeScript',
    desc: 'JavaScript 的超集',
    icon: TSIcon,
  },
  {
    name: 'Vite',
    desc: '下一代前端开发与构建工具',
    icon: ViteIcon,
  },
  {
    name: 'Arco Design',
    desc: '字节跳动企业级 UI 组件库',
    icon: ArcoIcon,
  },
  {
    name: 'Pinia',
    desc: 'Vue 的专属状态管理库',
    icon: PiniaIcon,
  },
  {
    name: 'Less',
    desc: 'CSS 预处理语言',
    icon: LessIcon,
  },
  {
    name: 'VueUse',
    desc: 'Vue 组合式 API 工具库',
    icon: VueUseIcon,
  },
  {
    name: 'Vercel',
    desc: '零配置部署与托管平台',
    icon: VercelIcon,
  },
  {
    name: 'ECharts',
    desc: '基于 JavaScript 的开源可视化库',
    icon: EChartsIcon,
  },
  {
    name: 'Vitest',
    desc: '一个开源测试框架',
    icon: VitestIcon,
  },
  {
    name: 'Spring Boot',
    desc: '基于 Java 的服务端框架',
    icon: SpringBootIcon,
  },
  {
    name: 'Java21',
    desc: '一种广泛使用的计算机编程语言',
    icon: JavaIcon,
  },
])
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <div class="hero-section">
      <a-carousel
        :auto-play="true"
        indicator-type="line"
        show-arrow="hover"
        style="width: 100%; height: 500px"
      >
        <a-carousel-item v-for="(item, index) in carouselItems" :key="index">
          <div class="carousel-content" :style="{ backgroundImage: `url(${item.image})` }">
            <div class="carousel-overlay">
              <div class="container">
                <h1 class="hero-title">
                  {{ item.title }}
                </h1>
                <p class="hero-desc">
                  {{ item.desc }}
                </p>
                <a-button type="primary" size="large" shape="round" class="hero-btn">
                  了解更多
                </a-button>
              </div>
            </div>
          </div>
        </a-carousel-item>
      </a-carousel>
    </div>

    <!-- Core Highlights -->
    <section class="section-container container">
      <h2 class="section-title">
        我们的核心优势
      </h2>
      <div class="highlights-grid">
        <a-card v-for="(item, index) in highlights" :key="index" hoverable class="highlight-card">
          <div class="card-content">
            <component :is="item.icon" size="48" class="card-icon" />
            <h3 class="card-title">
              {{ item.title }}
            </h3>
            <p class="card-desc">
              {{ item.desc }}
            </p>
          </div>
        </a-card>
      </div>
    </section>

    <!-- Quick Entry -->
    <section class="section-container bg-gray">
      <div class="container quick-entry">
        <div v-for="(item, index) in quickEntries" :key="index" class="entry-item">
          <a-button type="outline" size="large" class="entry-btn" long @click="router.push(item.path)">
            {{ item.label }}
            <template #icon>
              <component :is="item.icon" />
            </template>
          </a-button>
        </div>
      </div>
    </section>

    <!-- Recent News -->
    <section class="section-container container">
      <div class="news-layout">
        <div class="news-header">
          <h2 class="section-title" style="text-align: left; margin-bottom: 20px;">
            近期动态
          </h2>
          <a-link @click="router.push('/news')">
            查看更多 <IconArrowRight />
          </a-link>
        </div>
        <div class="news-list">
          <a-list :data="newsList" :bordered="false">
            <template #item="{ item }">
              <a-list-item action-layout="vertical" class="news-item">
                <a-list-item-meta :title="item.title" :description="item.date">
                  <template #avatar>
                    <a-tag color="arcoblue">
                      {{ item.category }}
                    </a-tag>
                  </template>
                </a-list-item-meta>
                <div class="news-content">
                  {{ item.content }}
                </div>
              </a-list-item>
            </template>
          </a-list>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="section-container bg-gray">
      <div class="container">
        <h2 class="section-title">
          本站研发技术栈
        </h2>
        <div class="tech-grid">
          <a-card v-for="(item, index) in techStack" :key="index" hoverable class="tech-card">
            <div class="tech-content">
              <div class="tech-icon-wrapper">
                <img :src="item.icon" :alt="item.name" class="tech-icon">
              </div>
              <div class="tech-info">
                <h3 class="tech-name">
                  {{ item.name }}
                </h3>
                <p class="tech-desc">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </a-card>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="less">
.home-view {
  width: 100%;
}

/* Hero Section */
.hero-section {
  position: relative;

  .carousel-content {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .carousel-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    color: #fff;
  }

  .hero-title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .hero-desc {
    font-size: 24px;
    margin-bottom: 40px;
    opacity: 0.9;
  }
}

/* Common Section */
.section-container {
  padding: 40px 20px;
}

.section-title {
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text-color);
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--primary-color);
    margin: 16px auto 0;
    border-radius: 2px;
  }
}

/* Highlights */
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.highlight-card {
  text-align: center;
  border-radius: 8px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  .card-icon {
    color: var(--primary-color);
    margin-bottom: 8px;
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .card-desc {
    color: var(--text-secondary);
    line-height: 1.6;
  }
}

/* Quick Entry */
.bg-gray {
  background-color: #f7f8fa;
}

.quick-entry {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;

  .entry-item {
    width: 200px;
  }
}

/* Recent News */
.news-layout {
  display: flex;
  flex-direction: column;
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .section-title {
    margin-bottom: 0;
    text-align: left;
    &::after {
      display: none;
    }
  }
}

.news-item {
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border);

  &:hover {
    background-color: var(--color-fill-1);
  }

  .news-content {
    margin-top: 10px;
    color: var(--text-secondary);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    overflow: hidden;
  }
}

.hero-btn {
  padding-left: 25px;
  padding-right: 25px;
  color: black !important;
  background-image: linear-gradient(-225deg, #fffeff 0%, #d7fffe 100%);
}

.entry-btn {
  padding-left: 25px;
  padding-right: 25px;
  color: black !important;
  background-image: linear-gradient(-225deg, #fffeff 0%, #d7fffe 100%);
}

/* Tech Stack */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.tech-card {
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  :deep(.arco-card-body) {
    padding: 24px;
  }
}

.tech-content {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.tech-icon-wrapper {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-fill-2);
  border-radius: 8px;
  padding: 8px;
}

.tech-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.tech-info {
  flex: 1;
}

.tech-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--color-text-1);
}

.tech-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
}
</style>
