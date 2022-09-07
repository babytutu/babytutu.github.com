import{_ as o,r as c,o as e,c as l,b as s,a as p,e as n,f as t}from"./app.c90e916d.js";const u={},k=s("h1",{id:"\u88C5\u9970\u5668",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u88C5\u9970\u5668","aria-hidden":"true"},"#"),n(" \u88C5\u9970\u5668")],-1),i=s("p",null,"[\u8BF4\u660E] Decorator \u63D0\u6848\u7ECF\u8FC7\u4E86\u5927\u5E45\u4FEE\u6539\uFF0C\u76EE\u524D\u8FD8\u6CA1\u6709\u5B9A\u6848\uFF0C\u4E0D\u77E5\u9053\u8BED\u6CD5\u4F1A\u4E0D\u4F1A\u518D\u53D8\u3002\u4E0B\u9762\u7684\u5185\u5BB9\u5B8C\u5168\u4F9D\u636E\u4EE5\u524D\u7684\u63D0\u6848\uFF0C\u5DF2\u7ECF\u6709\u70B9\u8FC7\u65F6\u4E86\u3002\u7B49\u5F85\u5B9A\u6848\u4EE5\u540E\uFF0C\u9700\u8981\u5B8C\u5168\u91CD\u5199\u3002",-1),r=n("\u88C5\u9970\u5668\uFF08Decorator\uFF09\u662F\u4E00\u79CD\u4E0E\u7C7B\uFF08class\uFF09\u76F8\u5173\u7684\u8BED\u6CD5\uFF0C\u7528\u6765\u6CE8\u91CA\u6216\u4FEE\u6539\u7C7B\u548C\u7C7B\u65B9\u6CD5\u3002\u8BB8\u591A\u9762\u5411\u5BF9\u8C61\u7684\u8BED\u8A00\u90FD\u6709\u8FD9\u9879\u529F\u80FD\uFF0C\u76EE\u524D\u6709\u4E00\u4E2A"),d={href:"https://github.com/tc39/proposal-decorators",target:"_blank",rel:"noopener noreferrer"},m=n("\u63D0\u6848"),g=n("\u5C06\u5176\u5F15\u5165\u4E86 ECMAScript\u3002"),f=t(`<p>\u88C5\u9970\u5668\u662F\u4E00\u79CD\u51FD\u6570\uFF0C\u5199\u6210<code>@ + \u51FD\u6570\u540D</code>\u3002\u5B83\u53EF\u4EE5\u653E\u5728\u7C7B\u548C\u7C7B\u65B9\u6CD5\u7684\u5B9A\u4E49\u524D\u9762\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>@frozen <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  @<span class="token function">configurable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  @<span class="token function">enumerable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  @<span class="token function">throttle</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>
  <span class="token function">expensiveMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E00\u5171\u4F7F\u7528\u4E86\u56DB\u4E2A\u88C5\u9970\u5668\uFF0C\u4E00\u4E2A\u7528\u5728\u7C7B\u672C\u8EAB\uFF0C\u53E6\u5916\u4E09\u4E2A\u7528\u5728\u7C7B\u65B9\u6CD5\u3002\u5B83\u4EEC\u4E0D\u4EC5\u589E\u52A0\u4E86\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\uFF0C\u6E05\u6670\u5730\u8868\u8FBE\u4E86\u610F\u56FE\uFF0C\u800C\u4E14\u63D0\u4F9B\u4E00\u79CD\u65B9\u4FBF\u7684\u624B\u6BB5\uFF0C\u589E\u52A0\u6216\u4FEE\u6539\u7C7B\u7684\u529F\u80FD\u3002</p><h2 id="\u7C7B\u7684\u88C5\u9970" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u88C5\u9970" aria-hidden="true">#</a> \u7C7B\u7684\u88C5\u9970</h2><p>\u88C5\u9970\u5668\u53EF\u4EE5\u7528\u6765\u88C5\u9970\u6574\u4E2A\u7C7B\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>@testable
<span class="token keyword">class</span> <span class="token class-name">MyTestableClass</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">testable</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  target<span class="token punctuation">.</span>isTestable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

MyTestableClass<span class="token punctuation">.</span>isTestable <span class="token comment">// true</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>@testable</code>\u5C31\u662F\u4E00\u4E2A\u88C5\u9970\u5668\u3002\u5B83\u4FEE\u6539\u4E86<code>MyTestableClass</code>\u8FD9\u4E2A\u7C7B\u7684\u884C\u4E3A\uFF0C\u4E3A\u5B83\u52A0\u4E0A\u4E86\u9759\u6001\u5C5E\u6027<code>isTestable</code>\u3002<code>testable</code>\u51FD\u6570\u7684\u53C2\u6570<code>target</code>\u662F<code>MyTestableClass</code>\u7C7B\u672C\u8EAB\u3002</p><p>\u57FA\u672C\u4E0A\uFF0C\u88C5\u9970\u5668\u7684\u884C\u4E3A\u5C31\u662F\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>@decorator
<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u7B49\u540C\u4E8E</span>

<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token constant">A</span> <span class="token operator">=</span> <span class="token function">decorator</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token constant">A</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u88C5\u9970\u5668\u662F\u4E00\u4E2A\u5BF9\u7C7B\u8FDB\u884C\u5904\u7406\u7684\u51FD\u6570\u3002\u88C5\u9970\u5668\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5C31\u662F\u6240\u8981\u88C5\u9970\u7684\u76EE\u6807\u7C7B\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">testable</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>testable</code>\u51FD\u6570\u7684\u53C2\u6570<code>target</code>\uFF0C\u5C31\u662F\u4F1A\u88AB\u88C5\u9970\u7684\u7C7B\u3002</p><p>\u5982\u679C\u89C9\u5F97\u4E00\u4E2A\u53C2\u6570\u4E0D\u591F\u7528\uFF0C\u53EF\u4EE5\u5728\u88C5\u9970\u5668\u5916\u9762\u518D\u5C01\u88C5\u4E00\u5C42\u51FD\u6570\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">testable</span><span class="token punctuation">(</span><span class="token parameter">isTestable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">.</span>isTestable <span class="token operator">=</span> isTestable<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

@<span class="token function">testable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyTestableClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
MyTestableClass<span class="token punctuation">.</span>isTestable <span class="token comment">// true</span>

@<span class="token function">testable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
MyClass<span class="token punctuation">.</span>isTestable <span class="token comment">// false</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u88C5\u9970\u5668<code>testable</code>\u53EF\u4EE5\u63A5\u53D7\u53C2\u6570\uFF0C\u8FD9\u5C31\u7B49\u4E8E\u53EF\u4EE5\u4FEE\u6539\u88C5\u9970\u5668\u7684\u884C\u4E3A\u3002</p><p>\u6CE8\u610F\uFF0C\u88C5\u9970\u5668\u5BF9\u7C7B\u7684\u884C\u4E3A\u7684\u6539\u53D8\uFF0C\u662F\u4EE3\u7801\u7F16\u8BD1\u65F6\u53D1\u751F\u7684\uFF0C\u800C\u4E0D\u662F\u5728\u8FD0\u884C\u65F6\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u88C5\u9970\u5668\u80FD\u5728\u7F16\u8BD1\u9636\u6BB5\u8FD0\u884C\u4EE3\u7801\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u88C5\u9970\u5668\u672C\u8D28\u5C31\u662F\u7F16\u8BD1\u65F6\u6267\u884C\u7684\u51FD\u6570\u3002</p><p>\u524D\u9762\u7684\u4F8B\u5B50\u662F\u4E3A\u7C7B\u6DFB\u52A0\u4E00\u4E2A\u9759\u6001\u5C5E\u6027\uFF0C\u5982\u679C\u60F3\u6DFB\u52A0\u5B9E\u4F8B\u5C5E\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7\u76EE\u6807\u7C7B\u7684<code>prototype</code>\u5BF9\u8C61\u64CD\u4F5C\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">testable</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  target<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>isTestable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@testable
<span class="token keyword">class</span> <span class="token class-name">MyTestableClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyTestableClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>isTestable <span class="token comment">// true</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u88C5\u9970\u5668\u51FD\u6570<code>testable</code>\u662F\u5728\u76EE\u6807\u7C7B\u7684<code>prototype</code>\u5BF9\u8C61\u4E0A\u6DFB\u52A0\u5C5E\u6027\uFF0C\u56E0\u6B64\u5C31\u53EF\u4EE5\u5728\u5B9E\u4F8B\u4E0A\u8C03\u7528\u3002</p><p>\u4E0B\u9762\u662F\u53E6\u5916\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// mixins.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mixins</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token operator">...</span>list<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mixins <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./mixins.js&#39;</span>

<span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

@<span class="token function">mixins</span><span class="token punctuation">(</span>Foo<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;foo&#39;</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u901A\u8FC7\u88C5\u9970\u5668<code>mixins</code>\uFF0C\u628A<code>Foo</code>\u5BF9\u8C61\u7684\u65B9\u6CD5\u6DFB\u52A0\u5230\u4E86<code>MyClass</code>\u7684\u5B9E\u4F8B\u4E0A\u9762\u3002\u53EF\u4EE5\u7528<code>Object.assign()</code>\u6A21\u62DF\u8FD9\u4E2A\u529F\u80FD\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token class-name">MyClass</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> Foo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;foo&#39;</span>
</code></pre></div><p>\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0CReact \u4E0E Redux \u5E93\u7ED3\u5408\u4F7F\u7528\u65F6\uFF0C\u5E38\u5E38\u9700\u8981\u5199\u6210\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyReactComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>MyReactComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6709\u4E86\u88C5\u9970\u5668\uFF0C\u5C31\u53EF\u4EE5\u6539\u5199\u4E0A\u9762\u7684\u4EE3\u7801\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>@<span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">MyReactComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>\u76F8\u5BF9\u6765\u8BF4\uFF0C\u540E\u4E00\u79CD\u5199\u6CD5\u770B\u4E0A\u53BB\u66F4\u5BB9\u6613\u7406\u89E3\u3002</p><h2 id="\u65B9\u6CD5\u7684\u88C5\u9970" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u7684\u88C5\u9970" aria-hidden="true">#</a> \u65B9\u6CD5\u7684\u88C5\u9970</h2><p>\u88C5\u9970\u5668\u4E0D\u4EC5\u53EF\u4EE5\u88C5\u9970\u7C7B\uFF0C\u8FD8\u53EF\u4EE5\u88C5\u9970\u7C7B\u7684\u5C5E\u6027\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  @readonly
  <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>last<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u88C5\u9970\u5668<code>readonly</code>\u7528\u6765\u88C5\u9970\u201C\u7C7B\u201D\u7684<code>name</code>\u65B9\u6CD5\u3002</p><p>\u88C5\u9970\u5668\u51FD\u6570<code>readonly</code>\u4E00\u5171\u53EF\u4EE5\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">readonly</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// descriptor\u5BF9\u8C61\u539F\u6765\u7684\u503C\u5982\u4E0B</span>
  <span class="token comment">// {</span>
  <span class="token comment">//   value: specifiedFunction,</span>
  <span class="token comment">//   enumerable: false,</span>
  <span class="token comment">//   configurable: true,</span>
  <span class="token comment">//   writable: true</span>
  <span class="token comment">// };</span>
  descriptor<span class="token punctuation">.</span>writable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> descriptor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">readonly</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u7C7B\u4F3C\u4E8E</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u88C5\u9970\u5668\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u7C7B\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u4E0A\u4F8B\u662F<code>Person.prototype</code>\uFF0C\u88C5\u9970\u5668\u7684\u672C\u610F\u662F\u8981\u201C\u88C5\u9970\u201D\u7C7B\u7684\u5B9E\u4F8B\uFF0C\u4F46\u662F\u8FD9\u4E2A\u65F6\u5019\u5B9E\u4F8B\u8FD8\u6CA1\u751F\u6210\uFF0C\u6240\u4EE5\u53EA\u80FD\u53BB\u88C5\u9970\u539F\u578B\uFF08\u8FD9\u4E0D\u540C\u4E8E\u7C7B\u7684\u88C5\u9970\uFF0C\u90A3\u79CD\u60C5\u51B5\u65F6<code>target</code>\u53C2\u6570\u6307\u7684\u662F\u7C7B\u672C\u8EAB\uFF09\uFF1B\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u6240\u8981\u88C5\u9970\u7684\u5C5E\u6027\u540D\uFF0C\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u8BE5\u5C5E\u6027\u7684\u63CF\u8FF0\u5BF9\u8C61\u3002</p><p>\u53E6\u5916\uFF0C\u4E0A\u9762\u4EE3\u7801\u8BF4\u660E\uFF0C\u88C5\u9970\u5668\uFF08readonly\uFF09\u4F1A\u4FEE\u6539\u5C5E\u6027\u7684\u63CF\u8FF0\u5BF9\u8C61\uFF08descriptor\uFF09\uFF0C\u7136\u540E\u88AB\u4FEE\u6539\u7684\u63CF\u8FF0\u5BF9\u8C61\u518D\u7528\u6765\u5B9A\u4E49\u5C5E\u6027\u3002</p><p>\u4E0B\u9762\u662F\u53E6\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u4FEE\u6539\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\u7684<code>enumerable</code>\u5C5E\u6027\uFF0C\u4F7F\u5F97\u8BE5\u5C5E\u6027\u4E0D\u53EF\u904D\u5386\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  @nonenumerable
  <span class="token keyword">get</span> <span class="token function">kidCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">nonenumerable</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  descriptor<span class="token punctuation">.</span>enumerable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> descriptor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0B\u9762\u7684<code>@log</code>\u88C5\u9970\u5668\uFF0C\u53EF\u4EE5\u8D77\u5230\u8F93\u51FA\u65E5\u5FD7\u7684\u4F5C\u7528\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Math</span> <span class="token punctuation">{</span>
  @log
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> oldValue <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>value<span class="token punctuation">;</span>

  descriptor<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Calling </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> with</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">oldValue</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> descriptor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> math <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Math</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// passed parameters should get logged now</span>
math<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>@log</code>\u88C5\u9970\u5668\u7684\u4F5C\u7528\u5C31\u662F\u5728\u6267\u884C\u539F\u59CB\u7684\u64CD\u4F5C\u4E4B\u524D\uFF0C\u6267\u884C\u4E00\u6B21<code>console.log</code>\uFF0C\u4ECE\u800C\u8FBE\u5230\u8F93\u51FA\u65E5\u5FD7\u7684\u76EE\u7684\u3002</p><p>\u88C5\u9970\u5668\u6709\u6CE8\u91CA\u7684\u4F5C\u7528\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>@testable
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  @readonly
  @nonenumerable
  <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>last<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4ECE\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u4E00\u773C\u5C31\u80FD\u770B\u51FA\uFF0C<code>Person</code>\u7C7B\u662F\u53EF\u6D4B\u8BD5\u7684\uFF0C\u800C<code>name</code>\u65B9\u6CD5\u662F\u53EA\u8BFB\u548C\u4E0D\u53EF\u679A\u4E3E\u7684\u3002</p>`,44),y=n("\u4E0B\u9762\u662F\u4F7F\u7528 Decorator \u5199\u6CD5\u7684"),w={href:"https://github.com/ionic-team/stencil",target:"_blank",rel:"noopener noreferrer"},v=n("\u7EC4\u4EF6"),j=n("\uFF0C\u770B\u4E0A\u53BB\u4E00\u76EE\u4E86\u7136\u3002"),h=t(`<div class="language-javascript ext-js"><pre class="language-javascript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;my-component&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">styleUrl</span><span class="token operator">:</span> <span class="token string">&#39;my-component.scss&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token punctuation">{</span>
  @<span class="token function">Prop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> first<span class="token operator">:</span> string<span class="token punctuation">;</span>
  @<span class="token function">Prop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> last<span class="token operator">:</span> string<span class="token punctuation">;</span>
  @<span class="token function">State</span><span class="token punctuation">(</span><span class="token punctuation">)</span> isVisible<span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Hello<span class="token punctuation">,</span> my name is <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>first<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>last<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5982\u679C\u540C\u4E00\u4E2A\u65B9\u6CD5\u6709\u591A\u4E2A\u88C5\u9970\u5668\uFF0C\u4F1A\u50CF\u5265\u6D0B\u8471\u4E00\u6837\uFF0C\u5148\u4ECE\u5916\u5230\u5185\u8FDB\u5165\uFF0C\u7136\u540E\u7531\u5185\u5411\u5916\u6267\u884C\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">dec</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;evaluated&#39;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;executed&#39;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
    @<span class="token function">dec</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    @<span class="token function">dec</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// evaluated 1</span>
<span class="token comment">// evaluated 2</span>
<span class="token comment">// executed 2</span>
<span class="token comment">// executed 1</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5916\u5C42\u88C5\u9970\u5668<code>@dec(1)</code>\u5148\u8FDB\u5165\uFF0C\u4F46\u662F\u5185\u5C42\u88C5\u9970\u5668<code>@dec(2)</code>\u5148\u6267\u884C\u3002</p><p>\u9664\u4E86\u6CE8\u91CA\uFF0C\u88C5\u9970\u5668\u8FD8\u80FD\u7528\u6765\u7C7B\u578B\u68C0\u67E5\u3002\u6240\u4EE5\uFF0C\u5BF9\u4E8E\u7C7B\u6765\u8BF4\uFF0C\u8FD9\u9879\u529F\u80FD\u76F8\u5F53\u6709\u7528\u3002\u4ECE\u957F\u671F\u6765\u770B\uFF0C\u5B83\u5C06\u662F JavaScript \u4EE3\u7801\u9759\u6001\u5206\u6790\u7684\u91CD\u8981\u5DE5\u5177\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u88C5\u9970\u5668\u4E0D\u80FD\u7528\u4E8E\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u88C5\u9970\u5668\u4E0D\u80FD\u7528\u4E8E\u51FD\u6570" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u88C5\u9970\u5668\u4E0D\u80FD\u7528\u4E8E\u51FD\u6570\uFF1F</h2><p>\u88C5\u9970\u5668\u53EA\u80FD\u7528\u4E8E\u7C7B\u548C\u7C7B\u7684\u65B9\u6CD5\uFF0C\u4E0D\u80FD\u7528\u4E8E\u51FD\u6570\uFF0C\u56E0\u4E3A\u5B58\u5728\u51FD\u6570\u63D0\u5347\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  counter<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

@add
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u610F\u56FE\u662F\u6267\u884C\u540E<code>counter</code>\u7B49\u4E8E 1\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A\u7ED3\u679C\u662F<code>counter</code>\u7B49\u4E8E 0\u3002\u56E0\u4E3A\u51FD\u6570\u63D0\u5347\uFF0C\u4F7F\u5F97\u5B9E\u9645\u6267\u884C\u7684\u4EE3\u7801\u662F\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> counter<span class="token punctuation">;</span>
<span class="token keyword">var</span> add<span class="token punctuation">;</span>

@add
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  counter<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4E0B\u9762\u662F\u53E6\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> readOnly <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;some-decorator&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

@readOnly
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E5F\u6709\u95EE\u9898\uFF0C\u56E0\u4E3A\u5B9E\u9645\u6267\u884C\u662F\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> readOnly<span class="token punctuation">;</span>

@readOnly
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

readOnly <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;some-decorator&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u603B\u4E4B\uFF0C\u7531\u4E8E\u5B58\u5728\u51FD\u6570\u63D0\u5347\uFF0C\u4F7F\u5F97\u88C5\u9970\u5668\u4E0D\u80FD\u7528\u4E8E\u51FD\u6570\u3002\u7C7B\u662F\u4E0D\u4F1A\u63D0\u5347\u7684\uFF0C\u6240\u4EE5\u5C31\u6CA1\u6709\u8FD9\u65B9\u9762\u7684\u95EE\u9898\u3002</p><p>\u53E6\u4E00\u65B9\u9762\uFF0C\u5982\u679C\u4E00\u5B9A\u8981\u88C5\u9970\u51FD\u6570\uFF0C\u53EF\u4EE5\u91C7\u7528\u9AD8\u9636\u51FD\u6570\u7684\u5F62\u5F0F\u76F4\u63A5\u6267\u884C\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, &#39;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">loggingDecorator</span><span class="token punctuation">(</span><span class="token parameter">wrapped</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Starting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">wrapped</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Finished&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> wrapped <span class="token operator">=</span> <span class="token function">loggingDecorator</span><span class="token punctuation">(</span>doSomething<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="core-decorators-js" tabindex="-1"><a class="header-anchor" href="#core-decorators-js" aria-hidden="true">#</a> core-decorators.js</h2>`,18),b={href:"https://github.com/jayphelps/core-decorators.js",target:"_blank",rel:"noopener noreferrer"},x=n("core-decorators.js"),M=n("\u662F\u4E00\u4E2A\u7B2C\u4E09\u65B9\u6A21\u5757\uFF0C\u63D0\u4F9B\u4E86\u51E0\u4E2A\u5E38\u89C1\u7684\u88C5\u9970\u5668\uFF0C\u901A\u8FC7\u5B83\u53EF\u4EE5\u66F4\u597D\u5730\u7406\u89E3\u88C5\u9970\u5668\u3002"),_=t(`<p><strong>\uFF081\uFF09@autobind</strong></p><p><code>autobind</code>\u88C5\u9970\u5668\u4F7F\u5F97\u65B9\u6CD5\u4E2D\u7684<code>this</code>\u5BF9\u8C61\uFF0C\u7ED1\u5B9A\u539F\u59CB\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> autobind <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core-decorators&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  @autobind
  <span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> getPerson <span class="token operator">=</span> person<span class="token punctuation">.</span>getPerson<span class="token punctuation">;</span>

<span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> person<span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre></div><p><strong>\uFF082\uFF09@readonly</strong></p><p><code>readonly</code>\u88C5\u9970\u5668\u4F7F\u5F97\u5C5E\u6027\u6216\u65B9\u6CD5\u4E0D\u53EF\u5199\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> readonly <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core-decorators&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Meal</span> <span class="token punctuation">{</span>
  @readonly
  entree <span class="token operator">=</span> <span class="token string">&#39;steak&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> dinner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Meal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dinner<span class="token punctuation">.</span>entree <span class="token operator">=</span> <span class="token string">&#39;salmon&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// Cannot assign to read only property &#39;entree&#39; of [object Object]</span>
</code></pre></div><p><strong>\uFF083\uFF09@override</strong></p><p><code>override</code>\u88C5\u9970\u5668\u68C0\u67E5\u5B50\u7C7B\u7684\u65B9\u6CD5\uFF0C\u662F\u5426\u6B63\u786E\u8986\u76D6\u4E86\u7236\u7C7B\u7684\u540C\u540D\u65B9\u6CD5\uFF0C\u5982\u679C\u4E0D\u6B63\u786E\u4F1A\u62A5\u9519\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> override <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core-decorators&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token parameter">first<span class="token punctuation">,</span> second</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
  @override
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// SyntaxError: Child#speak() does not properly override Parent#speak(first, second)</span>
<span class="token punctuation">}</span>

<span class="token comment">// or</span>

<span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
  @override
  <span class="token function">speaks</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// SyntaxError: No descriptor matching Child#speaks() was found on the prototype chain.</span>
  <span class="token comment">//</span>
  <span class="token comment">//   Did you mean &quot;speak&quot;?</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\uFF084\uFF09@deprecate (\u522B\u540D@deprecated)</strong></p><p><code>deprecate</code>\u6216<code>deprecated</code>\u88C5\u9970\u5668\u5728\u63A7\u5236\u53F0\u663E\u793A\u4E00\u6761\u8B66\u544A\uFF0C\u8868\u793A\u8BE5\u65B9\u6CD5\u5C06\u5E9F\u9664\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> deprecate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core-decorators&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  @deprecate
  <span class="token function">facepalm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  @<span class="token function">deprecate</span><span class="token punctuation">(</span><span class="token string">&#39;We stopped facepalming&#39;</span><span class="token punctuation">)</span>
  <span class="token function">facepalmHard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  @<span class="token function">deprecate</span><span class="token punctuation">(</span><span class="token string">&#39;We stopped facepalming&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://knowyourmeme.com/memes/facepalm&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">facepalmHarder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span><span class="token function">facepalm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// DEPRECATION Person#facepalm: This function will be removed in future versions.</span>

person<span class="token punctuation">.</span><span class="token function">facepalmHard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// DEPRECATION Person#facepalmHard: We stopped facepalming</span>

person<span class="token punctuation">.</span><span class="token function">facepalmHarder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// DEPRECATION Person#facepalmHarder: We stopped facepalming</span>
<span class="token comment">//</span>
<span class="token comment">//     See http://knowyourmeme.com/memes/facepalm for more details.</span>
<span class="token comment">//</span>
</code></pre></div><p><strong>\uFF085\uFF09@suppressWarnings</strong></p><p><code>suppressWarnings</code>\u88C5\u9970\u5668\u6291\u5236<code>deprecated</code>\u88C5\u9970\u5668\u5BFC\u81F4\u7684<code>console.warn()</code>\u8C03\u7528\u3002\u4F46\u662F\uFF0C\u5F02\u6B65\u4EE3\u7801\u53D1\u51FA\u7684\u8C03\u7528\u9664\u5916\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> suppressWarnings <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core-decorators&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  @deprecated
  <span class="token function">facepalm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  @suppressWarnings
  <span class="token function">facepalmWithoutWarning</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">facepalm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span><span class="token function">facepalmWithoutWarning</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// no warning is logged</span>
</code></pre></div><h2 id="\u4F7F\u7528\u88C5\u9970\u5668\u5B9E\u73B0\u81EA\u52A8\u53D1\u5E03\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u88C5\u9970\u5668\u5B9E\u73B0\u81EA\u52A8\u53D1\u5E03\u4E8B\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u88C5\u9970\u5668\u5B9E\u73B0\u81EA\u52A8\u53D1\u5E03\u4E8B\u4EF6</h2><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u88C5\u9970\u5668\uFF0C\u4F7F\u5F97\u5BF9\u8C61\u7684\u65B9\u6CD5\u88AB\u8C03\u7528\u65F6\uFF0C\u81EA\u52A8\u53D1\u51FA\u4E00\u4E2A\u4E8B\u4EF6\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> postal <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;postal/lib/postal.lodash&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">publish</span><span class="token punctuation">(</span><span class="token parameter">topic<span class="token punctuation">,</span> channel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> channelName <span class="token operator">=</span> channel <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> msgChannel <span class="token operator">=</span> postal<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span>channelName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  msgChannel<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>topic<span class="token punctuation">,</span> <span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u9891\u9053: &#39;</span><span class="token punctuation">,</span> channelName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E8B\u4EF6: &#39;</span><span class="token punctuation">,</span> topic<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6570\u636E: &#39;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fn <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>value<span class="token punctuation">;</span>

    descriptor<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
      msgChannel<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span>topic<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,18),C=n("\u4E0A\u9762\u4EE3\u7801\u5B9A\u4E49\u4E86\u4E00\u4E2A\u540D\u4E3A"),T=s("code",null,"publish",-1),P=n("\u7684\u88C5\u9970\u5668\uFF0C\u5B83\u901A\u8FC7\u6539\u5199"),F=s("code",null,"descriptor.value",-1),B=n("\uFF0C\u4F7F\u5F97\u539F\u65B9\u6CD5\u88AB\u8C03\u7528\u65F6\uFF0C\u4F1A\u81EA\u52A8\u53D1\u51FA\u4E00\u4E2A\u4E8B\u4EF6\u3002\u5B83\u4F7F\u7528\u7684\u4E8B\u4EF6\u201C\u53D1\u5E03/\u8BA2\u9605\u201D\u5E93\u662F"),E={href:"https://github.com/postaljs/postal.js",target:"_blank",rel:"noopener noreferrer"},S=n("Postal.js"),O=n("\u3002"),q=t(`<p>\u5B83\u7684\u7528\u6CD5\u5982\u4E0B\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> publish <span class="token keyword">from</span> <span class="token string">&#39;./publish&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">FooComponent</span> <span class="token punctuation">{</span>
  @<span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&#39;foo.some.message&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;component&#39;</span><span class="token punctuation">)</span>
  <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">my</span><span class="token operator">:</span> <span class="token string">&#39;data&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  @<span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&#39;foo.some.other&#39;</span><span class="token punctuation">)</span>
  <span class="token function">anotherMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FooComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

foo<span class="token punctuation">.</span><span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span><span class="token function">anotherMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4EE5\u540E\uFF0C\u53EA\u8981\u8C03\u7528<code>someMethod</code>\u6216\u8005<code>anotherMethod</code>\uFF0C\u5C31\u4F1A\u81EA\u52A8\u53D1\u51FA\u4E00\u4E2A\u4E8B\u4EF6\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ bash-node index.js
\u9891\u9053:  component
\u4E8B\u4EF6:  foo.some.message
\u6570\u636E:  <span class="token punctuation">{</span> my: <span class="token string">&#39;data&#39;</span> <span class="token punctuation">}</span>

\u9891\u9053:  /
\u4E8B\u4EF6:  foo.some.other
\u6570\u636E:  undefined
</code></pre></div><h2 id="mixin" tabindex="-1"><a class="header-anchor" href="#mixin" aria-hidden="true">#</a> Mixin</h2><p>\u5728\u88C5\u9970\u5668\u7684\u57FA\u7840\u4E0A\uFF0C\u53EF\u4EE5\u5B9E\u73B0<code>Mixin</code>\u6A21\u5F0F\u3002\u6240\u8C13<code>Mixin</code>\u6A21\u5F0F\uFF0C\u5C31\u662F\u5BF9\u8C61\u7EE7\u627F\u7684\u4E00\u79CD\u66FF\u4EE3\u65B9\u6848\uFF0C\u4E2D\u6587\u8BD1\u4E3A\u201C\u6DF7\u5165\u201D\uFF08mix in\uFF09\uFF0C\u610F\u4E3A\u5728\u4E00\u4E2A\u5BF9\u8C61\u4E4B\u4E2D\u6DF7\u5165\u53E6\u5916\u4E00\u4E2A\u5BF9\u8C61\u7684\u65B9\u6CD5\u3002</p><p>\u8BF7\u770B\u4E0B\u9762\u7684\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token class-name">MyClass</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> Foo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;foo&#39;</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E4B\u4E2D\uFF0C\u5BF9\u8C61<code>Foo</code>\u6709\u4E00\u4E2A<code>foo</code>\u65B9\u6CD5\uFF0C\u901A\u8FC7<code>Object.assign</code>\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5C06<code>foo</code>\u65B9\u6CD5\u201C\u6DF7\u5165\u201D<code>MyClass</code>\u7C7B\uFF0C\u5BFC\u81F4<code>MyClass</code>\u7684\u5B9E\u4F8B<code>obj</code>\u5BF9\u8C61\u90FD\u5177\u6709<code>foo</code>\u65B9\u6CD5\u3002\u8FD9\u5C31\u662F\u201C\u6DF7\u5165\u201D\u6A21\u5F0F\u7684\u4E00\u4E2A\u7B80\u5355\u5B9E\u73B0\u3002</p><p>\u4E0B\u9762\uFF0C\u6211\u4EEC\u90E8\u7F72\u4E00\u4E2A\u901A\u7528\u811A\u672C<code>mixins.js</code>\uFF0C\u5C06 Mixin \u5199\u6210\u4E00\u4E2A\u88C5\u9970\u5668\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mixins</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token operator">...</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E0A\u9762\u8FD9\u4E2A\u88C5\u9970\u5668\uFF0C\u4E3A\u7C7B\u201C\u6DF7\u5165\u201D\u5404\u79CD\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mixins <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./mixins.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

@<span class="token function">mixins</span><span class="token punctuation">(</span>Foo<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;foo&quot;</span>
</code></pre></div><p>\u901A\u8FC7<code>mixins</code>\u8FD9\u4E2A\u88C5\u9970\u5668\uFF0C\u5B9E\u73B0\u4E86\u5728<code>MyClass</code>\u7C7B\u4E0A\u9762\u201C\u6DF7\u5165\u201D<code>Foo</code>\u5BF9\u8C61\u7684<code>foo</code>\u65B9\u6CD5\u3002</p><p>\u4E0D\u8FC7\uFF0C\u4E0A\u9762\u7684\u65B9\u6CD5\u4F1A\u6539\u5199<code>MyClass</code>\u7C7B\u7684<code>prototype</code>\u5BF9\u8C61\uFF0C\u5982\u679C\u4E0D\u559C\u6B22\u8FD9\u4E00\u70B9\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7C7B\u7684\u7EE7\u627F\u5B9E\u73B0 Mixin\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token keyword">extends</span> <span class="token class-name">MyBaseClass</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>MyClass</code>\u7EE7\u627F\u4E86<code>MyBaseClass</code>\u3002\u5982\u679C\u6211\u4EEC\u60F3\u5728<code>MyClass</code>\u91CC\u9762\u201C\u6DF7\u5165\u201D\u4E00\u4E2A<code>foo</code>\u65B9\u6CD5\uFF0C\u4E00\u4E2A\u529E\u6CD5\u662F\u5728<code>MyClass</code>\u548C<code>MyBaseClass</code>\u4E4B\u95F4\u63D2\u5165\u4E00\u4E2A\u6DF7\u5165\u7C7B\uFF0C\u8FD9\u4E2A\u7C7B\u5177\u6709<code>foo</code>\u65B9\u6CD5\uFF0C\u5E76\u4E14\u7EE7\u627F\u4E86<code>MyBaseClass</code>\u7684\u6240\u6709\u65B9\u6CD5\uFF0C\u7136\u540E<code>MyClass</code>\u518D\u7EE7\u627F\u8FD9\u4E2A\u7C7B\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">MyMixin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">superclass</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> superclass <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo from MyMixin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>MyMixin</code>\u662F\u4E00\u4E2A\u6DF7\u5165\u7C7B\u751F\u6210\u5668\uFF0C\u63A5\u53D7<code>superclass</code>\u4F5C\u4E3A\u53C2\u6570\uFF0C\u7136\u540E\u8FD4\u56DE\u4E00\u4E2A\u7EE7\u627F<code>superclass</code>\u7684\u5B50\u7C7B\uFF0C\u8BE5\u5B50\u7C7B\u5305\u542B\u4E00\u4E2A<code>foo</code>\u65B9\u6CD5\u3002</p><p>\u63A5\u7740\uFF0C\u76EE\u6807\u7C7B\u518D\u53BB\u7EE7\u627F\u8FD9\u4E2A\u6DF7\u5165\u7C7B\uFF0C\u5C31\u8FBE\u5230\u4E86\u201C\u6DF7\u5165\u201D<code>foo</code>\u65B9\u6CD5\u7684\u76EE\u7684\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token keyword">extends</span> <span class="token class-name">MyMixin</span><span class="token punctuation">(</span>MyBaseClass<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;foo from MyMixin&quot;</span>
</code></pre></div><p>\u5982\u679C\u9700\u8981\u201C\u6DF7\u5165\u201D\u591A\u4E2A\u65B9\u6CD5\uFF0C\u5C31\u751F\u6210\u591A\u4E2A\u6DF7\u5165\u7C7B\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token keyword">extends</span> <span class="token class-name">Mixin1</span><span class="token punctuation">(</span><span class="token function">Mixin2</span><span class="token punctuation">(</span>MyBaseClass<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u79CD\u5199\u6CD5\u7684\u4E00\u4E2A\u597D\u5904\uFF0C\u662F\u53EF\u4EE5\u8C03\u7528<code>super</code>\uFF0C\u56E0\u6B64\u53EF\u4EE5\u907F\u514D\u5728\u201C\u6DF7\u5165\u201D\u8FC7\u7A0B\u4E2D\u8986\u76D6\u7236\u7C7B\u7684\u540C\u540D\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">Mixin1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">superclass</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> superclass <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo from Mixin1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">super</span><span class="token punctuation">.</span>foo<span class="token punctuation">)</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token function-variable function">Mixin2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">superclass</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> superclass <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo from Mixin2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">super</span><span class="token punctuation">.</span>foo<span class="token punctuation">)</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">S</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo from S&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token keyword">extends</span> <span class="token class-name">Mixin1</span><span class="token punctuation">(</span><span class="token function">Mixin2</span><span class="token punctuation">(</span><span class="token constant">S</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo from C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u6BCF\u4E00\u6B21<code>\u6DF7\u5165</code>\u53D1\u751F\u65F6\uFF0C\u90FD\u8C03\u7528\u4E86\u7236\u7C7B\u7684<code>super.foo</code>\u65B9\u6CD5\uFF0C\u5BFC\u81F4\u7236\u7C7B\u7684\u540C\u540D\u65B9\u6CD5\u6CA1\u6709\u88AB\u8986\u76D6\uFF0C\u884C\u4E3A\u88AB\u4FDD\u7559\u4E86\u4E0B\u6765\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// foo from C</span>
<span class="token comment">// foo from Mixin1</span>
<span class="token comment">// foo from Mixin2</span>
<span class="token comment">// foo from S</span>
</code></pre></div><h2 id="trait" tabindex="-1"><a class="header-anchor" href="#trait" aria-hidden="true">#</a> Trait</h2><p>Trait \u4E5F\u662F\u4E00\u79CD\u88C5\u9970\u5668\uFF0C\u6548\u679C\u4E0E Mixin \u7C7B\u4F3C\uFF0C\u4F46\u662F\u63D0\u4F9B\u66F4\u591A\u529F\u80FD\uFF0C\u6BD4\u5982\u9632\u6B62\u540C\u540D\u65B9\u6CD5\u7684\u51B2\u7A81\u3001\u6392\u9664\u6DF7\u5165\u67D0\u4E9B\u65B9\u6CD5\u3001\u4E3A\u6DF7\u5165\u7684\u65B9\u6CD5\u8D77\u522B\u540D\u7B49\u7B49\u3002</p>`,29),N=n("\u4E0B\u9762\u91C7\u7528"),W={href:"https://github.com/CocktailJS/traits-decorator",target:"_blank",rel:"noopener noreferrer"},D=n("traits-decorator"),R=n("\u8FD9\u4E2A\u7B2C\u4E09\u65B9\u6A21\u5757\u4F5C\u4E3A\u4F8B\u5B50\u3002\u8FD9\u4E2A\u6A21\u5757\u63D0\u4F9B\u7684"),A=s("code",null,"traits",-1),H=n("\u88C5\u9970\u5668\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u63A5\u53D7\u5BF9\u8C61\uFF0C\u8FD8\u53EF\u4EE5\u63A5\u53D7 ES6 \u7C7B\u4F5C\u4E3A\u53C2\u6570\u3002"),z=t(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> traits <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;traits-decorator&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">TFoo</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> TBar <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

@<span class="token function">traits</span><span class="token punctuation">(</span>TFoo<span class="token punctuation">,</span> TBar<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// foo</span>
obj<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// bar</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u901A\u8FC7<code>traits</code>\u88C5\u9970\u5668\uFF0C\u5728<code>MyClass</code>\u7C7B\u4E0A\u9762\u201C\u6DF7\u5165\u201D\u4E86<code>TFoo</code>\u7C7B\u7684<code>foo</code>\u65B9\u6CD5\u548C<code>TBar</code>\u5BF9\u8C61\u7684<code>bar</code>\u65B9\u6CD5\u3002</p><p>Trait \u4E0D\u5141\u8BB8\u201C\u6DF7\u5165\u201D\u540C\u540D\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> traits <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;traits-decorator&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">TFoo</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> TBar <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

@<span class="token function">traits</span><span class="token punctuation">(</span>TFoo<span class="token punctuation">,</span> TBar<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token comment">// \u62A5\u9519</span>
<span class="token comment">// throw new Error(&#39;Method named: &#39; + methodName + &#39; is defined twice.&#39;);</span>
<span class="token comment">//        ^</span>
<span class="token comment">// Error: Method named: foo is defined twice.</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>TFoo</code>\u548C<code>TBar</code>\u90FD\u6709<code>foo</code>\u65B9\u6CD5\uFF0C\u7ED3\u679C<code>traits</code>\u88C5\u9970\u5668\u62A5\u9519\u3002</p><p>\u4E00\u79CD\u89E3\u51B3\u65B9\u6CD5\u662F\u6392\u9664<code>TBar</code>\u7684<code>foo</code>\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> traits<span class="token punctuation">,</span> excludes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;traits-decorator&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">TFoo</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> TBar <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

@<span class="token function">traits</span><span class="token punctuation">(</span>TFoo<span class="token punctuation">,</span> <span class="token literal-property property">TBar</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">excludes</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// foo</span>
obj<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// bar</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4F7F\u7528\u7ED1\u5B9A\u8FD0\u7B97\u7B26\uFF08::\uFF09\u5728<code>TBar</code>\u4E0A\u6392\u9664<code>foo</code>\u65B9\u6CD5\uFF0C\u6DF7\u5165\u65F6\u5C31\u4E0D\u4F1A\u62A5\u9519\u4E86\u3002</p><p>\u53E6\u4E00\u79CD\u65B9\u6CD5\u662F\u4E3A<code>TBar</code>\u7684<code>foo</code>\u65B9\u6CD5\u8D77\u4E00\u4E2A\u522B\u540D\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> traits<span class="token punctuation">,</span> alias <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;traits-decorator&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">TFoo</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> TBar <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

@<span class="token function">traits</span><span class="token punctuation">(</span>TFoo<span class="token punctuation">,</span> <span class="token literal-property property">TBar</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">alias</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;aliasFoo&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// foo</span>
obj<span class="token punctuation">.</span><span class="token function">aliasFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// foo</span>
obj<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// bar</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E3A<code>TBar</code>\u7684<code>foo</code>\u65B9\u6CD5\u8D77\u4E86\u522B\u540D<code>aliasFoo</code>\uFF0C\u4E8E\u662F<code>MyClass</code>\u4E5F\u53EF\u4EE5\u6DF7\u5165<code>TBar</code>\u7684<code>foo</code>\u65B9\u6CD5\u4E86\u3002</p><p><code>alias</code>\u548C<code>excludes</code>\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7ED3\u5408\u8D77\u6765\u4F7F\u7528\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>@<span class="token function">traits</span><span class="token punctuation">(</span>TExample<span class="token operator">:</span><span class="token operator">:</span><span class="token function">excludes</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">alias</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">baz</span><span class="token operator">:</span><span class="token string">&#39;exampleBaz&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u6392\u9664\u4E86<code>TExample</code>\u7684<code>foo</code>\u65B9\u6CD5\u548C<code>bar</code>\u65B9\u6CD5\uFF0C\u4E3A<code>baz</code>\u65B9\u6CD5\u8D77\u4E86\u522B\u540D<code>exampleBaz</code>\u3002</p><p><code>as</code>\u65B9\u6CD5\u5219\u4E3A\u4E0A\u9762\u7684\u4EE3\u7801\u63D0\u4F9B\u4E86\u53E6\u4E00\u79CD\u5199\u6CD5\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>@<span class="token function">traits</span><span class="token punctuation">(</span>TExample<span class="token operator">:</span><span class="token operator">:</span><span class="token keyword">as</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">excludes</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token string">&#39;exampleBaz&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div>`,16);function V($,I){const a=c("ExternalLinkIcon");return e(),l("div",null,[k,i,s("p",null,[r,s("a",d,[m,p(a)]),g]),f,s("p",null,[y,s("a",w,[v,p(a)]),j]),h,s("p",null,[s("a",b,[x,p(a)]),M]),_,s("p",null,[C,T,P,F,B,s("a",E,[S,p(a)]),O]),q,s("p",null,[N,s("a",W,[D,p(a)]),R,A,H]),z])}var L=o(u,[["render",V],["__file","decorator.html.vue"]]);export{L as default};
