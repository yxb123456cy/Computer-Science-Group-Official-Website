<script setup lang="ts">
import {
  IconGithub,
  IconTrophy,
  IconUser,
} from '@arco-design/web-vue/es/icon'

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
  </div>
</template>

<style scoped lang="less">
.members-view {
  padding-top: 40px;
  padding-bottom: 60px;
}

.header {
  text-align: center;
  margin-bottom: 50px;

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

  &:hover {
    transform: translateY(-5px);
  }

  .avatar {
    margin-bottom: 16px;
    border: 2px solid var(--color-fill-3);
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
    border-radius: 4px;
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
    border-color: var(--primary-color);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
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
</style>
