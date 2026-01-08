<script setup lang="ts">
import {
  IconBulb,
  IconCalendar,
  IconClockCircle,
  IconFire,
  IconRight,
} from '@arco-design/web-vue/es/icon'
import { computed, ref } from 'vue'

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

const upcomingCount = computed(() => upcomingActivities.length)
const pastCount = computed(() => pastActivities.length)

const upcomingTypes = computed(() => {
  const set = new Set<string>()
  upcomingActivities.forEach((a) => {
    if (a.type)
      set.add(a.type)
  })
  return [...set]
})

const tagStats = computed(() => {
  const counter = new Map<string, number>()
  pastActivities.forEach((a) => {
    a.tags.forEach(t => counter.set(t, (counter.get(t) || 0) + 1))
  })
  return [...counter.entries()].sort((a, b) => b[1] - a[1])
})

const topTags = computed(() => tagStats.value.slice(0, 10).map(([t]) => t))
const tagCount = computed(() => tagStats.value.length)

function getMonthLabel(time: string) {
  const month = time.split('-')[1]
  return month ? `${month}月` : ''
}

function getDayLabel(time: string) {
  const dayPart = time.split('-')[2] || ''
  const day = dayPart.split(' ')[0]
  return day || ''
}
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

    <div class="hero-strip">
      <div class="hero-left">
        <div class="hero-title">
          用活动连接热爱，用实践沉淀成长
        </div>
        <div class="hero-sub">
          技术分享、黑客马拉松、企业参访与学习打卡，持续记录每一次进步
        </div>
        <div class="hero-highlights">
          <div class="highlight-pill">
            <IconFire class="pill-icon" /> 活动不停更
          </div>
          <div class="highlight-pill">
            <IconCalendar class="pill-icon" /> 周周有主题
          </div>
          <div class="highlight-pill">
            <IconBulb class="pill-icon" /> 以赛促学
          </div>
        </div>
      </div>
      <div class="hero-right">
        <div class="stat-grid">
          <div class="stat-card primary">
            <div class="stat-value">
              {{ upcomingCount }}
            </div>
            <div class="stat-label">
              近期预告
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-value">
              {{ pastCount }}
            </div>
            <div class="stat-label">
              往期回顾
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-value">
              {{ tagCount }}
            </div>
            <div class="stat-label">
              活动标签
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-value">
              全年
            </div>
            <div class="stat-label">
              持续开展
            </div>
          </div>
        </div>
      </div>
    </div>
    <a-tabs v-model:active-key="activeTab" type="rounded" size="large" class="activity-tabs">
      <a-tab-pane key="upcoming" title="近期活动预告">
        <div class="tab-layout">
          <div class="main-col">
            <div class="upcoming-list">
              <a-card v-for="item in upcomingActivities" :key="item.id" class="upcoming-card" hoverable>
                <div class="upcoming-content">
                  <div class="date-badge">
                    <span class="month">{{ getMonthLabel(item.time) }}</span>
                    <span class="day">{{ getDayLabel(item.time) }}</span>
                  </div>
                  <div class="info">
                    <div class="tags">
                      <a-tag color="arcoblue" size="small" class="type-tag">
                        {{ item.type }}
                      </a-tag>
                    </div>
                    <h3 class="title">
                      {{ item.title }}
                    </h3>
                    <div class="meta">
                      <span class="meta-item"><IconClockCircle /> {{ item.time }}</span>
                      <!-- <span class="meta-item"><IconEnvironment /> {{ item.location }}</span> -->
                    </div>
                    <p class="desc">
                      {{ item.desc }}
                    </p>
                    <div class="quick-tips">
                      <div class="tip">
                        <span class="tip-k">建议：</span>
                        <span class="tip-v">提前 10 分钟到场，带好电脑与充电器</span>
                      </div>
                      <div class="tip">
                        <span class="tip-k">适合：</span>
                        <span class="tip-v">零基础 / 有基础均可参与</span>
                      </div>
                    </div>
                  </div>
                  <a-button type="primary" shape="round" class="join-btn">
                    立即报名
                  </a-button>
                </div>
              </a-card>
            </div>
          </div>

          <div class="side-col">
            <div class="side-card">
              <div class="side-title">
                <IconCalendar /> 参与须知
              </div>
              <div class="side-body">
                <div class="bullet">
                  到场签到可获取活动资料包
                </div>
                <div class="bullet">
                  工作坊建议携带电脑与耳机
                </div>
                <div class="bullet">
                  活动结束后有问答与交流环节
                </div>
              </div>
            </div>

            <div class="side-card">
              <div class="side-title">
                <IconBulb /> 活动类型
              </div>
              <div class="side-body">
                <div class="tag-wall">
                  <a-tag v-for="t in upcomingTypes" :key="t" color="gray" size="small" class="wall-tag">
                    {{ t }}
                  </a-tag>
                </div>
                <div class="side-hint">
                  关注你喜欢的方向，长期跟进会更快进步
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="past" title="往期活动回顾">
        <div class="tab-layout">
          <div class="main-col">
            <div class="past-grid">
              <a-card v-for="item in pastActivities" :key="item.id" class="activity-card" hoverable>
                <template #cover>
                  <div class="card-cover" :style="{ backgroundImage: `url(${item.image})` }">
                    <div class="cover-overlay">
                      <div class="cover-date">
                        {{ item.date }}
                      </div>
                      <div class="cover-tags">
                        <a-tag v-for="tag in item.tags.slice(0, 2)" :key="tag" size="small" color="arcoblue" class="cover-tag">
                          {{ tag }}
                        </a-tag>
                      </div>
                    </div>
                  </div>
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
                  <div class="card-foot">
                    <div class="foot-left">
                      <IconFire class="foot-icon" />
                      <span class="foot-text">活动回顾</span>
                    </div>
                    <a-link class="read-more">
                      查看详情 <IconRight />
                    </a-link>
                  </div>
                </div>
              </a-card>
            </div>
          </div>

          <div class="side-col">
            <div class="side-card">
              <div class="side-title">
                <IconFire /> 年度回顾
              </div>
              <div class="side-body">
                <div class="kv">
                  <span class="k">总回顾</span>
                  <span class="v">{{ pastCount }}</span>
                </div>
                <div class="kv">
                  <span class="k">热门标签</span>
                  <span class="v">{{ topTags.length }}</span>
                </div>
                <div class="divider" />
                <div class="side-hint">
                  我们把每场活动都当作一次“可复盘的成长”
                </div>
              </div>
            </div>

            <div class="side-card">
              <div class="side-title">
                <IconBulb /> 热门标签
              </div>
              <div class="side-body">
                <div class="tag-wall">
                  <a-tag v-for="t in topTags" :key="t" color="gray" size="small" class="wall-tag">
                    {{ t }}
                  </a-tag>
                </div>
              </div>
            </div>

            <div class="side-card">
              <div class="side-title">
                <IconClockCircle /> 你可能感兴趣
              </div>
              <div class="side-body">
                <div v-for="item in upcomingActivities.slice(0, 2)" :key="item.id" class="rec-item">
                  <div class="rec-title">
                    {{ item.title }}
                  </div>
                  <div class="rec-meta">
                    <span><IconCalendar /> {{ item.time.split(' ')[0] }}</span>
                    <span><IconEnvironment /> {{ item.location }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped lang="less">
.activities-view {
  padding-top: 14px;
  padding-bottom: 60px;
}

.header {
  text-align: center;
  margin-bottom: 24px;

  .page-title {
    font-size: 28px;
    font-weight: 800;
    color: var(--color-text-1);
    margin-bottom: 12px;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 92px;
      height: 6px;
      background: var(--primary-color);
      margin: 10px auto 0;
      border-radius: 999px;
    }
  }

  .page-desc {
    font-size: 16px;
    color: var(--color-text-3);
  }
}

