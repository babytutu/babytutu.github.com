import{_ as o,r as c,o as l,c as p,b as n,a as t,f as a,e as s}from"./app.c90e916d.js";const i={},r=a('<h1 id="nginx-\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#nginx-\u5165\u95E8" aria-hidden="true">#</a> Nginx \u5165\u95E8</h1><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><h3 id="windows-\u4E0B\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#windows-\u4E0B\u5B89\u88C5" aria-hidden="true">#</a> Windows \u4E0B\u5B89\u88C5</h3>',3),d={href:"http://nginx.org/en/docs/windows.html",target:"_blank",rel:"noopener noreferrer"},u=s("\u5B89\u88C5\u6587\u6863"),g=a(`<p>http://nginx.org/en/download.html</p><p>\u4E0B\u8F7Dwindow\u5B89\u88C5\u5305</p><p>\u4EE5c\u76D8\u4E3A\u4F8B\uFF0C\u89E3\u538B\u5230<code>nginx-1.21.6</code>\uFF0C\u8FDB\u5165\u6587\u4EF6\u5939\uFF0C<code>start nginx</code>\u5373\u53EF\u5F00\u542Fnginx</p><div class="language-text ext-text"><pre class="language-text"><code>cd c:\\
unzip nginx-1.21.6.zip
cd nginx-1.21.6
start nginx
</code></pre></div><h3 id="mac-\u4E0B\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#mac-\u4E0B\u5B89\u88C5" aria-hidden="true">#</a> Mac \u4E0B\u5B89\u88C5</h3>`,5),h=s("\u5F3A\u70C8\u5EFA\u8BAE\u4F7F\u7528"),x={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},k=s("homebrew"),f=a(`<p>\u5B89\u88C5homebrew</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/bin/bash -c <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre></div><p>\u901A\u8FC7homebrew\u5B89\u88C5nginx</p><div class="language-bash ext-sh"><pre class="language-bash"><code>brew <span class="token function">install</span> nginx
</code></pre></div><p>\u5347\u7EA7</p><div class="language-bash ext-sh"><pre class="language-bash"><code>brew upgrade nginx
</code></pre></div><p>\u5220\u9664</p><div class="language-bash ext-sh"><pre class="language-bash"><code>brew uninstall nginx
</code></pre></div><p>\u83B7\u53D6\u5B89\u88C5\u4FE1\u606F</p><div class="language-bash ext-sh"><pre class="language-bash"><code>brew info nginx
</code></pre></div><p>\u7ED3\u679C\u793A\u4F8B</p><div class="language-text ext-text"><pre class="language-text"><code>nginx: stable 1.19.2 (bottled), HEAD
HTTP(S) server and reverse proxy, and IMAP/POP3 proxy server
https://nginx.org/
/usr/local/Cellar/nginx/1.19.2 (11 files, 2.2MB) *
Built from source on 2022-03-21 at 11:32:20
</code></pre></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u6B64\u4E3Amac\u4E0B\u8DEF\u5F84</p><ul><li><p>\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\uFF1A/usr/local/etc/nginx/nginx.conf</p></li><li><p>\u5B89\u88C5\u8DEF\u5F84\uFF1A/usr/local/Cellar/nginx/1.19.2</p></li><li><p>\u670D\u52A1\u5668\u9ED8\u8BA4\u8DEF\u5F84\uFF1A/usr/local/var/www</p></li><li><p>\u65E5\u5FD7\u8DEF\u5F84\uFF1A/usr/local/var/log</p></li></ul><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><p>\u6267\u884C<code>nginx -h</code>\u83B7\u53D6\u547D\u4EE4\u5408\u96C6</p><div class="language-text ext-text"><pre class="language-text"><code>nginx version: nginx/1.19.2
Usage: nginx [-?hvVtTq] [-s signal] [-c filename] [-p prefix] [-g directives]

Options:
  -?,-h         : this help
  -v            : show version and exit
  -V            : show version and configure options then exit
  -t            : test configuration and exit
  -T            : test configuration, dump it and exit
  -q            : suppress non-error messages during configuration testing
  -s signal     : send signal to a master process: stop, quit, reopen, reload
  -p prefix     : set prefix path (default: /usr/local/Cellar/nginx/1.19.2/)
  -c filename   : set configuration file (default: /usr/local/etc/nginx/nginx.conf)
  -g directives : set global directives out of configuration file

</code></pre></div><h3 id="\u67E5\u770B\u57FA\u672C\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u57FA\u672C\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u57FA\u672C\u4FE1\u606F</h3><p>\u83B7\u53D6\u7248\u672C\u4FE1\u606F</p><div class="language-bash ext-sh"><pre class="language-bash"><code>nginx -v
// nginx version: nginx/1.19.2
</code></pre></div><h3 id="\u9A8C\u8BC1\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u9A8C\u8BC1\u914D\u7F6E\u6587\u4EF6</h3><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u540E\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6821\u9A8C\u51C6\u786E\u6027</p><div class="language-bash ext-sh"><pre class="language-bash"><code>nginx -t
// nginx: the configuration <span class="token function">file</span> /usr/local/etc/nginx/nginx.conf syntax is ok
// nginx: configuration <span class="token function">file</span> /usr/local/etc/nginx/nginx.conf <span class="token builtin class-name">test</span> is successful
</code></pre></div><h3 id="\u6267\u884C\u6307\u5B9A\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u6307\u5B9A\u547D\u4EE4" aria-hidden="true">#</a> \u6267\u884C\u6307\u5B9A\u547D\u4EE4</h3><p>stop, quit, reopen, reload</p><div class="language-bash ext-sh"><pre class="language-bash"><code>// \u542F\u52A8
nginx
// \u5FEB\u901F\u5173\u95ED
nginx -s stop
// \u8BF7\u6C42\u5904\u7406\u5B8C\u6210\u540E\u5173\u95ED
nginx -s quit
// \u91CD\u65B0\u6253\u5F00\u65E5\u5FD7\u6587\u4EF6
nginx -s reopen
// \u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6
nginx -s reload
</code></pre></div><h3 id="\u4F7F\u7528\u6307\u5B9A\u7684\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6307\u5B9A\u7684\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u6307\u5B9A\u7684\u914D\u7F6E\u6587\u4EF6</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>nginx -c /path/xxx.conf
</code></pre></div><h2 id="\u865A\u62DF\u4E3B\u673A" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u4E3B\u673A" aria-hidden="true">#</a> \u865A\u62DF\u4E3B\u673A</h2><p>\u7AEF\u53E3\u53F7 8081\uFF0C\u9ED8\u8BA4\u9996\u9875 index.html</p><div class="language-text ext-text"><pre class="language-text"><code>server {
  listen       8081;
  server_name  localhost;

  location / {
    root   html;
    index  index.html index.htm;
  }
}
</code></pre></div><h2 id="nginx-\u9632\u76D7\u94FE" tabindex="-1"><a class="header-anchor" href="#nginx-\u9632\u76D7\u94FE" aria-hidden="true">#</a> nginx \u9632\u76D7\u94FE</h2><p>\u8BBE\u7F6E valid_referers</p><div class="language-text ext-text"><pre class="language-text"><code>location ~* \\.(gif|jpg|png|swf|js)$ {
  valid_referers 127.0.0.1;
  if ($invalid_referer) {
    return 404;
  }
  root  /usr/local/etc/nginx/test;
}


location / {
  root   /usr/local/etc/nginx/test;
  index  index.html index.htm;
}
</code></pre></div><h3 id="\u9A8C\u8BC1\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u7ED3\u679C" aria-hidden="true">#</a> \u9A8C\u8BC1\u7ED3\u679C</h3><p>\u76F4\u63A5\u8BBF\u95EE\u6587\u4EF6\uFF0C\u8FD4\u56DE 404</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -I http://127.0.0.1:8081/js/test.js
// <span class="token number">404</span>
</code></pre></div><p>\u6DFB\u52A0 referer \u540E\u8BBF\u95EE\uFF0C\u8FD4\u56DE 200</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -I http://127.0.0.1:8081/js/test.js -e <span class="token string">&quot;http://127.0.0.1&quot;</span>
// <span class="token number">200</span>
</code></pre></div><h2 id="\u5339\u914D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u5339\u914D\u89C4\u5219" aria-hidden="true">#</a> \u5339\u914D\u89C4\u5219</h2><p>= \u8868\u793A\u7CBE\u786E\u5339\u914D</p><p>^~ \u8868\u793A uri \u4EE5\u67D0\u4E2A\u5B57\u7B26\u4E32\u5F00\u5934</p><p>~ \u6B63\u5219\u5339\u914D(\u533A\u5206\u5927\u5C0F\u5199)</p><p>~* \u6B63\u5219\u5339\u914D(\u4E0D\u533A\u5206\u5927\u5C0F\u5199) !~\u548C!~*\u5206\u522B\u4E3A\u533A\u5206\u5927\u5C0F\u5199\u4E0D\u5339\u914D\u53CA\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u4E0D\u5339\u914D\u7684\u6B63\u5219</p><p>/ \u4EFB\u4F55\u8BF7\u6C42\u90FD\u4F1A\u5339\u914D</p><p>\u5339\u914D\u4F18\u5148\u7EA7\uFF1A</p><p>= &gt; ^~ &gt; /</p><h3 id="\u7981\u6B62\u8BBF\u95EE\u67D0\u4E9B\u540E\u7F00\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7981\u6B62\u8BBF\u95EE\u67D0\u4E9B\u540E\u7F00\u6587\u4EF6" aria-hidden="true">#</a> \u7981\u6B62\u8BBF\u95EE\u67D0\u4E9B\u540E\u7F00\u6587\u4EF6</h3><div class="language-conf ext-conf"><pre class="language-conf"><code>location ~ \\.(js|txt)$ {
  deny all;
}
</code></pre></div><h3 id="\u7981\u6B62\u8BBF\u95EE\u76EE\u5F55\u6216\u76EE\u5F55\u4E0B\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7981\u6B62\u8BBF\u95EE\u76EE\u5F55\u6216\u76EE\u5F55\u4E0B\u6587\u4EF6" aria-hidden="true">#</a> \u7981\u6B62\u8BBF\u95EE\u76EE\u5F55\u6216\u76EE\u5F55\u4E0B\u6587\u4EF6</h3><div class="language-text ext-text"><pre class="language-text"><code>// \u7981\u6B62\u8BBF\u95EE\u76EE\u5F55
location ^~ /js/ {
  deny all;
}

// \u7981\u6B62\u8BBF\u95EE\u76EE\u5F55\u4E0B\u6587\u4EF6
location ^~ /js {
  deny all;
}
</code></pre></div><h3 id="\u7981\u6B62\u76F4\u63A5\u8BBF\u95EE\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7981\u6B62\u76F4\u63A5\u8BBF\u95EE\u6587\u4EF6" aria-hidden="true">#</a> \u7981\u6B62\u76F4\u63A5\u8BBF\u95EE\u6587\u4EF6</h3><p>\u76F4\u63A5\u8BBF\u95EE\u6587\u4EF6\u7684<code>referer</code>\u4E3A\u7A7A\u3002\u901A\u8FC7 html \u53BB\u52A0\u8F7D js \u4F1A\u6709<code>referer</code>\uFF0C\u8BBE\u7F6E\u767D\u540D\u5355\u540E\u53EF\u4FDD\u8BC1\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u6587\u4EF6</p><div class="language-text ext-text"><pre class="language-text"><code>location ^~ /js/ {
  valid_referers localhost 127.0.0.1;
  if ($invalid_referer) {
    return 404;
  }
  root   /usr/local/etc/nginx/test;
}
</code></pre></div><h2 id="\u672C\u5730\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u6D4B\u8BD5" aria-hidden="true">#</a> \u672C\u5730\u6D4B\u8BD5</h2><p>\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50</p><p>/usr/local/etc/nginx</p><p>nginx\u9ED8\u8BA4\u8DEF\u5F84\u65B0\u589E<code>test</code>\u6587\u4EF6\u5939</p><p>\u6587\u4EF6\u5939\u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text"><pre class="language-text"><code>.
\u251C\u2500\u2500 index.html
\u2514\u2500\u2500 js
    \u2514\u2500\u2500 test.js

1 directory, 2 files
</code></pre></div><details class="custom-container details"><summary>index.html</summary><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js/test.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  Hello!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><details class="custom-container details"><summary>test.js</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;test.js\u52A0\u8F7D\u6210\u529F&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></details><p>/usr/local/etc/nginx/nginx.conf</p><p><code>http</code>\u5185\u90E8\u65B0\u589E\u4E00\u4E2A<code>server</code>\uFF0C\u5B9E\u73B0\u4EE5\u4E0B\u529F\u80FD</p><ul><li>\u7AEF\u53E3\u53F78081</li><li>\u65E5\u5FD7\u8DEF\u5F84<code>/usr/local/Cellar/nginx/1.19.2/logs/test.access.log</code></li><li>\u8DEF\u5F84\u914D\u7F6E\u5230<code>test</code>\u6587\u4EF6\u5939</li><li>js\u76EE\u5F55\u4E0B\u6587\u4EF6\u65E0\u6CD5\u5728\u6D4F\u89C8\u5668\u4E2D\u76F4\u63A5\u8BBF\u95EE</li><li>\u9759\u6001\u8D44\u6E90\u4E0D\u7F13\u5B58\uFF0C\u66F4\u6539\u4EE3\u7801\u540E\u5237\u65B0\u5373\u53EF\u751F\u6548</li></ul><details class="custom-container details"><summary>nginx.conf server\u90E8\u5206</summary><div class="language-conf ext-conf"><pre class="language-conf"><code># \u6D4B\u8BD5nginx\u529F\u80FD
    server {
        listen       8081;
        server_name  localhost;

        access_log  logs/test.access.log  main;

        location / {
            # \u8BBE\u7F6E\u4E0D\u7F13\u5B58
            add_header Cache-Control no-cache;

            root   /usr/local/etc/nginx/test;
            index  index.html index.htm;
        }

        location ^~ /js/ {
            # \u8BBE\u7F6E\u767D\u540D\u5355
            valid_referers localhost 127.0.0.1 10.0.7.31;
            # \u8BBE\u7F6E\u65E0\u6CD5\u76F4\u63A5\u901A\u8FC7url\u6253\u5F00\u6587\u4EF6
            if ($invalid_referer) {
                return 404;
            }
            root   /usr/local/etc/nginx/test;
        }
    }
</code></pre></div></details><h3 id="\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE" aria-hidden="true">#</a> \u8BBF\u95EE</h3><p>\u6D4F\u89C8\u5668\u8BBF\u95EE<code>http://localhost:8081/</code>\uFF0C\u9875\u9762\u5C55\u793A</p><div class="language-text ext-text"><pre class="language-text"><code>Hello! test.js\u52A0\u8F7D\u6210\u529F
</code></pre></div><p>\u6D4F\u89C8\u5668\u8BBF\u95EE<code>http://localhost:8081/js/test.js</code>\uFF0C\u9875\u9762<code>404 Not Found</code></p><h3 id="\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7" aria-hidden="true">#</a> \u65E5\u5FD7</h3><div class="language-text ext-text"><pre class="language-text"><code>127.0.0.1 - - [21/Mar/2022:16:32:33 +0800] &quot;GET /js/test.js HTTP/1.1&quot; 200 77 &quot;http://localhost:8081/&quot; &quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36&quot;
127.0.0.1 - - [21/Mar/2022:16:35:55 +0800] &quot;GET /js/test.js HTTP/1.1&quot; 404 555 &quot;-&quot; &quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36&quot;
</code></pre></div><h2 id="\u8BBE\u7F6E\u8F6F\u94FE" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u8F6F\u94FE" aria-hidden="true">#</a> \u8BBE\u7F6E\u8F6F\u94FE</h2><p>\u901A\u8FC7<code>ln -sf \u6765\u6E90 \u6307\u5411</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">ln</span> -sf /Users/tutu/Downloads/code/test /usr/local/etc/nginx/test
</code></pre></div><p>\u8FDB\u5165/usr/local/etc/nginx\uFF0C\u6267\u884Cll</p><p>\u51FA\u73B01\u4E2Atest\uFF0C\u88AB\u8F6F\u94FE\u5230\u4E86/Users/tutu/Downloads/code/test</p><div class="language-text ext-text"><pre class="language-text"><code>test -&gt; /Users/tutu/Downloads/code/test
</code></pre></div><p>\u518D\u6B21\u8F6F\u94FE\uFF0C\u5B9E\u73B0\u4E8C\u6B21\u6307\u5411\uFF0C\u53EF\u5B9E\u73B0\u4E0D\u6539nginx\u81EA\u7531\u66FF\u6362\u6307\u5411\u76EE\u5F55</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">ln</span> -sf /Users/tutu/Downloads/code/demo /Users/tutu/Downloads/code/test
</code></pre></div><p>\u6700\u7EC8nginx\u7684test\u76EE\u5F55\uFF0C\u5B9E\u9645\u6307\u5411\u7684\u662Fdemo\u76EE\u5F55\uFF0C\u6B64\u539F\u7406\u53EF\u7528\u4E8E\u524D\u7AEF\u90E8\u7F72\uFF0C\u901A\u8FC7\u8F6F\u94FE\u5207\u6362\u6587\u4EF6\u5939\u5B9E\u73B0\u66F4\u65B0\u3002</p>`,82);function v(m,b){const e=c("ExternalLinkIcon");return l(),p("div",null,[r,n("p",null,[n("a",d,[u,t(e)])]),g,n("p",null,[h,n("a",x,[k,t(e)])]),f])}var q=o(i,[["render",v],["__file","nginx.html.vue"]]);export{q as default};
