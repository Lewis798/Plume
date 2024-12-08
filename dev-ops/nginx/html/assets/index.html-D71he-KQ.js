import{_ as i,c as a,e as t,o as e}from"./app-2cMreD1z.js";const n={};function l(p,s){return e(),a("div",null,s[0]||(s[0]=[t(`<h2 id="_5-1-操作符重载" tabindex="-1"><a class="header-anchor" href="#_5-1-操作符重载"><span>5.1 操作符重载</span></a></h2><p>在c++里我们可以定义加法等操作符，比如我们可以定义两个石头的加法</p><h3 id="_5-1-1-成员函数实现-this" tabindex="-1"><a class="header-anchor" href="#_5-1-1-成员函数实现-this"><span>5.1.1 成员函数实现 / this</span></a></h3><p>成员函数： <code>complex :: function ....</code> 前面带有class的名称（在class里先声明了的）</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">inline</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> complex</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&amp;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">complex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">::</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">operator</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> +=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> complex</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&amp;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> r</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> __doapl</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> r</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   //do assignment plus</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/202307160907795.png" style="zoom:80%;"><p>所有的成员函数都带有一个<mark>隐藏的参数<code>this</code></mark>（<mark>是一个指针</mark>），<code>this</code>指向调用这个函数的调用者</p><ul><li><p>定义函数的时候，<strong>在参数列中不能写出来<code>this</code></strong>，直接用即可</p></li><li><p><strong>函数里可写可不写</strong>，但当<u>传入参数</u>与<u>成员变量名</u><strong>相同</strong>时要写</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">	double</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> real</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ()</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> const</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">-&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">re</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  //这里的this-&gt;可省略</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">c3 </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> c2 </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> c1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // c2 加了 c1 后如果返回 void 就无法进行 c3 的操作了</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>将操作符写为void函数也可以，<strong>但为了可以兼容<code>c3+=c2+=c1</code>的形式，写成返回引用更好。</strong></p><h3 id="_5-1-2-非成员函数实现" tabindex="-1"><a class="header-anchor" href="#_5-1-2-非成员函数实现"><span>5.1.2 非成员函数实现</span></a></h3><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/202307160910764.png" style="zoom:67%;"><p>非成员函数<strong>没有<code>this</code></strong></p><p>应对三种使用方法，写出三种方式</p><ul><li><p>非成员函数是global函数——为了后面两种使用方法</p></li><li><p>这些函数<mark>不能返回引用</mark>，必须值传递</p><blockquote><p><strong>在函数中创建的新变量 (local 变量)，要返回</strong></p></blockquote></li></ul><h3 id="_5-1-3-output函数-的重载" tabindex="-1"><a class="header-anchor" href="#_5-1-3-output函数-的重载"><span>5.1.3 output函数 &lt;&lt; 的重载</span></a></h3><p>cout不认识新定义的这种复数，因此也需要对<code>&lt;&lt;</code>进行操作符重载</p><blockquote><p>只能全局函数，不能成员函数——导致使用时方向相反</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">iostream.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ostream</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&amp;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">operator</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">&lt;&lt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">ostream</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&amp;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> os</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> const</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> complex</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&amp;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> x</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> os </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;&lt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;&lt;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> real</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;&lt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;&lt;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> imag</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;&lt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  //自定义输出</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>ostream&amp;</code> 是 <code>cout</code> 的 classname</li></ul><blockquote><p>参数传递：os 在函数中会变化，所以不能加 <code>const</code></p></blockquote><blockquote><p>返回值传递：为了避免 <code>cout &lt;&lt; c1 &lt;&lt; conj(c1);</code> 连续输出，不用 <code>void</code></p><p><code>cout &lt;&lt; c1</code> 返回值需要与 <code>cout</code> 类型一致</p></blockquote><h2 id="_5-2-临时对象" tabindex="-1"><a class="header-anchor" href="#_5-2-临时对象"><span>5.2 临时对象</span></a></h2><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/202307160913256.png"><p><code>classname ()</code> 创建一个classname类型的临时对象——不需要名称，生命只有一行</p>`,26)]))}const k=i(n,[["render",l],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/cpp/j306oshk/","title":"操作符重载与临时对象","lang":"zh-CN","frontmatter":{"title":"操作符重载与临时对象","createTime":"2024/12/07 23:43:30","permalink":"/cpp/j306oshk/","description":"5.1 操作符重载 在c++里我们可以定义加法等操作符，比如我们可以定义两个石头的加法 5.1.1 成员函数实现 / this 成员函数： complex :: function .... 前面带有class的名称（在class里先声明了的） 所有的成员函数都带有一个隐藏的参数this（是一个指针），this指向调用这个函数的调用者 定义函数的时候，在...","head":[["meta",{"property":"og:url","content":"https://plume.pookie.top/cpp/j306oshk/"}],["meta",{"property":"og:site_name","content":"Plume Notes"}],["meta",{"property":"og:title","content":"操作符重载与临时对象"}],["meta",{"property":"og:description","content":"5.1 操作符重载 在c++里我们可以定义加法等操作符，比如我们可以定义两个石头的加法 5.1.1 成员函数实现 / this 成员函数： complex :: function .... 前面带有class的名称（在class里先声明了的） 所有的成员函数都带有一个隐藏的参数this（是一个指针），this指向调用这个函数的调用者 定义函数的时候，在..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T15:52:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T15:52:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"操作符重载与临时对象\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-07T15:52:20.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.79,"words":537},"git":{"updatedTime":1733586740000,"contributors":[{"name":"Lewis798","email":"QA2160073500@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Lewis798?v=4","url":"https://github.com/Lewis798"}]},"autoDesc":true,"filePathRelative":"notes/C++/1.面向对象高级开发 Part1/操作符重载与临时对象.md","bulletin":false}');export{k as comp,r as data};