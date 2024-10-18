import{_ as n,c as a,a2 as l,o as p}from"./chunks/framework.BPuE4Feg.js";const b=JSON.parse('{"title":"使用Electron制作豆瓣FM的Mac版","description":"","frontmatter":{},"headers":[],"relativePath":"study/electron.md","filePath":"study/electron.md"}'),e={name:"study/electron.md"};function o(r,s,c,t,i,B){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="使用electron制作豆瓣fm的mac版" tabindex="-1">使用Electron制作豆瓣FM的Mac版 <a class="header-anchor" href="#使用electron制作豆瓣fm的mac版" aria-label="Permalink to &quot;使用Electron制作豆瓣FM的Mac版&quot;">​</a></h1><p>仅通过<code>Electron</code>的API<code>loadURL</code>实现窗口内嵌套豆瓣FM网址生成app和dmg <a href="https://github.com/babytutu/doubanApp" target="_blank" rel="noreferrer">github代码仓库</a></p><h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">mkdir</span><span style="color:#98C379;"> my-electron-app</span><span style="color:#ABB2BF;"> &amp;&amp; </span><span style="color:#56B6C2;">cd</span><span style="color:#98C379;"> my-electron-app</span></span>
<span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#98C379;"> init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>安装依赖包</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#98C379;"> install</span><span style="color:#D19A66;"> -D</span><span style="color:#98C379;"> electron</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="解决安装依赖失败" tabindex="-1">解决安装依赖失败 <a class="header-anchor" href="#解决安装依赖失败" aria-label="Permalink to &quot;解决安装依赖失败&quot;">​</a></h3><p>新增.npmrc</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>registry = https://registry.npm.taobao.org</span></span>
<span class="line"><span>ELECTRON_MIRROR = https://npmmirror.com/mirrors/electron/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="核心实现代码" tabindex="-1">核心实现代码 <a class="header-anchor" href="#核心实现代码" aria-label="Permalink to &quot;核心实现代码&quot;">​</a></h2><p>基于<a href="https://www.electronjs.org/docs/latest/tutorial/quick-start" target="_blank" rel="noreferrer">官方文档</a>，修改部分内容实现，使用<code>loadURL</code>加载url即可</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">  // 创建浏览窗口</span></span>
<span class="line"><span style="color:#C678DD;">  const</span><span style="color:#E5C07B;"> mainWindow</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> BrowserWindow</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;">    width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1200</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">    height</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">800</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">    webPreferences</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;">      preload</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">__dirname</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;preload.js&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#E06C75;">    resizable</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">    icon</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">__dirname</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;img/icon.png&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  // 加载 url</span></span>
<span class="line"><span style="color:#E5C07B;">  mainWindow</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">loadURL</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;https://fm.douban.com&#39;</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="dock设置" tabindex="-1">dock设置 <a class="header-anchor" href="#dock设置" aria-label="Permalink to &quot;dock设置&quot;">​</a></h2><p>mac独有</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;electron&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> path</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;path&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// dock弹跳效果</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">dock</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">bounce</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 设置dock图标</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">dock</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setIcon</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">__dirname</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;img/icon.png&#39;</span><span style="color:#ABB2BF;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="设置菜单" tabindex="-1">设置菜单 <a class="header-anchor" href="#设置菜单" aria-label="Permalink to &quot;设置菜单&quot;">​</a></h2><p>在app.whenReady()之前调用</p><h3 id="禁用默认菜单" tabindex="-1">禁用默认菜单 <a class="header-anchor" href="#禁用默认菜单" aria-label="Permalink to &quot;禁用默认菜单&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 禁用默认菜单</span></span>
<span class="line"><span style="color:#E5C07B;">Menu</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setApplicationMenu</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="自定义菜单" tabindex="-1">自定义菜单 <a class="header-anchor" href="#自定义菜单" aria-label="Permalink to &quot;自定义菜单&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> menuTemp</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#E06C75;">    label</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;设置&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">    submenu</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">      {</span></span>
<span class="line"><span style="color:#E06C75;">        label</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;关于&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">        role</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;about&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      { </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;separator&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">      {</span></span>
<span class="line"><span style="color:#E06C75;">        label</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;退出&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">        role</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;quit&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    ]</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> menu</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> Menu</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">buildFromTemplate</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">menuTemp</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">Menu</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setApplicationMenu</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">menu</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="设置顶部图标" tabindex="-1">设置顶部图标 <a class="header-anchor" href="#设置顶部图标" aria-label="Permalink to &quot;设置顶部图标&quot;">​</a></h2><p>使用Tray</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#E06C75;"> tray</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> image</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> nativeImage</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createFromPath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;img/icon.png&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E06C75;">tray</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> Tray</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">image</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resize</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;">  width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">  height</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">20</span></span>
<span class="line"><span style="color:#ABB2BF;">}))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> contextMenu</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> Menu</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">buildFromTemplate</span><span style="color:#ABB2BF;">([</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#E06C75;">    label</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;退出&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">    role</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;quit&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">])</span></span>
<span class="line"><span style="color:#E5C07B;">tray</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setContextMenu</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">contextMenu</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="设置关于面板" tabindex="-1">设置关于面板 <a class="header-anchor" href="#设置关于面板" aria-label="Permalink to &quot;设置关于面板&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 设置 &quot;关于&quot; 面板选项</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setAboutPanelOptions</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;">  credits</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;使用Electron制作,可点击源代码DIY&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="本地缓存" tabindex="-1">本地缓存 <a class="header-anchor" href="#本地缓存" aria-label="Permalink to &quot;本地缓存&quot;">​</a></h2><p>新增<code>electron-store</code>实现app内数据缓存，不能安装在开发依赖<code>devDependencies</code>中，生成app时需要把这个模块一起打包才能使用</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#98C379;"> install</span><span style="color:#98C379;"> electron-store</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> Store</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;electron-store&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 初始化缓存</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> schema</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;">  name</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;">    type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;string&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">    default</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;abc&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> store</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> Store</span><span style="color:#ABB2BF;">({</span><span style="color:#E06C75;">schema</span><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 读取</span></span>
<span class="line"><span style="color:#E5C07B;">store</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;name&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 修改</span></span>
<span class="line"><span style="color:#E5C07B;">store</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">set</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;name&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;ABC&#39;</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="通知" tabindex="-1">通知 <a class="header-anchor" href="#通知" aria-label="Permalink to &quot;通知&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">new</span><span style="color:#61AFEF;"> Notification</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;">  title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;通知标题&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">  body</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;通知内容&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">}).</span><span style="color:#61AFEF;">show</span><span style="color:#ABB2BF;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="生成app" tabindex="-1">生成app <a class="header-anchor" href="#生成app" aria-label="Permalink to &quot;生成app&quot;">​</a></h2><h3 id="使用-electron-forge" tabindex="-1">使用 Electron Forge <a class="header-anchor" href="#使用-electron-forge" aria-label="Permalink to &quot;使用 Electron Forge&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>npm install -D @electron-forge/cli @electron-forge/maker-dmg</span></span>
<span class="line"><span>npx electron-forge import</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="自定义信息" tabindex="-1">自定义信息 <a class="header-anchor" href="#自定义信息" aria-label="Permalink to &quot;自定义信息&quot;">​</a></h3><p>forge.config.js</p><p>调整packagerConfig实现打包app的图标和版本自定义</p><p>需要新增img文件夹，准备icon.icns文件作为app的图标</p><p>打包时默认使用<code>package.json</code>中的<code>name</code>，建议增加<code>productName</code>，Electron 会优先使用这个字段作为应用名</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;">  packagerConfig</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;">    icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;img/icon&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">    buildVersion</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;2023-03-23&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#E06C75;">  makers</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#E06C75;">      name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;@electron-forge/maker-dmg&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">      config</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;">        background</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;./img/background.png&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">        icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;./img/icon.icns&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="存在问题" tabindex="-1">存在问题 <a class="header-anchor" href="#存在问题" aria-label="Permalink to &quot;存在问题&quot;">​</a></h4><p>参数封装过于扎实，造成背景图可能不生效（白色）</p><ul><li>每次生成dmg后，需要退出后再重新打包</li><li>配置路径必须用<code>./</code>起头，表示js和img目录的相对关系</li><li>背景图尺寸，推荐658*498（源代码里写的），至少高度大于480，否则会出现滚动条</li></ul><h3 id="创建可分发的应用程序" tabindex="-1">创建可分发的应用程序 <a class="header-anchor" href="#创建可分发的应用程序" aria-label="Permalink to &quot;创建可分发的应用程序&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#98C379;"> run</span><span style="color:#98C379;"> package</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Electron-forge 会创建 out 文件夹</p><h3 id="生成dmg文件" tabindex="-1">生成dmg文件 <a class="header-anchor" href="#生成dmg文件" aria-label="Permalink to &quot;生成dmg文件&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#98C379;"> run</span><span style="color:#98C379;"> make</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="直接使用appdmg打包" tabindex="-1">直接使用appdmg打包 <a class="header-anchor" href="#直接使用appdmg打包" aria-label="Permalink to &quot;直接使用appdmg打包&quot;">​</a></h2><p>直接打包需要处理文件删除，参数配置，但生成的dmg会小将近20M</p>`,51)]))}const d=n(e,[["render",o]]);export{b as __pageData,d as default};
