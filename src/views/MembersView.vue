<script setup lang="ts">
import {
  IconGithub,
  IconTrophy,
  IconUser,
} from '@arco-design/web-vue/es/icon'
import { computed } from 'vue'

const coreTeam = [
  {
    name: '张三',
    role: '社长',
    major: '计算机科学与技术 2022级',
    bio: '全栈开发者，热爱开源，致力于打造极致用户体验。',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    tags: ['Vue', 'Node.js', 'Flutter'],
  },
  {
    name: '李四',
    role: '技术部部长',
    major: '软件工程 2022级',
    bio: '算法爱好者，ACM 银牌得主，喜欢钻研底层原理。',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    tags: ['C++', 'Algorithm', 'Linux'],
  },
  {
    name: '王五',
    role: '副社长',
    major: '信息安全 2022级',
    bio: 'CTF 选手，关注网络安全与数据隐私保护。',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    tags: ['Web Security', 'Python', 'Go'],
  },
  {
    name: '赵六',
    role: '策划部部长',
    major: '数字媒体技术 2023级',
    bio: '创意无限，擅长活动策划与视觉设计。',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    tags: ['Design', 'Event Planning'],
  },
]

const alumni = [
  {
    name: '陈七',
    company: '字节跳动',
    position: '前端开发工程师',
    achievement: '2023届毕业生，校招 SSP Offer',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cd8f09e234970406ca44d864147c.png~tplv-uwbnlip3yd-webp.webp',
  },
  {
    name: '周八',
    company: '腾讯',
    position: '后台开发工程师',
    achievement: 'ICPC 区域赛金牌，ACM 校队前队长',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cd8f09e234970406ca44d864147c.png~tplv-uwbnlip3yd-webp.webp',
  },
]

const coreCount = computed(() => coreTeam.length)
const alumniCount = computed(() => alumni.length)
const topSkills = computed(() => {
  const counter = new Map<string, number>()
  coreTeam.forEach((m) => {
    m.tags.forEach((t) => {
      counter.set(t, (counter.get(t) || 0) + 1)
    })
  })
  return [...counter.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([t]) => t)
})
</script>

