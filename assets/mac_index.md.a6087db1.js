import{_ as s,o as a,c as l,N as n}from"./chunks/framework.cec8ca25.js";const D=JSON.parse('{"title":"Mac小技巧","description":"","frontmatter":{},"headers":[],"relativePath":"mac/index.md"}'),e={name:"mac/index.md"},p=n(`<h1 id="mac小技巧" tabindex="-1">Mac小技巧 <a class="header-anchor" href="#mac小技巧" aria-label="Permalink to &quot;Mac小技巧&quot;">​</a></h1><h2 id="解决端口被占用" tabindex="-1">解决端口被占用 <a class="header-anchor" href="#解决端口被占用" aria-label="Permalink to &quot;解决端口被占用&quot;">​</a></h2><blockquote><p>查看被占用端口对应PID</p></blockquote><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">lsof</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i:9001</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>终端会把坏人给列出来</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">COMMAND</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">PID</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">USER</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">FD</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">TYPE</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">DEVICE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SIZE/OFF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NODE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NAME</span></span>
<span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">7500</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tutu</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">24u</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">IPv4</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">0x27bd9</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">0t0</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">TCP</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">:etlservicemgr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">LISTEN</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>解放端口号</p></blockquote><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">kill</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">92239</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="macos-运行应用出现「意外退出」及「崩溃闪退」问题修复方法" tabindex="-1">macOS 运行应用出现「意外退出」及「崩溃闪退」问题修复方法 <a class="header-anchor" href="#macos-运行应用出现「意外退出」及「崩溃闪退」问题修复方法" aria-label="Permalink to &quot;macOS 运行应用出现「意外退出」及「崩溃闪退」问题修复方法&quot;">​</a></h2><p>更新系统后有很多软件打不开，或者出现闪退的情况，是因为Apple苹果公司在新系统中删除了TNT的证书</p><p>打开终端工具输入并执行如下命令：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">codesign</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--force</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--deep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--sign</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">应用路径</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>应用路径：打开访达（Finder），点击左侧导航栏的 应用程序，找到相关应用，将它拖进终端命令- 的后面，然后按下回车即可，注意最后一个 - 后面有一个空格。</p><p>正常情况下只有一行提示，即成功：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">/文件位置</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">replacing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">existing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">signature</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="强制升级macos" tabindex="-1">强制升级macOS <a class="header-anchor" href="#强制升级macos" aria-label="Permalink to &quot;强制升级macOS&quot;">​</a></h2><p>MacBook Pro（13 英寸，2011）A1278 使用macOS Catalina Patcher成功安装macOS Catalina</p><ol><li>准备好一个16G以上的U盘（8G的不够用）；</li><li>到大神Collin的个人网站上，下载软件；<a href="http://dosdude1.com/catalina/" target="_blank" rel="noreferrer">macOS Catalina Patcher</a></li><li>双击下载的dmg文件，生成一个硬盘映像；</li><li>双击图标，打开程序；</li><li>打开后界面，英文的，继续；</li><li>安装文件有两个选择：已经下载过的，在线下载</li><li>选择要安装此系统的方法，选中间那个，创建一个启动U盘；</li><li>插入那个事先准备好的16G空白U盘。</li><li>出现警告，点Yes；</li><li>开始创建，需要点时间；</li><li>启动U盘创建完成，退出；</li><li>在要安装系统的电脑上，插入制作好的启动U盘，开机，按Option键，选择U盘启动。进入实用工具后，用磁盘工具“将内部驱动器（用于安装macOS Catalina的驱动器）格式化为APFS，进入重新安装macOS开始安装；</li><li>注意：安装完成，第一次重启，系统开始配置，再次自动重启，安装补丁成功。</li><li>第一次进入桌面，提示要完成补丁升级；</li><li>补丁升级完成，重启；</li><li>在启动台其他里，有个Patch Updater，用于补丁升级</li><li>MacBook Pro（13 英寸，2011 年末）A1278安装macOS Catalina，成功！</li></ol>`,18),o=[p];function t(c,r,i,C,d,y){return a(),l("div",null,o)}const m=s(e,[["render",t]]);export{D as __pageData,m as default};
