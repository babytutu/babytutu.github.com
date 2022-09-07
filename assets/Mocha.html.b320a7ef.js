import{_ as t,r as o,o as p,c as e,b as n,a as c,e as a,f as l}from"./app.c90e916d.js";const r={},u=n("h1",{id:"mocha",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mocha","aria-hidden":"true"},"#"),a(" Mocha")],-1),i=n("blockquote",null,[n("p",null,'\uFF08\u53D1\u97F3"\u6469\u5361"\uFF09\u8BDE\u751F\u4E8E2011\u5E74\uFF0C\u662F\u73B0\u5728\u6700\u6D41\u884C\u7684JavaScript\u6D4B\u8BD5\u6846\u67B6\u4E4B\u4E00\uFF0C\u5728\u6D4F\u89C8\u5668\u548CNode\u73AF\u5883\u90FD\u53EF\u4EE5\u4F7F\u7528\u3002')],-1),k={href:"https://mochajs.org/",target:"_blank",rel:"noopener noreferrer"},d=a("Mocha"),h=l(`<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --D mocha
</code></pre></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token builtin class-name">test</span>
</code></pre></div><p>add.test.js</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> assert <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;assert&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;1+1=2&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    assert<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>package.json</p><div class="language-json ext-json"><pre class="language-json"><code> <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mocha&quot;</span>
 <span class="token punctuation">}</span>
</code></pre></div><h2 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> Watch</h2><p>package.json</p><div class="language-json ext-json"><pre class="language-json"><code> <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">&quot;watch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mocha -w&quot;</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
</code></pre></div><h2 id="report" tabindex="-1"><a class="header-anchor" href="#report" aria-hidden="true">#</a> Report</h2><p>package.json</p><div class="language-json ext-json"><pre class="language-json"><code> <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;report&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mocha -R doc &gt; test.html &amp;&amp; mocha -R markdown &gt; test.md&quot;</span>
 <span class="token punctuation">}</span>
</code></pre></div>`,14);function g(m,f){const s=o("ExternalLinkIcon");return p(),e("div",null,[u,i,n("p",null,[n("a",k,[d,c(s)])]),h])}var q=t(r,[["render",g],["__file","Mocha.html.vue"]]);export{q as default};
