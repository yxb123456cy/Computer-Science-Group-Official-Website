<script setup lang="ts">
import {
  IconEmail,

  IconGithub,
  IconMessage,
  IconQq,
  IconWechat,
} from '@arco-design/web-vue/es/icon'
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  type: '',
  content: '',
})

const loading = ref(false)

async function handleSubmit() {
  loading.value = true
  // Simulate API call
  setTimeout(() => {
    loading.value = false
    form.name = ''
    form.email = ''
    form.type = ''
    form.content = ''
  }, 1000)
}

const contactInfo = [
  {
    icon: IconEmail,
    label: '官方邮箱',
    value: 'contact@cs-group.edu.cn',
    action: 'mailto:contact@cs-group.edu.cn',
  },

]

const socialMedia = [
  {
    icon: IconQq,
    name: '官方QQ群',
    desc: '123456789',
    color: '#12b7f5',
  },
  {
    icon: IconWechat,
    name: '微信公众号',
    desc: 'CS_Group_Official',
    color: '#07c160',
  },
  {
    icon: IconGithub,
    name: 'GitHub',
    desc: '@CS-Group',
    color: '#333',
  },
]
</script>

<template>
  <div class="contact-view container">
    <div class="header">
      <h1 class="page-title">
        联系我们
      </h1>
      <p class="page-desc">
        有任何疑问或建议？欢迎随时联系我们
      </p>
    </div>

    <div class="contact-layout">
      <!-- Left: Contact Info & Social -->
      <div class="contact-info-col">
        <section class="info-section">
          <h2 class="section-title">
            联系方式
          </h2>
          <div class="info-list">
            <div v-for="item in contactInfo" :key="item.label" class="info-item">
              <div class="icon-box">
                <component :is="item.icon" />
              </div>
              <div class="info-text">
                <span class="label">{{ item.label }}</span>
                <span class="value">{{ item.value }}</span>
              </div>
            </div>
          </div>
        </section>

        <section class="social-section">
          <h2 class="section-title">
            关注我们
          </h2>
          <div class="social-grid">
            <div v-for="item in socialMedia" :key="item.name" class="social-card">
              <component :is="item.icon" class="social-icon" :style="{ color: item.color }" />
              <div class="social-text">
                <span class="name">{{ item.name }}</span>
                <span class="desc">{{ item.desc }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Map Placeholder -->
        <div class="map-box">
          <div class="map-placeholder">
            <span>地图加载中...</span>
          </div>
        </div>
      </div>

      <!-- Right: Feedback Form -->
      <div class="feedback-col">
        <div class="form-card">
          <h2 class="form-title">
            <IconMessage /> 在线反馈
          </h2>
          <p class="form-desc">
            您的建议是我们进步的动力
          </p>

          <a-form :model="form" layout="vertical" @submit-success="handleSubmit">
            <a-form-item field="name" label="您的姓名" required>
              <a-input v-model="form.name" placeholder="请输入姓名" />
            </a-form-item>
            <a-form-item field="email" label="联系邮箱" required>
              <a-input v-model="form.email" placeholder="请输入邮箱地址" />
            </a-form-item>
            <a-form-item field="type" label="反馈类型" required>
              <a-select v-model="form.type" placeholder="请选择类型">
                <a-option>加入咨询</a-option>
                <a-option>商务合作</a-option>
                <a-option>活动建议</a-option>
                <a-option>网站Bug反馈</a-option>
                <a-option>其他</a-option>
              </a-select>
            </a-form-item>
            <a-form-item field="content" label="详细内容" required>
              <a-textarea
                v-model="form.content"
                placeholder="请输入您的反馈内容..."
                :auto-size="{ minRows: 4, maxRows: 6 }"
              />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit" long size="large" :loading="loading">
                提交反馈
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.contact-view {
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

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--color-text-1);
  border-left: 4px solid var(--primary-color);
  padding-left: 12px;
}

/* Info List */
.info-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--color-border-2);

  .icon-box {
    width: 40px;
    height: 40px;
    background: var(--color-fill-2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: var(--primary-color);
  }

  .info-text {
    display: flex;
    flex-direction: column;

    .label {
      font-size: 12px;
      color: var(--color-text-3);
    }

    .value {
      font-size: 16px;
      font-weight: 500;
      color: var(--color-text-1);
    }
  }
}

/* Social Grid */
.social-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 40px;
}

.social-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--color-border-2);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }

  .social-icon {
    font-size: 24px;
  }

  .social-text {
    display: flex;
    flex-direction: column;

    .name {
      font-size: 14px;
      font-weight: 500;
      color: var(--color-text-1);
    }

    .desc {
      font-size: 12px;
      color: var(--color-text-3);
    }
  }
}

/* Map */
.map-box {
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--color-border-2);
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background: var(--color-fill-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--color-text-3);
}

/* Form */
.form-card {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);

  .form-title {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .form-desc {
    color: var(--color-text-3);
    margin-bottom: 24px;
  }
}
</style>
