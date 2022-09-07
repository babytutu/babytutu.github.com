import{_ as o,r as e,o as c,c as l,b as n,a as t,e as s,f as p}from"./app.c90e916d.js";const u={},r=n("h1",{id:"vue3-with-vite",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue3-with-vite","aria-hidden":"true"},"#"),s(" Vue3 with Vite")],-1),i=n("h2",{id:"vue-\u5B98\u65B9\u7684\u9879\u76EE\u811A\u624B\u67B6\u5DE5\u5177",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-\u5B98\u65B9\u7684\u9879\u76EE\u811A\u624B\u67B6\u5DE5\u5177","aria-hidden":"true"},"#"),s(" Vue \u5B98\u65B9\u7684\u9879\u76EE\u811A\u624B\u67B6\u5DE5\u5177")],-1),k={href:"https://staging-cn.vuejs.org/guide/quick-start.html",target:"_blank",rel:"noopener noreferrer"},d=s("\u5FEB\u901F\u5F00\u59CB"),g=p(`<p>\u5B98\u65B9demo\u9009\u7684\u6700\u4F73\u642D\u6863\u53D8\u6210\u4E86vite\uFF0C\u4E0D\u77E5\u9053\u662F\u5426\u5FC3\u7406\u4F5C\u7528\uFF0C\u6253\u5305\u771F\u7684\u5FEB\u4E86\u5462\u3002\u3002\u3002</p><p>Vue3\u4F7F\u7528ts\u91CD\u6784\uFF0C\u5F00\u59CB\u5C1D\u8BD5\u628Ajs\u90FD\u6539\u6210ts</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> init vue@latest
</code></pre></div><p>Vue3 + Vue-Router + Pinia</p><h2 id="vscode-plugins" tabindex="-1"><a class="header-anchor" href="#vscode-plugins" aria-hidden="true">#</a> VSCode Plugins</h2>`,5),v=n("li",null,[n("p",null,"\u9700\u8981\u5B89\u88C5vue@3\u63D2\u4EF6Volar")],-1),m=n("li",null,[n("p",null,"vue@2\u4E13\u7528\u7684Vetur\u5FC5\u987B\u7981\u7528\uFF0C\u5426\u5219\u4E00\u5806\u9519\u8BEF\u63D0\u793A")],-1),y=n("li",null,[n("p",null,"\u4E3A\u4E86\u89E3\u51B3ts\u5F15\u5165vue\u7684\u95EE\u9898\uFF0C\u9700\u8981\u5B89\u88C5TypeScript Vue Plugin (Volar)")],-1),h={href:"https://marketplace.visualstudio.com/items?itemName=Vue.volar",target:"_blank",rel:"noopener noreferrer"},f=s("Volar"),q={href:"https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin",target:"_blank",rel:"noopener noreferrer"},w=s("TypeScript Vue Plugin (Volar)"),b=s("."),_=n("h2",{id:"\u8DEF\u7531\u61D2\u52A0\u8F7D",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8DEF\u7531\u61D2\u52A0\u8F7D","aria-hidden":"true"},"#"),s(" \u8DEF\u7531\u61D2\u52A0\u8F7D")],-1),x={href:"https://router.vuejs.org/zh/guide/advanced/lazy-loading.html",target:"_blank",rel:"noopener noreferrer"},j=s("\u8DEF\u7531\u61D2\u52A0\u8F7D"),C=p(`<p>webpack\u6CA1\u6709\u4E86\uFF0C\u4F46\u662F\u5206\u5757\u6253\u5305vite\u4E5F\u662F\u652F\u6301\u7684\uFF0C\u5C31\u662F\u5199\u6CD5\u597D\u50CF\u6709\u70B9\u7C97\u7CD9</p><p>\u9700\u8981\u901A\u8FC7\u4FEE\u6539vite\u6253\u5305\u914D\u7F6E\u5B9E\u73B0</p><p>vite.config.ts</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    rollupOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      output<span class="token operator">:</span> <span class="token punctuation">{</span>
        manualChunks<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;demo&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;./src/views/HomeView.vue&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;./src/views/AboutView.vue&#39;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4E3A\u4E86\u8BA9\u914D\u7F6E\u6587\u4EF6\u4F18\u96C5\u4E9B\uFF0C\u4F7F\u7528\u5355\u72EC\u7684json\u6587\u4EF6\u914D\u7F6E\u5206\u5757\u914D\u7F6E</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> manualChunks <span class="token keyword">from</span> <span class="token string">&#39;./manualChunks.json&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    rollupOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      output<span class="token operator">:</span> <span class="token punctuation">{</span>
        manualChunks
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>manualChunks.json</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;demo&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./src/views/HomeView.vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./src/views/AboutView.vue&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>ts\u914D\u7F6E\u6587\u4EF6\u4E2Dinclude\u4E5F\u8981\u52A0\u4E0AmanualChunks.*</p><p>tsconfig.config.json</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vite.config.*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vitest.config.*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cypress.config.*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;manualChunks.json&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD0\u884C\u6253\u5305\u547D\u4EE4<code>npm run build</code>\u5C31\u53EF\u4EE5\u53D1\u73B0\u6253\u5305\u51FA\u6765\u7684\u6587\u4EF6\u540D\u53D8\u6210demo\u4E86</p><div class="language-text ext-text"><pre class="language-text"><code>vite v3.0.4 building for production...
\u2713 46 modules transformed.
dist/assets/logo.da9b9095.svg    0.30 KiB
dist/index.html                  0.55 KiB
dist/assets/index.b52b83bf.js    24.62 KiB / gzip: 10.25 KiB
dist/assets/demo.1d23a85f.css    1.10 KiB / gzip: 0.43 KiB
dist/assets/index.bacc5500.css   3.06 KiB / gzip: 1.07 KiB
dist/assets/demo.89f4e38a.js     57.36 KiB / gzip: 22.87 KiB
</code></pre></div><h2 id="\u72B6\u6001\u7BA1\u7406-pinia" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u7BA1\u7406-pinia" aria-hidden="true">#</a> \u72B6\u6001\u7BA1\u7406 Pinia</h2>`,14),V={href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},P=s("Pinia\u5B98\u7F51"),T=p(`<p>Install</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> pinia
</code></pre></div><p>Usage</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span>
</code></pre></div><p>\u65B0\u5EFA\u6587\u4EF6\u5939stores\uFF0C\u65B0\u589E\u4E00\u4E2Astore\uFF0C\u8FD8\u662F\u4E60\u60EF\u7528vue2\u7684\u98CE\u683C</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// counter.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCounterStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">changeCount</span><span class="token punctuation">(</span>payload<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-cell-group</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u72B6\u6001\u7BA1\u7406<span class="token punctuation">&quot;</span></span> <span class="token attr-name">inset</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-field</span> <span class="token attr-name">center</span> <span class="token attr-name">:model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>count<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BA1\u6570\u5668<span class="token punctuation">&quot;</span></span> <span class="token attr-name">readonly</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reset<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u91CD\u7F6E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-field</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-field</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>digit<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">center</span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>digit<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6574\u6570<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update(digit)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-field</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-cell-group</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCounterStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/stores/counter&#39;</span>
<span class="token keyword">const</span> digit <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useCounterStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span><span class="token function">changeCount</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span><span class="token function">$reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u52A0\u8F7D\u9759\u6001\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u9759\u6001\u8D44\u6E90" aria-hidden="true">#</a> \u52A0\u8F7D\u9759\u6001\u8D44\u6E90</h2><p>\u9ED8\u8BA4public\u4E0B\u7684\u5185\u5BB9\u4F1A\u4E00\u5E76\u6253\u5305\uFF0C\u5982\u5728\u9879\u76EE\u4E2D\u8C03\u7528<code>public/img/avatar.png</code>\uFF0C\u76F4\u63A5\u5199<code>/img/avatar.png</code>\u5C31\u53EF\u4EE5</p><h2 id="\u642D\u914D-typescript-\u4F7F\u7528-vue" tabindex="-1"><a class="header-anchor" href="#\u642D\u914D-typescript-\u4F7F\u7528-vue" aria-hidden="true">#</a> \u642D\u914D TypeScript \u4F7F\u7528 Vue</h2>`,11),S={href:"https://staging-cn.vuejs.org/guide/typescript/overview.html",target:"_blank",rel:"noopener noreferrer"},B=s("\u5B98\u65B9\u4E2D\u6587\u6587\u6863"),I=n("p",null,"\u6839\u636Ecreate-vue\u751F\u6210\u7684\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u7ED3\u5408vue3\u5F00\u53D1\u4E2D\u52A0\u5165\u4E86\u4E00\u4E9B\u53C2\u6570\u914D\u7F6E",-1),E=n("h3",{id:"\u914D\u7F6E\u6587\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6E\u6587\u4EF6","aria-hidden":"true"},"#"),s(" \u914D\u7F6E\u6587\u4EF6")],-1),M={href:"https://staging-cn.vuejs.org/guide/typescript/overview.html",target:"_blank",rel:"noopener noreferrer"},N=s("\u642D\u914D TypeScript \u4F7F\u7528 Vue"),z=p(`<p>tsconfig.json</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@vue/tsconfig/tsconfig.web.json&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;env.d.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/**/*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/**/*.vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token property">&quot;references&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./tsconfig.config.json&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>tsconfig.config.json</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@vue/tsconfig/tsconfig.node.json&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vite.config.*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vitest.config.*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cypress.config.*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;manualChunks.json&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;composite&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>package.json</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;front-h5&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.1.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;homepage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://babytutu.github.io/front-h5&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite --host&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;run-p type-check build-only&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite preview --port 4173&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build-only&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type-check&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-tsc --noEmit&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;pinia&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.16&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.2.37&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue-router&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.1.2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@rushstack/eslint-patch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.1.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@types/node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^16.11.45&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@vitejs/plugin-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@vitejs/plugin-vue-jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@vue/eslint-config-typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^11.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@vue/tsconfig&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.1.3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.5.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint-plugin-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^9.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;npm-run-all&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.1.5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~4.7.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vite&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue-tsc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.38.8&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5728\u5355\u6587\u4EF6\u7EC4\u4EF6\u4E2D\u7684\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5728\u5355\u6587\u4EF6\u7EC4\u4EF6\u4E2D\u7684\u7528\u6CD5" aria-hidden="true">#</a> \u5728\u5355\u6587\u4EF6\u7EC4\u4EF6\u4E2D\u7684\u7528\u6CD5</h3><p>\u9700\u8981\u5728 script \u6807\u7B7E\u4E0A\u52A0\u4E0A lang=&quot;ts&quot;</p><h4 id="\u7EC4\u5408\u5F0F-api" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u5F0F-api" aria-hidden="true">#</a> \u7EC4\u5408\u5F0F API</h4>`,9),D={href:"https://staging-cn.vuejs.org/api/sfc-script-setup.html",target:"_blank",rel:"noopener noreferrer"},K=s("\u5355\u6587\u4EF6\u7EC4\u4EF6 "),A=n("code",null,"<script setup>",-1),O=p(`<div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">interface</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> string
  <span class="token literal-property property">author</span><span class="token operator">:</span> string
  <span class="token literal-property property">year</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>


defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>Book<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  id<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="\u9009\u9879\u5F0F-api" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879\u5F0F-api" aria-hidden="true">#</a> \u9009\u9879\u5F0F API</h4><p>\u5BF9 prop \u7684\u7C7B\u578B\u63A8\u5BFC\u9700\u8981\u7528 defineComponent() \u6765\u5305\u88C5\u7EC4\u4EF6</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u542F\u7528\u4E86\u7C7B\u578B\u63A8\u5BFC</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> String<span class="token punctuation">,</span>
    id<span class="token operator">:</span> <span class="token punctuation">[</span>Number<span class="token punctuation">,</span> String<span class="token punctuation">]</span><span class="token punctuation">,</span>
    msg<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> String<span class="token punctuation">,</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    metadata<span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4F7F\u7528 PropType \u8FDB\u884C\u7C7B\u578B\u6821\u9A8C</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  author<span class="token operator">:</span> <span class="token builtin">string</span>
  year<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    book<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u63D0\u4F9B\u76F8\u5BF9 \`Object\` \u66F4\u786E\u5B9A\u7684\u7C7B\u578B</span>
      type<span class="token operator">:</span> Object <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>Book<span class="token operator">&gt;</span><span class="token punctuation">,</span>
      required<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u5168\u5C40\u53D8\u91CF\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF\u652F\u6301" aria-hidden="true">#</a> \u5168\u5C40\u53D8\u91CF\u652F\u6301</h3><p>vue3\u4E2D\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$axios <span class="token operator">=</span> axios
</code></pre></div><p>\u65B0\u589E global.d.ts</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">ComponentCustomProperties</span> <span class="token punctuation">{</span>
    $axios<span class="token operator">:</span> <span class="token keyword">typeof</span> axios<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9A\u4E49\u6A21\u5757\uFF0C\u6302\u5728window\u4E0B\u7684\u5168\u5C40\u53D8\u91CF</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;lrz&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span>
  xxx<span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="typescript-\u4E0E\u7EC4\u5408\u5F0F-api" tabindex="-1"><a class="header-anchor" href="#typescript-\u4E0E\u7EC4\u5408\u5F0F-api" aria-hidden="true">#</a> TypeScript \u4E0E\u7EC4\u5408\u5F0F API</h2>`,12),R={href:"https://staging-cn.vuejs.org/guide/typescript/composition-api.html",target:"_blank",rel:"noopener noreferrer"},H=s("\u5B98\u65B9\u4E2D\u6587\u6587\u6863"),U=p(`<h3 id="\u4E3A\u7EC4\u4EF6\u7684-prop-\u6807\u6CE8\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u7EC4\u4EF6\u7684-prop-\u6807\u6CE8\u7C7B\u578B" aria-hidden="true">#</a> \u4E3A\u7EC4\u4EF6\u7684 prop \u6807\u6CE8\u7C7B\u578B</h3><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> string
  bar<span class="token operator">?</span><span class="token operator">:</span> number
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> string
  bar<span class="token operator">?</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="prop-\u9ED8\u8BA4\u503C-\u5B9E\u9A8C\u6027" tabindex="-1"><a class="header-anchor" href="#prop-\u9ED8\u8BA4\u503C-\u5B9E\u9A8C\u6027" aria-hidden="true">#</a> Prop \u9ED8\u8BA4\u503C(\u5B9E\u9A8C\u6027)</h4><p>\u9700\u8981\u5F00\u542FreactivityTransform</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// \u663E\u5F0F\u542F\u7528\uFF0C\u54CD\u5E94\u6027\u8BED\u6CD5\u7CD6\u76EE\u524D\u9ED8\u8BA4\u662F\u5173\u95ED\u72B6\u6001\uFF0C\u9700\u8981\u4F60\u663E\u5F0F\u9009\u62E9\u542F\u7528</span>
      <span class="token literal-property property">reactivityTransform</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> string
  bar<span class="token operator">?</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

<span class="token comment">// \u5BF9 defineProps() \u7684\u54CD\u5E94\u6027\u89E3\u6784</span>
<span class="token comment">// \u9ED8\u8BA4\u503C\u4F1A\u88AB\u7F16\u8BD1\u4E3A\u7B49\u4EF7\u7684\u8FD0\u884C\u65F6\u9009\u9879</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token operator">=</span> <span class="token number">100</span> <span class="token punctuation">}</span> <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u4E3A\u7EC4\u4EF6\u7684-emit-\u6807\u6CE8\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u7EC4\u4EF6\u7684-emit-\u6807\u6CE8\u7C7B\u578B" aria-hidden="true">#</a> \u4E3A\u7EC4\u4EF6\u7684 emit \u6807\u6CE8\u7C7B\u578B</h3><p>\u53EF\u4EE5\u901A\u8FC7\u8FD0\u884C\u65F6\u58F0\u660E\u6216\u7C7B\u578B\u58F0\u660E\u8FDB\u884C</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u8FD0\u884C\u65F6</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;update&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// \u57FA\u4E8E\u7C7B\u578B</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> defineEmits<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u4E3A-ref-\u6807\u6CE8\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E3A-ref-\u6807\u6CE8\u7C7B\u578B" aria-hidden="true">#</a> \u4E3A ref() \u6807\u6CE8\u7C7B\u578B</h3><p>ref \u4F1A\u6839\u636E\u521D\u59CB\u5316\u65F6\u7684\u503C\u63A8\u5BFC\u5176\u7C7B\u578B</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// \u5F97\u5230\u7684\u7C7B\u578B\uFF1ARef&lt;string | number&gt;</span>
<span class="token keyword">const</span> year <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;2020&#39;</span><span class="token punctuation">)</span>

year<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">2020</span> <span class="token comment">// \u6210\u529F\uFF01</span>

<span class="token comment">// \u63A8\u5BFC\u5F97\u5230\u7684\u7C7B\u578B\uFF1ARef&lt;number | undefined&gt;</span>
<span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u4E3A-computed-\u6807\u6CE8\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E3A-computed-\u6807\u6CE8\u7C7B\u578B" aria-hidden="true">#</a> \u4E3A computed() \u6807\u6CE8\u7C7B\u578B</h3><p>computed() \u4F1A\u4ECE\u5176\u8BA1\u7B97\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4E0A\u63A8\u5BFC\u51FA\u7C7B\u578B</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> double <span class="token operator">=</span> <span class="token generic-function"><span class="token function">computed</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u82E5\u8FD4\u56DE\u503C\u4E0D\u662F number \u7C7B\u578B\u5219\u4F1A\u62A5\u9519</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u4E3A\u4E8B\u4EF6\u5904\u7406\u5668\u6807\u6CE8\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4E8B\u4EF6\u5904\u7406\u5668\u6807\u6CE8\u7C7B\u578B" aria-hidden="true">#</a> \u4E3A\u4E8B\u4EF6\u5904\u7406\u5668\u6807\u6CE8\u7C7B\u578B</h3><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \`event\` \u9690\u5F0F\u5730\u6807\u6CE8\u4E3A \`any\` \u7C7B\u578B</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLInputElement<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u4E3A-provide-inject-\u6807\u6CE8\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E3A-provide-inject-\u6807\u6CE8\u7C7B\u578B" aria-hidden="true">#</a> \u4E3A provide/inject \u6807\u6CE8\u7C7B\u578B</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> provide<span class="token punctuation">,</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> InjectionKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> InjectionKey<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>

<span class="token function">provide</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u82E5\u63D0\u4F9B\u7684\u662F\u975E\u5B57\u7B26\u4E32\u503C\u4F1A\u5BFC\u81F4\u9519\u8BEF</span>

<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// foo \u7684\u7C7B\u578B\uFF1Astring | undefined</span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token generic-function"><span class="token function">inject</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u7C7B\u578B\uFF1Astring | undefined</span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token generic-function"><span class="token function">inject</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u7C7B\u578B\uFF1Astring</span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">string</span> <span class="token comment">// \u5F3A\u5236\u8F6C\u6362\u8BE5\u503C</span>
</code></pre></div><h3 id="\u4E3A\u6A21\u677F-ref-\u6807\u6CE8\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u6A21\u677F-ref-\u6807\u6CE8\u7C7B\u578B" aria-hidden="true">#</a> \u4E3A\u6A21\u677F ref \u6807\u6CE8\u7C7B\u578B</h3><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> el <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLInputElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  el<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u4E3A\u7EC4\u4EF6\u6A21\u677F-ref-\u6807\u6CE8\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u7EC4\u4EF6\u6A21\u677F-ref-\u6807\u6CE8\u7C7B\u578B" aria-hidden="true">#</a> \u4E3A\u7EC4\u4EF6\u6A21\u677F ref \u6807\u6CE8\u7C7B\u578B</h3><p>\u4F7F\u7528\u5B50\u7EC4\u4EF6\u7684\u65B9\u6CD5\uFF0C\u5B50\u7EC4\u4EF6defineExpose\u65B9\u6CD5\u540D</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- MyModal.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> isContentShown <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>isContentShown<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  open
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u7236\u7EC4\u4EF6\u8C03\u7528</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> MyModal <span class="token keyword">from</span> <span class="token string">&#39;./MyModal.vue&#39;</span>

<span class="token keyword">const</span> modal <span class="token operator">=</span> ref<span class="token operator">&lt;</span>InstanceType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyModal<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">openModal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  modal<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u79FB\u52A8\u7AEFvant\u7EC4\u4EF6\u5E93" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u7AEFvant\u7EC4\u4EF6\u5E93" aria-hidden="true">#</a> \u79FB\u52A8\u7AEFvant\u7EC4\u4EF6\u5E93</h2><h3 id="\u6309\u9700\u5F15\u5165\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6309\u9700\u5F15\u5165\u7EC4\u4EF6" aria-hidden="true">#</a> \u6309\u9700\u5F15\u5165\u7EC4\u4EF6</h3>`,33),L=s("\u63A8\u8350\u5B89\u88C5 "),J={href:"https://www.npmjs.com/package/unplugin-vue-components",target:"_blank",rel:"noopener noreferrer"},W=s("unplugin-vue-components"),$=s(" \u63D2\u4EF6"),F=p(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> unplugin-vue-components -D
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VantResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">VantResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5728 <code>&lt;script setup&gt;</code> \u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 Vant \u7EC4\u4EF6\uFF0C\u4E0D\u9700\u8981\u8FDB\u884C\u7EC4\u4EF6\u6CE8\u518C\u3002</p><h4 id="\u5F15\u5165\u51FD\u6570\u7EC4\u4EF6\u7684\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u51FD\u6570\u7EC4\u4EF6\u7684\u6837\u5F0F" aria-hidden="true">#</a> \u5F15\u5165\u51FD\u6570\u7EC4\u4EF6\u7684\u6837\u5F0F</h4>`,4),Q={href:"https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart",target:"_blank",rel:"noopener noreferrer"},G=s("\u5FEB\u901F\u4E0A\u624B"),X=p(`<p>Vant \u4E2D\u6709\u4E2A\u522B\u7EC4\u4EF6\u662F\u4EE5\u51FD\u6570\u7684\u5F62\u5F0F\u63D0\u4F9B\u7684\uFF0C\u5305\u62EC Toast\uFF0CDialog\uFF0CNotify \u548C ImagePreview \u7EC4\u4EF6\u3002\u5728\u4F7F\u7528\u51FD\u6570\u7EC4\u4EF6\u65F6\uFF0Cunplugin-vue-components \u65E0\u6CD5\u81EA\u52A8\u5F15\u5165\u5BF9\u5E94\u7684\u6837\u5F0F\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u5F15\u5165\u6837\u5F0F\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// Toast</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vant&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;vant/es/toast/style&#39;</span>

<span class="token comment">// Dialog</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vant&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;vant/es/dialog/style&#39;</span>

<span class="token comment">// Notify</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vant&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;vant/es/notify/style&#39;</span>

<span class="token comment">// ImagePreview</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePreview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vant&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;vant/es/image-preview/style&#39;</span>
</code></pre></div><h3 id="\u6D4F\u89C8\u5668\u9002\u914D" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u9002\u914D" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u9002\u914D</h3><p>Viewport \u5E03\u5C40</p><p>vant\u5B98\u65B9\u63A8\u8350\u7684postcss-px-to-viewport\u4E0D\u652F\u6301postcss8\uFF0C\u627E\u5230\u4E00\u4E2A\u652F\u6301\u7684</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> postcss-px-to-viewport-8-plugin -D
</code></pre></div><p>\u65B0\u589E\u914D\u7F6E\u6587\u4EF6<code>postcss.config.js</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@see</span> https://youzan.github.io/vant/#/zh-CN/advanced-usage
 * <span class="token keyword">@see</span> https://www.npmjs.com/package/postcss-px-to-viewport-8-plugin
 */</span>
 module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;postcss-px-to-viewport-8-plugin&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">viewportWidth</span><span class="token operator">:</span> <span class="token number">375</span><span class="token punctuation">,</span>
      <span class="token literal-property property">replace</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a> \u63D2\u4EF6</h2>`,9),Y={href:"https://cn.vitejs.dev/plugins/",target:"_blank",rel:"noopener noreferrer"},Z=s("Vite\u5B98\u65B9\u63D2\u4EF6"),nn={href:"https://github.com/vitejs/vite/tree/main/packages/plugin-vue",target:"_blank",rel:"noopener noreferrer"},sn=s("@vitejs/plugin-vue"),an={href:"https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx",target:"_blank",rel:"noopener noreferrer"},tn=s("@vitejs/plugin-vue-jsx"),pn={href:"https://github.com/vitejs/vite/tree/main/packages/plugin-legacy",target:"_blank",rel:"noopener noreferrer"},on=s("@vitejs/plugin-legacy"),en={href:"https://github.com/gxmari007/vite-plugin-eslint",target:"_blank",rel:"noopener noreferrer"},cn=s("vite-plugin-eslint"),ln={href:"https://github.com/vbenjs/vite-plugin-html/",target:"_blank",rel:"noopener noreferrer"},un=s("vite-plugin-html"),rn={href:"https://www.npmjs.com/package/unplugin-vue-components",target:"_blank",rel:"noopener noreferrer"},kn=s("unplugin-vue-components"),dn=p(`<h3 id="vue3\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#vue3\u76F8\u5173" aria-hidden="true">#</a> vue3\u76F8\u5173</h3><p>Install</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @vitejs/plugin-vue @vitejs/plugin-vue-jsx -D
</code></pre></div><p>Usage</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> vueJsx <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue-jsx&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">vueJsx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="vitejs-plugin-legacy" tabindex="-1"><a class="header-anchor" href="#vitejs-plugin-legacy" aria-hidden="true">#</a> @vitejs/plugin-legacy</h3><p>Install</p><p>\u8FD8\u9700\u8981\u5B89\u88C5terser\uFF0C\u7528\u4E8E\u4EE3\u7801\u538B\u7F29</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @vitejs/plugin-legacy terser -D
</code></pre></div><p>Usage</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> legacy <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-legacy&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">legacy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;defaults&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;not IE 11&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="vite-plugin-eslint" tabindex="-1"><a class="header-anchor" href="#vite-plugin-eslint" aria-hidden="true">#</a> vite-plugin-eslint</h3><p>\u8BA9eslint\u89C4\u5219\u751F\u6548\uFF0Ccreate-vue\u7ADF\u7136\u53EA\u914D\u7F6E\u4E0D\u5728\u5F00\u53D1\u65F6\u62A5\u9519\uFF0C\u9700\u8981\u624B\u52A8\u52A0\u4E0A\u63D2\u4EF6</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> eslint vite-plugin-eslint -D
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> eslint <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-eslint&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">eslint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u642D\u914Dprettier\u4F7F\u7528</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> prettier @vue/eslint-config-prettier -D
</code></pre></div><p>\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E60\u60EF\u5355\u5F15\u53F7\u548C\u65E0\u5206\u53F7\uFF0C\u9700\u8981\u57282\u8FB9\u90FD\u8FDB\u884C\u914D\u7F6E</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .prettierrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.cjs</span>
<span class="token comment">/* eslint-env node */</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@rushstack/eslint-patch/modern-module-resolution&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;plugin:vue/vue3-essential&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@vue/eslint-config-typescript/recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@vue/eslint-config-prettier&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;@typescript-eslint/no-explicit-any&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/multi-word-component-name&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">quotes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;double&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="vite-plugin-html" tabindex="-1"><a class="header-anchor" href="#vite-plugin-html" aria-hidden="true">#</a> vite-plugin-html</h3>`,21),gn={href:"https://github.com/vbenjs/vite-plugin-html/blob/main/README.zh_CN.md",target:"_blank",rel:"noopener noreferrer"},vn=s("github"),mn=p(`<p>\u5B89\u88C5</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> vite-plugin-html -D
</code></pre></div><p>\u4F7F\u7528</p><p>\u5728 index.html \u4E2D\u589E\u52A0 EJS \u6807\u7B7E</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/favicon.ico<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>&lt;%- title %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5728 vite.config.ts \u4E2D\u914D\u7F6E</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createHtmlPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-html&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">createHtmlPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      minify<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/**
       * \u5728\u8FD9\u91CC\u5199entry\u540E\uFF0C\u4F60\u5C06\u4E0D\u9700\u8981\u5728\`index.html\`\u5185\u6DFB\u52A0 script \u6807\u7B7E\uFF0C\u539F\u6709\u6807\u7B7E\u9700\u8981\u5220\u9664
       * <span class="token keyword">@default</span> src/main.ts
       */</span>
      entry<span class="token operator">:</span> <span class="token string">&#39;src/main.ts&#39;</span><span class="token punctuation">,</span>

      <span class="token doc-comment comment">/**
       * \u9700\u8981\u6CE8\u5165 index.html ejs \u6A21\u7248\u7684\u6570\u636E
       */</span>
      inject<span class="token operator">:</span> <span class="token punctuation">{</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="unplugin-vue-components" tabindex="-1"><a class="header-anchor" href="#unplugin-vue-components" aria-hidden="true">#</a> unplugin-vue-components</h3><p>\u7EC4\u4EF6\u6309\u9700\u5F15\u5165\uFF0C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u81EA\u52A8\u5F15\u5165\uFF0C\u4F1A\u5728\u6839\u76EE\u5F55\u81EA\u52A8\u751F\u6210components.d.ts\u6587\u4EF6</p><blockquote><p>Once the setup is done, a components.d.ts will be generated and updates automatically with the type definitions. Feel free to commit it into git or not as you want.</p></blockquote><p><code>Make sure you also add components.d.ts to your tsconfig.json under includes.</code></p><div class="language-json ext-json"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;env.d.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/**/*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/**/*.vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;components.d.ts&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VantResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// \u663E\u5F0F\u542F\u7528\uFF0C\u54CD\u5E94\u6027\u8BED\u6CD5\u7CD6\u76EE\u524D\u9ED8\u8BA4\u662F\u5173\u95ED\u72B6\u6001\uFF0C\u9700\u8981\u4F60\u663E\u5F0F\u9009\u62E9\u542F\u7528</span>
      <span class="token literal-property property">reactivityTransform</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">compilerOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u81EA\u52A8\u8BC6\u522B T- \u5F00\u5934\u7684\u6587\u4EF6\u505A\u4E3A\u81EA\u5B9A\u4E49\u7EC4\u4EF6</span>
          <span class="token function-variable function">isCustomElement</span><span class="token operator">:</span> <span class="token parameter">tag</span> <span class="token operator">=&gt;</span> tag<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;T-&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">VantResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dts</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5728 <code>&lt;script setup&gt;</code> \u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u7EC4\u4EF6\uFF0C\u4E0D\u9700\u8981\u8FDB\u884C\u7EC4\u4EF6\u6CE8\u518C\u3002</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chat-o<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,15);function yn(hn,fn){const a=e("ExternalLinkIcon");return c(),l("div",null,[r,i,n("p",null,[n("a",k,[d,t(a)])]),g,n("ul",null,[v,m,y,n("li",null,[n("p",null,[n("a",h,[f,t(a)])])]),n("li",null,[n("p",null,[n("a",q,[w,t(a)]),b])])]),_,n("p",null,[n("a",x,[j,t(a)])]),C,n("p",null,[n("a",V,[P,t(a)])]),T,n("p",null,[n("a",S,[B,t(a)])]),I,E,n("p",null,[n("a",M,[N,t(a)])]),z,n("p",null,[n("a",D,[K,A,t(a)])]),O,n("p",null,[n("a",R,[H,t(a)])]),U,n("p",null,[L,n("a",J,[W,t(a)]),$]),F,n("p",null,[n("a",Q,[G,t(a)])]),X,n("p",null,[n("a",Y,[Z,t(a)])]),n("ul",null,[n("li",null,[n("a",nn,[sn,t(a)])]),n("li",null,[n("a",an,[tn,t(a)])]),n("li",null,[n("a",pn,[on,t(a)])]),n("li",null,[n("a",en,[cn,t(a)])]),n("li",null,[n("a",ln,[un,t(a)])]),n("li",null,[n("a",rn,[kn,t(a)])])]),dn,n("p",null,[n("a",gn,[vn,t(a)])]),mn])}var wn=o(u,[["render",yn],["__file","vue3.html.vue"]]);export{wn as default};
