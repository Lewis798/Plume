import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  dest: "./dev-ops/nginx/html",
  base: '/',
  lang: 'zh-CN',
  title: 'Plume Notes',
  description: '基于Plume主题搭建的知识博客',
   head: [
     [
       'link',{ rel: 'icon', href: '/icon/favicon.ico' }
     ]
   ],

  bundler: viteBundler(),

  theme: plumeTheme({
    // 添加您的部署域名
    hostname: 'https://plume.pookie.top',
    copyright: 'CC-BY-NC-SA-4.0',
    footer: { message: 'Plume Notes', copyright: 'Copyright © 2024-present leiws. All rights reserved.' },
    contributors: {
      mode: 'inline',
      info: [
        {
          name: 'Lewis',
          username: 'Lewis',
        }
      ]
    },

    autoFrontmatter: {
      permalink: true, // 是否生成永久链接
      createTime: true, // 是否生成创建时间
      title: true, // 是否生成标题
    },

    blog:{ pagination: 15,},

    plugins: {
      git: true,
      /**
       * 
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
       shiki: {

           // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
           theme: { light: 'vitesse-light', dark: 'vitesse-dark' },
           languages: ["bash","makefile","python","cpp","javascript","html","c","c++"],
       },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
         include: true,
         chart: true,
         echarts: true,
         mermaid: true,
         flowchart: true,
      },
      markdownImage: {
        // figure: true,
        lazyload: true,
        mark: true,
        size: true,
    },
      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
       markdownPower: {
         pdf: true,
         caniuse: true,
         plot: true,
         bilibili: true,
         youtube: true,
         icons: true,
         codepen: true,
         replit: true,
         codeSandbox: true,
         jsfiddle: true,
         repl: {
           go: true,
           rust: true,
           kotlin: true,
         },
       },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
       comment: {
         provider: 'Waline', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
         serverURL: 'https://waline.pookie.top/'
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
       },
          /**
         * 本地搜索 search
         */
          search: false,

    /**
      * 搜索 Algolia DocSearch
      * @see https://theme-plume.vuejs.press/guide/features/content-search/
      */
     docsearch: {
       appId: 'R3ZYE0XSDV', 
       apiKey: 'ae5d16de553a9c067a3ad8f36b32e19d', 
       indexName: 'plume', 
     },
    },
  }),
})
