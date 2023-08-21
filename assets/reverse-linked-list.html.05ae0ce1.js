import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as p,b as n,d as l,e as s,a as o,r as c}from"./app.645ca90b.js";const i={},r=n("h1",{id:"_3-\u53CD\u8F6C\u94FE\u8868",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-\u53CD\u8F6C\u94FE\u8868","aria-hidden":"true"},"#"),s(" 3.\u53CD\u8F6C\u94FE\u8868")],-1),u=n("h2",{id:"_206-\u53CD\u8F6C\u94FE\u8868",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_206-\u53CD\u8F6C\u94FE\u8868","aria-hidden":"true"},"#"),s(" 206.\u53CD\u8F6C\u94FE\u8868")],-1),d={href:"https://leetcode.cn/problems/reverse-linked-list/",target:"_blank",rel:"noopener noreferrer"},k=s("\u9898\u76EE\u94FE\u63A5"),v=o(`<p>\u9898\u610F\uFF1A\u53CD\u8F6C\u4E00\u4E2A\u5355\u94FE\u8868\u3002</p><p>\u793A\u4F8B: \u8F93\u5165: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL \u8F93\u51FA: 5-&gt;4-&gt;3-&gt;2-&gt;1-&gt;NULL</p><h3 id="\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a> \u53CC\u6307\u9488</h3><p>\u9996\u5148\u5B9A\u4E49\u4E00\u4E2Acur\u6307\u9488\uFF0C\u6307\u5411\u5934\u7ED3\u70B9\uFF0C\u518D\u5B9A\u4E49\u4E00\u4E2Apre\u6307\u9488\uFF0C\u521D\u59CB\u5316\u4E3Anull \u53CD\u8F6C\u65F6\u8981\u628Acur-&gt;next\u7ED3\u70B9\u7528temp\u4FDD\u5B58\u4E00\u4E0B \u56E0\u4E3A\u8981\u6539\u53D8cur-&gt;next\u6307\u5411\uFF0C\u5C06cur-&gt;next\u6307\u5411pre\uFF0C\u53CD\u8F6C\u7B2C\u4E00\u4E2A\u7ED3\u70B9 \u7EE7\u7EED\u79FB\u52A8pre\u548Ccur\u6307\u9488 \u6700\u540Ecur\u6307\u5411null\u5FAA\u73AF\u7ED3\u675F\uFF0Cpre\u6307\u5411\u65B0\u7684\u5934\u7ED3\u70B9</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
   <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
   <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
      pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
      cur <span class="token operator">=</span> temp<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52" aria-hidden="true">#</a> \u9012\u5F52</h3><p>\u5927\u4F6C\u7684\u89E3\u91CA\uFF1A</p><ul><li>\u7B2C\u4E00\u8F6E\u51FA\u6808\uFF0Chead\u4E3A5\uFF0Chead.next\u4E3A\u7A7A\uFF0C\u8FD4\u56DE5</li><li>\u7B2C\u4E8C\u8F6E\u51FA\u6808\uFF0Chead\u4E3A4\uFF0Chead.next\u4E3A5\uFF0C\u6267\u884Chead.next.next=head\u4E5F\u5C31\u662F5.next=4\uFF0C \u628A\u5F53\u524D\u8282\u70B9\u7684\u5B50\u8282\u70B9\u7684\u5B50\u8282\u70B9\u6307\u5411\u5F53\u524D\u8282\u70B9 \u6B64\u65F6\u94FE\u8868\u4E3A1-&gt;2-&gt;3-&gt;4&lt;-&gt;5\uFF0C\u7531\u4E8E4\u4E0E5\u4E92\u76F8\u6307\u5411\uFF0C\u6240\u4EE5\u6B64\u5904\u8981\u65AD\u5F004.next=null \u6B64\u65F6\u94FE\u8868\u4E3A1-&gt;2-&gt;3-&gt;4&lt;-5 \u8FD4\u56DE\u8282\u70B95</li><li>\u7B2C\u4E09\u8F6E\u51FA\u6808\uFF0Chead\u4E3A3\uFF0Chead.next\u4E3A4\uFF0C\u6267\u884Chead.next.next=head\u4E5F\u5C31\u662F4.next=3\uFF0C \u6B64\u65F6\u94FE\u8868\u4E3A1-&gt;2-&gt;3&lt;-&gt;4&lt;-5\uFF0C\u7531\u4E8E3\u4E0E4\u4E92\u76F8\u6307\u5411\uFF0C\u6240\u4EE5\u6B64\u5904\u8981\u65AD\u5F003.next=null \u6B64\u65F6\u94FE\u8868\u4E3A1-&gt;2-&gt;3&lt;-4&lt;-5 \u8FD4\u56DE\u8282\u70B95</li><li>\u7B2C\u56DB\u8F6E\u51FA\u6808\uFF0Chead\u4E3A2\uFF0Chead.next\u4E3A3\uFF0C\u6267\u884Chead.next.next=head\u4E5F\u5C31\u662F3.next=2\uFF0C \u6B64\u65F6\u94FE\u8868\u4E3A1-&gt;2&lt;-&gt;3&lt;-4&lt;-5\uFF0C\u7531\u4E8E2\u4E0E3\u4E92\u76F8\u6307\u5411\uFF0C\u6240\u4EE5\u6B64\u5904\u8981\u65AD\u5F002.next=null \u6B64\u65F6\u94FE\u8868\u4E3A1-&gt;2&lt;-3&lt;-4&lt;-5 \u8FD4\u56DE\u8282\u70B95</li><li>\u7B2C\u4E94\u8F6E\u51FA\u6808\uFF0Chead\u4E3A1\uFF0Chead.next\u4E3A2\uFF0C\u6267\u884Chead.next.next=head\u4E5F\u5C31\u662F2.next=1\uFF0C \u6B64\u65F6\u94FE\u8868\u4E3A1&lt;-&gt;2&lt;-3&lt;-4&lt;-5\uFF0C\u7531\u4E8E1\u4E0E2\u4E92\u76F8\u6307\u5411\uFF0C\u6240\u4EE5\u6B64\u5904\u8981\u65AD\u5F001.next=null \u6B64\u65F6\u94FE\u8868\u4E3A1&lt;-2&lt;-3&lt;-4&lt;-5 \u8FD4\u56DE\u8282\u70B95 \u51FA\u6808\u5B8C\u6210\uFF0C\u6700\u7EC8\u5934\u8282\u70B95-&gt;4-&gt;3-&gt;2-&gt;1</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span><span class="token punctuation">(</span>head<span class="token operator">===</span><span class="token keyword">null</span><span class="token operator">||</span>head<span class="token punctuation">.</span>next<span class="token operator">===</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token comment">//\u9012\u5F52\u4F20\u5165\u4E0B\u4E00\u4E2A\u8282\u70B9\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u5230\u8FBE\u6700\u540E\u4E00\u4E2A\u8282\u70B9</span>
 <span class="token keyword">const</span> newHead<span class="token operator">=</span><span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
 head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token operator">=</span>head<span class="token punctuation">;</span>
 head<span class="token punctuation">.</span>next<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
 <span class="token keyword">return</span> newHead<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">3.</span> \u5927\u4F6C\u601D\u8DEF
\u503C\u98A0\u5012
<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> cur<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> pre<span class="token operator">=</span>head<span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>pre<span class="token punctuation">)</span><span class="token punctuation">{</span>
      cur<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>pre<span class="token punctuation">.</span>val<span class="token punctuation">,</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
      pre<span class="token operator">=</span>pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> cur
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function m(h,b){const a=c("ExternalLinkIcon");return t(),p("div",null,[r,u,n("p",null,[n("a",d,[k,l(a)])]),v])}var w=e(i,[["render",m],["__file","reverse-linked-list.html.vue"]]);export{w as default};