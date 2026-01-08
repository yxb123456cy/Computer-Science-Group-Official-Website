<script setup lang="ts">
import {
  IconApps,
  IconCloud,
  IconCode,
  IconCodeBlock,
  IconComputer,
  IconDesktop,
  IconDownload,
  IconDriveFile,
} from '@arco-design/web-vue/es/icon'
import { computed, reactive, ref } from 'vue'

// Import SVG assets
import ApifoxIcon from '@/assets/resources/apifox.svg'
import CppIcon from '@/assets/resources/C++.svg'
import CentosIcon from '@/assets/resources/centos.svg'
import DebianIcon from '@/assets/resources/Debian.svg'
import DockerIcon from '@/assets/resources/docker.svg'
import DotnetIcon from '@/assets/resources/dotnet.svg'
import GitIcon from '@/assets/resources/git.svg'
import GolangIcon from '@/assets/resources/golang.svg'
import IntellijIcon from '@/assets/resources/icons8-intellij-idea.svg'
import JavaIcon from '@/assets/resources/java.svg'
import JetBrainsIcon from '@/assets/resources/JetBrains.svg'
import MacosIcon from '@/assets/resources/macOS.svg'
import NginxIcon from '@/assets/resources/Nginx.svg'
import NodejsIcon from '@/assets/resources/Node.js.svg'
import PostmanIcon from '@/assets/resources/postman.svg'
import PycharmIcon from '@/assets/resources/pycharm.svg'
import PythonIcon from '@/assets/resources/Python.svg'
import RockyLinuxIcon from '@/assets/resources/rocky-linux.svg'
import RustIcon from '@/assets/resources/rust.svg'
import TomcatIcon from '@/assets/resources/Tomcat.svg'
import UbuntuIcon from '@/assets/resources/ubuntu.svg'
import VscodeIcon from '@/assets/resources/vscode.svg'
import WindowsIcon from '@/assets/resources/windows.svg'
import RaspberryPiIcon from '@/assets/resources/嵌入式-Raspberry Pi.svg'

type ResourceSource = '国内' | '国外'
type PlatformName = 'Windows' | 'macOS' | 'Linux' | 'Web'

interface Resource {
  title: string
  desc: string
  details?: string
  iconUrl?: string
  url: string
  tags: string[]
  source?: ResourceSource
  platforms?: PlatformName[]
  sizeMB?: number
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
  { key: 'hardware', title: '硬件资源', icon: IconComputer },
  { key: 'docs', title: '文档手册', icon: IconDriveFile },
]

