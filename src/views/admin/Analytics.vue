<script setup lang="ts">
import { IconBarChart } from '@arco-design/web-vue/es/icon'
</script>

<template>
  <div class="admin-page">
    <div class="page-head">
      <div class="title">
        数据分析
      </div>
      <div class="sub">
        访问趋势、内容热度与运营数据总览
      </div>
    </div>

    <div class="grid">
      <a-card class="panel" :bordered="false">
        <div class="panel-title">
          <IconBarChart /> 核心指标
        </div>
        <div class="kpi-grid">
          <div class="kpi">
            <div class="kpi-value">
              —
            </div>
            <div class="kpi-label">
              PV
            </div>
          </div>
          <div class="kpi">
            <div class="kpi-value">
              —
            </div>
            <div class="kpi-label">
              UV
            </div>
          </div>
          <div class="kpi">
            <div class="kpi-value">
              —
            </div>
            <div class="kpi-label">
              平均停留
            </div>
          </div>
          <div class="kpi">
            <div class="kpi-value">
              —
            </div>
            <div class="kpi-label">
              转化
            </div>
          </div>
        </div>
      </a-card>

      <div class="two-col">
        <a-card class="panel" title="趋势图" :bordered="false">
          <a-empty description="后续接入统计数据后展示" />
        </a-card>
        <a-card class="panel" title="热门页面" :bordered="false">
          <a-empty description="后续接入统计数据后展示" />
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
  flex-direction: column;
  gap: 6px;
}

.title {
  font-size: 18px;
  font-weight: 900;
  color: var(--color-text-1);
}

.sub {
  font-size: 12px;
  color: var(--color-text-3);
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

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.kpi {
  border: 1px solid var(--color-border-2);
  border-radius: 14px;
  padding: 12px 12px;
  background: var(--color-fill-1);
}

.kpi-value {
  font-size: 18px;
  font-weight: 900;
  color: var(--color-text-1);
  line-height: 1.1;
}

.kpi-label {
  margin-top: 6px;
  font-size: 12px;
  color: var(--color-text-3);
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}
</style>

