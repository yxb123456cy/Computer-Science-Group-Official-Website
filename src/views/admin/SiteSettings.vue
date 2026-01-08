<script setup lang="ts">
import {
  IconCheckCircle,
  IconDriveFile,
  IconSettings,
} from '@arco-design/web-vue/es/icon'
import { computed, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => (route.meta?.title as string) || '页面设置')
const desc = computed(() => (route.meta?.desc as string) || '维护官网前台页面的基础信息与展示配置')

const form = reactive({
  pageTitle: '',
  pageSubtitle: '',
  status: 'draft',
})

const saving = ref(false)

function save() {
  saving.value = true
  setTimeout(() => {
    saving.value = false
  }, 600)
}
</script>

<template>
  <div class="admin-page">
    <div class="page-head">
      <div class="head-left">
        <div class="title">
          {{ title }}
        </div>
        <div class="sub">
          {{ desc }}
        </div>
      </div>
      <div class="head-right">
        <a-button type="primary" shape="round" :loading="saving" @click="save">
          保存配置
        </a-button>
      </div>
    </div>

    <div class="grid">
      <a-card class="panel" :bordered="false">
        <div class="panel-title">
          <IconSettings /> 基础信息
        </div>
        <a-form :model="form" layout="vertical">
          <a-form-item label="页面标题">
            <a-input v-model="form.pageTitle" placeholder="例如：资源导航 / 核心活动" allow-clear />
          </a-form-item>
          <a-form-item label="页面副标题">
            <a-input v-model="form.pageSubtitle" placeholder="用于页面顶部副标题展示" allow-clear />
          </a-form-item>
          <a-form-item label="发布状态">
            <a-select v-model="form.status">
              <a-option value="draft">
                草稿
              </a-option>
              <a-option value="published">
                已发布
              </a-option>
            </a-select>
          </a-form-item>
        </a-form>
      </a-card>

      <div class="two-col">
        <a-card class="panel" :bordered="false">
          <div class="panel-title">
            <IconDriveFile /> 内容模块
          </div>
          <div class="module-list">
            <div class="module-item">
              <div class="module-left">
                <div class="module-name">
                  头部信息区
                </div>
                <div class="module-desc">
                  标题、副标题、统计信息与入口按钮
                </div>
              </div>
              <a-tag color="arcoblue">
                已启用
              </a-tag>
            </div>
            <div class="module-item">
              <div class="module-left">
                <div class="module-name">
                  列表内容区
                </div>
                <div class="module-desc">
                  卡片列表、筛选与详情面板
                </div>
              </div>
              <a-tag color="arcoblue">
                已启用
              </a-tag>
            </div>
            <div class="module-item">
              <div class="module-left">
                <div class="module-name">
                  底部行动区
                </div>
                <div class="module-desc">
                  引导加入、咨询入口与推荐链接
                </div>
              </div>
              <a-tag color="gray">
                可选
              </a-tag>
            </div>
          </div>
        </a-card>

        <a-card class="panel" :bordered="false">
          <div class="panel-title">
            <IconCheckCircle /> 发布检查
          </div>
          <div class="check-grid">
            <div class="check-item">
              <div class="check-title">
                文案完整
              </div>
              <div class="check-sub">
                标题/描述/按钮文案
              </div>
            </div>
            <div class="check-item">
              <div class="check-title">
                链接可用
              </div>
              <div class="check-sub">
                外链、跳转、资源地址
              </div>
            </div>
            <div class="check-item">
              <div class="check-title">
                视觉一致
              </div>
              <div class="check-sub">
                间距、颜色、对齐与响应式
              </div>
            </div>
          </div>
          <a-alert type="info" class="hint" :show-icon="false">
            当前为静态演示页，后续可接入真实配置存储与发布流程
          </a-alert>
        </a-card>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.admin-page {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.page-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
}

.title {
  font-size: 18px;
  font-weight: 900;
  color: var(--color-text-1);
}

.sub {
  margin-top: 6px;
  font-size: 12px;
  color: var(--color-text-3);
  max-width: 720px;
}

.grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.panel {
  border-radius: 14px;
}

.panel-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 900;
  color: var(--color-text-1);
  margin-bottom: 12px;
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.module-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.module-item {
  border: 1px solid var(--color-border-2);
  border-radius: 14px;
  padding: 12px 12px;
  background: var(--color-fill-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.module-left {
  min-width: 0;
}

.module-name {
  font-weight: 900;
  color: var(--color-text-1);
  font-size: 13px;
}

.module-desc {
  margin-top: 8px;
  font-size: 12px;
  color: var(--color-text-3);
}

.check-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
}

.check-item {
  border: 1px solid var(--color-border-2);
  border-radius: 14px;
  padding: 12px 12px;
  background: var(--color-fill-1);
}

.check-title {
  font-weight: 900;
  color: var(--color-text-1);
  font-size: 13px;
}

.check-sub {
  margin-top: 8px;
  font-size: 12px;
  color: var(--color-text-3);
}

.hint {
  margin-top: 12px;
  border-radius: 14px;
}
</style>

