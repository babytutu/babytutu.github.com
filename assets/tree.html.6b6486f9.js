import{_ as e,o as a,c as s,f as d}from"./app.c90e916d.js";const r={},n=d(`<h1 id="\u81EA\u52A8\u751F\u6210\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u751F\u6210\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u81EA\u52A8\u751F\u6210\u76EE\u5F55\u7ED3\u6784</h1><p>\u4F7F\u7528tree\u547D\u4EE4\u53EF\u4EE5\u81EA\u52A8\u751F\u6210\u76EE\u5F55\u7ED3\u6784</p><div class="language-bash ext-sh"><pre class="language-bash"><code>tree
</code></pre></div><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>Windows\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0Ccmd\u5230\u76EE\u5F55\u6267\u884C\u5373\u53EF</p><p>Mac\u9700\u8981\u5B89\u88C5tree\u547D\u4EE4</p><div class="language-bash ext-sh"><pre class="language-bash"><code>brew <span class="token function">install</span> tree
</code></pre></div><h2 id="\u5E38\u7528\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u53C2\u6570" aria-hidden="true">#</a> \u5E38\u7528\u53C2\u6570</h2><h3 id="\u6392\u9664\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u6392\u9664\u76EE\u5F55" aria-hidden="true">#</a> \u6392\u9664\u76EE\u5F55</h3><p>\u6392\u9664\u4F9D\u8D56\u5305\u76EE\u5F55</p><div class="language-bash ext-sh"><pre class="language-bash"><code>tree -I node_modules
</code></pre></div><h3 id="\u9650\u5236\u76EE\u5F55\u5C42\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236\u76EE\u5F55\u5C42\u7EA7" aria-hidden="true">#</a> \u9650\u5236\u76EE\u5F55\u5C42\u7EA7</h3><p>\u53EA\u751F\u62102\u7EA7\u76EE\u5F55\u7ED3\u6784</p><div class="language-bash ext-sh"><pre class="language-bash"><code>tree -L <span class="token number">2</span>
</code></pre></div><h3 id="\u53EA\u663E\u793A\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u53EA\u663E\u793A\u76EE\u5F55" aria-hidden="true">#</a> \u53EA\u663E\u793A\u76EE\u5F55</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>tree -d
</code></pre></div><h3 id="\u9632\u6B62\u4E2D\u6587\u4E71\u7801" tabindex="-1"><a class="header-anchor" href="#\u9632\u6B62\u4E2D\u6587\u4E71\u7801" aria-hidden="true">#</a> \u9632\u6B62\u4E2D\u6587\u4E71\u7801</h3><p>\u589E\u52A0<code>-N</code>\uFF0C\u652F\u6301\u4E2D\u6587\u547D\u540D\u7684\u76EE\u5F55\u548C\u6587\u4EF6</p><div class="language-bash ext-sh"><pre class="language-bash"><code>tree -N
</code></pre></div><h3 id="\u751F\u6210\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u6587\u4EF6" aria-hidden="true">#</a> \u751F\u6210\u6587\u4EF6</h3><p>\u628Atree\u7684\u7ED3\u679C\u5199\u5165\u5230\u4E00\u4E2Amd\u6587\u4EF6</p><div class="language-bash ext-sh"><pre class="language-bash"><code>tree -N -I node_modules -d <span class="token operator">&gt;</span> list.md
</code></pre></div><p>list.md</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>.
\u2514\u2500\u2500 docs
    \u251C\u2500\u2500 components
    \u251C\u2500\u2500 es6tutorial
    \u2502   \u251C\u2500\u2500 docs
    \u2502   \u2514\u2500\u2500 images
    \u251C\u2500\u2500 mac
    \u251C\u2500\u2500 study
    \u2514\u2500\u2500 tools

8 directories
</code></pre></div><h3 id="\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u5E2E\u52A9" aria-hidden="true">#</a> \u5E2E\u52A9</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>tree -help
</code></pre></div>`,26),h=[n];function c(t,i){return a(),s("div",null,h)}var o=e(r,[["render",c],["__file","tree.html.vue"]]);export{o as default};
