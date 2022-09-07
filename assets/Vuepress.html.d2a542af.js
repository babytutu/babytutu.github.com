import{_ as e,r as o,o as c,c as l,b as n,a as t,e as s,f as p}from"./app.c90e916d.js";const u={},r=n("h1",{id:"vuepress",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),s(" Vuepress")],-1),i=n("blockquote",null,[n("p",null,"Vue \u9A71\u52A8\u7684\u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668")],-1),k={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},d=s("vuepress\u5B98\u65B9\u6587\u6863"),h=p(`<h2 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h2><blockquote><p>\u4EE5books\u76EE\u5F55\u4E3A\u4F8B</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mkdir</span> books
<span class="token builtin class-name">cd</span> books

<span class="token function">git</span> init
<span class="token function">yarn</span> init

<span class="token function">yarn</span> <span class="token function">add</span> -D vuepress@next
</code></pre></div><h2 id="\u589E\u52A0\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u589E\u52A0\u811A\u672C" aria-hidden="true">#</a> \u589E\u52A0\u811A\u672C</h2><p>\u5728 <code>package.json</code> \u4E2D\u6DFB\u52A0\u4E00\u4E9B <code>scripts</code></p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6DFB\u52A0<code>.gitignore</code>\u6587\u4EF6</p><div class="language-text ext-text"><pre class="language-text"><code>node_modules
.temp
.cache
</code></pre></div><h2 id="\u589E\u52A0\u7B2C\u4E00\u4E2A\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u589E\u52A0\u7B2C\u4E00\u4E2A\u6587\u4EF6" aria-hidden="true">#</a> \u589E\u52A0\u7B2C\u4E00\u4E2A\u6587\u4EF6</h2><p>\u65B0\u5EFA\u76EE\u5F55<code>docs</code>,\u76EE\u5F55\u4E0B\u65B0\u5EFA<code>README.md</code></p><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> HELLO VUEPRESS</span>
</code></pre></div><h2 id="\u5F00\u542F\u672C\u5730\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u672C\u5730\u8C03\u8BD5" aria-hidden="true">#</a> \u5F00\u542F\u672C\u5730\u8C03\u8BD5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> start
</code></pre></div><h2 id="\u589E\u52A0\u83DC\u5355\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u589E\u52A0\u83DC\u5355\u914D\u7F6E" aria-hidden="true">#</a> \u589E\u52A0\u83DC\u5355\u914D\u7F6E</h2><p>\u5728<code>docs/.vuepress</code>\u76EE\u5F55\u4E0B\uFF0C\u65B0\u5EFA<code>config.js</code></p>`,15),g={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html",target:"_blank",rel:"noopener noreferrer"},m=s("\u9ED8\u8BA4\u4E3B\u9898\u914D\u7F6E\u5B98\u65B9\u6587\u6863"),y=p(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/theme-default&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/books/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u90E8\u7F72\u5230GitHub Pages\u9700\u8981</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u7F51\u7AD9\u6807\u9898&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;\u7F51\u7AD9\u63CF\u8FF0&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u9996\u9875&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/README.md&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2>`,2),f={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/markdown.html",target:"_blank",rel:"noopener noreferrer"},v=s("\u81EA\u5B9A\u4E49\u5BB9\u5668"),_=p(`<div class="language-markdown ext-md"><pre class="language-markdown"><code>::: tip
\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A
:::

::: warning
\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A
:::

::: danger
\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u8B66\u544A
:::

::: details
\u8FD9\u662F\u4E00\u4E2A details \u6807\u7B7E
:::
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u8B66\u544A</p></div><details class="custom-container details"><p>\u8FD9\u662F\u4E00\u4E2A details \u6807\u7B7E</p></details><h2 id="\u914D\u7F6E\u9996\u9875" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9996\u9875" aria-hidden="true">#</a> \u914D\u7F6E\u9996\u9875</h2>`,6),b={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"},x=s("\u5B98\u65B9\u6587\u6863"),w=p(`<p>\u4F8B\u5B50</p><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div><p>\u901A\u8FC7\u8BBE\u7F6E<code>heroImage</code>,<code>actions</code>,<code>features</code>\u6765\u914D\u7F6E\u4E2A\u6027\u5316\u4FE1\u606F\uFF0C\u6548\u679C\u540CVuepress\u5B98\u7F51\u9996\u9875</p><h2 id="\u81EA\u5B9A\u4E49\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6837\u5F0F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6837\u5F0F</h2>`,4),j={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/styles.html",target:"_blank",rel:"noopener noreferrer"},C=s("\u5B98\u65B9\u8BF4\u660E"),E=p(`<p>Style \u6587\u4EF6\u7684\u8DEF\u5F84\u662F <code>.vuepress/styles/index.scss</code>\uFF0C\u65B0\u5EFA\u4E00\u4E2A\u5C31\u53EF\u4EE5\u4E86</p><p>\u53EF\u4EE5\u6DFB\u52A0\u989D\u5916\u7684\u6837\u5F0F\uFF0C\u6216\u8005\u5229\u7528\u5B83\u6765\u8986\u76D6\u9ED8\u8BA4\u4E3B\u9898\u7684\u9884\u5B9A\u4E49 CSS \u53D8\u91CF\uFF0C\u9700\u8981\u6CE8\u610F\u6837\u5F0F\u67092\u5957\u53D8\u91CF\uFF0C\u9ED8\u8BA4\u7684\u548C\u6697\u9ED1\u6A21\u5F0F\u7684\uFF0C\u60F3\u6539\u54EA\u4E2A\u6539\u54EA\u4E2A</p><details class="custom-container details"><summary>\u6B64\u9879\u76EE\u7684\u6837\u5F0F</summary><div class="language-scss ext-scss"><pre class="language-scss"><code><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token comment">// brand colors</span>
  <span class="token property">--c-brand</span><span class="token punctuation">:</span> #f60<span class="token punctuation">;</span>
  <span class="token property">--c-brand-light</span><span class="token punctuation">:</span> #f90<span class="token punctuation">;</span>

  <span class="token comment">// custom container colors</span>
  <span class="token property">--c-tip</span><span class="token punctuation">:</span> #f60<span class="token punctuation">;</span>

  <span class="token comment">// layout vars</span>
  <span class="token property">--sidebar-width</span><span class="token punctuation">:</span> 18rem<span class="token punctuation">;</span>
  <span class="token property">--content-width</span><span class="token punctuation">:</span> 900px<span class="token punctuation">;</span>
  <span class="token property">--homepage-width</span><span class="token punctuation">:</span> 960px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6697\u9ED1\u6A21\u5F0F\u6837\u5F0F</span>
<span class="token selector">html.dark </span><span class="token punctuation">{</span>
  <span class="token comment">// brand colors</span>
  <span class="token property">--c-brand</span><span class="token punctuation">:</span> #f60<span class="token punctuation">;</span>
  <span class="token property">--c-brand-light</span><span class="token punctuation">:</span> #f90<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details><h2 id="\u589E\u52A0\u641C\u7D22\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u589E\u52A0\u641C\u7D22\u529F\u80FD" aria-hidden="true">#</a> \u589E\u52A0\u641C\u7D22\u529F\u80FD</h2>`,4),q=s("\u9700\u8981\u624B\u52A8\u5B89\u88C5\u63D2\u4EF6\uFF0C"),V={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html",target:"_blank",rel:"noopener noreferrer"},S=s("\u914D\u7F6E\u6587\u6863"),P=p(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D @vuepress/plugin-search@next
</code></pre></div><p>\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u589E\u52A0plugins\u914D\u7F6E\uFF0Cdocs/.vuepress/config.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> searchPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/plugin-search&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;\u7AD9\u5185\u641C\u7D22&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6CE8\u518C-vue-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C-vue-\u7EC4\u4EF6" aria-hidden="true">#</a> \u6CE8\u518C Vue \u7EC4\u4EF6</h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 component \u65B9\u6CD5\u6765\u6CE8\u518C Vue \u5168\u5C40\u7EC4\u4EF6\uFF1A</p>`,5),z=s("\u5B98\u65B9\u6587\u6863"),N={href:"https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html",target:"_blank",rel:"noopener noreferrer"},R=s("\u5BA2\u6237\u7AEF\u914D\u7F6E\u7684\u4F7F\u7528\u65B9\u6CD5"),I=p(`<p>.vuepress/client.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rootComponents</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>vuepress\u5728build\u65F6\u5728<code>Node</code>\u73AF\u5883\u8FDB\u884C\u9884\u6E32\u67D3\uFF0C\u53EF\u80FD\u5BFC\u81F4\u62A5\u9519\uFF08window\uFF0Cdocument\u7B49\u672A\u5B9A\u4E49\uFF09\uFF0C\u53EF\u901A\u8FC7\u73AF\u5883\u53D8\u91CF<code>_<wbr>_VUEPRESS_SSR__</code>\u5224\u65AD\u662F\u5426\u52A0\u8F7D\u7EC4\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>_<wbr>_VUEPRESS_SSR__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./MyComponent.vue&#39;</span><span class="token punctuation">)</span>
      app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;MyComponent&#39;</span><span class="token punctuation">,</span> MyComponent<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4F7F\u7528\u7EC4\u4EF6\u65F6\uFF0C\u7528\u5185\u7F6E\u7684<code>ClientOnly</code>\u5305\u88F9\u5373\u53EF</p><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ClientOnly</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ClientOnly</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u5F15\u5165\u4EE3\u7801\u5757" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u4EE3\u7801\u5757" aria-hidden="true">#</a> \u5F15\u5165\u4EE3\u7801\u5757</h2><p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u8BED\u6CD5\uFF0C\u4ECE\u6587\u4EF6\u4E2D\u5BFC\u5165\u4EE3\u7801\u5757\uFF1A</p><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- \u6700\u7B80\u5355\u7684\u8BED\u6CD5 --&gt;</span>
@<span class="token url">[<span class="token content">code js</span>](<span class="token url">../foo.js</span>)</span>
</code></pre></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8DEF\u5F84\u522B\u540D\u5728\u5BFC\u5165\u4EE3\u7801\u8BED\u6CD5\u4E2D\u4E0D\u4F1A\u751F\u6548\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u914D\u7F6E\u6765\u81EA\u884C\u5904\u7406\u8DEF\u5F84\u522B\u540D\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">importCode</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">handleImportPath</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^@src</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- \u4F1A\u88AB\u89E3\u6790\u81F3 &#39;.vuepress/foo.js&#39; --&gt;</span>
@<span class="token url">[<span class="token content">code js</span>](<span class="token url">@src/foo.js</span>)</span>
</code></pre></div><h2 id="\u90E8\u7F72github-pages" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72github-pages" aria-hidden="true">#</a> \u90E8\u7F72GitHub Pages</h2>`,13),M={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages",target:"_blank",rel:"noopener noreferrer"},D=s("\u90E8\u7F72\u8BF4\u660E\u5B98\u65B9\u6587\u6863"),T=p(`<p>\u65B0\u5EFA<code>.github/workflows/docs.yml</code></p><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> docs

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6BCF\u5F53 push \u5230 master \u5206\u652F\u65F6\u89E6\u53D1\u90E8\u7F72</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>
  <span class="token comment"># \u624B\u52A8\u89E6\u53D1\u90E8\u7F72</span>
  <span class="token comment"># workflow_dispatch:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u201C\u6700\u8FD1\u66F4\u65B0\u65F6\u95F4\u201D \u7B49 git \u65E5\u5FD7\u76F8\u5173\u4FE1\u606F\uFF0C\u9700\u8981\u62C9\u53D6\u5168\u90E8\u63D0\u4EA4\u8BB0\u5F55</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u9009\u62E9\u8981\u4F7F\u7528\u7684 node \u7248\u672C</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;16&#39;</span>

      <span class="token comment"># \u7F13\u5B58 node_modules</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2
        <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            **/node_modules</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-yarn-</span>

      <span class="token comment"># \u5982\u679C\u7F13\u5B58\u6CA1\u6709\u547D\u4E2D\uFF0C\u5B89\u88C5\u4F9D\u8D56</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile

      <span class="token comment"># \u8FD0\u884C\u6784\u5EFA\u811A\u672C</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn docs<span class="token punctuation">:</span>build

      <span class="token comment"># \u67E5\u770B workflow \u7684\u6587\u6863\u6765\u83B7\u53D6\u66F4\u591A\u4FE1\u606F</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u90E8\u7F72\u5230 gh-pages \u5206\u652F</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># \u90E8\u7F72\u76EE\u5F55\u4E3A VuePress \u7684\u9ED8\u8BA4\u8F93\u51FA\u76EE\u5F55</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div></details><h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h2><div class="language-text ext-text"><pre class="language-text"><code>\u251C\u2500 .github
\u2502  \u2514\u2500 workflows
\u2502     \u2514\u2500 docs.yml
\u251C\u2500 docs
\u2502  \u251C\u2500 .vuepress
\u2502  \u2502  \u2514\u2500 config.js
\u2502  \u2514\u2500 README.md
\u251C\u2500 .gitignore
\u2514\u2500 package.json
</code></pre></div>`,4);function A(B,G){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,i,n("p",null,[n("a",k,[d,t(a)])]),h,n("p",null,[n("a",g,[m,t(a)])]),y,n("p",null,[n("a",f,[v,t(a)])]),_,n("p",null,[n("a",b,[x,t(a)])]),w,n("p",null,[n("a",j,[C,t(a)])]),E,n("p",null,[q,n("a",V,[S,t(a)])]),P,n("p",null,[z,n("a",N,[R,t(a)])]),I,n("p",null,[n("a",M,[D,t(a)])]),T])}var O=e(u,[["render",A],["__file","Vuepress.html.vue"]]);export{O as default};