.hero-strip {
  display: grid;
  grid-template-columns: 1fr 520px;
  gap: 18px;
  border: 1px solid var(--color-border-2);
  border-radius: 14px;
  padding: 20px 20px;
  background:
    radial-gradient(1000px 420px at 20% 0%, rgba(var(--primary-6), 0.16), transparent 55%),
    radial-gradient(700px 340px at 90% 30%, rgba(var(--primary-6), 0.1), transparent 55%), #fff;
  margin-bottom: 18px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.hero-title {
  font-size: 18px;
  font-weight: 900;
  color: var(--color-text-1);
  line-height: 1.25;
}

.hero-sub {
  margin-top: 10px;
  font-size: 13px;
  color: var(--color-text-3);
  line-height: 1.7;
  max-width: 620px;
}

.hero-highlights {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.highlight-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(var(--primary-6), 0.22);
  background: rgba(var(--primary-6), 0.08);
  color: var(--color-text-2);
  font-size: 12px;
  font-weight: 600;

  .pill-icon {
    color: rgb(var(--primary-6));
  }
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

  &.primary {
    border-color: rgba(var(--primary-6), 0.35);
    background: radial-gradient(700px 260px at 10% 0%, rgba(var(--primary-6), 0.18), transparent 55%), #fff;
  }
}

.stat-value {
  font-size: 16px;
  font-weight: 900;
  color: var(--color-text-1);
  line-height: 1.1;
}

.stat-label {
  margin-top: 8px;
  font-size: 12px;
  color: var(--color-text-3);
}

.activity-tabs {
  margin-top: 10px;

  :deep(.arco-tabs-nav-tab) {
    justify-content: center;
  }

  :deep(.arco-tabs-nav) {
    margin-bottom: 8px;
  }

  :deep(.arco-tabs-tab) {
    padding: 10px 16px;
  }
}

.tab-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 18px;
  padding-top: 12px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.main-col {
  min-width: 0;
}

.side-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.side-card {
  border: 1px solid var(--color-border-2);
  border-radius: 14px;
  background: #fff;
  padding: 14px 14px;
}

.side-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 900;
  color: var(--color-text-1);
}

