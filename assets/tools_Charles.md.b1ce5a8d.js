import{_ as a,c as e,o,V as l}from"./chunks/framework.58cf79d7.js";const m=JSON.parse('{"title":"Charles","description":"","frontmatter":{},"headers":[],"relativePath":"tools/Charles.md","filePath":"tools/Charles.md"}'),t={name:"tools/Charles.md"},r=l(`<h1 id="charles" tabindex="-1">Charles <a class="header-anchor" href="#charles" aria-label="Permalink to &quot;Charles&quot;">​</a></h1><blockquote><p>抓包神器</p></blockquote><p><a href="https://www.charlesproxy.com/download/" target="_blank" rel="noreferrer">软件下载</a></p><p>key</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Registered Name: https://zhile.io</span></span>
<span class="line"><span style="color:#A6ACCD;">License Key: 48891cf209c6d32bf4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="电脑端设置" tabindex="-1">电脑端设置 <a class="header-anchor" href="#电脑端设置" aria-label="Permalink to &quot;电脑端设置&quot;">​</a></h2><h3 id="证书安装" tabindex="-1">证书安装 <a class="header-anchor" href="#证书安装" aria-label="Permalink to &quot;证书安装&quot;">​</a></h3><p><code>Help-SSL Proxying-Install Charles Root Certificate</code></p><h3 id="开启代理" tabindex="-1">开启代理 <a class="header-anchor" href="#开启代理" aria-label="Permalink to &quot;开启代理&quot;">​</a></h3><blockquote><p>默认Port<code>8888</code></p></blockquote><p><code>Proxy-Proxy Settings-Enable transparent HTTP proxying</code></p><h3 id="添加https的网址和端口" tabindex="-1">添加https的网址和端口 <a class="header-anchor" href="#添加https的网址和端口" aria-label="Permalink to &quot;添加https的网址和端口&quot;">​</a></h3><blockquote><p>端口默认443</p></blockquote><p><code>Proxy-SSL Proxying Settings-Enable SSL Proxying-Add </code></p><h2 id="手机端设置" tabindex="-1">手机端设置 <a class="header-anchor" href="#手机端设置" aria-label="Permalink to &quot;手机端设置&quot;">​</a></h2><h3 id="设置代理" tabindex="-1">设置代理 <a class="header-anchor" href="#设置代理" aria-label="Permalink to &quot;设置代理&quot;">​</a></h3><ul><li><p>连接电脑所在的Wi-Fi，设置代理，填入电脑在Wi-Fi下IP，端口默认<code>8888</code></p></li><li><p>手机访问网页后，Charles会弹出提示手机接入，点击<code>allow</code>允许手机连接</p></li></ul><h3 id="证书安装-1" tabindex="-1">证书安装 <a class="header-anchor" href="#证书安装-1" aria-label="Permalink to &quot;证书安装&quot;">​</a></h3><ul><li>手机打开浏览器，访问<code>chls.pro/ssl</code>安装证书</li><li><em><strong>iOS</strong></em> 需要在手机<code>设置 -&gt; 通用 -&gt; 关于本机 -&gt; 证书信任设置</code> 中打开信任</li></ul><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><h3 id="代理到本地文件" tabindex="-1">代理到本地文件 <a class="header-anchor" href="#代理到本地文件" aria-label="Permalink to &quot;代理到本地文件&quot;">​</a></h3><ul><li>添加代理规则，<code>Tools-Map Local Settings-Add</code></li><li>分别填写远程和本地地址，<code>Map From-Map To</code></li><li>设置完成后手机重新请求资源，即可代理到本地文件</li></ul>`,22),s=[r];function i(n,c,d,h,p,u){return o(),e("div",null,s)}const _=a(t,[["render",i]]);export{m as __pageData,_ as default};
