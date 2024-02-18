import{_ as a,c as s,o as l,a4 as e}from"./chunks/framework.Dh_iM4ES.js";const m=JSON.parse('{"title":"Linux常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"linux/Linux常用命令.md","filePath":"linux/Linux常用命令.md"}'),n={name:"linux/Linux常用命令.md"},i=e('<h1 id="linux常用命令" tabindex="-1">Linux常用命令 <a class="header-anchor" href="#linux常用命令" aria-label="Permalink to &quot;Linux常用命令&quot;">​</a></h1><h2 id="系统实时进程状态-top" tabindex="-1">系统实时进程状态： top <a class="header-anchor" href="#系统实时进程状态-top" aria-label="Permalink to &quot;系统实时进程状态： top&quot;">​</a></h2><p>top命令可以实时地显示系统的进程状态，如CPU占用率、内存占用率、运行时间等</p><ul><li>-u ：只显示指定用户的进程</li><li>-p ：只显示指定进程ID的进程</li><li>-c：显示完整的命令行</li><li>-d ：设置刷新间隔，单位为秒</li></ul><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>每隔5秒刷新信息</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">top</span><span style="color:#D19A66;"> -d</span><span style="color:#D19A66;"> 5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="内存使用情况-free" tabindex="-1">内存使用情况：free <a class="header-anchor" href="#内存使用情况-free" aria-label="Permalink to &quot;内存使用情况：free&quot;">​</a></h2><p>free命令可以显示系统的内存使用情况，包括物理内存、交换分区、缓冲区和缓存等</p><ul><li>-h：以人类可读的格式显示信息，如KB、MB、GB等</li><li>-m：以MB为单位显示信息</li><li>-g：以GB为单位显示信息</li><li>-t：显示总计信息</li></ul><h3 id="示例-1" tabindex="-1">示例 <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>查看内存使用MB单位</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">free</span><span style="color:#D19A66;"> -m</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="磁盘使用情况-df" tabindex="-1">磁盘使用情况： df <a class="header-anchor" href="#磁盘使用情况-df" aria-label="Permalink to &quot;磁盘使用情况： df&quot;">​</a></h2><p>df命令可以显示系统的磁盘使用情况，包括总容量、已用空间、可用空间、使用百分比等</p><ul><li>-h：以人类可读的格式显示信息，如KB、MB、GB等</li><li>-m：以MB为单位显示信息</li><li>-g：以GB为单位显示信息</li><li>-T：显示文件系统类型</li><li>-a：显示所有文件系统，包括特殊的</li><li>&lt; directory &gt;：只显示指定目录所在的文件系统</li></ul><h3 id="示例-2" tabindex="-1">示例 <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">df</span><span style="color:#D19A66;"> -hT</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="日志查看-tail" tabindex="-1">日志查看：tail <a class="header-anchor" href="#日志查看-tail" aria-label="Permalink to &quot;日志查看：tail&quot;">​</a></h2><p>命令格式: tail [必要参数] [选择参数] [文件]</p><ul><li>-f 循环读取</li><li>-q 不显示处理信息</li><li>-v 显示详细的处理信息</li><li>-c&lt;数目&gt; 显示的字节数</li><li>-n&lt;行数&gt; 显示行数</li><li>-q 从不输出给出文件名的首部</li><li>-s 与-f合用,表示在每次反复的间隔休眠S秒</li></ul><h3 id="示例-3" tabindex="-1">示例 <a class="header-anchor" href="#示例-3" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>循环实时查看最后100行记录(最常用的)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">tail</span><span style="color:#D19A66;"> -fn</span><span style="color:#D19A66;"> 100</span><span style="color:#98C379;"> catalina.out</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="查看登陆日志-last" tabindex="-1">查看登陆日志: last <a class="header-anchor" href="#查看登陆日志-last" aria-label="Permalink to &quot;查看登陆日志: last&quot;">​</a></h2><p>last可以查看所有用户的登陆信息</p><ul><li>-num 显示最近num次登陆信息</li></ul><p>lastlog可以查看所有用户的最后一次登陆信息</p><h3 id="示例-4" tabindex="-1">示例 <a class="header-anchor" href="#示例-4" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>查看最近10次登陆信息</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">last</span><span style="color:#D19A66;"> -10</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="网络相关信息-netstat" tabindex="-1">网络相关信息：netstat <a class="header-anchor" href="#网络相关信息-netstat" aria-label="Permalink to &quot;网络相关信息：netstat&quot;">​</a></h2><p>netstat可以显示活动的TCP\\UDP连接、监听的端口、路由表、接口统计、多播成员等</p><ul><li>-a：显示所有活动的TCP连接和监听的TCP和UDP端口</li><li>-n：显示数字形式的地址和端口号，而不是尝试解析主机名。</li><li>-p：只显示指定协议的连接。协议可以是tcp, udp, tcpv6, 或 udpv6。如果这个参数和-s一起使用来显示协议统计信息，协议可以是tcp, udp, icmp, ip, tcpv6, udpv6, icmpv6, 或 ipv6。</li><li>-r：显示IP路由表。这相当于route print命令。</li><li>-t：显示当前tcp连接状态。</li><li>&lt; interval&gt;：每隔指定的秒数重新显示选定的信息。按CTRL+C停止重新显示。如果省略这个参数，命令只会打印一次选定的信息。</li></ul><h3 id="示例-5" tabindex="-1">示例 <a class="header-anchor" href="#示例-5" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>查看本机监听端口</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">netstat</span><span style="color:#D19A66;"> -tln</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="查看登陆失败记录" tabindex="-1">查看登陆失败记录 <a class="header-anchor" href="#查看登陆失败记录" aria-label="Permalink to &quot;查看登陆失败记录&quot;">​</a></h2><p>快捷命令</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">cat</span><span style="color:#98C379;"> /var/log/secure </span><span style="color:#ABB2BF;">| </span><span style="color:#61AFEF;">awk</span><span style="color:#98C379;"> &#39;/Failed/{print $(NF-3)}&#39;</span><span style="color:#ABB2BF;"> | </span><span style="color:#61AFEF;">sort</span><span style="color:#ABB2BF;"> | </span><span style="color:#61AFEF;">uniq</span><span style="color:#D19A66;"> -c</span><span style="color:#ABB2BF;"> | </span><span style="color:#61AFEF;">awk</span><span style="color:#98C379;"> &#39;{print $2&quot; = &quot;$1;}&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',40),t=[i];function o(r,p,c,d,u,h){return l(),s("div",null,t)}const v=a(n,[["render",o]]);export{m as __pageData,v as default};
