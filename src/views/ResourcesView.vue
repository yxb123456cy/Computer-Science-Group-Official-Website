<script setup lang="ts">
import {
  IconApps,
  IconCloud,
  IconCode,
  IconCodeBlock,
  IconDesktop,
  IconDownload,
  IconDriveFile,
} from '@arco-design/web-vue/es/icon'
import { reactive, ref } from 'vue'

interface Resource {
  title: string
  desc: string
  details?: string
  iconUrl?: string
  url: string
  tags: string[]
}

const activeCategory = ref('ide')
const visible = ref(false)
const currentResource = reactive<Partial<Resource>>({})

const categories = [
  { key: 'ide', title: 'IDE / 编辑器', icon: IconCode },
  { key: 'lang', title: '编程语言环境', icon: IconCodeBlock },
  { key: 'tools', title: '开发工具', icon: IconApps },
  { key: 'os', title: '操作系统', icon: IconDesktop },
  { key: 'server', title: '服务器资源', icon: IconCloud },
  { key: 'hardware', title: '硬件资源', icon: IconCloud },
  { key: 'docs', title: '文档手册', icon: IconDriveFile },
]

const resources: Record<string, Resource[]> = {
  ide: [
    {
      title: 'Visual Studio Code',
      desc: '微软开发的一款免费、开源、跨平台的代码编辑器',
      details: 'Visual Studio Code (VS Code) 是一个轻量级但功能强大的源代码编辑器，可在桌面上运行，适用于 Windows、macOS 和 Linux。它内置了对 JavaScript、TypeScript 和 Node.js 的支持，并为其他语言（如 C++、C#、Java、Python、PHP、Go）和运行时（如 .NET 和 Unity）提供了丰富的扩展生态系统。',
      iconUrl: 'https://code.visualstudio.com/assets/images/code-stable.png',
      url: 'https://code.visualstudio.com/',
      tags: ['Editor', 'Microsoft', 'Free'],
    },
    {
      title: 'IntelliJ IDEA',
      desc: 'JetBrains 公司开发的 Java 集成开发环境',
      details: 'IntelliJ IDEA 被认为是当前 Java 开发效率最快的 IDE 工具。它整合了开发过程中实用的众多功能，几乎可以不用鼠标可以方便的完成你要做的任何事情，最大程度的加快开发的速度。简单而又功能强大。与其他的一些繁冗而复杂的 IDE 工具相比，IntelliJ IDEA 对各种框架的完美支持，让 Java 开发变得更加容易。',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg',
      url: 'https://www.jetbrains.com/idea/',
      tags: ['IDE', 'Java', 'JetBrains'],
    },
    {
      title: 'PyCharm',
      desc: 'JetBrains 公司开发的 Python IDE',
      details: 'PyCharm 是一个用于计算机编程的集成开发环境（IDE），主要用于 Python 语言开发，由 JetBrains 开发，提供代码分析、图形化调试器，集成测试器、集成版本控制系统，并支持使用 Django 进行 Web 开发。',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/PyCharm_Icon.svg',
      url: 'https://www.jetbrains.com/pycharm/',
      tags: ['IDE', 'Python', 'JetBrains'],
    },
  ],
  lang: [
    {
      title: 'Node.js',
      desc: '基于 Chrome V8 引擎的 JavaScript 运行时',
      iconUrl: 'https://nodejs.org/static/images/logo.svg',
      url: 'https://nodejs.org/',
      tags: ['Runtime', 'JS', 'Backend'],
    },
    {
      title: 'Python',
      desc: '一种广泛使用的高级编程语言',
      iconUrl: 'https://www.python.org/static/community_logos/python-logo-generic.svg',
      url: 'https://www.python.org/',
      tags: ['Language', 'Python', 'AI'],
    },
    {
      title: 'JDK (Java Development Kit)',
      desc: 'Java 语言的软件开发工具包',
      iconUrl: 'https://www.oracle.com/a/ocom/img/cb71-java-logo.png',
      url: 'https://www.oracle.com/java/technologies/downloads/',
      tags: ['Language', 'Java', 'Backend'],
    },
  ],
  tools: [
    {
      title: 'Git',
      desc: '免费、开源的分布式版本控制系统',
      iconUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
      url: 'https://git-scm.com/',
      tags: ['VCS', 'Tool', 'Git'],
    },
    {
      title: 'Docker',
      desc: '开源的应用容器引擎',
      iconUrl: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
      url: 'https://www.docker.com/',
      tags: ['Container', 'DevOps', 'Tool'],
    },
    {
      title: 'Postman',
      desc: 'API 开发协作平台',
      iconUrl: 'https://www.postman.com/assets/2024/01/postman-logo-icon-orange-512x512.png',
      url: 'https://www.postman.com/',
      tags: ['API', 'Test', 'Tool'],
    },
  ],
  os: [
    {
      title: 'Ubuntu',
      desc: '基于 Debian 的 Linux 操作系统',
      iconUrl: 'https://assets.ubuntu.com/v1/29985a98-ubuntu-logo-32.png',
      url: 'https://ubuntu.com/',
      tags: ['OS', 'Linux', 'Server'],
    },
    {
      title: 'Windows 11',
      desc: '微软最新的桌面操作系统',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Windows_11_logo.svg',
      url: 'https://www.microsoft.com/software-download/windows11',
      tags: ['OS', 'Windows', 'Microsoft'],
    },
  ],
  server: [
    {
      title: 'Nginx',
      desc: '高性能的 HTTP 和反向代理 web 服务器',
      iconUrl: 'https://nginx.org/nginx.png',
      url: 'https://nginx.org/',
      tags: ['Server', 'Web', 'Proxy'],
    },
    {
      title: 'Apache HTTP Server',
      desc: '开源网页服务器软件',
      iconUrl: 'https://httpd.apache.org/images/httpd_logo_wide_new.png',
      url: 'https://httpd.apache.org/',
      tags: ['Server', 'Web', 'Apache'],
    },
  ],
  hardware: [
    {
      title: 'Raspberry Pi',
      desc: '基于 Linux 的单片机电脑',
      iconUrl: 'https://www.raspberrypi.com/app/uploads/2022/02/COLOUR-Raspberry-Pi-Symbol-Registered.png',
      url: 'https://www.raspberrypi.com/',
      tags: ['Hardware', 'IoT', 'Linux'],
    },
    {
      title: 'Arduino',
      desc: '开源电子原型平台',
      iconUrl: 'https://www.arduino.cc/wiki/static/9d638763567d264f331006da77196023/526db/arduino-logo.png',
      url: 'https://www.arduino.cc/',
      tags: ['Hardware', 'IoT', 'Embedded'],
    },
  ],
  docs: [
    {
      title: 'JetBrains 学生认证申请指南',
      desc: '详细的 JetBrains 全家桶学生免费授权申请教程',
      details: 'JetBrains 为学生和教师提供免费的教育许可证，可以免费使用包括 IntelliJ IDEA Ultimate, PyCharm Professional, WebStorm 等在内的所有专业开发工具。本指南将详细介绍如何使用教育邮箱（.edu.cn）或官方文件（学生证）进行申请。申请成功后，有效期为一年，到期后若仍为学生身份可免费续期。',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/JetBrains_Logo_2016.svg',
      url: 'https://sales.jetbrains.com/hc/zh-cn/articles/207240855-%E5%85%8D%E8%B4%B9%E6%95%99%E8%82%B2%E8%AE%B8%E5%8F%AF%E8%AF%81',
      tags: ['Guide', 'Student', 'Free'],
    },
    {
      title: 'MDN Web Docs',
      desc: 'Web 技术权威文档（HTML, CSS, JavaScript）',
      iconUrl: 'https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png',
      url: 'https://developer.mozilla.org/zh-CN/',
      tags: ['Docs', 'Web', 'Frontend'],
    },
  ],
}

