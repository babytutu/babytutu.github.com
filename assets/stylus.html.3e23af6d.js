import{_ as p,r as t,o,c,b as s,a as e,e as a,f as l}from"./app.c90e916d.js";const r={},u=s("h1",{id:"css\u9884\u5904\u7406-stylus",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#css\u9884\u5904\u7406-stylus","aria-hidden":"true"},"#"),a(" CSS\u9884\u5904\u7406 - Stylus")],-1),i=s("p",null,"EXPRESSIVE, DYNAMIC, ROBUST CSS",-1),d={href:"https://stylus-lang.com/",target:"_blank",rel:"noopener noreferrer"},k=a("Stylus\u5B98\u65B9\u7F51\u7AD9"),h={href:"https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus",target:"_blank",rel:"noopener noreferrer"},y=a("vscode\u63D2\u4EF6"),g=l(`<h2 id="\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5668" aria-hidden="true">#</a> \u9009\u62E9\u5668</h2><h3 id="\u7F29\u8FDB" tabindex="-1"><a class="header-anchor" href="#\u7F29\u8FDB" aria-hidden="true">#</a> \u7F29\u8FDB</h3><p>\u62EC\u53F7\uFF0C\u5192\u53F7\uFF0C\u5206\u53F7\uFF0C\u9017\u53F7\u90FD\u53EF\u9009</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">textarea, input</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #eee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-stylus ext-styl"><pre class="language-stylus"><code><span class="token selector">textarea
input</span>
  <span class="token property-declaration"><span class="token property">border</span> <span class="token number">1</span><span class="token unit">px</span> solid <span class="token hexcode">#eee</span></span>
</code></pre></div><h3 id="\u7236\u7EA7\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EA7\u5F15\u7528" aria-hidden="true">#</a> \u7236\u7EA7\u5F15\u7528</h3><p>&amp; \u7B26\u53F7\u4EE3\u8868\u7236\u7EA7\u9009\u62E9\u5668</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">textarea, input</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #eee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">textarea:hover, input:hover</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #000
<span class="token punctuation">}</span>

</code></pre></div><div class="language-stylus ext-styl"><pre class="language-stylus"><code><span class="token selector">textarea
input</span>
  <span class="token property-declaration"><span class="token property">border</span> <span class="token number">1</span><span class="token unit">px</span> solid <span class="token hexcode">#eee</span></span>
  <span class="token selector">&amp;:hover</span>
    <span class="token property-declaration"><span class="token property">border-color</span> <span class="token hexcode">#000</span></span>
</code></pre></div><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><div class="language-stylus ext-styl"><pre class="language-stylus"><code><span class="token variable-declaration"><span class="token variable">$font-size</span> <span class="token operator">=</span> <span class="token number">14</span><span class="token unit">px</span></span>

<span class="token selector">body</span>
  <span class="token property-declaration"><span class="token property">font</span> $font-size Arial<span class="token punctuation">,</span> sans-serif</span>
</code></pre></div><h3 id="\u5C5E\u6027\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u67E5\u627E" aria-hidden="true">#</a> \u5C5E\u6027\u67E5\u627E</h3><p>\u901A\u8FC7\u524D\u7F6E @ \u5B57\u7B26\u5728\u5C5E\u6027\u540D\u524D\u6765\u8BBF\u95EE\u8BE5\u5C5E\u6027\u540D\u5BF9\u5E94\u7684\u503C</p><div class="language-stylus ext-styl"><pre class="language-stylus"><code><span class="token selector">#logo</span>
  <span class="token property-declaration"><span class="token property">width</span> <span class="token number">150</span><span class="token unit">px</span></span>
  <span class="token property-declaration"><span class="token property">height</span> <span class="token number">80</span><span class="token unit">px</span></span>
  <span class="token property-declaration"><span class="token property">margin-left</span> <span class="token func"><span class="token function">-</span><span class="token punctuation">(</span>@width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span></span></span>
  <span class="token property-declaration"><span class="token property">margin-top</span> <span class="token func"><span class="token function">-</span><span class="token punctuation">(</span>@height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span></span></span>
</code></pre></div><h2 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h2><h3 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h3><div class="language-stylus ext-styl"><pre class="language-stylus"><code><span class="token func"><span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span></span>
  <span class="token property-declaration"><span class="token property">a</span> <span class="token operator">+</span> b</span>

<span class="token selector">body</span>
  <span class="token property-declaration"><span class="token property">padding</span> <span class="token func"><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span></span></span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u9ED8\u8BA4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u53C2\u6570" aria-hidden="true">#</a> \u9ED8\u8BA4\u53C2\u6570</h3><div class="language-stylus ext-styl"><pre class="language-stylus"><code><span class="token func"><span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token operator">=</span> a<span class="token punctuation">)</span></span>
  <span class="token property-declaration"><span class="token property">a</span> <span class="token operator">+</span> b</span>

<span class="token selector">body</span>
  <span class="token property-declaration"><span class="token property">padding</span> <span class="token func"><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">)</span></span></span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h3><p><code>arguments</code>\u5305\u542B\u4E86\u4F20\u9012\u8FC7\u6765\u7684\u6240\u6709\u53C2\u6570</p><div class="language-stylus ext-styl"><pre class="language-stylus"><code><span class="token func"><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
  <span class="token variable-declaration"><span class="token variable">n</span> <span class="token operator">=</span> <span class="token number">0</span></span>
  <span class="token statement"><span class="token keyword">for</span> num <span class="token operator">in</span> arguments</span>
    <span class="token variable-declaration"><span class="token variable">n</span> <span class="token operator">=</span> n <span class="token operator">+</span> num</span>

<span class="token func"><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="token comment">// =&gt; 15</span>
</code></pre></div><h2 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> @IMPORT</h2><p>\u5F15\u7528\u6587\u4EF6</p><div class="language-stylus ext-styl"><pre class="language-stylus"><code><span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">&#39;reset.css&#39;</span></span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">&#39;bar.styl&#39;</span></span>
</code></pre></div>`,27);function b(x,m){const n=t("ExternalLinkIcon");return o(),c("div",null,[u,i,s("p",null,[s("a",d,[k,e(n)])]),s("p",null,[s("a",h,[y,e(n)])]),g])}var v=p(r,[["render",b],["__file","stylus.html.vue"]]);export{v as default};
