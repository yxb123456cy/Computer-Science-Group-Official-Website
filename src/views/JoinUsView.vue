<script setup lang="ts">
import {
  IconCheckCircle,
  IconMessage,
  IconUserAdd,
} from '@arco-design/web-vue/es/icon'
import { ref } from 'vue'

const activeKey = ref(['1'])

const faqs = [
  {
    q: '没有编程基础可以加入吗？',
    a: '当然可以！我们非常欢迎零基础的同学。社团会定期举办基础培训和讲座，只要你有学习的热情和坚持的毅力，我们愿意陪你一起成长。',
  },
  {
    q: '社团活动时间一般是什么时候？',
    a: '常规技术分享通常安排在周五晚上或周末下午，项目开发时间则由各小组自行协调。我们会尽量避开考试周和必修课时间。',
  },
  {
    q: '加入社团需要面试吗？',
    a: '是的，我们会进行简单的面试。面试主要考察你的学习态度、沟通能力和对技术的兴趣，而不是考查你现在的技术水平。放松心态，展示真实的自己即可。',
  },
]

const departments = [
  {
    name: '技术部',
    reqs: [
      '对计算机技术有浓厚兴趣',
      '有较强的自学能力和钻研精神',
      '了解至少一门编程语言 (C/C++/Python/Java/JS) 者优先',
    ],
  },
  {
    name: '策划部',
    reqs: [
      '思维活跃，有创意',
      '具备良好的沟通协调能力',
      '有活动策划经验者优先',
    ],
  },
  {
    name: '宣传部',
    reqs: [
      '具备一定的审美能力',
      '会使用 PS/PR/Canva 等设计剪辑工具者优先',
      '有新媒体运营经验者优先',
    ],
  },
]
</script>

<template>
  <div class="join-view container">
    <div class="header">
      <h1 class="page-title">
        加入我们
      </h1>
      <p class="page-desc">
        寻找志同道合的你，一起探索技术的星辰大海
      </p>
    </div>

    <!-- Recruit Info -->
    <div class="recruit-info">
      <div class="info-card highlight">
        <h2 class="card-title">
          <IconUserAdd /> 招新对象
        </h2>
        <p class="card-text">
          面向全校所有专业在读学生，不限年级，不限基础。
        </p>
      </div>
      <div class="info-card">
        <h2 class="card-title">
          <IconClockCircle /> 招新时间
        </h2>
        <p class="card-text">
          集中招新：每年 9 月（秋招）和 3 月（春招）<br>
          常态化招新：全年接受申请，每月集中面试一次
        </p>
      </div>
    </div>

    <!-- Requirements -->
    <section class="section">
      <h2 class="section-title">
        部门要求
      </h2>
      <div class="req-grid">
        <a-card v-for="dept in departments" :key="dept.name" :title="dept.name" class="req-card" hoverable>
          <ul class="req-list">
            <li v-for="(req, idx) in dept.reqs" :key="idx">
              <IconCheckCircle class="icon" /> {{ req }}
            </li>
          </ul>
        </a-card>
      </div>
    </section>

    <!-- Process -->
    <section class="section">
      <h2 class="section-title">
        加入流程
      </h2>
      <div class="process-steps">
        <a-steps :current="1" label-placement="vertical">
          <a-step title="在线报名" description="填写报名表" />
          <a-step title="加入招新群" description="获取最新通知" />
          <a-step title="面试交流" description="双向了解" />
          <a-step title="正式录用" description="开启社团之旅" />
        </a-steps>
      </div>
    </section>

    <!-- Join Action -->
    <section class="join-action-area">
      <div class="action-card">
        <h3>准备好加入了吗？</h3>
        <p>扫描下方二维码加入 2024 秋季招新咨询群</p>
        <div class="qr-code-placeholder">
          QQ群二维码
        </div>
        <a-button type="primary" size="large" shape="round" class="apply-btn">
          填写在线报名表
        </a-button>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section faq-section">
      <h2 class="section-title">
        <IconMessage /> 常见问题
      </h2>
      <a-collapse v-model:active-key="activeKey" accordion class="faq-collapse">
        <a-collapse-item v-for="(item, idx) in faqs" :key="String(idx + 1)" :header="item.q">
          <p>{{ item.a }}</p>
        </a-collapse-item>
      </a-collapse>
    </section>
  </div>
</template>

<style scoped lang="less">
.join-view {
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
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--color-text-1);
}

/* Recruit Info */
.recruit-info {
  display: flex;
  gap: 24px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.info-card {
  flex: 1;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid var(--color-border-2);
  text-align: center;

  &.highlight {
    background: linear-gradient(135deg, #e8f3ff 0%, #ffffff 100%);
    border-color: #bacefd;
  }

  .card-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: var(--color-text-1);
  }

  .card-text {
    font-size: 16px;
    color: var(--color-text-2);
    line-height: 1.6;
  }
}

/* Requirements */
.req-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.req-card {
  border-radius: 12px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  .req-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: 12px;
      color: var(--color-text-2);
      line-height: 1.5;

      .icon {
        color: var(--primary-color);
        margin-top: 3px;
        flex-shrink: 0;
      }
    }
  }
}

/* Process */
.process-steps {
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  padding: 40px;
  border-radius: 12px;
}

/* Join Action */
.join-action-area {
  margin-bottom: 60px;
}

.action-card {
  background: var(--color-fill-2);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 24px;
    margin-bottom: 12px;
  }

  p {
    color: var(--color-text-3);
    margin-bottom: 24px;
  }

  .qr-code-placeholder {
    width: 160px;
    height: 160px;
    background: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-4);
    border: 1px dashed var(--color-border-3);
    margin-bottom: 24px;
  }

  .apply-btn {
    padding: 0 40px;
  }
}

/* FAQ */
.faq-collapse {
  max-width: 800px;
  margin: 0 auto;
  background: transparent;

  :deep(.arco-collapse-item-header) {
    font-size: 16px;
    font-weight: 500;
  }

  :deep(.arco-collapse-item-content) {
    background-color: #fff;
    font-size: 15px;
    line-height: 1.6;
    color: var(--color-text-2);
  }
}
</style>
