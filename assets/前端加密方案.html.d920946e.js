import{_ as l,r as s,o as u,c as k,b as n,a,w as i,e as t,f as p}from"./app.c90e916d.js";const r={},g=n("h1",{id:"\u524D\u7AEF\u52A0\u5BC6\u65B9\u6848",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u524D\u7AEF\u52A0\u5BC6\u65B9\u6848","aria-hidden":"true"},"#"),t(" \u524D\u7AEF\u52A0\u5BC6\u65B9\u6848")],-1),d=t("\u53C2\u8003\u6587\u6863 "),y={href:"https://cryptojs.gitbook.io/docs/",target:"_blank",rel:"noopener noreferrer"},h=t("https://cryptojs.gitbook.io/docs/"),m=n("li",null,"\u4F7F\u7528AES\u5BF9\u7528\u6237\u5BC6\u7801\u8FDB\u884C\u52A0\u5BC6\uFF08\u652F\u6301\u53EF\u914D\u7F6E\u7684\u52A0\u5BC6\u79D8\u94A5\u8FDB\u884C\u52A0\u89E3\u5BC6\uFF09",-1),x=p(`<h2 id="\u5B89\u88C5\u4F9D\u8D56\u5305" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56\u5305" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56\u5305</h2><p>\u5F15\u5165<code>crypto-js</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> crypto-js
</code></pre></div><h2 id="node\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#node\u793A\u4F8B" aria-hidden="true">#</a> node\u793A\u4F8B</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@see</span> https://cryptojs.gitbook.io/docs/
 */</span>
 <span class="token keyword">const</span> CryptoJS <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;crypto-js&#39;</span><span class="token punctuation">)</span>

 <span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token string">&#39;Message&#39;</span>
 <span class="token keyword">var</span> key <span class="token operator">=</span> <span class="token string">&#39;xxxxxx&#39;</span>

 <span class="token keyword">var</span> encrypted <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">var</span> decrypted <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">decrypt</span><span class="token punctuation">(</span>encrypted<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">)</span>

 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;AES-encrypted&#39;</span><span class="token punctuation">,</span> encrypted<span class="token punctuation">)</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;AES-decrypted&#39;</span><span class="token punctuation">,</span> decrypted<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u8F93\u51FA\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u7ED3\u679C" aria-hidden="true">#</a> \u8F93\u51FA\u7ED3\u679C</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>text Message
key xxxxxx
AES-encrypted U2FsdGVkX18mFLck5J77h97l/m1gWKBIuXEFHdTphvo<span class="token operator">=</span>
AES-decrypted Message
</code></pre></div><h2 id="html\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#html\u793A\u4F8B" aria-hidden="true">#</a> html\u793A\u4F8B</h2><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.14/vue.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">#app</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 20px auto<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #eee<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>AES\u52A0\u5BC6\uFF1A{{encrypt(text)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>AES\u89E3\u5BC6\uFF1A{{decrypt(text)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
      <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxx&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Message&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * AES\u52A0\u5BC6
         */</span>
        <span class="token function">encrypt</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token doc-comment comment">/**
         * AES\u89E3\u5BC6
         */</span>
        <span class="token function">decrypt</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">decrypt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="vue\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#vue\u793A\u4F8B" aria-hidden="true">#</a> vue\u793A\u4F8B</h2><p>\u4E3A\u65B9\u4FBF\u591A\u5904\u8C03\u7528\uFF0C\u5B9E\u9645\u4F7F\u7528\u4E2D\u628A\u52A0\u5BC6\u89E3\u5BC6\u65B9\u6CD5\u5199\u5728\u4E00\u4E2A\u6587\u4EF6\u4E2D\u7528\u4E8E\u7EDF\u4E00\u7EF4\u62A4\u548C\u4F7F\u7528</p>`,11),v=p(`<h3 id="\u5C01\u88C5\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u5DE5\u5177" aria-hidden="true">#</a> \u5C01\u88C5\u5DE5\u5177</h3><p>cryptojs.ts</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@see</span> https://cryptojs.gitbook.io/docs/
 */</span>
<span class="token keyword">import</span> CryptoJS <span class="token keyword">from</span> <span class="token string">&#39;crypto-js&#39;</span>

<span class="token comment">// AES\u79D8\u94A5\uFF0C\u4E0E\u540E\u7AEF\u7EA6\u5B9A\u4FDD\u6301\u4E00\u81F4</span>
<span class="token keyword">const</span> keyWords <span class="token operator">=</span> <span class="token string">&#39;xxxxxx&#39;</span>

<span class="token comment">// \u52A0\u5BC6\u65B9\u6CD5\uFF0C\u767B\u5F55\u548C\u4FEE\u6539\u5BC6\u7801\u4F7F\u7528</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> encrypt <span class="token operator">=</span> <span class="token punctuation">(</span>pwd<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=&gt;</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span>pwd<span class="token punctuation">,</span> keyWords<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u89E3\u5BC6\u65B9\u6CD5\uFF0C\u9A8C\u8BC1\u65E7\u5BC6\u7801\u4F7F\u7528</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> decrypt <span class="token operator">=</span> <span class="token punctuation">(</span>pwd<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=&gt;</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">decrypt</span><span class="token punctuation">(</span>pwd<span class="token punctuation">,</span> keyWords<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h3><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>AES\u52A0\u5BC6\uFF1A{{encrypt(text)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>AES\u89E3\u5BC6\uFF1A{{decrypt(encrypt(text))}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> encrypt<span class="token punctuation">,</span> decrypt <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./cryptojs&#39;</span> <span class="token comment">// \u52A0\u5BC6\u89E3\u5BC6\u65B9\u6CD5</span>

<span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Message&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,5);function f(q,_){const o=s("ExternalLinkIcon"),c=s("crypto"),e=s("ClientOnly");return u(),k("div",null,[g,n("ul",null,[n("li",null,[d,n("a",y,[h,a(o)])]),m]),x,a(e,null,{default:i(()=>[a(c)]),_:1}),v])}var S=l(r,[["render",f],["__file","\u524D\u7AEF\u52A0\u5BC6\u65B9\u6848.html.vue"]]);export{S as default};
