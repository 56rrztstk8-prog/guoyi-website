# 郭熠艺术家网站 — 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 使用 Astro 搭建郭熠的五页艺术家网站，极简东方风格，左侧隐藏导航菜单

**Architecture:** Astro 静态站点，五个页面（主页、作品集、新闻展览、关于、联系方式）。共享 BaseLayout + LeftMenu 组件。纯 CSS 实现左侧悬停菜单，无 JS 框架。先中文后英文。

**Tech Stack:** Astro 5.x, CSS custom properties, 无 UI 框架

---

## 文件结构

```
├── astro.config.mjs
├── package.json
├── src/
│   ├── pages/
│   │   ├── index.astro          # 主页：全屏作品图 + 左侧隐藏菜单
│   │   ├── portfolio.astro      # 作品集：列表式
│   │   ├── news.astro           # 新闻展览：占位
│   │   ├── about.astro          # 关于：纯文本自述
│   │   └── contact.astro        # 联系方式：邮箱
│   ├── components/
│   │   ├── LeftMenu.astro       # 左侧悬停浮现导航
│   │   └── PageHead.astro       # 公共 head（meta、字体）
│   ├── layouts/
│   │   └── BaseLayout.astro     # 共享布局壳
│   ├── styles/
│   │   └── global.css           # 全局样式变量
│   └── data/
│       └── site.ts              # 网站常量（导航项、联系方式）
└── public/
    └── favicon.ico
```

---

### Task 1: 初始化 Astro 项目

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `public/favicon.ico` (临时空占位)

- [ ] **Step 1: 创建 package.json**

```json
{
  "name": "guoyi-website",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^5.0.0"
  }
}
```

- [ ] **Step 2: 创建 astro.config.mjs**

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://guoyi.com",
});
```

- [ ] **Step 3: 创建 tsconfig.json**

```json
{
  "extends": "astro/tsconfigs/base",
  "compilerOptions": {
    "strict": true
  }
}
```

- [ ] **Step 4: 安装依赖**

Run: `npm install`

- [ ] **Step 5: Commit**

```bash
git add package.json astro.config.mjs tsconfig.json
git commit -m "feat: init Astro project"
```

---

### Task 2: 全局样式与网站常量

**Files:**
- Create: `src/styles/global.css`
- Create: `src/data/site.ts`

- [ ] **Step 1: 创建全局样式变量**

`src/styles/global.css`:

```css
:root {
  --color-bg: #fafaf8;
  --color-text: #333333;
  --color-text-light: #999999;
  --color-border: #e8e8e8;
  --color-menu-bg: rgba(250, 250, 248, 0.96);

  --font-sans: "Noto Serif SC", "Source Han Serif SC", "Songti SC", Georgia, serif;
  --font-size-name: 0.75rem;
  --font-size-nav: 0.95rem;
  --font-size-body: 1rem;

  --spacing-page: 5vw;
  --menu-width: 220px;
  --menu-trigger-width: 24px;

  --transition-menu: opacity 0.35s ease, transform 0.35s ease;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: var(--font-sans);
  font-size: 17px;
  color: var(--color-text);
  background: var(--color-bg);
  -webkit-font-smoothing: antialiased;
}

body {
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}
```

- [ ] **Step 2: 创建网站常量**

`src/data/site.ts`:

```ts
export const site = {
  name: "GUO YI",
  nameZh: "郭熠",

  nav: [
    { label: "作品集", href: "/portfolio" },
    { label: "新闻 & 展览", href: "/news" },
    { label: "关于", href: "/about" },
    { label: "联系方式", href: "/contact" },
  ],

  contact: {
    email: "GY070203@163.com",
  },

  about: {
    // 艺术家自述由 about.astro 直接引用考察/ 中的文件
  },
};
```

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css src/data/site.ts
git commit -m "feat: add global styles and site data"
```

---

### Task 3: 公共组件 — PageHead 和 BaseLayout

**Files:**
- Create: `src/components/PageHead.astro`
- Create: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: 创建 PageHead 组件**

`src/components/PageHead.astro`:

