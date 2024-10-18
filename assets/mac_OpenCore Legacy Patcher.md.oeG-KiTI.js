import{_ as e,c as t,a2 as r,o}from"./chunks/framework.BPuE4Feg.js";const p="/assets/olp.sGeU7y-l.png",s="/assets/macOS.DGnzxzBq.png",l="/assets/disk0.BlCFXFs3.png",c="/assets/efi.BVi-ireo.png",n="/assets/boot1.zVs-iNfr.webp",i="/assets/boot2.DW-r93Fk.webp",d="/assets/patch.Dxck-PPg.png",h="/assets/kit.Bf1-7ZMx.png",m="/assets/mbp.dpRkABxe.png",q=JSON.parse('{"title":"在不受支持的 Mac 上安装 macOS Ventura","description":"","frontmatter":{},"headers":[],"relativePath":"mac/OpenCore Legacy Patcher.md","filePath":"mac/OpenCore Legacy Patcher.md"}'),u={name:"mac/OpenCore Legacy Patcher.md"};function g(b,a,_,O,P,f){return o(),t("div",null,a[0]||(a[0]=[r('<h1 id="在不受支持的-mac-上安装-macos-ventura" tabindex="-1">在不受支持的 Mac 上安装 macOS Ventura <a class="header-anchor" href="#在不受支持的-mac-上安装-macos-ventura" aria-label="Permalink to &quot;在不受支持的 Mac 上安装 macOS Ventura&quot;">​</a></h1><p>通过安装<code>OpenCore Legacy Patcher</code>实现老机器安装新系统【苹果官方已不支持】</p><p>例如： MacBook Pro 2011 可以安装 macOS Ventura</p><h2 id="安装步骤" tabindex="-1">安装步骤 <a class="header-anchor" href="#安装步骤" aria-label="Permalink to &quot;安装步骤&quot;">​</a></h2><p>下载最新安装包，github仓库release</p><p>图形化工具：OpenCore-Patcher-GUI.app.zip</p><p><a href="https://github.com/dortania/OpenCore-Legacy-Patcher/releases" target="_blank" rel="noreferrer">https://github.com/dortania/OpenCore-Legacy-Patcher/releases</a></p><p><img src="'+p+'" alt="工具截图"></p><h2 id="制作系统安装盘" tabindex="-1">制作系统安装盘 <a class="header-anchor" href="#制作系统安装盘" aria-label="Permalink to &quot;制作系统安装盘&quot;">​</a></h2><p>使用一个容量大于16G的U盘或移动硬盘，需要先格式化来制作安装盘，这个步骤可以安装官网说明制作</p><p>以下为快捷方式，通过2选1的模式直接制作系统安装盘</p><p>Create macOS Installer</p><ul><li>Download macOS Installer 下载安装包，老系统无法直接下载新系统，这个选项非常棒</li><li>Use existing macOS Installer 使用已下载好的安装包</li></ul><p><img src="'+s+'" alt="macOS"></p><h2 id="安装启动准备" tabindex="-1">安装启动准备 <a class="header-anchor" href="#安装启动准备" aria-label="Permalink to &quot;安装启动准备&quot;">​</a></h2><p>Build and Install OpenCore</p><p>老系统无法直接安装新系统，会提升不兼容，需要在硬盘上安装一些工具，安装完成后会弹出提示，点击 “Install to disk” 即可，选择要安装的磁盘，一般disk0 为电脑内置磁盘，</p><p><img src="'+l+'" alt="disk0"></p><p>出现 EFI 分区选择界面，点击即可。</p><p><img src="'+c+'" alt="efi"></p><p>这个步骤会生成一个启动时有1个<code>EFI启动区</code>，通过这个启动区安装新系统就不会提示不兼容</p><h1 id="重启电脑-安装新系统" tabindex="-1">重启电脑，安装新系统 <a class="header-anchor" href="#重启电脑-安装新系统" aria-label="Permalink to &quot;重启电脑，安装新系统&quot;">​</a></h1><p>按住<code>Option</code>，直到出现启动选择画面</p><ol><li>选择带有 OpenCore 徽标的 EFI Boot 图标</li><li>选择安装新系统</li></ol><p>网上找了2个图，直观的说明</p><p><img src="'+n+'" alt="启动界面1"></p><p><img src="'+i+'" alt="启动界面2"></p><p>强烈建议格式化磁盘全新安装</p><h2 id="重新安装olp" tabindex="-1">重新安装OLP <a class="header-anchor" href="#重新安装olp" aria-label="Permalink to &quot;重新安装OLP&quot;">​</a></h2><p>新系统如果是全新安装的，需要重新下载软件，并执行<code>Build and Install OpenCore</code>，安装在内置磁盘，保证可正常启动</p><h2 id="安装系统补丁" tabindex="-1">安装系统补丁 <a class="header-anchor" href="#安装系统补丁" aria-label="Permalink to &quot;安装系统补丁&quot;">​</a></h2><p>Post-Install Root Patch</p><p>系统安装完成后，需要安装补丁用于解决兼容问题</p><p>软件会自动查询需要下载的补丁包，下图为安装成功后截图，第一次打开如果``可点击，就需要安装</p><p><img src="'+d+'" alt="patch"></p><p>部分电脑可能安装新系统后无法上网，需要在其他电脑下载补丁包</p><p>苹果官网下载地址，根据新系统选择对应的补丁包，比如<code>macOS Ventura</code>下载<code>Kernel Debug Kit 13.5.2 build 22G91</code></p><p><a href="https://developer.apple.com/download/all/?q=Kernel%20Debug%20Kit" target="_blank" rel="noreferrer">https://developer.apple.com/download/all/?q=Kernel Debug Kit</a></p><p><img src="'+h+'" alt="kit"></p><h2 id="成果展示" tabindex="-1">成果展示 <a class="header-anchor" href="#成果展示" aria-label="Permalink to &quot;成果展示&quot;">​</a></h2><p>升级成功</p><p><img src="'+m+'" alt="mbp"></p>',42)]))}const x=e(u,[["render",g]]);export{q as __pageData,x as default};
