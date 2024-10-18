import{_ as a,c as n,a2 as e,o as p}from"./chunks/framework.BPuE4Feg.js";const l="/assets/bundleId.B5IhGMaO.png",B=JSON.parse('{"title":"Universal Links","description":"","frontmatter":{},"headers":[],"relativePath":"iOS/Universal Links.md","filePath":"iOS/Universal Links.md"}'),o={name:"iOS/Universal Links.md"};function t(r,s,i,c,u,d){return p(),n("div",null,s[0]||(s[0]=[e('<h1 id="universal-links" tabindex="-1">Universal Links <a class="header-anchor" href="#universal-links" aria-label="Permalink to &quot;Universal Links&quot;">​</a></h1><h2 id="apple-developer-设置" tabindex="-1">Apple Developer 设置 <a class="header-anchor" href="#apple-developer-设置" aria-label="Permalink to &quot;Apple Developer 设置&quot;">​</a></h2><p>BundleId设置Associated Domains Enable</p><p><img src="'+l+`" alt="bundleId"></p><h2 id="增加配置文件" tabindex="-1">增加配置文件 <a class="header-anchor" href="#增加配置文件" aria-label="Permalink to &quot;增加配置文件&quot;">​</a></h2><p>网站以<code>test.cn</code>为例</p><p>新增apple-app-site-association</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;">  &quot;applinks&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;apps&quot;</span><span style="color:#ABB2BF;">: [],</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;details&quot;</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">      {</span></span>
<span class="line"><span style="color:#E06C75;">        &quot;appID&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;TeamID.com.xxx.test&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">        &quot;paths&quot;</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#98C379;">          &quot;*&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">        ]</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    ]</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>上传到网站根目录或<code>.well-known</code>文件夹下</p><p>通过网址 <a href="https://test.cn/apple-app-site-association" target="_blank" rel="noreferrer">https://test.cn/apple-app-site-association</a> 或者 <a href="https://test.cn/.well-known/apple-app-site-association" target="_blank" rel="noreferrer">https://test.cn/.well-known/apple-app-site-association</a> 访问或下载文件</p><p>使用苹果官方工具验证是否正常访问</p><p><a href="https://app-site-association.cdn-apple.com/a/v1/test.cn" target="_blank" rel="noreferrer">https://app-site-association.cdn-apple.com/a/v1/test.cn</a></p><h2 id="uniapp配置" tabindex="-1">uniapp配置 <a class="header-anchor" href="#uniapp配置" aria-label="Permalink to &quot;uniapp配置&quot;">​</a></h2><p><a href="https://uniapp.dcloud.net.cn/tutorial/app-ios-capabilities.html" target="_blank" rel="noreferrer">官方配置说明</a></p><p>修改manifest.json</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#98C379;">&quot;capabilities&quot;</span><span style="color:#ABB2BF;"> : {</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;entitlements&quot;</span><span style="color:#ABB2BF;"> : {</span></span>
<span class="line"><span style="color:#E06C75;">        &quot;com.apple.developer.associated-domains&quot;</span><span style="color:#ABB2BF;"> : [ </span><span style="color:#98C379;">&quot;applinks:test.cn&quot;</span><span style="color:#ABB2BF;"> ]</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-label="Permalink to &quot;验证&quot;">​</a></h2><p>安装app</p><p>Safari中打开<code>https://test.cn</code>应该有打开xxx的选项，说明可以触发跳转</p>`,19)]))}const m=a(o,[["render",t]]);export{B as __pageData,m as default};
