import{_ as e,r as o,o as c,c as l,b as n,a as t,f as s,e as p}from"./app.c90e916d.js";const r={},u=s(`<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1><p>TypeScript for JavaScript Programmers</p><h2 id="types-by-inference" tabindex="-1"><a class="header-anchor" href="#types-by-inference" aria-hidden="true">#</a> Types by Inference</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Hayes&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> user<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Hayes&quot;</span><span class="token punctuation">,</span>
  id<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">UserInfo</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> user1<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="composing-types" tabindex="-1"><a class="header-anchor" href="#composing-types" aria-hidden="true">#</a> Composing Types</h2><p>Unions</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MyBool</span> <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span>
</code></pre></div><p>Generics</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">StringArray</span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">NumberArray</span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">ObjectWithNameArray</span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span>
</code></pre></div><h2 id="structural-type-system" tabindex="-1"><a class="header-anchor" href="#structural-type-system" aria-hidden="true">#</a> Structural Type System</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">logPoint</span><span class="token punctuation">(</span>p<span class="token operator">:</span> Point<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>p<span class="token punctuation">.</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// logs &quot;12, 26&quot;</span>
<span class="token keyword">const</span> point <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">26</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">logPoint</span><span class="token punctuation">(</span>point<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">VirtualPoint</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> newVPoint <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VirtualPoint</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">logPoint</span><span class="token punctuation">(</span>newVPoint<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs &quot;13, 56&quot;</span>
</code></pre></div><h2 id="tsconfig" tabindex="-1"><a class="header-anchor" href="#tsconfig" aria-hidden="true">#</a> TSConfig</h2>`,14),i={href:"https://www.typescriptlang.org/tsconfig",target:"_blank",rel:"noopener noreferrer"},k=p("Intro to the TSConfig Reference"),d=s(`<p>\u76EE\u5F55\u4E2D\u7684 TSConfig \u6587\u4EF6\u8868\u660E\u8BE5\u76EE\u5F55\u662F TypeScript \u6216 JavaScript \u9879\u76EE\u7684\u6839\u76EE\u5F55\u3002 TSConfig \u6587\u4EF6\u53EF\u4EE5\u662F tsconfig.json \u6216 jsconfig.json\uFF0C\u5B83\u4EEC\u7684\u914D\u7F6E\u9879\u548C\u884C\u4E3A\u76F8\u540C\u3002</p><p>Compiler Options</p><p>Top Level</p><ul><li>files</li><li>extends</li><li>include</li><li>exclude</li><li>references</li></ul><h3 id="files-files" tabindex="-1"><a class="header-anchor" href="#files-files" aria-hidden="true">#</a> Files - files</h3><p>Default\uFF1A false</p><p>\u6807\u8BB0\u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u8F83\u5C11\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u914D\u7F6E</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;core.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sys.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;types.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;scanner.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;parser.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;utilities.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;binder.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;checker.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tsc.ts&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="extends-extends" tabindex="-1"><a class="header-anchor" href="#extends-extends" aria-hidden="true">#</a> Extends - extends</h3><p>extends \u7684\u503C\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5176\u4E2D\u5305\u542B\u8981\u7EE7\u627F\u7684\u53E6\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84</p><p>configs/base.json:</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>tsconfig.json:</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./configs/base&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;main.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;supplemental.ts&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="include-include" tabindex="-1"><a class="header-anchor" href="#include-include" aria-hidden="true">#</a> Include - include</h3><p>\u5305\u542B\u7684\u6587\u4EF6\uFF0C\u9ED8\u8BA4[]\u5982\u679Cfiles\u5DF2\u6307\u5B9A</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/**/*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tests/**/*&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5305\u542B\u7684\u6587\u4EF6</p><div class="language-text ext-text"><pre class="language-text"><code>.
\u251C\u2500\u2500 scripts                \u2A2F
\u2502   \u251C\u2500\u2500 lint.ts            \u2A2F
\u2502   \u251C\u2500\u2500 update_deps.ts     \u2A2F
\u2502   \u2514\u2500\u2500 utils.ts           \u2A2F
\u251C\u2500\u2500 src                    \u2713
\u2502   \u251C\u2500\u2500 client             \u2713
\u2502   \u2502    \u251C\u2500\u2500 index.ts      \u2713
\u2502   \u2502    \u2514\u2500\u2500 utils.ts      \u2713
\u2502   \u251C\u2500\u2500 server             \u2713
\u2502   \u2502    \u2514\u2500\u2500 index.ts      \u2713
\u251C\u2500\u2500 tests                  \u2713
\u2502   \u251C\u2500\u2500 app.test.ts        \u2713
\u2502   \u251C\u2500\u2500 utils.ts           \u2713
\u2502   \u2514\u2500\u2500 tests.d.ts         \u2713
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 tsconfig.json
\u2514\u2500\u2500 yarn.lock
</code></pre></div><h3 id="exclude-exclude" tabindex="-1"><a class="header-anchor" href="#exclude-exclude" aria-hidden="true">#</a> Exclude - exclude</h3><p>\u6307\u5B9A\u89E3\u6790\u5305\u542B\u65F6\u5E94\u8DF3\u8FC7\u7684\u6587\u4EF6\u540D\u6216\u6A21\u5F0F\u6570\u7EC4\uFF0C\u4E00\u822C\u4E0D\u7528\u8BBE\u7F6E</p><p>Default: node_modules,bower_compon</p><h3 id="references-references" tabindex="-1"><a class="header-anchor" href="#references-references" aria-hidden="true">#</a> References - references</h3><blockquote><p>Project references are a way to structure your TypeScript programs into smaller pieces. Using Project References can greatly improve build and editor interaction times, enforce logical separation between components, and organize your code in new and improved ways.</p></blockquote>`,24),g={href:"https://www.typescriptlang.org/docs/handbook/project-references.html",target:"_blank",rel:"noopener noreferrer"},y=p("Project References"),h=s(`<p>\u53EF\u4EE5\u914D\u7F6E\u4E3A\u5355\u72EC\u7684\u914D\u7F6E\u6587\u4EF6\u6216\u5305\u542Btsconfig.json\u7684\u76EE\u5F55</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;references&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./tsconfig.config.json&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2);function f(m,b){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[n("a",i,[k,t(a)])]),d,n("p",null,[n("a",g,[y,t(a)])]),h])}var x=e(r,[["render",f],["__file","TypeScript.html.vue"]]);export{x as default};
