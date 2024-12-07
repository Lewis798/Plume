import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '🏠首页', link: '/' },
  { text: '📑博客', link: '/blog/' },
  { text: '🏷️标签', link: '/blog/tags/' },
  { text: '🗄️归档', link: '/blog/archives/' },
   {
     text: '🗂️系列笔记',
     items: [
       
       { text: 'C++', link: '/notes/C++/', icon: 'vscode-icons:file-type-cpp3'},
       { text: '算法', link: '/notes/算法/', icon: 'vscode-icons:file-type-libreoffice-draw' },
       { text: '计算机网络', link: '/notes/计算机网络/', icon: 'devicon:reactnavigation' },
       { text: 'linux', link: '/notes/liunx/', icon: 'skill-icons:linux-light' },
       { text: '工具百宝箱', link: '/notes/Tools & Skills/', icon: 'unjs:confbox' },
     ]
   },
])