const resources: Record<string, Resource[]> = {
  ide: [
    {
      title: 'Visual Studio Code',
      desc: '微软开发的一款免费、开源、跨平台的代码编辑器',
      details: 'Visual Studio Code (VS Code) 是一个轻量级但功能强大的源代码编辑器，可在桌面上运行，适用于 Windows、macOS 和 Linux。它内置了对 JavaScript、TypeScript 和 Node.js 的支持，并为其他语言（如 C++、C#、Java、Python、PHP、Go）和运行时（如 .NET 和 Unity）提供了丰富的扩展生态系统。',
      iconUrl: VscodeIcon,
      url: 'https://code.visualstudio.com/',
      tags: ['Editor', 'Microsoft', 'Free'],
    },
    {
      title: 'IntelliJ IDEA',
      desc: 'JetBrains 公司开发的 Java 集成开发环境',
      details: 'IntelliJ IDEA 被认为是当前 Java 开发效率最快的 IDE 工具。它整合了开发过程中实用的众多功能，几乎可以不用鼠标可以方便的完成你要做的任何事情，最大程度的加快开发的速度。简单而又功能强大。与其他的一些繁冗而复杂的 IDE 工具相比，IntelliJ IDEA 对各种框架的完美支持，让 Java 开发变得更加容易。',
      iconUrl: IntellijIcon,
      url: 'https://www.jetbrains.com/idea/',
      tags: ['IDE', 'Java', 'JetBrains'],
    },
    {
      title: 'PyCharm',
      desc: 'JetBrains 公司开发的 Python IDE',
      details: 'PyCharm 是一个用于计算机编程的集成开发环境（IDE），主要用于 Python 语言开发，由 JetBrains 开发，提供代码分析、图形化调试器，集成测试器、集成版本控制系统，并支持使用 Django 进行 Web 开发。',
      iconUrl: PycharmIcon,
      url: 'https://www.jetbrains.com/pycharm/',
      tags: ['IDE', 'Python', 'JetBrains'],
    },
  ],
  lang: [
    {
      title: 'Java / JDK',
      desc: 'Java 语言的软件开发工具包',
      details: 'Java 是一种广泛使用的面向对象编程语言，JDK (Java Development Kit) 是其核心开发工具包，包含 JRE (Java Runtime Environment) 和开发工具（如 javac 编译器、java 运行工具等）。Java 具有跨平台性（"Write Once, Run Anywhere"），广泛应用于企业级后端开发、Android 移动应用开发、大数据处理等领域。',
      iconUrl: JavaIcon,
      url: 'https://www.oracle.com/java/technologies/downloads/',
      tags: ['Language', 'Java', 'Backend'],
    },
    {
      title: 'Python',
      desc: '一种广泛使用的高级编程语言',
      details: 'Python 是一种解释型、高级、通用编程语言。其设计哲学强调代码的可读性，使用显著的缩进。Python 拥有丰富的标准库和第三方库，支持多种编程范式，广泛应用于 Web 开发（Django, Flask）、数据科学（Pandas, NumPy）、人工智能（PyTorch, TensorFlow）、自动化脚本等领域。',
      iconUrl: PythonIcon,
      url: 'https://www.python.org/',
      tags: ['Language', 'Python', 'AI'],
    },
    {
      title: 'Node.js',
      desc: '基于 Chrome V8 引擎的 JavaScript 运行时',
      details: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境。它让 JavaScript 可以运行在服务器端，采用事件驱动、非阻塞 I/O 模型，使其轻量且高效，非常适合构建数据密集型实时应用（如聊天应用、实时协作工具）。',
      iconUrl: NodejsIcon,
      url: 'https://nodejs.org/',
      tags: ['Runtime', 'JS', 'Backend'],
    },
    {
      title: 'C++',
      desc: '一种被广泛使用的计算机程序设计语言',
      details: 'C++ 是一种通用编程语言，支持过程化、面向对象和泛型编程。它以高性能和对系统资源的底层控制著称，广泛应用于系统软件（操作系统、驱动程序）、游戏开发（Unreal Engine）、嵌入式系统和高性能计算等领域。',
      iconUrl: CppIcon,
      url: 'https://isocpp.org/',
      tags: ['Language', 'System', 'High Performance'],
    },
    {
      title: 'Go',
      desc: 'Google 开发的开源编程语言',
      details: 'Go (Golang) 是由 Google 开发的一种静态强类型、编译型语言。它结合了 C 语言的性能和 Python 的开发效率，具有简洁的语法、内置的并发支持（Goroutines 和 Channels）和高效的垃圾回收机制，非常适合构建云原生应用、微服务和分布式系统。',
      iconUrl: GolangIcon,
      url: 'https://go.dev/',
      tags: ['Language', 'Cloud', 'Backend'],
    },
    {
      title: 'Rust',
      desc: '一门赋予每个人构建可靠且高效软件能力的语言',
      details: 'Rust 是一种系统编程语言，专注于安全（尤其是内存安全）、并发和性能。它没有垃圾回收机制，通过所有权（Ownership）系统在编译时保证内存安全，避免了空指针和数据竞争等常见错误。适合编写高性能系统软件、WebAssembly 模块等。',
      iconUrl: RustIcon,
      url: 'https://www.rust-lang.org/',
      tags: ['Language', 'System', 'Safety'],
    },
    {
      title: '.NET',
      desc: '免费、跨平台、开源的开发者平台',
      details: '.NET 是一个免费、跨平台、开源的开发者平台，用于构建许多不同类型的应用。支持多种语言（C#、F#、VB.NET），拥有庞大的类库和生态系统。可用于构建 Web、移动、桌面、游戏、物联网等应用。',
      iconUrl: DotnetIcon,
      url: 'https://dotnet.microsoft.com/',
      tags: ['Framework', 'Microsoft', 'Cross-platform'],
    },
  ],
  tools: [
    {
      title: 'Git',
      desc: '免费、开源的分布式版本控制系统',
      details: 'Git 是一个免费开源的分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有内容。它由 Linus Torvalds 创建，用于 Linux 内核开发。Git 是现代软件开发中不可或缺的工具，支持分支管理、代码合并、版本回退等功能。',
      iconUrl: GitIcon,
      url: 'https://git-scm.com/',
      tags: ['VCS', 'Tool', 'Git'],
    },
    {
      title: 'Docker',
      desc: '开源的应用容器引擎',
      details: 'Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器或 Windows 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。',
      iconUrl: DockerIcon,
      url: 'https://www.docker.com/',
      tags: ['Container', 'DevOps', 'Tool'],
    },
    {
      title: 'Postman',
      desc: 'API 开发协作平台',
      details: 'Postman 是一个 API 平台，用于构建和使用 API。它简化了 API 生命周期的每个步骤并简化了协作，以便您可以更快地创建更好的 API。支持发送各种类型的 HTTP 请求、保存请求历史、自动化测试、生成文档等。',
      iconUrl: PostmanIcon,
      url: 'https://www.postman.com/',
      tags: ['API', 'Test', 'Tool'],
    },
    {
      title: 'Apifox',
      desc: 'API 设计、开发、测试一体化协作平台',
      details: 'Apifox 是 API 文档、API 调试、API Mock、API 自动化测试一体化协作平台。定位为 Postman + Swagger + Mock + JMeter。通过一套系统、一份数据，解决多个系统之间的数据同步问题。只要定义好 API 文档，API 调试、API Mock、API 自动化测试即可直接使用，无需重新定义。',
      iconUrl: ApifoxIcon,
      url: 'https://apifox.com/',
      tags: ['API', 'Tool', 'Collaboration'],
    },
  ],
  os: [
    {
      title: 'Windows 11',
      desc: '微软最新的桌面操作系统',
      details: 'Windows 11 是微软发布的最新桌面操作系统，带来了全新的界面设计（如居中的开始菜单）、增强的性能和安全性，以及对 Android 应用的子系统支持。它是全球使用最广泛的桌面操作系统之一。',
      iconUrl: WindowsIcon,
      url: 'https://www.microsoft.com/software-download/windows11',
      tags: ['OS', 'Windows', 'Microsoft'],
    },
    {
      title: 'macOS',
      desc: 'Apple 开发的桌面操作系统',
      details: 'macOS 是 Apple Mac 电脑的操作系统。它基于 Unix，以其优雅的用户界面、强大的性能和与 Apple 生态系统（iPhone, iPad）的无缝集成而闻名。深受设计师和开发者的喜爱。',
      iconUrl: MacosIcon,
      url: 'https://www.apple.com/macos/',
      tags: ['OS', 'Apple', 'Unix-like'],
    },
    {
      title: 'Ubuntu',
      desc: '基于 Debian 的 Linux 发行版',
      details: 'Ubuntu 是基于 Debian 的 Linux 发行版，以易用性著称。它是世界上最流行的 Linux 发行版之一，广泛用于桌面、服务器和云端。拥有庞大的社区支持和丰富的软件源。',
      iconUrl: UbuntuIcon,
      url: 'https://ubuntu.com/',
      tags: ['OS', 'Linux', 'Server'],
    },
    {
      title: 'Debian',
      desc: '自由的操作系统 (OS)',
      details: 'Debian 是一个完全自由的操作系统，以其稳定性和安全性而闻名。它是许多其他 Linux 发行版（如 Ubuntu, Kali Linux）的基础。Debian 拥有严格的自由软件指导方针和庞大的软件包仓库。',
      iconUrl: DebianIcon,
      url: 'https://www.debian.org/',
      tags: ['OS', 'Linux', 'Stable'],
    },
    {
      title: 'CentOS',
      desc: '企业级 Linux 发行版',
      details: 'CentOS (Community Enterprise Operating System) 是一个企业级 Linux 发行版，它源于 Red Hat Enterprise Linux (RHEL) 的源代码。它提供了一个稳定、可预测、可管理和可复制的平台，常用于服务器环境。',
      iconUrl: CentosIcon,
      url: 'https://www.centos.org/',
      tags: ['OS', 'Linux', 'Server'],
    },
    {
      title: 'Rocky Linux',
      desc: 'CentOS 的社区企业操作系统继承者',
      details: 'Rocky Linux 是一个社区企业操作系统，旨在成为 CentOS 的 100% 兼容的下游版本。它由 CentOS 的创始人 Gregory Kurtzer 创立，旨在填补 CentOS 策略变更后留下的空白，提供一个稳定、免费的企业级 Linux 发行版。',
      iconUrl: RockyLinuxIcon,
      url: 'https://rockylinux.org/',
      tags: ['OS', 'Linux', 'Enterprise'],
    },
  ],
  server: [
    {
      title: 'Nginx',
      desc: '高性能的 HTTP 和反向代理 web 服务器',
      details: 'Nginx 是一款轻量级的 Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器。其特点是占有内存少，并发能力强，事实上 Nginx 的并发能力在同类型的网页服务器中表现较好。广泛用于负载均衡、静态文件服务等场景。',
      iconUrl: NginxIcon,
      url: 'https://nginx.org/',
      tags: ['Server', 'Web', 'Proxy'],
    },
    {
      title: 'Apache Tomcat',
      desc: '开源的 Java Servlet 容器',
      details: 'Apache Tomcat 是一个开源的 Java Servlet 容器，实现了 Jakarta Servlet、Jakarta Server Pages 和 Jakarta WebSocket 技术。它提供了一个纯 Java 的 HTTP Web 服务器环境，用于运行 Java 代码。',
      iconUrl: TomcatIcon,
      url: 'https://tomcat.apache.org/',
      tags: ['Server', 'Java', 'Container'],
    },
  ],
  hardware: [
    {
      title: 'Raspberry Pi',
      desc: '基于 Linux 的单片机电脑',
      details: '树莓派（Raspberry Pi）是一系列只有信用卡大小的单板计算机。它原本旨在促进学校的基础计算机科学教育，但因其低成本、模块化和开放设计，迅速受到全球创客、极客的喜爱。广泛应用于家庭媒体中心、物联网网关、轻量级服务器等项目。',
      iconUrl: RaspberryPiIcon,
      url: 'https://www.raspberrypi.com/',
      tags: ['Hardware', 'IoT', 'Linux'],
    },
  ],
  docs: [
    {
      title: 'JetBrains 学生认证申请指南',
      desc: '详细的 JetBrains 全家桶学生免费授权申请教程',
      details: 'JetBrains 为学生和教师提供免费的教育许可证，可以免费使用包括 IntelliJ IDEA Ultimate, PyCharm Professional, WebStorm 等在内的所有专业开发工具。本指南将详细介绍如何使用教育邮箱（.edu.cn）或官方文件（学生证）进行申请。申请成功后，有效期为一年，到期后若仍为学生身份可免费续期。',
      iconUrl: JetBrainsIcon,
      url: 'https://sales.jetbrains.com/hc/zh-cn/articles/207240855-%E5%85%8D%E8%B4%B9%E6%95%99%E8%82%B2%E8%AE%B8%E5%8F%AF%E8%AF%81',
      tags: ['Guide', 'Student', 'Free'],
    },

  ],
}