```astro
---
interface Props {
  title?: string;
  description?: string;
}

const { title, description } = Astro.props;
const fullTitle = title ? `${title} — GUO YI` : "GUO YI";
---

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>{fullTitle}</title>
<meta name="description" content={description || "郭熠艺术家网站"} />
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

- [ ] **Step 2: 创建 BaseLayout**

`src/layouts/BaseLayout.astro`:

```astro
---
import "../styles/global.css";
import PageHead from "../components/PageHead.astro";
import LeftMenu from "../components/LeftMenu.astro";

interface Props {
  title?: string;
  description?: string;
  showMenu?: boolean;
}

const { title, description, showMenu = true } = Astro.props;
---

<!doctype html>
<html lang="zh-CN">
  <head>
    <PageHead title={title} description={description} />
  </head>
  <body>
    {showMenu && <LeftMenu />}
    <main>
      <slot />
    </main>
  </body>
</html>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/PageHead.astro src/layouts/BaseLayout.astro
git commit -m "feat: add PageHead and BaseLayout"
```

---

### Task 4: LeftMenu — 左侧隐藏导航

**Files:**
- Create: `src/components/LeftMenu.astro`

- [ ] **Step 1: 创建 LeftMenu 组件**

`src/components/LeftMenu.astro`:

```astro
---
import { site } from "../data/site";
---

