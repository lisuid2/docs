import { defineConfig } from 'vitepress';
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

const ogDescription = "solitude主题";
const ogUrl = "https://docs.lisui.top";
const ogImage = "https://docs.anheyu.com/cover.jpg";

export default defineConfig({
  //base:  '/docs/',
  title: "Lisui Docs",
  description: "一个 VitePress 网站",
  lang: "zh",
  themeConfig: {
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
              { text: "404 页面配置", link: "/1.page/404" },
              { text: "front-matter", link: "/1.page/front-matter" },
            ],
          },
          {
            text: "🛠 配置",
            collapsed: false,
            items: [
              { text: "基本", link: "/2.global/1.global.md" },
              { text: "扩展", link: "/2.global/2.extra.md" },
              { text: "进阶", link: "/2.global/3.advanced.md" }
            ],
          },
          {
            text: "✉ 评论系统",
            collapsed: false,
            items: [
              { text: "基本配置", link: "/3.comments/0.md" },
              { text: "Valine", link: "/3.comments/1.valine.md" },
              { text: "Waline", link: "/3.comments/2.waline.md" },
              { text: "Twikoo", link: "/3.comments/3.twikoo.md" },
              { text: "Artalk", link: "/3.comments/4.artalk.md" },
            ]
          },
          {
            text: "🔍 搜索",
            collapsed: false,
            items: [
              { text: "本地搜索", link: "/4.search/0.md" },
              { text: "Algolia搜索", link: "/4.search/1.algolia.md" }
            ]
          },
          {
            text: "📰 特别页面",
            collapsed: false,
            items: [
              { text: "关于", link: "/5.pages/1.about.md" },
              { text: "友情链接", link: "/5.pages/2.links.md" },
              { text: "即刻短文", link: "/5.pages/3.essay.md" },
              { text: "我的装备", link: "/5.pages/4.equipmengt.md" },
              { text: "友链鱼塘", link: "/5.pages/5.fclrcle.md" },
              { text: "音乐馆", link: "/5.pages/6.music.md" },
              { text: "在线工具", link: "/5.pages/6.md" },
              { text: "豆瓣", link: "/5.pages/7douban.md" },
              { text: "弹幕留言板", link: "/5.pages/8.message.md" }
            ]
          },
          {
            text: "👍 第三方",
            collapsed: false,
            items: [  
              { text: "Tianli文章Ai摘要接", link: "/6.third_party/0.tianliai.md" }, 
              { text: "PostChat聊天", link: "/6.third_party/1.postchat.md" }, 
            ]
          }
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    algolia: {
      appId: "CITURDDECN",
      apiKey: "e5c83518b67da17a254574c31759596b",
      indexName: "anheyu",
      // searchParameters: {
      //   facetFilters: ["tags:en"],
      // },
      locales: {
        zh: {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },
    footer: {
      message: `Released under the MIT License.`,
      copyright: "Copyright © 2024 Sui",
    }
  }
});