function getCategoryTitle(key: string) {
  return categories.find(c => c.key === key)?.title || '资源列表'
}

function openResource(res: Resource) {
  Object.assign(currentResource, res)
  visible.value = true
}

function handleDownload() {
  if (currentResource.url) {
    window.open(currentResource.url, '_blank')
  }
}
</script>

<template>
  <div class="resources-view container">
    <div class="header">
      <h1 class="page-title">
        资源导航
      </h1>
      <p class="page-desc">
        精选开发必备工具与资源，助你事半功倍
      </p>
    </div>

    <div class="main-content">
      <!-- Sidebar Navigation -->
      <div class="sidebar">
        <div
          v-for="cat in categories"
          :key="cat.key"
          class="nav-item"
          :class="{ active: activeCategory === cat.key }"
          @click="activeCategory = cat.key"
        >
          <component :is="cat.icon" class="nav-icon" />
          <span>{{ cat.title }}</span>
        </div>
      </div>

      <!-- Resource Grid -->
      <div class="resource-area">
        <h2 class="category-title">
          {{ getCategoryTitle(activeCategory) }}
        </h2>
        <div class="resource-grid">
          <div
            v-for="(res, idx) in resources[activeCategory] || []"
            :key="idx"
            class="resource-card"
            @click="openResource(res)"
          >
            <div class="card-icon">
              <img v-if="res.iconUrl" :src="res.iconUrl" :alt="res.title">
              <IconApps v-else class="default-icon" />
            </div>
            <div class="card-info">
              <h3 class="title">
                {{ res.title }}
              </h3>
              <p class="desc">
                {{ res.desc }}
              </p>
              <div class="tags">
                <a-tag v-for="tag in res.tags" :key="tag" size="small" color="arcoblue">
                  {{ tag }}
                </a-tag>
              </div>
            </div>
          </div>

          <div v-if="!resources[activeCategory]?.length" class="empty-category">
            <a-empty description="该分类下暂无资源" />
          </div>
        </div>
      </div>
    </div>

    <!-- Resource Detail Modal -->
    <a-modal v-model:visible="visible" :title="currentResource.title" footer-position="hide" width="600px">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-icon-wrapper">
            <img v-if="currentResource.iconUrl" :src="currentResource.iconUrl" class="modal-icon">
            <IconApps v-else class="modal-default-icon" />
          </div>
          <div class="modal-title-box">
            <h3>{{ currentResource.title }}</h3>
            <div class="tags">
              <a-tag v-for="tag in currentResource.tags" :key="tag" size="small" color="arcoblue">
                {{ tag }}
              </a-tag>
            </div>
          </div>
        </div>

        <div class="modal-body">
          <p class="modal-desc">
            {{ currentResource.desc }}
          </p>

          <div v-if="currentResource.details" class="modal-details">
            <h4>详细介绍</h4>
            <p>{{ currentResource.details }}</p>
          </div>
        </div>

        <div class="modal-footer-action">
          <a-button type="primary" long size="large" @click="handleDownload">
            <template #icon>
              <IconDownload />
            </template>
            前往获取 / 查看文档
          </a-button>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<style scoped lang="less">
