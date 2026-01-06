<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
import {
  IconCode,
  IconCopy,
  IconLock,
  IconRefresh,
} from '@arco-design/web-vue/es/icon'
import { computed, ref } from 'vue'
// Use CDN version of CryptoJS to avoid npm installation issues
declare const CryptoJS: any

const activeTool = ref('random')

// Random Tool
const minVal = ref(1)
const maxVal = ref(100)
const count = ref(5)
const randomResults = ref<number[]>([])

function generateRandom() {
  if (minVal.value > maxVal.value) {
    Message.warning('最小值不能大于最大值')
    return
  }
  const results = []
  for (let i = 0; i < count.value; i++) {
    const num = Math.floor(Math.random() * (maxVal.value - minVal.value + 1)) + minVal.value
    results.push(num)
  }
  randomResults.value = results
}

// MD5 Tool
const md5Input = ref('')
const md5Result = computed(() => {
  if (!md5Input.value)
    return ''
  return CryptoJS.MD5(md5Input.value).toString()
})

// Base64 Tool
const base64Mode = ref('encode')
const base64Input = ref('')
const base64Result = computed(() => {
  if (!base64Input.value)
    return ''
  try {
    if (base64Mode.value === 'encode') {
      return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(base64Input.value))
    }
    else {
      return CryptoJS.enc.Base64.parse(base64Input.value).toString(CryptoJS.enc.Utf8)
    }
  }
  catch (e) {
    console.error('Base64转换错误:', e)
    return '转换失败，请检查输入格式'
  }
})

function copyText(text: string) {
  if (!text)
    return
  navigator.clipboard.writeText(text).then(() => {
    Message.success('复制成功')
  }).catch(() => {
    Message.error('复制失败')
  })
}
</script>

