import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base:  '/docs/',
  title: "📚Lisui Docs",
  description: "一个 VitePress 网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: 'https://lisui.top' }
    ],
    sidebar: [
      {
        text: "主题简介",
        link: "/intro",
      },
      {
        text: "快速上手",
        items: [
          { text: "安装主题 💻", link: "/install" },
          {
            text: "🚀 快速开始",
            collapsed: false,
            items: [
              { text: "404 页面配置", link: "/page/404" },
              { text: " front-matter", link: "/page/front-matter" },
              
            ],
          },
          {
            text: "🛠 配置",
            collapsed: false,
            items: [
              { text: "基本", link: "/global/1.global.md" },
              { text: "扩展", link: "/global/2.md" },
            ],
          },
          {
            text: "进阶配置 🚀",
            collapsed: false,
            items: [
              { text: "全局配置", link: "/advanced/" },
              { text: "友情链接配置", link: "/page/links" },
              { text: "留言板页面配置", link: "/page/message" },
              { text: "我的装备页面配置", link: "/page/equipment" },
              { text: "关于页面配置", link: "/page/about" },
              { text: "音乐馆页配置", link: "/page/music" },
              { text: "朋友圈页面配置", link: "/page/fcircle" },
              { text: "相册页面配置", link: "/page/album" },
              { text: "首页即刻说说页面配置", link: "/page/essay" },
            ],
          },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})
