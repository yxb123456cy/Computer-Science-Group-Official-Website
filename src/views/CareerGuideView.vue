<script setup lang="ts">
import {
  IconCode,
  IconCompass,
  IconMindMapping,
  IconStorage,
} from '@arco-design/web-vue/es/icon'
import { ref } from 'vue'

const activeTrack = ref('frontend')

const tracks = [
  {
    key: 'frontend',
    title: '前端开发',
    icon: IconCode,
    desc: '构建用户可见的界面，创造极致的交互体验。',
    skills: ['HTML/CSS/JS', 'Vue/React', 'TypeScript', 'Node.js', 'Webpack/Vite'],
    roadmap: ['基础三件套', '框架入门', '工程化', '性能优化', '全栈探索'],
    jobs: ['Web前端工程师', '小程序开发', 'H5开发'],
  },
  {
    key: 'backend',
    title: '后端开发',
    icon: IconStorage,
    desc: '构建高并发、高可用的服务端系统，处理核心业务逻辑。',
    skills: ['Java/Go/Python', 'MySQL/Redis', 'Spring Boot', 'Microservices', 'Docker/K8s'],
    roadmap: ['语言基础', '数据库', 'Web框架', '分布式系统', '云原生'],
    jobs: ['Java后端开发', 'Go开发工程师', 'Python后端'],
  },
  {
    key: 'ai',
    title: '人工智能',
    icon: IconMindMapping,
    desc: '探索数据的价值，构建智能模型解决复杂问题。',
    skills: ['Python', 'PyTorch/TensorFlow', 'Machine Learning', 'Deep Learning', 'NLP/CV'],
    roadmap: ['数学基础', 'Python编程', '机器学习算法', '深度学习框架', '论文复现'],
    jobs: ['算法工程师', '数据科学家', 'AI应用开发'],
  },
]

const resources = [
  {
    title: 'MDN Web Docs',
    desc: 'Web 开发者的权威参考文档。',
    link: 'https://developer.mozilla.org',
    tag: '前端',
  },
  {
    title: 'Roadmap.sh',
    desc: '开发者学习路线图大全。',
    link: 'https://roadmap.sh',
    tag: '通用',
  },
  {
    title: 'LeetCode',
    desc: '程序员技术面试必备刷题网站。',
    link: 'https://leetcode.com',
    tag: '求职',
  },
]
</script>

<template>
  <div class="career-guide-view">
    <!-- Header -->
    <div class="header-section">
      <div class="container">
        <h1 class="page-title">
          计算机专业就业指南
        </h1>
        <p class="page-desc">
          清晰的职业规划，助你从校园平滑过渡到职场
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container content-container">
      <div class="guide-layout">
        <!-- Sidebar Navigation -->
        <div class="track-nav">
          <div class="nav-title">
            <IconCompass /> 职业方向
          </div>
          <div class="nav-list">
            <div
              v-for="track in tracks"
              :key="track.key"
              class="nav-item"
              :class="{ active: activeTrack === track.key }"
              @click="activeTrack = track.key"
            >
              <component :is="track.icon" />
              <span>{{ track.title }}</span>
            </div>
          </div>
        </div>

        <!-- Track Detail -->
        <div class="track-detail">
          <transition name="fade" mode="out-in">
            <div :key="activeTrack" class="detail-wrapper">
              <div class="detail-header">
                <h2>{{ tracks.find(t => t.key === activeTrack)?.title }}</h2>
                <p>{{ tracks.find(t => t.key === activeTrack)?.desc }}</p>
              </div>

              <div class="info-grid">
                <a-card class="info-card" title="核心技能树">
                  <div class="tags-cloud">
                    <a-tag
                      v-for="skill in tracks.find(t => t.key === activeTrack)?.skills"
                      :key="skill"
                      color="arcoblue"
                      size="large"
                    >
                      {{ skill }}
                    </a-tag>
                  </div>
                </a-card>

                <a-card class="info-card" title="常见岗位">
                  <div class="tags-cloud">
                    <a-tag
                      v-for="job in tracks.find(t => t.key === activeTrack)?.jobs"
                      :key="job"
                      color="green"
                      size="large"
                    >
                      {{ job }}
                    </a-tag>
                  </div>
                </a-card>
              </div>

              <a-card class="roadmap-card" title="成长路线图">
                <a-steps :current="2" label-placement="vertical">
                  <a-step
                    v-for="(step, idx) in tracks.find(t => t.key === activeTrack)?.roadmap"
                    :key="idx"
                    :title="`阶段 ${idx + 1}`"
                    :description="step"
                  />
                </a-steps>
              </a-card>
            </div>
          </transition>
        </div>
      </div>

      <!-- General Resources -->
      <section class="resources-section">
        <h2 class="section-title">
          通用求职资源
        </h2>
        <div class="resources-grid">
          <a-card v-for="res in resources" :key="res.title" class="resource-card" hoverable>
            <div class="res-content">
              <div class="res-header">
                <h3>{{ res.title }}</h3>
                <a-tag size="small">
                  {{ res.tag }}
                </a-tag>
              </div>
              <p>{{ res.desc }}</p>
              <a-link :href="res.link" target="_blank">
                访问网站
              </a-link>
            </div>
          </a-card>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="less">
.career-guide-view {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.header-section {
  background: #fff;
  padding: 60px 0;
  text-align: center;
  border-bottom: 1px solid var(--color-border-1);

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

.content-container {
  padding-top: 40px;
  padding-bottom: 60px;
}

.guide-layout {
  display: flex;
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

/* Sidebar Nav */
.track-nav {
  width: 240px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  height: fit-content;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  .nav-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--color-text-1);
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 6px;
    cursor: pointer;
    color: var(--color-text-2);
    transition: all 0.2s;
    font-weight: 500;

    &:hover {
      background-color: var(--color-fill-2);
      color: var(--primary-color);
    }

    &.active {
      background-color: #e8f3ff;
      color: var(--primary-color);
    }
  }
}

/* Track Detail */
.track-detail {
  flex: 1;
}

.detail-header {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
    color: var(--color-text-1);
  }

  p {
    color: var(--color-text-3);
    font-size: 16px;
  }
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.info-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: none;

  :deep(.arco-card-header) {
    border-bottom: none;
    padding-bottom: 0;
  }
}

.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.roadmap-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: none;
}

/* Resources */
.resources-section {
  .section-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 24px;
    color: var(--color-text-1);
    border-left: 4px solid var(--primary-color);
    padding-left: 12px;
  }
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.resource-card {
  border-radius: 8px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  .res-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    h3 {
      font-size: 18px;
      font-weight: 600;
      color: var(--color-text-1);
    }
  }

  p {
    color: var(--color-text-3);
    margin-bottom: 16px;
    height: 44px;
  }
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
