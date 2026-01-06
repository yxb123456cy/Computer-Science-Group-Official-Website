<script setup lang="ts">
import IconEnvironment, {
  IconClockCircle,
  IconRight,
} from '@arco-design/web-vue/es/icon'
import { ref } from 'vue'

const activeTab = ref('past')

const upcomingActivities = [
  {
    id: 1,
    title: '2024秋季招新宣讲会',
    time: '2024-09-15 19:00',
    location: '计算机楼 B203',
    type: '招新',
    desc: '面向全校新生的招新宣讲，介绍社团文化、部门职能及招新流程。',
  },
  {
    id: 2,
    title: 'Vue3 + TypeScript 实战工作坊',
    time: '2024-09-22 14:00',
    location: '创新创业中心 301',
    type: '技术分享',
    desc: '手把手带你构建一个现代化 Web 应用，适合有一定基础的同学。',
  },
]

const pastActivities = [
  {
    id: 101,
    title: '第十届校园黑客马拉松',
    date: '2024-06-01',
    location: '图书馆报告厅',
    image: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    summary: '48小时极限编程，诞生了10个优秀创意项目。',
    tags: ['竞赛', '开发'],
  },
  {
    id: 102,
    title: '走进字节跳动——企业参访',
    date: '2024-05-15',
    location: '字节跳动总部',
    image: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    summary: '实地感受大厂工作氛围，与资深工程师面对面交流。',
    tags: ['参访', '就业'],
  },
  {
    id: 103,
    title: '人工智能前沿技术讲座',
    date: '2024-04-20',
    location: '学术交流中心',
    image: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    summary: '邀请AI领域专家解读大模型发展趋势与应用前景。',
    tags: ['讲座', 'AI'],
  },
  {
    id: 104,
    title: '春季编程打卡活动',
    date: '2024-03-01',
    location: '线上',
    image: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291bca5bd9487483a89.png~tplv-uwbnlip3yd-webp.webp',
    summary: '连续21天编程打卡，养成良好学习习惯。',
    tags: ['线上', '学习'],
  },
]
</script>

<template>
  <div class="activities-view container">
    <div class="header">
      <h1 class="page-title">
        核心活动
      </h1>
      <p class="page-desc">
        精彩纷呈的社团活动，记录我们的成长足迹
      </p>
    </div>

    <a-tabs v-model:active-key="activeTab" type="rounded" size="large" class="activity-tabs">
      <a-tab-pane key="upcoming" title="近期活动预告">
        <div class="upcoming-list">
          <a-card v-for="item in upcomingActivities" :key="item.id" class="upcoming-card" hoverable>
            <div class="upcoming-content">
              <div class="date-badge">
                <span class="month">{{ item.time.split('-')[1] }}月</span>
              </div>
              <div class="info">
                <div class="tags">
                  <a-tag color="arcoblue" size="small">
                    {{ item.type }}
                  </a-tag>
                </div>
                <h3 class="title">
                  {{ item.title }}
                </h3>
                <div class="meta">
                  <span class="meta-item"><IconClockCircle /> {{ item.time }}</span>
                  <span class="meta-item"><IconEnvironment /> {{ item.location }}</span>
                </div>
                <p class="desc">
                  {{ item.desc }}
                </p>
              </div>
              <a-button type="primary" shape="round">
                立即报名
              </a-button>
            </div>
          </a-card>
        </div>
      </a-tab-pane>
      <a-tab-pane key="past" title="往期活动回顾">
        <div class="past-grid">
          <a-card v-for="item in pastActivities" :key="item.id" class="activity-card" hoverable>
            <template #cover>
              <div class="card-cover" :style="{ backgroundImage: `url(${item.image})` }" />
            </template>
            <div class="card-body">
              <div class="card-meta">
                <span class="date">{{ item.date }}</span>
                <div class="tags">
                  <a-tag v-for="tag in item.tags" :key="tag" size="small" color="gray">
                    {{ tag }}
                  </a-tag>
                </div>
              </div>
              <h3 class="title">
                {{ item.title }}
              </h3>
              <p class="location">
                <IconEnvironment /> {{ item.location }}
              </p>
              <p class="summary">
                {{ item.summary }}
              </p>
              <a-link class="read-more">
                查看详情 <IconRight />
              </a-link>
            </div>
          </a-card>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped lang="less">
.activities-view {
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

.activity-tabs {
  :deep(.arco-tabs-nav-tab) {
    justify-content: center;
  }
}

/* Upcoming Activities */
.upcoming-list {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
}

.upcoming-card {
  border-radius: 12px;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
}

.upcoming-content {
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.date-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: var(--color-fill-2);
  border-radius: 12px;
  color: var(--primary-color);
  flex-shrink: 0;

  .month {
    font-size: 14px;
    font-weight: 500;
  }

  .day {
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    margin-top: 4px;
  }
}

.info {
  flex: 1;

  .tags {
    margin-bottom: 8px;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--color-text-1);
  }

  .meta {
    display: flex;
    gap: 16px;
    font-size: 14px;
    color: var(--color-text-3);
    margin-bottom: 8px;

    .meta-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }

  .desc {
    color: var(--color-text-2);
    font-size: 14px;
  }
}

/* Past Activities */
.past-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding-top: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.activity-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

    .read-more {
      opacity: 1;
      transform: translateX(0);
    }
  }

  :deep(.arco-card-body) {
    padding: 0;
  }
}

.card-cover {
  height: 200px;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05);
  }
}

.card-body {
  padding: 20px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  .date {
    font-size: 13px;
    color: var(--color-text-3);
  }

  .tags {
    display: flex;
    gap: 6px;
  }
}

.title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--color-text-1);
  line-height: 1.4;
}

.location {
  font-size: 13px;
  color: var(--color-text-3);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.summary {
  font-size: 14px;
  color: var(--color-text-2);
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
  height: 44px;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  opacity: 0.8;
  transition: all 0.3s;
}
</style>
