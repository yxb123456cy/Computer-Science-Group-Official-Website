<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({
  username: '',
  password: '',
})

const loading = ref(false)
const errorMessage = ref('')

async function handleSubmit() {
  if (!form.username || !form.password) {
    errorMessage.value = '请输入用户名和密码'
    return
  }

  loading.value = true
  errorMessage.value = ''

  // Simulate login request
  setTimeout(() => {
    loading.value = false
    if (form.username === 'admin' && form.password === 'admin') {
      router.push('/')
    }
    else {
      errorMessage.value = '用户名或密码错误 (默认 admin/admin)'
    }
  }, 1000)
}
</script>

<template>
  <div class="login-page">
    <div class="page-content">
      <div class="left-panel">
        <div class="brand-row">
          <img class="brand-logo" src="@/assets/images/team-logo.png" alt="Logo">
          <span class="brand-name">计算机科技小组</span>
        </div>

        <h1 class="slogan">
          智慧智能云，计算无限可能
        </h1>

        <div class="features">
          <div class="feature-item">
            全面 / 落地的 AI
          </div>
          <div class="feature-item">
            开放 / 安全的 Big Data
          </div>
          <div class="feature-item">
            持续 / 先进的 Cloud
          </div>
        </div>

        <div class="line" />

        <div class="promo-card">
          <div class="promo-title">
            配置升级 优惠不断
          </div>
          <div class="promo-desc">
            企业专场正式开放 全场24款云服务器随意挑
          </div>
        </div>

        <div class="legal">
          <div class="legal-line">
            © 2026 南昌航空大学科技学院-计算机科技小组 版权所有
          </div>
          <div class="legal-line">
            后台系统仅供管理员使用
          </div>
        </div>
      </div>

      <div class="right-panel">
        <div class="login-card">
          <div class="card-header">
            <div class="card-title">
              后台管理登录
            </div>
            <div class="card-subtitle">
              仅支持账号密码登录
            </div>
          </div>

          <div class="form-area">
            <a-form :model="form" layout="vertical" @submit="handleSubmit">
              <a-form-item field="username" hide-label>
                <a-input
                  v-model="form.username"
                  placeholder="用户名"
                  size="large"
                  allow-clear
                />
              </a-form-item>

              <a-form-item field="password" hide-label>
                <a-input-password
                  v-model="form.password"
                  placeholder="密码"
                  size="large"
                  allow-clear
                />
              </a-form-item>

              <div v-if="errorMessage" class="error-msg">
                {{ errorMessage }}
              </div>

              <a-button
                type="primary"
                html-type="submit"
                long
                size="large"
                :loading="loading"
                class="login-btn"
              >
                登录
              </a-button>
            </a-form>

            <div class="hint">
              <div class="hint-title">
                温馨提示
              </div>
              <div class="hint-text">
                当前仅支持账号密码登录，不提供注册入口。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.login-page {
  min-height: 100vh;
  background: #fff;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 36%;
    background: var(--primary-color);
  }
}

.page-content {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 520px;
  align-items: center;
  column-gap: 80px;
  padding: 0 80px;
}

.left-panel {
  padding-right: 40px;

  .brand-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 60px;
  }

  .brand-logo {
    width: 26px;
    height: 26px;
  }

  .brand-name {
    font-size: 18px;
    font-weight: 700;
    color: var(--color-text-1);
    letter-spacing: 0.5px;
  }

  .slogan {
    font-size: 44px;
    font-weight: 800;
    color: var(--color-text-1);
    letter-spacing: 1px;
    margin: 0 0 32px 0;
    line-height: 1.2;
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: var(--color-text-3);
    font-size: 18px;
    margin-bottom: 28px;
  }

  .line {
    width: 480px;
    max-width: 100%;
    height: 1px;
    background: var(--color-border-2);
    margin: 28px 0 32px;
  }

  .promo-card {
    width: 520px;
    max-width: 100%;
    background: var(--primary-color);
    color: #fff;
    border-radius: 6px;
    padding: 26px 30px;
    box-shadow: 0 12px 30px rgba(var(--primary-6), 0.25);
    margin-bottom: 46px;
  }

  .promo-title {
    font-size: 22px;
    font-weight: 800;
    margin-bottom: 10px;
  }

  .promo-desc {
    font-size: 14px;
    opacity: 0.9;
    line-height: 1.6;
  }

  .legal {
    color: var(--color-text-4);
    font-size: 12px;
    line-height: 1.8;
  }
}

.right-panel {
  display: flex;
  justify-content: center;
}

.login-card {
  width: 460px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
  padding: 38px 46px 34px;
}

.card-header {
  margin-bottom: 28px;
}

.card-title {
  font-size: 22px;
  font-weight: 800;
  color: var(--color-text-1);
  line-height: 1.2;
}

.card-subtitle {
  margin-top: 10px;
  color: var(--color-text-3);
  font-size: 13px;
}

.form-area {
  :deep(.arco-form-item) {
    margin-bottom: 22px;
  }

  :deep(.arco-input-wrapper) {
    border-radius: 0;
    height: 46px;
  }

  :deep(.arco-input) {
    font-size: 14px;
  }
}

.login-btn {
  height: 46px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 6px;
  box-shadow: 0 10px 22px rgba(var(--primary-6), 0.28);
}

.error-msg {
  color: rgb(var(--danger-6));
  font-size: 13px;
  margin: 2px 0 14px;
  background: rgba(var(--danger-6), 0.1);
  padding: 8px 10px;
  border-radius: 4px;
}

.hint {
  margin-top: 30px;
  color: var(--color-text-3);
  font-size: 13px;
  line-height: 1.7;
}

.hint-title {
  color: var(--color-text-2);
  font-weight: 700;
  margin-bottom: 6px;
}

@media (max-width: 1024px) {
  .login-page::after {
    width: 100%;
  }

  .page-content {
    grid-template-columns: 1fr;
    padding: 0 20px;
    justify-items: center;
  }

  .left-panel {
    display: none;
  }

  .login-card {
    width: min(460px, 92vw);
  }
}
</style>
