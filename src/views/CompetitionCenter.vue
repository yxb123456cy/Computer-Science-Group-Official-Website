<script setup lang="ts">
import {
  IconCalendar,
  IconLink,
  IconTrophy,
  IconUserGroup,
} from '@arco-design/web-vue/es/icon'
import { reactive, ref } from 'vue'
import ICPC from '@/assets/competition/ICPC.webp'
import BridgeCompetition from '@/assets/competition/蓝桥杯.png'
import DesignCompetition from '@/assets/competition/计算机设计大赛.png'

interface Competition {
  id: number
  title: string
  description: string
  image: string
  level: string
  organizer: string
  time: string
  url: string
  details: string
  tags: string[]
}

const competitions: Competition[] = [
  {
    id: 1,
    title: 'ACM-ICPC国际大学生程序设计竞赛',
    description: 'ACM国际大学生程序设计竞赛（英文全称：International Collegiate Programming Contest，简称ICPC），是全球计算机领域最具影响力的大学生竞赛之一。',
    image: ICPC,
    level: '国际级',
    organizer: 'ICPC基金会',
    time: '每年下半年',
    url: 'https://icpc.global/',
    details: 'ICPC 竞赛形式为团队赛，每队由 3 名队员组成。比赛期间，参赛队伍需要在 5 小时内解决 10-13 道算法题目。题目内容涵盖算法、数据结构、数学等多个领域。比赛强调团队协作、算法设计和编程实现能力。',
    tags: ['算法', '团队', 'C/C++', 'Java', 'Python'],
  },
  {
    id: 2,
    title: '蓝桥杯全国软件和信息技术专业人才大赛',
    description: '蓝桥杯大赛是由工业和信息化部人才交流中心主办的全国性高校学科竞赛，旨在促进软件和信息领域专业技术人才培养。',
    image: BridgeCompetition,
    level: '国家级',
    organizer: '工信部人才交流中心',
    time: '每年上半年',
    url: 'https://dasai.lanqiao.cn/',
    details: '蓝桥杯大赛分为个人赛和团队赛，涵盖 C/C++ 程序设计、Java 软件开发、Python 程序设计、Web 应用开发等多个科目。比赛注重基础编程能力和算法应用能力，是国内参与人数最多的计算机竞赛之一。',
    tags: ['算法', '个人', 'Java', 'C/C++', 'Python', 'Web'],
  },
  {
    id: 3,
    title: '中国大学生计算机设计大赛',
    description: '中国大学生计算机设计大赛是我国高校计算机教育领域的重要赛事，旨在激发大学生学习计算机知识和技能的兴趣和潜能。',
    image: DesignCompetition,
    level: '国家级',
    organizer: '教育部高等学校计算机类专业教学指导委员会',
    time: '每年暑期',
    url: 'http://jsjds.blcu.edu.cn/',
    details: '大赛作品内容分为软件应用与开发、微课与教学辅助、物联网应用、大数据应用、人工智能应用等多个类别。比赛形式为作品提交 + 现场答辩，强调创新能力和实际应用能力。',
    tags: ['创新', '项目', '答辩', '全栈'],
  },
]

const visible = ref(false)
const currentCompetition = reactive<Partial<Competition>>({})

function openDetails(comp: Competition) {
  Object.assign(currentCompetition, comp)
  visible.value = true
}

function handleOk() {
  visible.value = false
}

function handleCancel() {
  visible.value = false
}