<template>
  <div class="tools-view container">
    <div class="header">
      <h1 class="page-title">
        在线工具箱
      </h1>
      <p class="page-desc">
        简单好用的开发者实用工具集
      </p>
    </div>

    <div class="tools-container">
      <a-tabs v-model:active-key="activeTool" position="left" type="rounded" size="large">
        <a-tab-pane key="random">
          <template #title>
            <span class="tab-label"><IconRefresh /> 随机数生成</span>
          </template>
          <div class="tool-panel">
            <h2 class="tool-title">
              随机数生成器
            </h2>
            <div class="tool-desc">
              生成指定范围内的随机整数，支持批量生成。
            </div>

            <div class="control-row">
              <a-space wrap>
                <a-input-number v-model="minVal" :style="{ width: '150px' }" placeholder="最小值" :precision="0">
                  <template #prefix>
                    Min
                  </template>
                </a-input-number>
                <span class="separator">-</span>
                <a-input-number v-model="maxVal" :style="{ width: '150px' }" placeholder="最大值" :precision="0">
                  <template #prefix>
                    Max
                  </template>
                </a-input-number>
                <a-input-number v-model="count" :style="{ width: '150px' }" placeholder="数量" :min="1" :max="100" :precision="0">
                  <template #prefix>
                    Count
                  </template>
                </a-input-number>
                <a-button type="primary" @click="generateRandom">
                  <template #icon>
                    <IconRefresh />
                  </template>
                  生成
                </a-button>
              </a-space>
            </div>

            <a-divider />

            <div v-if="randomResults.length" class="result-area">
              <div class="result-label">
                生成结果：
              </div>
              <div class="results-grid">
                <div v-for="(num, idx) in randomResults" :key="idx" class="result-tag">
                  {{ num }}
                </div>
              </div>
              <div class="action-row">
                <a-button size="small" @click="copyText(randomResults.join(', '))">
                  <template #icon>
                    <IconCopy />
                  </template> 复制所有
                </a-button>
              </div>
            </div>
          </div>
        </a-tab-pane>

        <a-tab-pane key="md5">
          <template #title>
            <span class="tab-label"><IconLock /> MD5 加密</span>
          </template>
          <div class="tool-panel">
            <h2 class="tool-title">
              MD5 在线加密
            </h2>
            <div class="tool-desc">
              将文本转换为 MD5 哈希值（32位）。
            </div>

            <div class="input-section">
              <div class="section-label">
                输入文本：
              </div>
              <a-textarea
                v-model="md5Input"
                placeholder="请输入需要加密的文本..."
                :auto-size="{ minRows: 4, maxRows: 8 }"
                allow-clear
              />
            </div>

            <div class="output-section">
              <div class="section-label">
                加密结果 (32位小写)：
              </div>
              <div class="result-row">
                <a-input :model-value="md5Result" readonly>
                  <template #append>
                    <a-button @click="copyText(md5Result)">
                      <template #icon>
                        <IconCopy />
                      </template> 复制
                    </a-button>
                  </template>
                </a-input>
              </div>
            </div>
          </div>
        </a-tab-pane>

        <a-tab-pane key="base64">
          <template #title>
            <span class="tab-label"><IconCode /> Base64 转换</span>
          </template>
          <div class="tool-panel">
            <h2 class="tool-title">
              Base64 编码/解码
            </h2>
            <div class="tool-desc">
              文本与 Base64 编码互转。
            </div>

            <div class="radio-row">
              <a-radio-group v-model="base64Mode" type="button">
                <a-radio value="encode">
                  编码 (Encode)
                </a-radio>
                <a-radio value="decode">
                  解码 (Decode)
                </a-radio>
              </a-radio-group>
            </div>

            <div class="input-section">
              <div class="section-label">
                {{ base64Mode === 'encode' ? '输入明文：' : '输入 Base64 编码：' }}
              </div>
              <a-textarea
                v-model="base64Input"
                :placeholder="base64Mode === 'encode' ? '请输入要编码的文本...' : '请输入要解码的 Base64 字符串...'"
                :auto-size="{ minRows: 4, maxRows: 8 }"
                allow-clear
              />
            </div>

            <div class="output-section">
              <div class="section-label">
                转换结果：
              </div>
              <a-textarea
                :model-value="base64Result"
                readonly
                :auto-size="{ minRows: 4, maxRows: 8 }"
              />
              <div class="copy-btn-wrapper">
                <a-button type="primary" size="small" :disabled="!base64Result" @click="copyText(base64Result)">
                  <template #icon>
                    <IconCopy />
                  </template> 复制结果
                </a-button>
              </div>
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<style scoped lang="less">
.tools-view {
  padding-top: 40px;
  padding-bottom: 60px;
}

.header {
  text-align: center;
  margin-bottom: 40px;

  .page-title {
    font-size: 28px;
    font-weight: 800;
    color: var(--color-text-1);
    margin-bottom: 12px;
  }

  .page-desc {
    font-size: 16px;
    color: var(--color-text-3);
  }
}

.tools-container {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  min-height: 500px;
  padding: 20px;
  border: 1px solid var(--color-border-2);

  :deep(.arco-tabs-nav-vertical) {
    width: 200px;
  }

  :deep(.arco-tabs-content) {
    padding-left: 24px;
    padding-top: 10px;
  }
}

.tab-label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tool-panel {
  max-width: 800px;

  .tool-title {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 24px;
    color: var(--color-text-1);
  }

  .tool-desc {
    color: var(--color-text-3);
    margin-bottom: 24px;
  }
}

/* Random Tool */
.control-row {
  margin-bottom: 24px;

  .separator {
    color: var(--color-text-3);
  }
}

.result-area {
  .result-label {
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--color-text-2);
  }

  .results-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 16px;
  }

  .result-tag {
    background: var(--color-fill-2);
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    font-family: monospace;
    font-weight: 600;
    color: var(--primary-color);
  }
}

/* Common Section Styles */
.input-section,
.output-section {
  margin-bottom: 24px;

  .section-label {
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--color-text-2);
  }
}

.radio-row {
  margin-bottom: 20px;
}

.copy-btn-wrapper {
  margin-top: 12px;
  text-align: right;
}
</style>
