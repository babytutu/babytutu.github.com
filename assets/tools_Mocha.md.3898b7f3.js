import{_ as s,a,c as n,h as l}from"./app.b0aad492.js";const u=JSON.parse('{"title":"Mocha","description":"","frontmatter":{},"headers":[{"level":2,"title":"Install","slug":"install","link":"#install","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Watch","slug":"watch","link":"#watch","children":[]},{"level":2,"title":"Report","slug":"report","link":"#report","children":[]}],"relativePath":"tools/Mocha.md"}'),p={name:"tools/Mocha.md"},o=l(`<h1 id="mocha" tabindex="-1">Mocha <a class="header-anchor" href="#mocha" aria-hidden="true">#</a></h1><blockquote><p>\uFF08\u53D1\u97F3&quot;\u6469\u5361&quot;\uFF09\u8BDE\u751F\u4E8E2011\u5E74\uFF0C\u662F\u73B0\u5728\u6700\u6D41\u884C\u7684JavaScript\u6D4B\u8BD5\u6846\u67B6\u4E4B\u4E00\uFF0C\u5728\u6D4F\u89C8\u5668\u548CNode\u73AF\u5883\u90FD\u53EF\u4EE5\u4F7F\u7528\u3002</p></blockquote><p><a href="https://mochajs.org/" target="_blank" rel="noreferrer">Mocha</a></p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --D mocha</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir </span><span style="color:#82AAFF;">test</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>add.test.js</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> assert </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">assert</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">describe</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">add</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">it</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1+1=2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">assert</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">equal</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>package.json</p><div class="language-json line-numbers-mode"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">script</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mocha</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="watch" tabindex="-1">Watch <a class="header-anchor" href="#watch" aria-hidden="true">#</a></h2><p>package.json</p><div class="language-json line-numbers-mode"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">script</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">watch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mocha -w</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="report" tabindex="-1">Report <a class="header-anchor" href="#report" aria-hidden="true">#</a></h2><p>package.json</p><div class="language-json line-numbers-mode"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">script</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">report</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mocha -R doc &gt; test.html &amp;&amp; mocha -R markdown &gt; test.md</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,17),e=[o];function r(c,t,D,i,F,y){return a(),n("div",null,e)}const A=s(p,[["render",r]]);export{u as __pageData,A as default};
