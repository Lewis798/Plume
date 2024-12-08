import{_ as t,c as o,e as a,o as r}from"./app-CHgSCx-e.js";const n={};function p(s,e){return r(),o("div",null,e[0]||(e[0]=[a('<h2 id="_3-1-参数传递" tabindex="-1"><a class="header-anchor" href="#_3-1-参数传递"><span>3.1 参数传递</span></a></h2><p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/202307160855100.png" alt="img" loading="lazy"></p><ul><li>值传递 pass by value，传递value是把整个参数全传过去，<mark>尽量不要直接value传递</mark> 例 <code>double r</code></li></ul><ul><li><p>引用传递 pass by reference，传引用相当于传指针，快，形式也漂亮 例 <code>complex&amp;</code></p></li><li><p>如果只是为了提升速度，<mark>不向改变数据，那么传<strong>const引用</strong></mark>；这样传进去的东西，<strong>不能被修改</strong></p><p>例 <code>const complex&amp;</code></p></li></ul><h2 id="_3-2-返回值传递" tabindex="-1"><a class="header-anchor" href="#_3-2-返回值传递"><span>3.2 返回值传递</span></a></h2><p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/202307160855838.png" alt="img" loading="lazy"></p><p>返回值的传递，<mark>尽量返回引用</mark></p><blockquote><p><strong>在函数中创建的变量 (local 变量)，要返回</strong>——这种情况是<strong>不能返回引用的</strong>；因为函数结束后函数中创建的变量就消失了，无法引用</p></blockquote><p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/202307160904839.png" alt="img" loading="lazy"></p><blockquote><p><u>传递者</u>无需知道<u>接受者</u>是以<u>reference形式</u>接受——所以用reference形式很便捷</p></blockquote><p>​</p>',11)]))}const i=t(n,[["render",p],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/cpp/cgkvkvby/","title":"参数传递与返回值——引用","lang":"zh-CN","frontmatter":{"title":"参数传递与返回值——引用","createTime":"2024/12/07 23:43:30","permalink":"/cpp/cgkvkvby/","description":"3.1 参数传递 img 值传递 pass by value，传递value是把整个参数全传过去，尽量不要直接value传递 例 double r 引用传递 pass by reference，传引用相当于传指针，快，形式也漂亮 例 complex& 如果只是为了提升速度，不向改变数据，那么传const引用；这样传进去的东西，不能被修改 例 const...","head":[["meta",{"property":"og:url","content":"https://plume.pookie.top/cpp/cgkvkvby/"}],["meta",{"property":"og:site_name","content":"Plume Notes"}],["meta",{"property":"og:title","content":"参数传递与返回值——引用"}],["meta",{"property":"og:description","content":"3.1 参数传递 img 值传递 pass by value，传递value是把整个参数全传过去，尽量不要直接value传递 例 double r 引用传递 pass by reference，传引用相当于传指针，快，形式也漂亮 例 complex& 如果只是为了提升速度，不向改变数据，那么传const引用；这样传进去的东西，不能被修改 例 const..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/202307160855100.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T15:52:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T15:52:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"参数传递与返回值——引用\\",\\"image\\":[\\"https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/202307160855100.png\\",\\"https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/202307160855838.png\\",\\"https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/202307160904839.png\\"],\\"dateModified\\":\\"2024-12-07T15:52:20.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.79,"words":236},"git":{"updatedTime":1733586740000,"contributors":[{"name":"Lewis798","email":"QA2160073500@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Lewis798?v=4","url":"https://github.com/Lewis798"}]},"autoDesc":true,"filePathRelative":"notes/C++/1.面向对象高级开发 Part1/参数传递与返回值——引用.md","bulletin":false}');export{i as comp,m as data};