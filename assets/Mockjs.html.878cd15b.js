import{_ as p,r as e,o as c,c as l,b as n,a as t,e as s,f as o}from"./app.c90e916d.js";const r={},u=n("h1",{id:"mockjs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mockjs","aria-hidden":"true"},"#"),s(" Mockjs")],-1),k=n("blockquote",null,[n("p",null,"\u751F\u6210\u968F\u673A\u6570\u636E\uFF0C\u62E6\u622A Ajax \u8BF7\u6C42")],-1),i={href:"http://mockjs.com/",target:"_blank",rel:"noopener noreferrer"},m=s("\u5B98\u7F51"),d=o(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> i mockjs
</code></pre></div><ul><li>\u5177\u4F53\u4F8B\u5B50</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> Mock <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Random <span class="token operator">=</span> Mock<span class="token punctuation">.</span>Random

<span class="token keyword">const</span> template <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">cname</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; {name: &quot;\u674E\u96F7&quot;}</span>
</code></pre></div><h2 id="\u8BED\u6CD5\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u89C4\u8303" aria-hidden="true">#</a> \u8BED\u6CD5\u89C4\u8303</h2><h3 id="\u6570\u636E\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6A21\u677F" aria-hidden="true">#</a> \u6570\u636E\u6A21\u677F</h3><div class="language-text ext-text"><pre class="language-text"><code>// \u5C5E\u6027\u540D   name
// \u751F\u6210\u89C4\u5219 rule
// \u5C5E\u6027\u503C   value
&#39;name|rule&#39;: value
</code></pre></div><p>\u5217\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> Mock <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// Number</span>
<span class="token keyword">const</span> template <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;number1|1-10.1-2&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;number2|1.1-2&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;number3|1.3&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;number4|1.10&#39;</span><span class="token operator">:</span> <span class="token number">1.123</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// =&gt;</span>
<span class="token comment">// {</span>
<span class="token comment">//   number1: 2.4,</span>
<span class="token comment">//   number2: 1.8,</span>
<span class="token comment">//   number3: 1.888,</span>
<span class="token comment">//   number4: 1.1238143732</span>
<span class="token comment">// }</span>
</code></pre></div><h3 id="\u6570\u636E\u5360\u4F4D\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5360\u4F4D\u7B26" aria-hidden="true">#</a> \u6570\u636E\u5360\u4F4D\u7B26</h3><div class="language-text ext-text"><pre class="language-text"><code>@\u5360\u4F4D\u7B26
@\u5360\u4F4D\u7B26(\u53C2\u6570 [, \u53C2\u6570])
</code></pre></div><p>\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> Mock <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// @</span>
<span class="token keyword">const</span> template <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&#39;@city(true)&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cname</span><span class="token operator">:</span> <span class="token string">&#39;@cname&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;@color&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// =&gt;</span>
<span class="token comment">// {</span>
<span class="token comment">//   city: &quot;\u5E7F\u4E1C\u7701 \u4E1C\u839E\u5E02&quot;,</span>
<span class="token comment">//   cname: &quot;\u8303\u82B3&quot;,</span>
<span class="token comment">//   color: &quot;#a1f279&quot;,</span>
<span class="token comment">// }</span>
</code></pre></div><h2 id="\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u5E38\u7528\u65B9\u6CD5</h2><h3 id="mock-mock" tabindex="-1"><a class="header-anchor" href="#mock-mock" aria-hidden="true">#</a> Mock.mock()</h3><ul><li>Mock.mock( template )</li></ul><blockquote><p>\u6839\u636E\u6570\u636E\u6A21\u677F\u751F\u6210\u6A21\u62DF\u6570\u636E</p></blockquote><ul><li>Mock.mock( rurl, template )</li></ul><blockquote><p>\u8BB0\u5F55\u6570\u636E\u6A21\u677F\u3002\u5F53\u62E6\u622A\u5230\u5339\u914D rurl \u7684 Ajax \u8BF7\u6C42\u65F6\uFF0C\u5C06\u6839\u636E\u6570\u636E\u6A21\u677F template \u751F\u6210\u6A21\u62DF\u6570\u636E\uFF0C\u5E76\u4F5C\u4E3A\u54CD\u5E94\u6570\u636E\u8FD4\u56DE\u3002</p></blockquote><p>\u8FD9\u4E2A\u65B9\u6CD5\u5C31\u8001\u5389\u5BB3\u4E86\uFF5E\u76F4\u63A5\u628Aajax\u8BF7\u6C42\u7ED9\u62E6\u622A\u4E86</p><ul><li>Mock.mock( rurl, function( options ) )</li></ul><blockquote><p>\u8BB0\u5F55\u7528\u4E8E\u751F\u6210\u54CD\u5E94\u6570\u636E\u7684\u51FD\u6570\u3002\u5F53\u62E6\u622A\u5230\u5339\u914D rurl \u7684 Ajax \u8BF7\u6C42\u65F6\uFF0C\u51FD\u6570 function(options) \u5C06\u88AB\u6267\u884C\uFF0C\u5E76\u628A\u6267\u884C\u7ED3\u679C\u4F5C\u4E3A\u54CD\u5E94\u6570\u636E\u8FD4\u56DE\u3002</p></blockquote><p>\u53EF\u4EE5\u83B7\u53D6\u63A5\u53E3\u4E2D\u7684\u4F20\u53C2\uFF0C\u6839\u636E\u53C2\u6570\u8FD4\u56DE\u4E0D\u540C\u7684\u6570\u636E\uFF0C\u8BA9mock\u6570\u636E\u66F4\u771F\u5B9E\u4E00\u4E9B</p><blockquote><p>options \u6307\u5411\u672C\u6B21\u8BF7\u6C42\u7684 Ajax \u9009\u9879\u96C6\uFF0C\u542B\u6709 url\u3001type \u548C body \u4E09\u4E2A\u5C5E\u6027</p></blockquote><h3 id="mock-random" tabindex="-1"><a class="header-anchor" href="#mock-random" aria-hidden="true">#</a> Mock.Random</h3>`,25),h={href:"https://github.com/nuysoft/Mock/wiki/Mock.Random",target:"_blank",rel:"noopener noreferrer"},g=s("\u8BE6\u7EC6API\u6587\u6863"),f=o(`<blockquote><p>\u662F\u4E00\u4E2A\u5DE5\u5177\u7C7B\uFF0C\u7528\u4E8E\u751F\u6210\u5404\u79CD\u968F\u673A\u6570\u636E\u3002 Mock.Random \u7684\u65B9\u6CD5\u5728\u6570\u636E\u6A21\u677F\u4E2D\u79F0\u4E3A\u300E\u5360\u4F4D\u7B26\u300F\uFF0C\u4E66\u5199\u683C\u5F0F\u4E3A @\u5360\u4F4D\u7B26(\u53C2\u6570 [, \u53C2\u6570])</p></blockquote><p>\u4E00\u4E2A\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> Mock <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Random <span class="token operator">=</span> Mock<span class="token punctuation">.</span>Random

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Random<span class="token punctuation">.</span><span class="token function">email</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; &quot;n.clark@miller.io&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">&#39;@email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; &quot;y.lee@lewis.org&quot;</span>
</code></pre></div>`,3);function b(x,y){const a=e("ExternalLinkIcon");return c(),l("div",null,[u,k,n("p",null,[n("a",i,[m,t(a)])]),d,n("p",null,[n("a",h,[g,t(a)])]),f])}var j=p(r,[["render",b],["__file","Mockjs.html.vue"]]);export{j as default};
