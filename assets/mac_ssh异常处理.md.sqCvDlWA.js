import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.DPvy7iKm.js";const m=JSON.parse('{"title":"ssh异常处理","description":"","frontmatter":{},"headers":[],"relativePath":"mac/ssh异常处理.md","filePath":"mac/ssh异常处理.md"}'),p={name:"mac/ssh异常处理.md"},i=e(`<h1 id="ssh异常处理" tabindex="-1">ssh异常处理 <a class="header-anchor" href="#ssh异常处理" aria-label="Permalink to &quot;ssh异常处理&quot;">​</a></h1><h2 id="生成ssh-key" tabindex="-1">生成ssh key <a class="header-anchor" href="#生成ssh-key" aria-label="Permalink to &quot;生成ssh key&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>ssh-keygen -t ed25519 -C &quot;Gitee SSH Key&quot;</span></span>
<span class="line"><span>Your identification has been saved in /Users/tutu/.ssh/id_ed25519</span></span>
<span class="line"><span>pbcopy &lt; ~/.ssh/id_ed25519.pub</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ssh -T git@gitee.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="常见问题处理" tabindex="-1">常见问题处理 <a class="header-anchor" href="#常见问题处理" aria-label="Permalink to &quot;常见问题处理&quot;">​</a></h2><p>Bad configuration option: usekeychain</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>vim .ssh/config</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>加最前</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>IgnoreUnknown UseKeychain</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>从 OpenSSH 8.8起，默认不支持 ssh-rsa</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>vim /etc/ssh/ssh_config</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>加最后，注意缩进</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>    HostKeyAlgorithms +ssh-rsa,ssh-dss</span></span>
<span class="line"><span>    PubkeyAcceptedKeyTypes +ssh-rsa</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,12),l=[i];function r(o,c,t,d,u,h){return n(),a("div",null,l)}const _=s(p,[["render",r]]);export{m as __pageData,_ as default};