.resources-view {
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

.main-content {
  display: flex;
  gap: 30px;
  min-height: 600px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.sidebar {
  width: 240px;
  flex-shrink: 0;
  background: var(--color-bg-2);
  border-radius: 8px;
  padding: 16px 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  height: fit-content;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    overflow-x: auto;
    padding: 10px;
    gap: 10px;
  }
}

.nav-item {
  padding: 12px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-text-2);
  transition: all 0.2s;
  border-left: 3px solid transparent;

  &:hover {
    background-color: var(--color-fill-2);
    color: var(--color-text-1);
  }

  &.active {
    background-color: var(--color-fill-1);
    color: rgb(var(--primary-6));
    border-left-color: rgb(var(--primary-6));
    font-weight: 500;
  }

  .nav-icon {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    border-left: none;
    border-bottom: 3px solid transparent;
    padding: 8px 16px;
    white-space: nowrap;
    border-radius: 4px;

    &.active {
      border-bottom-color: rgb(var(--primary-6));
      border-left-color: transparent;
    }
  }
}

.resource-area {
  flex: 1;
  background: var(--color-bg-2);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.category-title {
  font-size: 20px;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--color-border-1);
  color: var(--color-text-1);
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.resource-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  border: 1px solid var(--color-border-2);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  background: #fff;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    border-color: rgb(var(--primary-6));
  }

  .card-icon {
    width: 48px;
    height: 48px;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .default-icon {
      width: 100%;
      height: 100%;
      color: var(--color-text-3);
    }
  }

  .card-info {
    flex: 1;
    min-width: 0;

    .title {
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 4px 0;
      color: var(--color-text-1);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .desc {
      font-size: 13px;
      color: var(--color-text-3);
      margin: 0 0 12px 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      line-clamp: 2;
      overflow: hidden;
      height: 38px;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
  }
}

.empty-category {
  grid-column: 1 / -1;
  padding: 40px 0;
}

/* Modal Styles */
.modal-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-border-1);

  .modal-icon-wrapper {
    width: 64px;
    height: 64px;

    .modal-icon {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .modal-default-icon {
      width: 100%;
      height: 100%;
      font-size: 64px;
      color: var(--color-text-3);
    }
  }

  .modal-title-box {
    h3 {
      font-size: 24px;
      margin: 0 0 8px 0;
      color: var(--color-text-1);
    }

    .tags {
      display: flex;
      gap: 8px;
    }
  }
}

.modal-body {
  margin-bottom: 24px;

  .modal-desc {
    font-size: 16px;
    color: var(--color-text-2);
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .modal-details {
    background: var(--color-fill-1);
    padding: 16px;
    border-radius: 4px;

    h4 {
      margin: 0 0 8px 0;
      font-size: 15px;
      color: var(--color-text-1);
    }

    p {
      margin: 0;
      font-size: 14px;
      color: var(--color-text-3);
      line-height: 1.6;
    }
  }
}
</style>
