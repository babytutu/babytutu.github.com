import{_ as t,r as c,o as p,c as r,b as n,a as e,f as a,e as o}from"./app.c90e916d.js";const l={},d=a('<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="\u5B89\u88C5docker-desktop" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5docker-desktop" aria-hidden="true">#</a> \u5B89\u88C5Docker Desktop</h2><h3 id="\u4E0B\u8F7D\u5B89\u88C5\u5305" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u5B89\u88C5\u5305" aria-hidden="true">#</a> \u4E0B\u8F7D\u5B89\u88C5\u5305</h3>',3),i={href:"https://www.docker.com/products/docker-desktop",target:"_blank",rel:"noopener noreferrer"},k=o("\u5B98\u7F51\u4E0B\u8F7D\u5B89\u88C5\u5305"),u=a(`<h3 id="\u6362\u6E90" tabindex="-1"><a class="header-anchor" href="#\u6362\u6E90" aria-hidden="true">#</a> \u6362\u6E90</h3><p>\u9996\u5148,\u6211\u4EEC\u6253\u5F00Docker\u7684\u8BBE\u7F6E\uFF0C\u9009\u62E9Docker Engine\uFF0C\u8BBE\u7F6Edocker\u955C\u50CF\u6E90</p><h4 id="\u56FD\u5185docker\u955C\u50CF\u6E90" tabindex="-1"><a class="header-anchor" href="#\u56FD\u5185docker\u955C\u50CF\u6E90" aria-hidden="true">#</a> \u56FD\u5185docker\u955C\u50CF\u6E90</h4><ul><li>azure - http://dockerhub.azk8s.cn</li><li>tencent - https://mirror.ccs.tencentyun.com</li><li>daocloud - http://f1361db2.m.daocloud.io</li><li>netease - http://hub-mirror.c.163.com</li><li>ustc - https://docker.mirrors.ustc.edu.cn</li><li>aliyun - https://2h3po24q.mirror.aliyuncs.com</li></ul><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://docker.mirrors.ustc.edu.cn&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;insecure-registries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;debug&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="docker\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#docker\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> Docker\u57FA\u7840\u4F7F\u7528</h2><h3 id="\u5B98\u65B9\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B98\u65B9\u793A\u4F8B" aria-hidden="true">#</a> \u5B98\u65B9\u793A\u4F8B</h3><p>\u5165\u95E8\u6559\u7A0B\uFF0C\u5168\u81EA\u52A8\u751F\u6210\u672C\u5730\u5B66\u4E60docker\u7F51\u7AD9</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> run -d -p <span class="token number">80</span>:80 docker/getting-started
</code></pre></div><h3 id="\u5BF9docker\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5BF9docker\u64CD\u4F5C" aria-hidden="true">#</a> \u5BF9Docker\u64CD\u4F5C</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8</span>
<span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> start
<span class="token comment"># \u91CD\u542F</span>
<span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> restart
<span class="token comment"># \u505C\u6B62</span>
<span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> stop
</code></pre></div><h3 id="\u5BF9\u955C\u50CF\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u955C\u50CF\u64CD\u4F5C" aria-hidden="true">#</a> \u5BF9\u955C\u50CF\u64CD\u4F5C</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u83B7\u53D6\u955C\u50CF\u5217\u8868</span>
<span class="token function">docker</span> images
<span class="token comment"># \u62C9\u53D6\u955C\u50CF</span>
<span class="token function">docker</span> pull \u955C\u50CF\u540D\u79F0
<span class="token comment"># \u5220\u9664\u955C\u50CF</span>
<span class="token function">docker</span> rmi \u955C\u50CF\u540D\u79F0
<span class="token comment"># \u52A0\u8F7D\u955C\u50CF</span>
<span class="token function">docker</span> run \u955C\u50CF\u540D\u79F0
<span class="token comment"># \u6253\u5305\u955C\u50CF</span>
<span class="token function">docker</span> build -t \u955C\u50CF\u540D\u79F0 \u8DEF\u5F84
</code></pre></div><h3 id="\u5BF9\u5BB9\u5668\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u5BB9\u5668\u64CD\u4F5C" aria-hidden="true">#</a> \u5BF9\u5BB9\u5668\u64CD\u4F5C</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">ps</span>
<span class="token comment"># \u542F\u52A8\u5BB9\u5668</span>
<span class="token function">docker</span> start \u5BB9\u5668\u540D\u6216id
<span class="token comment"># \u505C\u6B62\u5BB9\u5668</span>
<span class="token function">docker</span> stop \u5BB9\u5668\u540D\u6216id
<span class="token comment"># \u5F3A\u5236\u5173\u95ED\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">kill</span> \u5BB9\u5668\u540D\u6216id
<span class="token comment"># \u5220\u9664\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">rm</span> \u5BB9\u5668\u540D\u6216id
</code></pre></div><h3 id="\u5BB9\u5668\u5236\u4F5C\u6210\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u5236\u4F5C\u6210\u955C\u50CF" aria-hidden="true">#</a> \u5BB9\u5668\u5236\u4F5C\u6210\u955C\u50CF</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5BB9\u5668\u505A\u6210\u955C\u50CF</span>
<span class="token function">docker</span> commit \u5BB9\u5668\u540D \u955C\u50CF\u540D
<span class="token comment"># \u955C\u50CF\u6253\u5305\u5907\u4EFD</span>
<span class="token function">docker</span> save -o \u4FDD\u5B58\u7684\u6587\u4EF6\u540D \u955C\u50CF\u540D
<span class="token comment"># \u955C\u50CF\u89E3\u538B</span>
<span class="token function">docker</span> load -i \u6587\u4EF6\u8DEF\u5F84/\u5907\u4EFD\u6587\u4EF6
</code></pre></div><h2 id="\u4F7F\u7528dockerfile\u90E8\u7F72\u9759\u6001\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528dockerfile\u90E8\u7F72\u9759\u6001\u6587\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528Dockerfile\u90E8\u7F72\u9759\u6001\u6587\u4EF6</h2><p>\u5982\uFF1A\u628Avue\u7F16\u8BD1\u4EA7\u51FA\u7684\u4EE3\u7801\uFF08dist\u6587\u4EF6\u5939\uFF09\u6253\u5305\u6210docker\u955C\u50CF\u5E76\u52A0\u8F7D</p><h3 id="\u521B\u5EFAdockerfile" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAdockerfile" aria-hidden="true">#</a> \u521B\u5EFADockerfile</h3><p>\u548Cdist\u6587\u4EF6\u5939\u653E\u5728\u4E00\u8D77</p><div class="language-text ext-text"><pre class="language-text"><code># \u8BBE\u7F6Enginx
FROM nginx:latest
# \u5C06dist\u6587\u4EF6\u5939\u4E2D\u5185\u5BB9\u590D\u5236\u5230 /usr/share/nginx/html \u76EE\u5F55
COPY dist /usr/share/nginx/html
# \u7528\u672C\u5730\u7684default.conf \u914D\u7F6E\u6587\u4EF6\u66FF\u6362nginx\u955C\u50CF\u91CC\u7684\u9ED8\u8BA4\u914D\u7F6E
COPY default.conf /etc/nginx/conf.d/default.conf
</code></pre></div><h3 id="\u521B\u5EFAdefault-conf" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAdefault-conf" aria-hidden="true">#</a> \u521B\u5EFAdefault.conf</h3><p>\u5176\u4E2D\u914D\u7F6E\u76848080\u4F5C\u4E3Adocker\u5185\u90E8\u7684\u7AEF\u53E3\u53F7</p><div class="language-conf ext-conf"><pre class="language-conf"><code>server {
    listen       8080;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        root   /usr/share/nginx/html/;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html/;
    }
}
</code></pre></div><p>\u6253\u5305\u955C\u50CF</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> build -t docker-demo <span class="token builtin class-name">.</span>
</code></pre></div><p>\u52A0\u8F7D\u5BB9\u5668\uFF0C\u7AEF\u53E3\u53F7A:B\uFF0CA\u662F\u672C\u673A\u8BBF\u95EE\u4F7F\u7528\uFF0CB\u662Fdocker\u955C\u50CF\u7AEF\u53E3</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> run -dp <span class="token number">9002</span>:8080 --name docker-demo docker-demo
</code></pre></div><p>\u6253\u5F00\u6D4F\u89C8\u5668\u53EF\u4EE5\u67E5\u770B</p>`,30),h={href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer"},m=o("http://localhost:9002"),g=a(`<h3 id="\u5FEB\u6377\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u6377\u811A\u672C" aria-hidden="true">#</a> \u5FEB\u6377\u811A\u672C</h3><p>clean.sh</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>

<span class="token comment"># \u6267\u884C\u811A\u672C\u9700\u8981\u4F20\u9012\u53C2\u6570\uFF0C\u5BB9\u5668$1\u548C\u955C\u50CF$2,\u53EA\u4F20\u9012\u4E00\u4E2A\u9ED8\u8BA4\u5BB9\u5668\u548C\u955C\u50CF\u540C\u540D</span>
<span class="token assign-left variable">container</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">image</span><span class="token operator">=</span><span class="token variable">$1</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token assign-left variable">image</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6E05\u7406\u53EF\u80FD\u5B58\u5728\u7684\u540C\u540D\u5BB9\u5668<span class="token variable">$container</span> \u548C\u955C\u50CF<span class="token variable">$image</span>&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u505C\u6B62\u5BB9\u5668&quot;</span> <span class="token variable">$container</span>
<span class="token function">docker</span> stop <span class="token variable">$container</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5220\u9664\u5BB9\u5668&quot;</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable">$container</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5220\u9664\u955C\u50CF&quot;</span>
<span class="token function">docker</span> rmi <span class="token variable">$image</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6E05\u7406\u7ED3\u675F&quot;</span>

<span class="token comment"># \u6B63\u5E38\u9000\u51FA\uFF0C\u53EF\u6267\u884C\u540E\u7EED\u64CD\u4F5C</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre></div><h3 id="\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u5E94\u7528\u573A\u666F</h3><p>A\u673A\u751F\u6210\u955C\u50CF\uFF0C\u6253\u5305\u6210tar\u6587\u4EF6\uFF0C\u53D1\u9001\u5230\u670D\u52A1\u5668B\u673A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> build -t docker-demo <span class="token builtin class-name">.</span>
<span class="token function">docker</span> save -o docker-demo.tar docker-demo
</code></pre></div><p>B\u673A\u89E3\u538Btar\u6587\u4EF6\u540E\u52A0\u8F7D\u955C\u50CF</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> load -i ./docker-demo.tar
<span class="token function">docker</span> run -dp <span class="token number">9002</span>:8080 --name docker-demo docker-demo
</code></pre></div><h3 id="\u6574\u5408\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6574\u5408\u547D\u4EE4" aria-hidden="true">#</a> \u6574\u5408\u547D\u4EE4</h3><p>package.json</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;docker-demo&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;docker-demo&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sh clean.sh docker-demo &amp;&amp; docker build -t docker-demo . &amp;&amp; docker run -dp 9002:8080 --name docker-demo docker-demo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;save&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sh clean.sh docker-demo &amp;&amp; docker build -t docker-demo . &amp;&amp; docker save -o docker-demo.tar docker-demo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;load&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sh clean.sh docker-demo &amp;&amp; docker load -i ./docker-demo.tar &amp;&amp; docker run -dp 9002:8080 --name docker-demo docker-demo&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11);function f(b,v){const s=c("ExternalLinkIcon");return p(),r("div",null,[d,n("p",null,[n("a",i,[k,e(s)])]),u,n("p",null,[n("a",h,[m,e(s)])]),g])}var q=t(l,[["render",f],["__file","Docker.html.vue"]]);export{q as default};