const categoryResources = computed<Resource[]>(() => resources[activeCategory.value] || [])
const categoryCount = computed(() => categoryResources.value.length)
const categorySourceCount = computed(() => {
  const acc = { domestic: 0, foreign: 0 }
  categoryResources.value.forEach((r) => {
    const s = getSource(r)
    if (s === '国内')
      acc.domestic += 1
    else if (s === '国外')
      acc.foreign += 1
  })
  return acc
})
const categoryTopTags = computed(() => {
  const counter = new Map<string, number>()
  categoryResources.value.forEach((r) => {
    r.tags.forEach((t) => {
      counter.set(t, (counter.get(t) || 0) + 1)
    })
  })
  return [...counter.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([t]) => t)
})

const featuredResources = computed(() => categoryResources.value.slice(0, 3))
const featuredTitles = computed(() => new Set(featuredResources.value.map(r => r.title)))
const displayedResources = computed(() => categoryResources.value.filter(r => !featuredTitles.value.has(r.title)))

const categoryDescMap: Record<string, string> = {
  ide: '提升编码效率的核心工具，适合日常开发与学习。',
  lang: '常见语言与运行环境，一键直达官方下载与文档。',
  tools: '覆盖开发、调试、协作的高频工具合集。',
  os: '开发常用操作系统与发行版，面向不同场景选择。',
  server: '服务端基础设施与中间件，构建可靠线上环境。',
  hardware: '创客与嵌入式相关硬件平台，适合动手实践。',
  docs: '权威手册与指南，快速掌握关键流程与规范。',
}