<template>
  <div class="members-view container">
    <div class="header">
      <h1 class="page-title">
        成员风采
      </h1>
      <p class="page-desc">
        聚是一团火，散是满天星
      </p>
    </div>

    <div class="hero-strip">
      <div class="hero-left">
        <div class="hero-title">
          用作品与热爱，连接每一位同路人
        </div>
        <div class="hero-sub">
          核心团队负责技术沉淀与活动组织，优秀校友持续在行业发光
        </div>
        <div class="hero-chips">
          <a-tag v-for="s in topSkills" :key="s" color="arcoblue" class="chip">
            {{ s }}
          </a-tag>
        </div>
      </div>
      <div class="hero-right">
        <div class="stat-grid">
          <div class="stat-card">
            <div class="stat-value">
              {{ coreCount }}
            </div>
            <div class="stat-label">
              核心成员
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-value">
              {{ alumniCount }}
            </div>
            <div class="stat-label">
              优秀校友
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-value">
              分享
            </div>
            <div class="stat-label">
              技术沉淀
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-value">
              成长
            </div>
            <div class="stat-label">
              彼此成就
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Core Team -->
    <section class="section">
      <h2 class="section-title">
        <IconUser /> 现任核心团队
      </h2>
      <div class="team-grid">
        <a-card v-for="member in coreTeam" :key="member.name" class="member-card" hoverable>
          <div class="member-info">
            <a-avatar :size="80" class="avatar">
              <img :src="member.avatar" alt="Avatar">
            </a-avatar>
            <h3 class="name">
              {{ member.name }}
            </h3>
            <span class="role">{{ member.role }}</span>
            <p class="major">
              {{ member.major }}
            </p>
            <div class="tags">
              <a-tag v-for="tag in member.tags" :key="tag" size="small" color="arcoblue">
                {{ tag }}
              </a-tag>
            </div>
            <p class="bio">
              {{ member.bio }}
            </p>
          </div>
          <template #actions>
            <span class="icon-btn"><IconGithub /></span>
          </template>
        </a-card>
      </div>
    </section>

    <!-- Alumni -->
    <section class="section">
      <h2 class="section-title">
        <IconTrophy /> 优秀毕业生 / 校友
      </h2>
      <div class="alumni-grid">
        <div v-for="alum in alumni" :key="alum.name" class="alumni-card">
          <a-avatar :size="64" shape="square">
            <img :src="alum.avatar" alt="Avatar">
          </a-avatar>
          <div class="alumni-info">
            <div class="alumni-header">
              <h3 class="name">
                {{ alum.name }}
              </h3>
              <a-tag color="gold" size="small">
                {{ alum.company }}
              </a-tag>
            </div>
            <p class="position">
              {{ alum.position }}
            </p>
            <p class="achievement">
              {{ alum.achievement }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-card">
        <div class="cta-main">
          <div class="cta-title">
            想成为下一位成员吗？
          </div>
          <div class="cta-sub">
            现在就加入我们，一起做项目、打比赛、沉淀作品集
          </div>
        </div>
        <a-button type="primary" shape="round" size="large" class="cta-btn" href="#/join">
          去加入
        </a-button>
      </div>
    </section>
  </div>
</template>

<style scoped lang="less">
.members-view {
  padding-top: 8px;
  padding-bottom: 60px;
}

.header {
  text-align: center;
  margin-bottom: 50px;

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
  grid-template-columns: 1fr 520px;
  gap: 18px;
  border: 1px solid var(--color-border-2);
  border-radius: 14px;
  padding: 20px 20px;
  background:
    radial-gradient(1000px 420px at 20% 0%, rgba(var(--primary-6), 0.16), transparent 55%),
    radial-gradient(700px 340px at 90% 30%, rgba(var(--primary-6), 0.10), transparent 55%),
    #fff;
  margin-bottom: 26px;

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

.section {
  margin-bottom: 60px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text-1);
  padding-left: 10px;
  border-left: 4px solid var(--primary-color);
}

/* Core Team */
.team-grid {
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

.member-card {
  text-align: center;
  border-radius: 12px;
  transition: all 0.3s;
  border: 1px solid var(--color-border-2);
  overflow: hidden;

  :deep(.arco-card-body) {
    padding-top: 22px;
  }

  &::before {
    content: '';
    display: block;
    height: 56px;
    background: linear-gradient(135deg, rgba(var(--primary-6), 0.22), rgba(var(--primary-6), 0.06));
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
    border-color: rgb(var(--primary-6));
  }

  .avatar {
    margin-top: -40px;
    margin-bottom: 14px;
    border: 3px solid #fff;
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.08);
  }

  .name {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 4px;
    color: var(--color-text-1);
  }

  .role {
    display: inline-block;
    font-size: 12px;
    color: var(--primary-color);
    background: rgba(var(--primary-6), 0.1);
    padding: 2px 8px;
    border-radius: 999px;
    margin-bottom: 8px;
  }

  .major {
    font-size: 13px;
    color: var(--color-text-3);
    margin-bottom: 12px;
  }

  .tags {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
  }

  .bio {
    font-size: 14px;
    color: var(--color-text-2);
    line-height: 1.5;
    height: 42px;
    overflow: hidden;
  }
}

.icon-btn {
  cursor: pointer;
  color: var(--color-text-3);
  transition: color 0.3s;

  &:hover {
    color: var(--color-text-1);
  }
}

/* Alumni */
.alumni-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.alumni-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--color-border-2);
  transition: all 0.3s;

  &:hover {
    border-color: rgb(var(--primary-6));
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
  }
}

.alumni-info {
  flex: 1;

  .alumni-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 6px;

    .name {
      font-size: 18px;
      font-weight: 600;
      color: var(--color-text-1);
      margin: 0;
    }
  }

  .position {
    font-size: 14px;
    color: var(--color-text-2);
    margin-bottom: 4px;
  }

  .achievement {
    font-size: 13px;
    color: var(--color-text-3);
  }
}

.cta-section {
  margin-top: 10px;
}

.cta-card {
  border: 1px solid var(--color-border-2);
  border-radius: 16px;
  padding: 22px 22px;
  background:
    radial-gradient(900px 320px at 10% 10%, rgba(var(--primary-6), 0.18), transparent 55%),
    #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.cta-title {
  font-size: 16px;
  font-weight: 900;
  color: var(--color-text-1);
}

.cta-sub {
  margin-top: 10px;
  font-size: 13px;
  color: var(--color-text-3);
  line-height: 1.7;
}

.cta-btn {
  flex-shrink: 0;
  padding: 0 22px;
}
</style>
