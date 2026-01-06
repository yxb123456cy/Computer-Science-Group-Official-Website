<script setup lang="ts">
import {
  IconApps,
  IconBook,
  IconCode,
  IconDriveFile,
  IconFolder,
} from '@arco-design/web-vue/es/icon'
import { ref } from 'vue'

const activeDoc = ref('jetbrains')
const collapsed = ref(false)

const menuItems = [
  {
    key: 'guide',
    title: '入门指南',
    icon: IconApps,
    children: [
      { key: 'introduction', title: '社团介绍' },
      { key: 'rules', title: '管理章程' },
    ],
  },
  {
    key: 'resources',
    title: '学习资源',
    icon: IconBook,
    children: [
      { key: 'roadmap', title: '学习路线图' },
      { key: 'jetbrains', title: 'JetBrains 学生认证' },
      { key: 'tools', title: '常用开发工具' },
    ],
  },
  {
    key: 'project',
    title: '项目文档',
    icon: IconCode,
    children: [
      { key: 'workflow', title: 'Git 工作流规范' },
      { key: 'api-standard', title: '接口设计规范' },
    ],
  },
]

function handleMenuClick(key: string) {
  activeDoc.value = key
}
</script>

<template>
  <div class="open-docs-view">
    <a-layout class="layout-container">
      <a-layout-sider
        v-model:collapsed="collapsed"
        collapsible
        :width="260"
        class="docs-sider"
        breakpoint="lg"
      >
        <div class="sider-header">
          <div class="logo-box">
            <IconDriveFile size="24" class="logo-icon" />
            <span v-if="!collapsed" class="logo-text">开放文档中心</span>
          </div>
        </div>
        <a-menu
          :default-open-keys="['resources']"
          :selected-keys="[activeDoc]"
          :style="{ width: '100%' }"
          @item-click="handleMenuClick"
        >
          <a-sub-menu v-for="item in menuItems" :key="item.key">
            <template #icon>
              <component :is="item.icon" />
            </template>
            <template #title>
              {{ item.title }}
            </template>
            <a-menu-item v-for="child in item.children" :key="child.key">
              {{ child.title }}
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>

      <a-layout-content class="docs-content">
        <div class="content-wrapper">
          <!-- JetBrains Guide Content -->
          <div v-if="activeDoc === 'jetbrains'" class="doc-article">
            <div class="article-header">
              <h1 class="article-title">
                JetBrains 学生认证申请指南
              </h1>
              <div class="article-meta">
                <span class="meta-item">最后更新：2024-03-20</span>
                <span class="meta-item">阅读时间：约 5 分钟</span>
                <a-tag color="blue" size="small">
                  福利
                </a-tag>
              </div>
            </div>

            <div class="article-body">
              <div class="callout-block">
                <p><strong>前言：</strong> JetBrains 是一家捷克的软件开发公司，该公司位于捷克的布拉格，以开发各种集成开发环境（IDE）而闻名。对于在校学生，JetBrains 提供了免费的教育许可证，可以免费使用旗下所有专业版 IDE（如 IntelliJ IDEA Ultimate, WebStorm, PyCharm Professional 等）。</p>
              </div>

              <h2>一、准备工作</h2>
              <p>在开始申请之前，请确保你拥有以下材料之一：</p>
              <ul>
                <li><strong>学校教育邮箱</strong>（推荐）：以 .edu.cn 结尾的邮箱地址。</li>
                <li><strong>学信网验证报告</strong>：如果你没有教育邮箱，可以使用学信网的在线验证报告。</li>
                <li><strong>学生证</strong>：有效的学生证件扫描件。</li>
              </ul>

              <h2>二、申请步骤（教育邮箱方式）</h2>
              <ol>
                <li>
                  <p>访问 JetBrains 教育许可申请页面：<a href="https://www.jetbrains.com/shop/eform/students" target="_blank">https://www.jetbrains.com/shop/eform/students</a></p>
                </li>
                <li>
                  <p>在表单中选择 "University email address"（大学电子邮件地址）。</p>
                </li>
                <li>
                  <p>填写你的姓名、学校教育邮箱、国家/地区等信息。</p>
                  <div class="image-placeholder">
                    [图示：申请表单填写示例]
                  </div>
                </li>
                <li>
                  <p>点击 "Apply for Free Products"（申请免费产品）。</p>
                </li>
                <li>
                  <p>前往你的教育邮箱查收确认邮件，点击邮件中的链接进行验证。</p>
                </li>
                <li>
                  <p>验证通过后，你将收到一封包含许可证激活链接的邮件。点击链接创建 JetBrains 账号（如果已有账号则直接登录）。</p>
                </li>
              </ol>

              <h2>三、激活 IDE</h2>
              <p>1. 打开你安装的 JetBrains IDE（例如 IntelliJ IDEA）。</p>
              <p>2. 在激活窗口选择 "JB Account"。</p>
              <p>3. 输入你的 JetBrains 账号和密码进行登录。</p>
              <p>4. 点击 "Activate" 即可开始享受专业版功能。</p>

              <h2>四、常见问题 (FAQ)</h2>
              <div class="faq-item">
                <h4>Q: 许可证有效期是多久？</h4>
                <p>A: 学生许可证有效期为一年。只要你仍是在校学生，每年到期后可以免费续期。</p>
              </div>
              <div class="faq-item">
                <h4>Q: 毕业后还能使用吗？</h4>
                <p>A: 毕业后不能再续期学生许可证，但 JetBrains 通常会为毕业生提供购买专业版的第一年 75% 折扣优惠。</p>
              </div>
            </div>
          </div>

          <!-- Placeholder for other docs -->
          <div v-else class="empty-state">
            <IconFolder size="64" class="empty-icon" />
            <h2>文档正在编写中</h2>
            <p>该板块内容即将上线，敬请期待...</p>
          </div>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style scoped lang="less">
