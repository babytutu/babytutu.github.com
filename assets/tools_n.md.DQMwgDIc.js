import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.DPvy7iKm.js";const m=JSON.parse('{"title":"安装不同版本的nodejs","description":"","frontmatter":{},"headers":[],"relativePath":"tools/n.md","filePath":"tools/n.md"}'),o={name:"tools/n.md"},t=e(`<h1 id="安装不同版本的nodejs" tabindex="-1">安装不同版本的nodejs <a class="header-anchor" href="#安装不同版本的nodejs" aria-label="Permalink to &quot;安装不同版本的nodejs&quot;">​</a></h1><p>部分场景需要低版本的nodejs，可使用n或者nvm安装不同版本后切换实现，n安装简单。</p><h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h2><p>安装nodejs</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>通过npm全局安装n</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#98C379;"> i</span><span style="color:#98C379;"> n</span><span style="color:#D19A66;"> -g</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="设置环境变量" tabindex="-1">设置环境变量 <a class="header-anchor" href="#设置环境变量" aria-label="Permalink to &quot;设置环境变量&quot;">​</a></h3><p>因下载node版本时默认镜像速度过慢，需要设置<code>NODE_MIRROR</code>加速下载</p><p>打开终端，编辑配置文件：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">vi</span><span style="color:#98C379;"> ~/.zshrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>增加环境变量配置</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> NODE_MIRROR</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">https</span><span style="color:#ABB2BF;">://</span><span style="color:#E06C75;">npmmirror</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">com</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">mirrors</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">node</span><span style="color:#ABB2BF;">/</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> PATH</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">$PATH</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;">$NODE_MIRROR</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>保存配置并重新加载配置</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#56B6C2;">source</span><span style="color:#98C379;"> .zshrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>确认设置</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#E06C75;"> $NODE_MIRROR</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><table tabindex="0"><thead><tr><th>命令</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>1</td><td>展示已安装版本并安装选中版本</td><td>n</td></tr><tr><td>ls</td><td>展示已安装版本</td><td>n ls</td></tr><tr><td>version</td><td>安装版本</td><td>n 20</td></tr><tr><td>rm version</td><td>卸载node</td><td>n rm 20</td></tr><tr><td>uninstall</td><td>卸载已安装的node</td><td>n uninstall</td></tr></tbody></table>`,19),l=[t];function p(r,d,c,i,h,b){return n(),a("div",null,l)}const y=s(o,[["render",p]]);export{m as __pageData,y as default};