const currentCategoryDesc = computed(() => categoryDescMap[activeCategory.value] || '精选优质资源，快速开始使用。')

const quickSteps = computed(() => {
  if (activeCategory.value === 'docs') {
    return [
      { title: '阅读指南', desc: '先通读整体流程与注意事项' },
      { title: '准备材料', desc: '按要求准备邮箱/证明文件' },
      { title: '提交申请', desc: '按步骤提交并等待审核结果' },
    ]
  }
  if (activeCategory.value === 'os') {
    return [
      { title: '选择版本', desc: '根据硬件与用途选择发行版' },
      { title: '制作介质', desc: '写入启动盘并完成安装' },
      { title: '环境配置', desc: '配置开发工具与常用软件源' },
    ]
  }
  return [
    { title: '打开官网', desc: '确认版本与系统支持情况' },
    { title: '下载安装', desc: '优先使用官方安装包/文档' },
    { title: '完成配置', desc: '按需安装插件与初始化环境' },
  ]
})

function safeHostname(url: string) {
  try {
    return new URL(url).hostname
  }
  catch {
    return ''
  }
}

function getSource(res: Partial<Resource>) {
  if (res.source)
    return res.source
  if (!res.url)
    return '-'
  const host = safeHostname(res.url)
  if (host.endsWith('.cn'))
    return '国内'
  return '国外'
}