.open-docs-view {
  min-height: calc(100vh - 64px);
  background: #f7f8fa;
}

.layout-container {
  max-width: 1400px;
  margin: 0 auto;
  min-height: calc(100vh - 64px);
}

.docs-sider {
  background: #fff;
  border-right: 1px solid var(--color-border-2);
  z-index: 10;

  :deep(.arco-layout-sider-trigger) {
    border-top: 1px solid var(--color-border-2);
  }
}

.sider-header {
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid var(--color-border-1);

  .logo-box {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--primary-color);
  }

  .logo-text {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-text-1);
  }
}

.docs-content {
  padding: 24px;
  overflow-y: auto;
  background: #f7f8fa;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
  padding: 40px 60px;
  border-radius: 8px;
  min-height: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 24px;
  }
}

/* Article Styles - Google Docs like */
.doc-article {
  color: var(--color-text-1);
}

.article-header {
  margin-bottom: 40px;
  border-bottom: 1px solid var(--color-border-1);
  padding-bottom: 24px;

  .article-title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 16px;
    line-height: 1.4;
  }

  .article-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    color: var(--color-text-3);
    font-size: 14px;
  }
}

.article-body {
  font-size: 16px;
  line-height: 1.8;

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 20px;
    color: var(--color-text-1);
  }

  p {
    margin-bottom: 16px;
    color: var(--color-text-2);
  }

  ul,
  ol {
    margin-bottom: 16px;
    padding-left: 24px;
    color: var(--color-text-2);

    li {
      margin-bottom: 8px;
    }
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.2s;

    &:hover {
      border-bottom-color: var(--primary-color);
    }
  }

  .callout-block {
    background: #e8f3ff;
    border-left: 4px solid var(--primary-color);
    padding: 16px 20px;
    margin-bottom: 24px;
    border-radius: 0 4px 4px 0;

    p {
      margin: 0;
    }
  }

  .image-placeholder {
    width: 100%;
    height: 200px;
    background: var(--color-fill-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-3);
    border-radius: 8px;
    margin: 20px 0;
    border: 1px dashed var(--color-border-3);
  }

  .faq-item {
    margin-bottom: 20px;

    h4 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
    }
  }
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  color: var(--color-text-3);
  text-align: center;

  .empty-icon {
    color: var(--color-fill-3);
    margin-bottom: 20px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 8px;
    color: var(--color-text-2);
  }
}
</style>
