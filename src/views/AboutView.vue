<script setup lang="ts">
import {
  IconBulb,
  IconCode,
  IconPhone,
  IconUserGroup,
} from '@arco-design/web-vue/es/icon'
import team1 from '@/assets/svg/team1.svg'
import team2 from '@/assets/svg/team2.svg'
import team3 from '@/assets/svg/team3.svg'
// Mock Data
const introText = `计算机科技小组隶属于计算机学部实验中心，配有两间学生创新实验室，活动场所达近千平米，仪器设备齐全。在计算机学部团总支、学生会领导下，开展科技创新比赛，组织我院学生积极学习相关竞赛知识。`

const departments = [
  {
    name: '前后端软件项目开发组',
    desc: '以项目制作为主，筹备挑战杯、创青春等实体创作比赛。负责项目开题与选择，以及小组网站维护、小程序与APP开发。',
    manager: '牛文俊',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    icon: IconCode,
  },
  {
    name: '算法编程学习与竞赛组',
    desc: '负责组织算法编程学习活动，参与各类算法竞赛。',
    manager: '谢语馨',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    icon: IconBulb,
  },
  {
    name: '网络空间安全组',
    desc: '参与学习各种的网络安全知识，参与各类网络安全竞赛（如CTF、网络安全攻防大赛等）。',
    manager: '王五',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    icon: IconPhone,
  },
  {
    name: '行政办',
    desc: '负责计算机科技小组的日常管理，包括活动组织、会员管理、赞助合作等。',
    manager: '刘欣怡',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    icon: IconUserGroup,
  },
]

const historyEvents = [
  {
    year: '2024',
    title: '新增AI兴趣小组',
    desc: '紧跟技术潮流，成立人工智能兴趣小组，探索大模型应用落地。',
  },
  {
    year: '2023',
    title: '获省级竞赛一等奖',
    desc: '在“蓝桥杯”全国软件和信息技术专业人才大赛中斩获省级一等奖3项。',
  },
  {
    year: '2022',
    title: '社团正式成立',
    desc: '由一群热爱计算机技术的学生自发组织成立，首批成员30人。',
  },
]

const honors = [
  {
    title: '校级优秀学生组织',
    image: team1,
  },
  {
    title: '蓝桥杯优秀组织奖',
    image: team2,
  },
  {
    title: '竞赛获奖优秀组织',
    image: team3,
  },
]
</script>

<template>
  <div class="about-view">
    <!-- 关于我们 -->
    <section class="section-container container intro-section">
      <h1 class="page-title">
        关于我们
      </h1>
      <div class="intro-content">
        <p v-for="(line, index) in introText.split('\n')" :key="index">
          {{ line }}
        </p>
      </div>
    </section>

    <!-- 组织架构 -->
    <section class="section-container bg-gray">
      <div class="container">
        <h2 class="section-title">
          组织架构
        </h2>
        <div class="dept-grid">
          <a-card v-for="dept in departments" :key="dept.name" hoverable class="dept-card">
            <div class="dept-content">
              <div class="dept-icon">
                <component :is="dept.icon" size="32" />
              </div>
              <h3 class="dept-name">
                {{ dept.name }}
              </h3>
              <p class="dept-desc">
                {{ dept.desc }}
              </p>
            </div>
          </a-card>
        </div>
      </div>
    </section>

    <!-- History -->
    <section class="section-container container">
      <h2 class="section-title">
        发展历程
      </h2>
      <div class="history-timeline">
        <a-timeline mode="alternate">
          <a-timeline-item v-for="event in historyEvents" :key="event.year" label-position="relative">
            <template #dot>
              <div class="timeline-dot" />
            </template>
            <a-card class="history-card" hoverable>
              <div class="history-year">
                {{ event.year }}
              </div>
              <h3 class="history-title">
                {{ event.title }}
              </h3>
              <p class="history-desc">
                {{ event.desc }}
              </p>
            </a-card>
          </a-timeline-item>
        </a-timeline>
      </div>
    </section>

    <!-- Honors -->
    <section class="section-container bg-gray">
      <div class="container">
        <h2 class="section-title">
          荣誉资质
        </h2>
        <div class="honors-grid">
          <div v-for="(honor, index) in honors" :key="index" class="honor-item">
            <a-image
              :src="honor.image"
              :title="honor.title"
              :description="honor.title"
              width="100%"
              height="240px"
              fit="contain"
              class="honor-image"
              footer-position="outer"
            />
            <p class="honor-title">
              {{ honor.title }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="less">
.about-view {
  width: 100%;
}

.section-container {
  padding: 8px 20px;
}

.bg-gray {
  background-color: var(--color-fill-1);
}

.page-title {
  text-align: center;
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

.section-title {
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  color: var(--color-text-1);
  margin-bottom: 12px;
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 6px;
    background: var(--primary-color);
    margin: 20px auto 0;
    border-radius: 3px;
  }
}

/* Intro */
.intro-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

  p {
    font-size: 18px;
    line-height: 1.8;
    color: var(--color-text-2);
    margin-bottom: 12px;
  }
}

/* Departments */
.dept-grid {
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

.dept-card {
  border-radius: 18px;
  border: 1px solid transparent;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .dept-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px 0;
  }

  .dept-icon {
    width: 64px;
    height: 64px;
    background: var(--color-fill-2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    margin-bottom: 10px;
  }

  .dept-name {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 8px;
    color: var(--color-text-1);
  }

  .dept-desc {
    font-size: 14px;
    color: var(--color-text-3);
    margin-bottom: 24px;
    height: 42px; /* Fixed height for alignment */
    line-height: 1.5;
  }

  .dept-manager {
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--color-fill-1);
    padding: 8px 16px;
    border-radius: 20px;

    .manager-name {
      font-size: 14px;
      font-weight: 500;
      color: var(--color-text-2);
    }
  }
}

/* History */
.history-timeline {
  max-width: 1000px;
  margin: 0 auto;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  background: var(--primary-color);
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px var(--primary-color);
}

.history-card {
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
  margin: 0 20px;

  .history-year {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 8px;
  }

  .history-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .history-desc {
    color: var(--color-text-3);
    line-height: 1.6;
  }
}

/* Honors */
.honors-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.honor-item {
  text-align: center;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  transition: all 0.3s;
  border: 1px solid transparent;
  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  :deep(.arco-image) {
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .honor-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-text-1);
  }
}
</style>
