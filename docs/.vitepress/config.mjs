import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HuoTianCi",
  titleTemplate: "记录",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/title.svg" }]],
  base: "/",
  lastUpdated: true, // 最后更新时间
  scrollOffset: "header", // 滚动偏移
  cleanUrls: true, // 干净路由
  themeConfig: {
    // 配置头像
    logo: "./logo.jpg",
    search: {
      provider: "local",
    },
    i18nRouting: true,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '案列',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'https://e-assets.gitee.com/gitee-community-web/_next/static/media/logo-white.a5b0e29c.svg', link: 'https://gitee.com/huotianci' }
    ],
    //配置页脚
    footer: {
      message: "WeChat：Huo273768365",
      copyright: "Huo 天赐",
    },
  }
})