.side-body {
  margin-top: 10px;
  color: var(--color-text-2);
  font-size: 12px;
  line-height: 1.7;
}

.bullet {
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--color-border-2);
  background: var(--color-fill-1);
  margin-bottom: 10px;
}

.side-hint {
  color: var(--color-text-3);
  font-size: 12px;
}

.tag-wall {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.wall-tag {
  border-radius: 999px;
}

.kv {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 8px 0;

  .k {
    color: var(--color-text-3);
  }

  .v {
    font-weight: 900;
    color: var(--color-text-1);
  }
}

.divider {
  height: 1px;
  background: var(--color-border-2);
  margin: 8px 0 10px;
}

.rec-item {
  padding: 10px 10px;
  border-radius: 12px;
  border: 1px solid var(--color-border-2);
  background: var(--color-fill-1);
  margin-bottom: 10px;
}

.rec-title {
  font-size: 13px;
  font-weight: 800;
  color: var(--color-text-1);
  line-height: 1.35;
}

.rec-meta {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: var(--color-text-3);

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
  }
}

/* Upcoming Activities */
.upcoming-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.upcoming-card {
  border-radius: 12px;
  border: 1px solid var(--color-border-2);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.08);
    border-color: rgba(var(--primary-6), 0.3);
  }

  :deep(.arco-card-body) {
    padding: 18px;
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
  background:
    radial-gradient(140px 120px at 30% 20%, rgba(var(--primary-6), 0.22), transparent 55%), var(--color-fill-2);
  border-radius: 12px;
  color: rgb(var(--primary-6));
  flex-shrink: 0;

  .month {
    font-size: 14px;
    font-weight: 800;
  }

  .day {
    font-size: 28px;
    font-weight: 900;
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
    font-weight: 900;
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
    line-height: 1.7;
  }
}

.type-tag {
  border-radius: 999px;
}

.quick-tips {
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.tip {
  border: 1px solid var(--color-border-2);
  border-radius: 12px;
  padding: 10px 10px;
  background: var(--color-fill-1);
  font-size: 12px;
  color: var(--color-text-2);

  .tip-k {
    color: var(--color-text-3);
    margin-right: 6px;
  }

  .tip-v {
    font-weight: 600;
    color: var(--color-text-1);
  }
}

.join-btn {
  padding: 0 18px;
}

/* Past Activities */
.past-grid {
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

.activity-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  border: 1px solid var(--color-border-2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.1);
    border-color: rgba(var(--primary-6), 0.3);

    .read-more {
      opacity: 1;
      transform: translateX(0);
    }

    .card-cover {
      transform: scale(1.06);
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
  transition: transform 0.6s;
  position: relative;
}

.cover-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 12px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.08) 55%, rgba(0, 0, 0, 0.55));
}

.cover-date {
  align-self: flex-start;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: rgba(255, 255, 255, 0.92);
  font-size: 12px;
  font-weight: 800;
  backdrop-filter: blur(8px);
}

.cover-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.cover-tag {
  border-radius: 999px;
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

.card-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 6px;
}

.foot-left {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text-3);
  font-size: 12px;

  .foot-icon {
    color: rgb(var(--primary-6));
  }

  .foot-text {
    font-weight: 600;
  }
}
</style>
