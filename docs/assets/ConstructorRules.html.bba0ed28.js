import{_ as s,o,c as a,e as n}from"./app.454a660d.js";const e={},t=n(`<div class="custom-container warning"><p class="custom-container-title">Notice</p><p>The English translation of this page has not been completed, you are welcome to contribute translations to us.</p><p>You can use the <strong>Chrome Translation Plugin</strong> to translate entire pages for reference.</p></div><h1 id="constructorrules-class" tabindex="-1"><a class="header-anchor" href="#constructorrules-class" aria-hidden="true">#</a> ConstructorRules <span class="symbol">- class</span></h1><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ConstructorRules</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> rulesData</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ConstructorRulesData</span><span style="color:#ADBAC7;">) </span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">BaseRules</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p><code>Constructor</code> \u67E5\u627E\u6761\u4EF6\u5B9E\u73B0\u7C7B\u3002</p></blockquote><h2 id="paramcount-field" tabindex="-1"><a class="header-anchor" href="#paramcount-field" aria-hidden="true">#</a> paramCount <span class="symbol">- field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> paramCount</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Int</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u8BBE\u7F6E <code>Constructor</code> \u53C2\u6570\u4E2A\u6570\u3002</p></blockquote><p>\u4F60\u53EF\u4EE5\u4E0D\u4F7F\u7528 <code>param</code> \u6307\u5B9A\u53C2\u6570\u7C7B\u578B\u800C\u662F\u4EC5\u4F7F\u7528\u6B64\u53D8\u91CF\u6307\u5B9A\u53C2\u6570\u4E2A\u6570\u3002</p><p>\u82E5\u53C2\u6570\u4E2A\u6570\u5C0F\u4E8E\u96F6\u5219\u5FFD\u7565\u5E76\u4F7F\u7528 <code>param</code>\u3002</p><h2 id="modifiers-method" tabindex="-1"><a class="header-anchor" href="#modifiers-method" aria-hidden="true">#</a> modifiers <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">modifiers</span><span style="color:#ADBAC7;">(conditions</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ModifierConditions</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u8BBE\u7F6E <code>Constructor</code> \u6807\u8BC6\u7B26\u7B5B\u9009\u6761\u4EF6\u3002</p></blockquote><p>\u53EF\u4E0D\u8BBE\u7F6E\u7B5B\u9009\u6761\u4EF6\u3002</p><h2 id="emptyparam-method" tabindex="-1"><a class="header-anchor" href="#emptyparam-method" aria-hidden="true">#</a> emptyParam <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">emptyParam</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u8BBE\u7F6E <code>Constructor</code> \u7A7A\u53C2\u6570\u3001\u65E0\u53C2\u6570\u3002</p></blockquote><h2 id="param-method" tabindex="-1"><a class="header-anchor" href="#param-method" aria-hidden="true">#</a> param <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">param</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">vararg</span><span style="color:#ADBAC7;"> paramType</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Any</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u8BBE\u7F6E <code>Constructor</code> \u53C2\u6570\u3002</p></blockquote><p>\u5982\u679C\u540C\u65F6\u4F7F\u7528\u4E86 <code>paramCount</code> \u5219 <code>paramType</code> \u7684\u6570\u91CF\u5FC5\u987B\u4E0E <code>paramCount</code> \u5B8C\u5168\u5339\u914D\u3002</p><p>\u5982\u679C <code>Constructor</code> \u4E2D\u5B58\u5728\u4E00\u4E9B\u65E0\u610F\u4E49\u53C8\u5F88\u957F\u7684\u7C7B\u578B\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>VagueType</code> \u6765\u66FF\u4EE3\u5B83\u3002</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>\u65E0\u53C2 <strong>Constructor</strong> \u8BF7\u4F7F\u7528 <strong>emptyParam</strong> \u8BBE\u7F6E\u67E5\u627E\u6761\u4EF6\u3002</p><p>\u6709\u53C2 <strong>Constructor</strong> \u5FC5\u987B\u4F7F\u7528\u6B64\u65B9\u6CD5\u8BBE\u5B9A\u53C2\u6570\u6216\u4F7F\u7528 <strong>paramCount</strong> \u6307\u5B9A\u4E2A\u6570\u3002</p></div><h2 id="param-method-1" tabindex="-1"><a class="header-anchor" href="#param-method-1" aria-hidden="true">#</a> param <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">param</span><span style="color:#ADBAC7;">(conditions</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ObjectsConditions</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u8BBE\u7F6E <code>Constructor</code> \u53C2\u6570\u6761\u4EF6\u3002</p></blockquote><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>\u65E0\u53C2 <strong>Constructor</strong> \u8BF7\u4F7F\u7528 <strong>emptyParam</strong> \u8BBE\u7F6E\u67E5\u627E\u6761\u4EF6\u3002</p><p>\u6709\u53C2 <strong>Constructor</strong> \u5FC5\u987B\u4F7F\u7528\u6B64\u65B9\u6CD5\u8BBE\u5B9A\u53C2\u6570\u6216\u4F7F\u7528 <strong>paramCount</strong> \u6307\u5B9A\u4E2A\u6570\u3002</p></div><h2 id="paramcount-method" tabindex="-1"><a class="header-anchor" href="#paramcount-method" aria-hidden="true">#</a> paramCount <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">paramCount</span><span style="color:#ADBAC7;">(numRange</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">IntRange</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u8BBE\u7F6E <code>Constructor</code> \u53C2\u6570\u4E2A\u6570\u8303\u56F4\u3002</p></blockquote><p>\u4F60\u53EF\u4EE5\u4E0D\u4F7F\u7528 <code>param</code> \u6307\u5B9A\u53C2\u6570\u7C7B\u578B\u800C\u662F\u4EC5\u4F7F\u7528\u6B64\u65B9\u6CD5\u6307\u5B9A\u53C2\u6570\u4E2A\u6570\u8303\u56F4\u3002</p><h2 id="paramcount-method-1" tabindex="-1"><a class="header-anchor" href="#paramcount-method-1" aria-hidden="true">#</a> paramCount <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">paramCount</span><span style="color:#ADBAC7;">(conditions</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">CountConditions</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u8BBE\u7F6E <code>Constructor</code> \u53C2\u6570\u4E2A\u6570\u6761\u4EF6\u3002</p></blockquote><p>\u4F60\u53EF\u4EE5\u4E0D\u4F7F\u7528 <code>param</code> \u6307\u5B9A\u53C2\u6570\u7C7B\u578B\u800C\u662F\u4EC5\u4F7F\u7528\u6B64\u65B9\u6CD5\u6307\u5B9A\u53C2\u6570\u4E2A\u6570\u6761\u4EF6\u3002</p>`,58),p=[t];function c(r,l){return o(),a("div",null,p)}const i=s(e,[["render",c],["__file","ConstructorRules.html.vue"]]);export{i as default};