function getPlatforms(res: Partial<Resource>): PlatformName[] {
  if (res.platforms?.length)
    return res.platforms
  if (!res.url)
    return ['Web']
  const host = safeHostname(res.url)
  if (!host)
    return ['Web']
  if (activeCategory.value === 'os') {
    const title = (res.title || '').toLowerCase()
    if (title.includes('windows'))
      return ['Windows']
    if (title.includes('mac'))
      return ['macOS']
    return ['Linux']
  }
  if (activeCategory.value === 'docs')
    return ['Web']
  return ['Windows', 'macOS', 'Linux']
}

function getPlatformIcon(p: PlatformName) {
  if (p === 'Windows')
    return WindowsIcon
  if (p === 'macOS')
    return MacosIcon
  if (p === 'Linux')
    return UbuntuIcon
  return ''
}

function getEstimatedSizeMB(res: Partial<Resource>) {
  if (typeof res.sizeMB === 'number')
    return res.sizeMB
  if (activeCategory.value === 'ide')
    return 260
  if (activeCategory.value === 'lang')
    return 120
  if (activeCategory.value === 'tools')
    return 220
  if (activeCategory.value === 'os')
    return 2600
  if (activeCategory.value === 'server')
    return 80
  if (activeCategory.value === 'hardware')
    return 40
  if (activeCategory.value === 'docs')
    return 5
  return 100
}