function openOfficialSite(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="competition-center container">
    <div class="header">
      <h1 class="page-title">
        竞赛中心
      </h1>
      <p class="page-desc">
        汇集国内外优质计算机赛事，助力成员提升技术实力
      </p>
    </div>

    <div class="competition-list">
      <div v-for="comp in competitions" :key="comp.id" class="competition-item">
        <div class="item-cover" :style="{ backgroundImage: `url(${comp.image})` }" />
        <div class="item-content">
          <div class="content-header">
            <h2 class="item-title">
              {{ comp.title }}
            </h2>
            <a-tag color="#6495ED" class="level-tag">
              {{ comp.level }}
            </a-tag>
          </div>

          <div class="tags-row">
            <a-tag v-for="tag in comp.tags" :key="tag" size="small" color="#3CB371" class="tag-item">
              {{ tag }}
            </a-tag>
          </div>

          <p class="item-desc">
            {{ comp.description }}
          </p>

          <div class="meta-row">
            <div class="meta-item">
              <IconUserGroup class="icon" />
              <span>{{ comp.organizer }}</span>
            </div>
            <div class="meta-item">
              <IconCalendar class="icon" />
              <span>{{ comp.time }}</span>
            </div>
          </div>
        </div>
        <div class="item-actions">
          <a-button type="primary" class="action-btn" @click="openOfficialSite(comp.url)">
            <template #icon>
              <IconLink />
            </template>
            查看官网
          </a-button>
          <a-button class="action-btn" @click="openDetails(comp)">
            <template #icon>
              <IconTrophy />
            </template>
            查看详情
          </a-button>
        </div>
      </div>
    </div>

    <a-drawer
      :visible="visible"
      :width="500"
      unmount-on-close
      ok-text="关闭"
      :hide-cancel="true"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title>
        {{ currentCompetition.title }}
      </template>
      <div class="drawer-content">
        <div class="info-item">
          <span class="label">竞赛级别：</span>
          <a-tag color="#6495ED">
            {{ currentCompetition.level }}
          </a-tag>
        </div>
        <div class="info-item">
          <span class="label">主办单位：</span>
          <span class="value">{{ currentCompetition.organizer }}</span>
        </div>
        <div class="info-item">
          <span class="label">举办时间：</span>
          <span class="value"><IconCalendar /> {{ currentCompetition.time }}</span>
        </div>
        <a-divider />
        <div class="details-text">
          <h3>竞赛详情</h3>
          <p>{{ currentCompetition.details }}</p>
        </div>
        <a-divider />
        <a-button type="primary" round long @click="currentCompetition.url && openOfficialSite(currentCompetition.url)">
          前往官网报名
        </a-button>
      </div>
    </a-drawer>
  </div>
</template>

<style scoped lang="less">
.competition-center {
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
    margin-bottom: 16px;
  }

  .page-desc {
    font-size: 16px;
    color: var(--color-text-3);
  }
}

.competition-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.competition-item {
  display: flex;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  gap: 24px;
  transition: all 0.3s;
  border: 1px solid var(--color-border-2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    border-color: var(--primary-color);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.item-cover {
  width: 280px;
  height: 180px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  flex-shrink: 0;
  background-color: var(--color-fill-2);

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
}

.item-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; // Prevent flex item overflow
}

.content-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;

  .item-title {
    font-size: 20px;
    font-weight: 700;
    color: var(--color-text-1);
    margin: 0;
    line-height: 1.4;
  }
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.item-desc {
  font-size: 14px;
  color: var(--color-text-3);
  line-height: 1.6;
  margin-bottom: auto;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
}

.meta-row {
  display: flex;
  gap: 24px;
  margin-top: 16px;
  color: var(--color-text-3);
  font-size: 14px;

  .meta-item {
    display: flex;
    align-items: center;
    gap: 6px;

    .icon {
      font-size: 16px;
    }
  }
}

.item-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  min-width: 120px;
  border-left: 1px solid var(--color-border-1);
  padding-left: 24px;

  @media (max-width: 768px) {
    flex-direction: row;
    border-left: none;
    padding-left: 0;
    padding-top: 16px;
    border-top: 1px solid var(--color-border-1);
  }

  .action-btn {
    width: 100%;
  }
}

.drawer-content {
  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 15px;

    .label {
      width: 80px;
      color: var(--color-text-3);
    }

    .value {
      color: var(--color-text-1);
      font-weight: 500;
    }
  }

  .details-text {
    h3 {
      margin-bottom: 12px;
      color: var(--color-text-1);
    }

    p {
      color: var(--color-text-2);
      line-height: 1.6;
      text-align: justify;
    }
  }
}
</style>