<style>
  .menu-trigger {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: var(--menu-trigger-width);
    z-index: 100;
  }

  /* 菜单默认隐藏 */
  .menu-panel {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: var(--menu-width);
    background: var(--color-menu-bg);
    border-right: 1px solid var(--color-border);
    padding: 6vh 2rem;
    z-index: 99;
    opacity: 0;
    transform: translateX(-12px);
    transition: var(--transition-menu);
    pointer-events: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* 悬停触发区时显示菜单 */
  .menu-trigger:hover + .menu-panel,
  .menu-panel:hover {
    opacity: 1;
    transform: translateX(0);
    pointer-events: auto;
  }

  .menu-label {
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    color: var(--color-text-light);
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  .menu-nav {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .menu-nav a {
    font-size: var(--font-size-nav);
    letter-spacing: 0.05em;
    transition: color 0.2s;
  }

  .menu-nav a:hover {
    color: var(--color-text-light);
  }
</style>

<!-- 左侧触发区：一个不可见的窄条 -->
<div class="menu-trigger" aria-hidden="true"></div>

<nav class="menu-panel" aria-label="主导航">
  <span class="menu-label">目录</span>
  <ul class="menu-nav">
    {site.nav.map((item) => (
      <li><a href={item.href}>{item.label}</a></li>
    ))}
  </ul>
</nav>
```

- [ ] **Step 2: 验证组件已正确导入到 BaseLayout 中**（Task 3 已完成导入）

- [ ] **Step 3: Commit**

```bash
git add src/components/LeftMenu.astro
git commit -m "feat: add left-edge hover navigation menu"
```

---

### Task 5: 主页

**Files:**
- Create: `src/pages/index.astro`

- [ ] **Step 1: 创建主页**

`src/pages/index.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import { site } from "../data/site";

// 主页背景图片路径 — 后续替换为实际作品图
const heroImage = "/images/hero.jpg";
---

<BaseLayout title={undefined} description="郭熠个人网站">
  <style>
    .hero {
      position: fixed;
      inset: 0;
      z-index: 0;
    }

    .hero img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .signature {
      position: fixed;
      top: 1.5rem;
      left: var(--menu-trigger-width);
      padding-left: 1.2rem;
      z-index: 50;
      font-size: var(--font-size-name);
      letter-spacing: 0.25em;
      color: #666;
      /* 根据背景图亮度调整文字颜色 */
      mix-blend-mode: difference;
      color: #fff;
    }
  </style>

  <div class="hero">
    <img src={heroImage} alt="" />
  </div>

  <span class="signature">{site.name}</span>
</BaseLayout>
```

- [ ] **Step 2: 放置默认主页图片**

复制一张图片到 `public/images/hero.jpg`（先用考察/绘画/中任意一张 .jpg 作为临时占位）

- [ ] **Step 3: 启动开发服务器验证**

Run: `npx astro dev`
Expected: 浏览器打开 localhost:4321，看到全屏图片、左上角 GUO YI 字样、左侧悬停浮现菜单

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro public/images/hero.jpg
git commit -m "feat: add homepage with fullscreen artwork and signature"
```

---

### Task 6: 作品集页面

**Files:**
- Create: `src/pages/portfolio.astro`

- [ ] **Step 1: 创建作品集页面**

`src/pages/portfolio.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";

interface Work {
  title: string;
  subtitle: string;
  cover: string;
  description: string;
}

const works: Work[] = [
  {
    title: "何枝可依",
    subtitle: "实验影像 / 诗纪录片",
    cover: "/images/works/he-zhi-ke-yi-cover.jpg",
    description:
      "以个人频繁搬家的成长经历为起点，通过诗意的独白、真实的母女对话以及纸船、迷宫等视觉隐喻，探讨在高速流动的当下，个体对"家"的迷失与对安全感的追问。",
  },
  {
    title: "Web and Wyrd",
    subtitle: "影集",
    cover: "/images/works/web-and-wyrd-cover.jpg",
    description:
      "通过三个核心神话故事——蜘蛛祖母编织世界、郊狼柯帝编织星辰、女武神编织命运——呈现人类如何用"编织"的意象理解世界。",
  },
];
---

<BaseLayout title="作品集">
  <style>
    .page {
      max-width: 800px;
      margin: 0 auto;
      padding: 8vh var(--spacing-page);
    }

    .page h1 {
      font-size: 1.1rem;
      font-weight: 400;
      letter-spacing: 0.08em;
      margin-bottom: 3rem;
      color: var(--color-text-light);
    }

    .work-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }

    .work-item a {
      display: block;
    }

    .work-cover {
      width: 100%;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      background: #eee;
      margin-bottom: 1rem;
    }

    .work-title {
      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: 0.05em;
      margin-bottom: 0.25rem;
    }

    .work-subtitle {
      font-size: 0.8rem;
      color: var(--color-text-light);
      letter-spacing: 0.05em;
      margin-bottom: 0.75rem;
    }

    .work-desc {
      font-size: 0.9rem;
      line-height: 1.8;
      color: #666;
    }
  </style>

  <div class="page">
    <h1>作品集</h1>
    <ul class="work-list">
      {
        works.map((w) => (
          <li class="work-item">
            <img class="work-cover" src={w.cover} alt={w.title} />
            <div class="work-title">{w.title}</div>
            <div class="work-subtitle">{w.subtitle}</div>
            <p class="work-desc">{w.description}</p>
          </li>
        ))
      }
    </ul>
  </div>
</BaseLayout>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/portfolio.astro
git commit -m "feat: add portfolio page with work list"
```

---

### Task 7: 新闻展览页面（空壳）

**Files:**
- Create: `src/pages/news.astro`

- [ ] **Step 1: 创建新闻展览页面**

`src/pages/news.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout title="新闻 & 展览">
  <style>
    .page {
      max-width: 800px;
      margin: 0 auto;
      padding: 8vh var(--spacing-page);
    }

    .page h1 {
      font-size: 1.1rem;
      font-weight: 400;
      letter-spacing: 0.08em;
      margin-bottom: 3rem;
      color: var(--color-text-light);
    }

    .empty {
      font-size: 0.9rem;
      color: var(--color-text-light);
      line-height: 1.8;
    }
  </style>

  <div class="page">
    <h1>新闻 & 展览</h1>
    <p class="empty">暂无展览信息。</p>
  </div>
</BaseLayout>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/news.astro
git commit -m "feat: add news page placeholder"
```

---

### Task 8: 关于页面

**Files:**
- Create: `src/pages/about.astro`

- [ ] **Step 1: 创建关于页面**

`src/pages/about.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";

// 直接硬编码艺术家自述文本（来源：考察/我的艺术家自述.md）
// 后续英文版时替换为 i18n key
const statement = `郭熠，2007年生于河南，现生活工作于上海，创作涉及绘画、图片与视频。她的工作方法接近于线索编织——在创作过程中不断纳入来自不同源头的信息与材料，围绕一条主线编入作品。被编入的材料携带着各自的时间属性进入画面，它们共存，但不彼此消融。

织网不只是一种方法。网由纤细的线构成，柔软，但并非脆弱：它承受张力、容许断裂、能够在破损处重新打结。网上的连接不是必然的，也不是永久的——神话会风化，文明会消退，一个曾经被认真对待的符号终将失去它的所指，但网的形态仍在，以另一种方式重新分配张力。将散布于全球各地的神话传统视为地表上的光点：每一个创世叙事、每一个图腾信仰、每一个未解之谜，都是一个亮点。总有线索将它们拉成线，交织为星座般的大地之网——但网中也有暗处，有断线，有正在黯淡的节点。连接并不意味着亲密，在场不意味着归属。`;
---

<BaseLayout title="关于">
  <style>
    .page {
      max-width: 680px;
      margin: 0 auto;
      padding: 8vh var(--spacing-page);
    }

    .page h1 {
      font-size: 1.1rem;
      font-weight: 400;
      letter-spacing: 0.08em;
      margin-bottom: 3rem;
      color: var(--color-text-light);
    }

    .statement {
      font-size: 0.95rem;
      line-height: 2.1;
      color: var(--color-text);
      white-space: pre-line;
    }
  </style>

  <div class="page">
    <h1>关于</h1>
    <div class="statement">{statement}</div>
  </div>
</BaseLayout>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/about.astro
git commit -m "feat: add about page with artist statement"
```

---

### Task 9: 联系方式页面

**Files:**
- Create: `src/pages/contact.astro`

- [ ] **Step 1: 创建联系方式页面**

`src/pages/contact.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import { site } from "../data/site";
---

<BaseLayout title="联系方式">
  <style>
    .page {
      max-width: 680px;
      margin: 0 auto;
      padding: 8vh var(--spacing-page);
    }

    .page h1 {
      font-size: 1.1rem;
      font-weight: 400;
      letter-spacing: 0.08em;
      margin-bottom: 3rem;
      color: var(--color-text-light);
    }

    .info {
      font-size: 0.95rem;
      line-height: 2;
    }

    .info a {
      border-bottom: 1px solid var(--color-border);
      transition: border-color 0.2s;
    }

    .info a:hover {
      border-color: var(--color-text);
    }
  </style>

  <div class="page">
    <h1>联系方式</h1>
    <div class="info">
      <p>邮箱：<a href="mailto:{site.contact.email}">{site.contact.email}</a></p>
    </div>
  </div>
</BaseLayout>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/contact.astro
git commit -m "feat: add contact page"
```

---

### Task 10: 整体联调与打磨

**Files:**
- Modify: `src/styles/global.css` — 微调
- Modify: `src/layouts/BaseLayout.astro` — 页面过渡细节

- [ ] **Step 1: 启动开发服务器，逐页检查**

Run: `npx astro dev`

逐页确认：
- 主页：全屏图、签名位置、左侧悬停菜单流畅
- 作品集：列表排版、封面图占位
- 新闻展览：空壳占位文案
- 关于：自述文字可读性、行距
- 联系方式：邮箱链接可点击

- [ ] **Step 2: 微调全局样式（如有需要）**

根据实际预览效果，调整 `global.css` 中的间距、字号等变量值。

- [ ] **Step 3: 构建生产版本验证**

Run: `npx astro build`
Expected: 无错误，dist/ 目录生成完整静态文件

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: final polish and production build verified"
```

---

## 待补充

以下项依赖用户逐步完善素材：

1. **主页背景图** — 用户决定用哪张作品，放入 `public/images/hero.jpg`
2. **作品集封面图** — 用户准备好封面图后放入 `public/images/works/`
3. **新闻展览内容** — 有展览信息后更新 `src/pages/news.astro`
4. **英文版本** — 中文版完成后，用 Astro i18n 路由实现中英切换
5. **托管部署** — 平台确定后配置 `astro.config.mjs` 的 `site` 字段