function formatSizeMB(res: Partial<Resource>) {
  const v = getEstimatedSizeMB(res)
  if (!Number.isFinite(v) || v <= 0)
    return '-'
  return `${Math.round(v)} MB`
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

function openResourceLink(res: Resource) {
  if (res.url) {
    window.open(res.url, '_blank')
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
          v-for="cat in categories" :key="cat.key" class="nav-item" :class="{ active: activeCategory === cat.key }"
          @click="activeCategory = cat.key"
        >
          <component :is="cat.icon" class="nav-icon" />
          <span>{{ cat.title }}</span>
        </div>
      </div>
      <!-- Resource Grid -->
      <div class="resource-area">
        <div class="category-hero">
          <div class="hero-left">
            <h2 class="category-title">
              {{ getCategoryTitle(activeCategory) }}
            </h2>
            <div class="category-sub">
              {{ currentCategoryDesc }}
            </div>
            <div class="category-chips">
              <a-tag v-for="t in categoryTopTags" :key="t" size="small" color="arcoblue" class="chip">
                {{ t }}
              </a-tag>
            </div>
          </div>
          <div class="hero-right">
            <div class="stat-grid">
              <div class="stat-card">
                <div class="stat-icon">
                  <IconApps />
                </div>
                <div class="stat-main">
                  <div class="stat-value">
                    {{ categoryCount }}
                  </div>
                  <div class="stat-label">
                    当前分类资源
                  </div>
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">
                  <IconCloud />
                </div>
                <div class="stat-main">
                  <div class="stat-value">
                    国内 {{ categorySourceCount.domestic }} / 国外 {{ categorySourceCount.foreign }}
                  </div>
                  <div class="stat-label">
                    来源分布
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="featuredResources.length" class="featured-row">
          <div
            v-for="fr in featuredResources"
            :key="fr.title"
            class="featured-card"
            @click="openResource(fr)"
          >
            <div class="featured-main">
              <div class="featured-title">
                {{ fr.title }}
              </div>
              <div class="featured-desc">
                {{ fr.desc }}
              </div>
              <div class="featured-meta">
                <a-tag size="small" :color="getSource(fr) === '国内' ? 'green' : 'purple'">
                  {{ getSource(fr) }}
                </a-tag>
                <span class="meta-text">{{ formatSizeMB(fr) }}</span>
              </div>
            </div>
            <a-button type="primary" size="small" class="featured-btn" @click.stop="openResourceLink(fr)">
              <template #icon>
                <IconDownload />
              </template>
              获取
            </a-button>
          </div>
        </div>

        <div class="resource-grid">
          <div
            v-for="res in displayedResources"
            :key="res.title"
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

              <div class="meta-row">
                <a-tag size="small" :color="getSource(res) === '国内' ? 'green' : 'purple'" class="source-tag">
                  {{ getSource(res) }}
                </a-tag>
                <div class="platform-row">
                  <span v-for="p in getPlatforms(res)" :key="p" class="platform-chip">
                    <img v-if="getPlatformIcon(p)" class="platform-icon" :src="getPlatformIcon(p)" :alt="p">
                    <span class="platform-text">{{ p }}</span>
                  </span>
                </div>
                <span class="size-text">{{ formatSizeMB(res) }}</span>
              </div>
            </div>
            <div class="card-actions">
              <a-button type="primary" size="mini" class="download-btn" @click.stop="openResourceLink(res)">
                <template #icon>
                  <IconDownload />
                </template>
                获取
              </a-button>
            </div>
          </div>

          <div v-if="!categoryResources.length" class="empty-category">
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
              <a-tag v-for="tag in (currentResource.tags || [])" :key="tag" size="small" color="arcoblue">
                {{ tag }}
              </a-tag>
            </div>
          </div>
        </div>

        <div class="modal-body">
          <div class="modal-info-grid">
            <div class="info-item">
              <span class="label">资源来源</span>
              <a-tag size="small" :color="getSource(currentResource) === '国内' ? 'green' : 'purple'">
                {{ getSource(currentResource) }}
              </a-tag>
            </div>
            <div class="info-item">
              <span class="label">预估大小</span>
              <span class="value">{{ formatSizeMB(currentResource) }}</span>
            </div>
            <div class="info-item full">
              <span class="label">支持平台</span>
              <div class="platform-row">
                <span v-for="p in getPlatforms(currentResource)" :key="p" class="platform-chip">
                  <img v-if="getPlatformIcon(p)" class="platform-icon" :src="getPlatformIcon(p)" :alt="p">
                  <span class="platform-text">{{ p }}</span>
                </span>
              </div>
            </div>
            <div class="info-item full">
              <span class="label">访问链接</span>
              <a :href="currentResource.url" target="_blank" class="link-text">
                {{ currentResource.url }}
              </a>
            </div>
          </div>

          <p class="modal-desc">
            {{ currentResource.desc }}
          </p>

          <div v-if="currentResource.details" class="modal-details">
            <h4>详细介绍</h4>
            <p>{{ currentResource.details }}</p>
          </div>

          <div class="modal-section">
            <h4>快速开始</h4>
            <div class="steps-wrap">
              <a-steps :current="1" label-placement="vertical" class="quick-steps">
                <a-step
                  v-for="s in quickSteps"
                  :key="s.title"
                  :title="s.title"
                  :description="s.desc"
                />
              </a-steps>
            </div>
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
  height: calc(100vh - 64px);
  padding-top: 6px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header {
  text-align: center;
  margin-bottom: 14px;

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

  .page-desc {
    font-size: 16px;
    color: var(--color-text-3);
  }
}

.main-content {
  display: flex;
  gap: 16px;
  flex: 1;
  min-height: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.sidebar {
  width: 240px;
  flex-shrink: 0;
  background: var(--color-bg-2);
  border-radius: 8px;
  padding: 12px 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  height: fit-content;
  position: sticky;
  top: 10px;
  align-self: flex-start;

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
  padding: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  height: 100%;
  overflow-y: auto;
  min-height: 0;
}

.resource-area::-webkit-scrollbar {
  width: 6px;
}

.resource-area::-webkit-scrollbar-thumb {
  background: rgba(var(--primary-6), 0.45);
  border-radius: 999px;
}

.resource-area::-webkit-scrollbar-thumb:hover {
  background: rgba(var(--primary-6), 0.65);
}

.category-hero {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 16px;
  border: 1px solid var(--color-border-2);
  border-radius: 14px;
  padding: 18px 18px;
  background:
    radial-gradient(900px 360px at 10% 0%, rgba(var(--primary-6), 0.14), transparent 55%),
    radial-gradient(700px 320px at 90% 30%, rgba(var(--primary-6), 0.1), transparent 55%), #fff;
  margin-bottom: 18px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.hero-left {
  min-width: 0;
}

.category-title {
  font-size: 20px;
  margin: 0;
  color: var(--color-text-1);
}

.category-sub {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.7;
  color: var(--color-text-3);
}

.category-chips {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  border-radius: 999px;
}

.hero-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.stat-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--color-border-2);
  border-radius: 12px;
  padding: 12px 12px;
  background: rgba(255, 255, 255, 0.8);
}

.stat-icon {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: rgba(var(--primary-6), 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(var(--primary-6));
  flex-shrink: 0;
}

.stat-main {
  min-width: 0;
}

.stat-value {
  font-weight: 800;
  color: var(--color-text-1);
  font-size: 13px;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.stat-label {
  margin-top: 6px;
  font-size: 12px;
  color: var(--color-text-3);
}

.featured-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 18px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.featured-card {
  border: 1px solid var(--color-border-2);
  border-radius: 14px;
  padding: 14px 14px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    transform: translateY(-2px);
    border-color: rgb(var(--primary-6));
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
}

.featured-main {
  min-width: 0;
}

.featured-title {
  font-weight: 800;
  color: var(--color-text-1);
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.featured-desc {
  margin-top: 8px;
  color: var(--color-text-3);
  font-size: 12px;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
}

.featured-meta {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.meta-text {
  color: var(--color-text-3);
  font-size: 12px;
}

.featured-btn {
  border-radius: 999px;
  flex-shrink: 0;
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
}

.resource-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 14px;
  border: 1px solid var(--color-border-2);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s;
  background: #fff;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
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
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
  }
}

.meta-row {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.source-tag {
  border-radius: 999px;
}

.platform-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.platform-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid var(--color-border-2);
  background: var(--color-fill-1);
  font-size: 12px;
  color: var(--color-text-2);
}

.platform-icon {
  width: 14px;
  height: 14px;
  object-fit: contain;
}

.platform-text {
  line-height: 1;
}

.size-text {
  margin-left: auto;
  color: var(--color-text-3);
  font-size: 12px;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
}

.download-btn {
  border-radius: 999px;
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

  .modal-info-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    padding: 12px 12px;
    border-radius: 12px;
    border: 1px solid var(--color-border-2);
    background: var(--color-fill-1);
    margin-bottom: 18px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    .info-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      min-width: 0;

      &.full {
        grid-column: 1 / -1;
        align-items: flex-start;
      }
    }

    .label {
      color: var(--color-text-3);
      font-size: 12px;
      flex-shrink: 0;
    }

    .value {
      color: var(--color-text-1);
      font-weight: 700;
      font-size: 12px;
    }
  }

  .link-text {
    color: var(--primary-color);
    text-decoration: none;
    word-break: break-all;
    font-size: 12px;

    &:hover {
      text-decoration: underline;
    }
  }

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

.modal-section {
  margin-top: 18px;

  h4 {
    margin: 0 0 10px 0;
    font-size: 15px;
    color: var(--color-text-1);
  }
}

.steps-wrap {
  border: 1px solid var(--color-border-2);
  background: #fff;
  border-radius: 12px;
  padding: 12px 10px;
}

.quick-steps {
  :deep(.arco-steps-item-title) {
    font-weight: 800;
  }
}

.modal-footer-action {
  padding-top: 18px;
  border-top: 1px solid var(--color-border-1);
}
</style>
