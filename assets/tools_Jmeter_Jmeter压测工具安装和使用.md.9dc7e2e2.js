import{_ as e,a as r,b as t,c as i,d as p,e as s,f as o,g as l,h as m,i as n,j as h,k as c,l as d,m as g,n as _,o as u,p as b,q as f,r as q,s as j,t as k,u as P,v as x,w as T,x as J,y as v,z as S,A as w,B as C,C as A,D as V,E,F as M,G as z,H as D}from"./chunks/assert.091bef7f.js";import{_ as I,c as $,o as y,V as a,C as G}from"./chunks/framework.58cf79d7.js";const aa=JSON.parse('{"title":"Jmeter压测工具安装和使用","description":"","frontmatter":{},"headers":[],"relativePath":"tools/Jmeter/Jmeter压测工具安装和使用.md","filePath":"tools/Jmeter/Jmeter压测工具安装和使用.md"}'),N={name:"tools/Jmeter/Jmeter压测工具安装和使用.md"},U=a('<h1 id="jmeter压测工具安装和使用" tabindex="-1">Jmeter压测工具安装和使用 <a class="header-anchor" href="#jmeter压测工具安装和使用" aria-label="Permalink to &quot;Jmeter压测工具安装和使用&quot;">​</a></h1><h2 id="安装jdk" tabindex="-1">安装jdk <a class="header-anchor" href="#安装jdk" aria-label="Permalink to &quot;安装jdk&quot;">​</a></h2><p>进入官网下载jdk1.8-mac <a href="https://www.oracle.com/java/technologies/downloads/#jdk18-mac" target="_blank" rel="noreferrer">https://www.oracle.com/java/technologies/downloads/#jdk18-mac</a></p><p>选择Java SE Development Kit 8u333下载，下载后安装即可</p><p><img src="'+e+'" alt="img"></p><p>在终端（terminal）输入java -version查看本机JDK版本</p><p><img src="'+r+'" alt="img"></p><h2 id="安装jmeter" tabindex="-1">安装Jmeter <a class="header-anchor" href="#安装jmeter" aria-label="Permalink to &quot;安装Jmeter&quot;">​</a></h2><p>进入官网下载 <a href="https://jmeter.apache.org/download_jmeter.cgi" target="_blank" rel="noreferrer">https://jmeter.apache.org/download_jmeter.cgi</a></p><p><img src="'+t+'" alt="img"></p><p>解压后进入目录/apache-jmeter-5.5/bin，双击ApacheJMeter.jar即可运行，可制作1个替身放到应用程序</p><p>需要调整配置参数解决中文乱码问题，修改文件/apache-jmeter-5.5/bin/jmeter.properties</p><p>查找sampleresult.default.encoding（默认的编码格式），此参数默认注释，调整为UTF-8</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sampleresult.default.encoding=UTF-8</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改配置后重启即可生效</p><h2 id="设置测试计划" tabindex="-1">设置测试计划 <a class="header-anchor" href="#设置测试计划" aria-label="Permalink to &quot;设置测试计划&quot;">​</a></h2><h3 id="设置请求头" tabindex="-1">设置请求头 <a class="header-anchor" href="#设置请求头" aria-label="Permalink to &quot;设置请求头&quot;">​</a></h3><p><img src="'+i+'" alt="img"></p><p>常用请求头Content-Type: application/json;charset=UTF-8</p><h3 id="添加变量" tabindex="-1">添加变量 <a class="header-anchor" href="#添加变量" aria-label="Permalink to &quot;添加变量&quot;">​</a></h3><p><img src="'+p+'" alt="img"></p><p>一般会对接口的ip和port做变量定义方便使用</p><p><img src="'+s+'" alt="img"></p>',23),B=G("p",{名称:""},"使用时用$",-1),F=a('<h3 id="新建线程组" tabindex="-1">新建线程组 <a class="header-anchor" href="#新建线程组" aria-label="Permalink to &quot;新建线程组&quot;">​</a></h3><p><img src="'+o+'" alt="img"></p><p>配置线程组</p><p>假设要在5秒内新建10个线程</p><p><img src="'+l+'" alt="img"></p><h3 id="新建http请求" tabindex="-1">新建http请求 <a class="header-anchor" href="#新建http请求" aria-label="Permalink to &quot;新建http请求&quot;">​</a></h3><p><img src="'+m+'" alt="img"></p><p>编辑接口信息，以登陆接口为例，使用了之前定义的变量，接口传参通过消息体数据填写</p><p><img src="'+n+'" alt="img"></p><h3 id="添加查看结果树" tabindex="-1">添加查看结果树 <a class="header-anchor" href="#添加查看结果树" aria-label="Permalink to &quot;添加查看结果树&quot;">​</a></h3><p><img src="'+h+'" alt="img"></p><h3 id="添加汇总报告" tabindex="-1">添加汇总报告 <a class="header-anchor" href="#添加汇总报告" aria-label="Permalink to &quot;添加汇总报告&quot;">​</a></h3><p><img src="'+c+'" alt="img"></p><h3 id="添加响应时间图" tabindex="-1">添加响应时间图 <a class="header-anchor" href="#添加响应时间图" aria-label="Permalink to &quot;添加响应时间图&quot;">​</a></h3><p><img src="'+d+'" alt="img"></p><p>需要对图表进行简单配置，如时间间隔，可配置的再小一些，如1000</p><p><img src="'+g+'" alt="img"></p><h2 id="开始测试" tabindex="-1">开始测试 <a class="header-anchor" href="#开始测试" aria-label="Permalink to &quot;开始测试&quot;">​</a></h2><p>点击绿色箭头开始测试，根据线程组配置，5秒内10个线程请求登陆接口</p><p><img src="'+_+'" alt="img"></p><p>运行过程中绿色箭头置灰，可点击stop按钮暂停测试或关闭按钮停止测试，测试完成后绿色箭头恢复可点击</p><p><img src="'+u+'" alt="img"></p><p>可以看到10次接口调用都成功返回，再查看汇总报告</p><p><img src="'+b+'" alt="img"></p><p>可通过图形更直观的看到实际执行的结果</p><p><img src="'+f+'" alt="img"></p><h2 id="进阶使用" tabindex="-1">进阶使用 <a class="header-anchor" href="#进阶使用" aria-label="Permalink to &quot;进阶使用&quot;">​</a></h2><h3 id="接口结果传递" tabindex="-1">接口结果传递 <a class="header-anchor" href="#接口结果传递" aria-label="Permalink to &quot;接口结果传递&quot;">​</a></h3><p>正常业务场景，需要在登陆后获取登陆接口返回的票据，再后续接口请求头中都需要增加票据来实现权限认证，那么需要对登陆接口增加后置处理器</p><p><img src="'+q+'" alt="img"></p><h3 id="获取接口返回的票据并添加为变量" tabindex="-1">获取接口返回的票据并添加为变量 <a class="header-anchor" href="#获取接口返回的票据并添加为变量" aria-label="Permalink to &quot;获取接口返回的票据并添加为变量&quot;">​</a></h3><p><img src="'+j+'" alt="img"></p><h3 id="在http信息头管理器中添加票据" tabindex="-1">在HTTP信息头管理器中添加票据 <a class="header-anchor" href="#在http信息头管理器中添加票据" aria-label="Permalink to &quot;在HTTP信息头管理器中添加票据&quot;">​</a></h3><p><img src="'+k+'" alt="img"></p><h3 id="验证请求头" tabindex="-1">验证请求头 <a class="header-anchor" href="#验证请求头" aria-label="Permalink to &quot;验证请求头&quot;">​</a></h3><p>新增一个http请求</p><p><img src="'+P+'" alt="img"></p><p>再次点击测试后查看结果树，请求-请求头，可以看到请求头中已经有了票据</p><p><img src="'+x+'" alt="img"></p><h2 id="安装插件" tabindex="-1">安装插件 <a class="header-anchor" href="#安装插件" aria-label="Permalink to &quot;安装插件&quot;">​</a></h2><p>为了更好的使用工具，需要安装插件，首先需要安装jar包，然后安装说明放入指定目录后重启生效</p><p><a href="https://jmeter-plugins.org/install/Install/" target="_blank" rel="noreferrer">https://jmeter-plugins.org/install/Install/</a></p><p><img src="'+T+'" alt="img"></p><p><img src="'+J+'" alt="img"></p><p>插件包可能安装失败，可以直接下载插件包 <a href="https://jmeter-plugins.org/downloads/old/" target="_blank" rel="noreferrer">https://jmeter-plugins.org/downloads/old/</a></p><p>JMeterPlugins-Standard-1.4.0.zip <a href="https://jmeter-plugins.org/downloads/file/JMeterPlugins-Standard-1.4.0.zip" target="_blank" rel="noreferrer">https://jmeter-plugins.org/downloads/file/JMeterPlugins-Standard-1.4.0.zip</a></p><p>JMeterPlugins-Extras-1.4.0.zip <a href="https://jmeter-plugins.org/downloads/file/JMeterPlugins-Extras-1.4.0.zip" target="_blank" rel="noreferrer">https://jmeter-plugins.org/downloads/file/JMeterPlugins-Extras-1.4.0.zip</a></p><p>解压后分别把/lib/ext中的JMeterPlugins-Extras.jar和JMeterPlugins-Standard.jar拷贝到/apache-jmeter-5.5/lib/ext目录，重启Jmeter就可以看到插件</p><h2 id="其他压测方式" tabindex="-1">其他压测方式 <a class="header-anchor" href="#其他压测方式" aria-label="Permalink to &quot;其他压测方式&quot;">​</a></h2><p>通过新增不同的线程组来实现</p><h3 id="jp-gc-stepping-thread-group" tabindex="-1">jp@gc - Stepping Thread Group <a class="header-anchor" href="#jp-gc-stepping-thread-group" aria-label="Permalink to &quot;jp@gc - Stepping Thread Group&quot;">​</a></h3><p><img src="'+v+'" alt="img"></p><p>配置参数，使线程可促次递增</p><p><img src="'+S+'" alt="img"></p><p>同时配置jp@gc - Transactions per Second和jp@gc - Active Threads Over Time和jp@gc - Response Times Over Time来观察数据变化</p><p><img src="'+w+'" alt="img"></p><p><img src="'+C+'" alt="img"></p><p><img src="'+A+'" alt="img"></p><h3 id="jp-gc-ultimate-thread-group" tabindex="-1">jp@gc - Ultimate Thread Group <a class="header-anchor" href="#jp-gc-ultimate-thread-group" aria-label="Permalink to &quot;jp@gc - Ultimate Thread Group&quot;">​</a></h3><p>配置更自由</p><p><img src="'+V+'" alt="img"></p><h2 id="测试场景" tabindex="-1">测试场景 <a class="header-anchor" href="#测试场景" aria-label="Permalink to &quot;测试场景&quot;">​</a></h2><p>多用户登陆</p><h3 id="计数器" tabindex="-1">计数器 <a class="header-anchor" href="#计数器" aria-label="Permalink to &quot;计数器&quot;">​</a></h3><p>如果变量是规律的数字，添加-配置元件-计数器</p><p><img src="'+E+'" alt="img"></p><p>可在接口传参中使用变量${userId}实现参数时从1001自动加1</p><h3 id="csv-数据文件设置" tabindex="-1">CSV 数据文件设置 <a class="header-anchor" href="#csv-数据文件设置" aria-label="Permalink to &quot;CSV 数据文件设置&quot;">​</a></h3><p>把用户账号和密码写入csv文件</p><p>添加-配置元件-CSV 数据文件设置</p><p><img src="'+M+'" alt="img"></p><p>接口请求时，用户名和密码使用变量</p><p><img src="'+z+'" alt="img"></p><h3 id="断言" tabindex="-1">断言 <a class="header-anchor" href="#断言" aria-label="Permalink to &quot;断言&quot;">​</a></h3><p>可对接口返回增加断言，一般对相应结果内容做判断</p><p><img src="'+D+'" alt="img"></p>',76),H=[U,B,F];function O(R,K,L,Q,W,X){return y(),$("div",null,H)}const ea=I(N,[["render",O]]);export{aa as __pageData,ea as default};
