import{_ as s,o as a,c as n,e as o}from"./app.454a660d.js";const e={},l=o(`<h1 id="currentclass-class" tabindex="-1"><a class="header-anchor" href="#currentclass-class" aria-hidden="true">#</a> CurrentClass <span class="symbol">- class</span></h1><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">CurrentClass</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> classSet</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Class</span><span style="color:#F47067;">&lt;*&gt;</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> instance</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Any</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.0</code> <code>\u6DFB\u52A0</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u5F53\u524D\u5B9E\u4F8B\u7684\u7C7B\u64CD\u4F5C\u5BF9\u8C61\u3002</p></blockquote><h2 id="name-field" tabindex="-1"><a class="header-anchor" href="#name-field" aria-hidden="true">#</a> name <span class="symbol">- field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> name</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.0</code> <code>\u6DFB\u52A0</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u83B7\u5F97\u5F53\u524D <code>classSet</code> \u7684 <code>Class.getName</code>\u3002</p></blockquote><h2 id="simplename-field" tabindex="-1"><a class="header-anchor" href="#simplename-field" aria-hidden="true">#</a> simpleName <span class="symbol">- field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> simpleName</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.0</code> <code>\u6DFB\u52A0</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u83B7\u5F97\u5F53\u524D <code>classSet</code> \u7684 <code>Class.getSimpleName</code>\u3002</p></blockquote><h2 id="generic-method" tabindex="-1"><a class="header-anchor" href="#generic-method" aria-hidden="true">#</a> generic <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">generic</span><span style="color:#ADBAC7;">()</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">GenericClass?</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.0</code> <code>\u6DFB\u52A0</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u83B7\u5F97\u5F53\u524D\u5B9E\u4F8B\u4E2D\u7684\u6CDB\u578B\u7236\u7C7B\u3002</p></blockquote><p>\u5982\u679C\u5F53\u524D\u5B9E\u4F8B\u4E0D\u5B58\u5728\u6CDB\u578B\u5C06\u8FD4\u56DE <code>null</code>\u3002</p><h2 id="generic-method-1" tabindex="-1"><a class="header-anchor" href="#generic-method-1" aria-hidden="true">#</a> generic <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">generic</span><span style="color:#ADBAC7;">(initiate</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">GenericClass</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Unit</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">GenericClass?</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.0</code> <code>\u6DFB\u52A0</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u83B7\u5F97\u5F53\u524D\u5B9E\u4F8B\u4E2D\u7684\u6CDB\u578B\u7236\u7C7B\u3002</p></blockquote><p>\u5982\u679C\u5F53\u524D\u5B9E\u4F8B\u4E0D\u5B58\u5728\u6CDB\u578B\u5C06\u8FD4\u56DE <code>null</code>\u3002</p><h2 id="superclass-method" tabindex="-1"><a class="header-anchor" href="#superclass-method" aria-hidden="true">#</a> superClass <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">superClass</span><span style="color:#ADBAC7;">()</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">SuperClass</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.0</code> <code>\u6DFB\u52A0</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u8C03\u7528\u7236\u7C7B\u5B9E\u4F8B\u3002</p></blockquote><h2 id="field-method" tabindex="-1"><a class="header-anchor" href="#field-method" aria-hidden="true">#</a> field <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">field</span><span style="color:#ADBAC7;">(initiate</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">FieldConditions</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">FieldFinder</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">Result</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">Instance</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.0</code> <code>\u6DFB\u52A0</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u8C03\u7528\u5F53\u524D\u5B9E\u4F8B\u4E2D\u7684\u53D8\u91CF\u3002</p></blockquote><h2 id="method-method" tabindex="-1"><a class="header-anchor" href="#method-method" aria-hidden="true">#</a> method <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;">(initiate</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">MethodConditions</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">MethodFinder</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">Result</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">Instance</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.0</code> <code>\u6DFB\u52A0</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u8C03\u7528\u5F53\u524D\u5B9E\u4F8B\u4E2D\u7684\u65B9\u6CD5\u3002</p></blockquote><h2 id="superclass-class" tabindex="-1"><a class="header-anchor" href="#superclass-class" aria-hidden="true">#</a> SuperClass <span class="symbol">- class</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">inner </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">SuperClass</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> superClassSet</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Class</span><span style="color:#F47067;">&lt;*&gt;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.0</code> <code>\u6DFB\u52A0</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u5F53\u524D\u7C7B\u7684\u7236\u7C7B\u5B9E\u4F8B\u7684\u7C7B\u64CD\u4F5C\u5BF9\u8C61\u3002</p></blockquote><h3 id="name-field-1" tabindex="-1"><a class="header-anchor" href="#name-field-1" aria-hidden="true">#</a> name <span class="symbol">- field</span></h3><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> name</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.0</code> <code>\u6DFB\u52A0</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u83B7\u5F97\u5F53\u524D <code>classSet</code> \u4E2D\u7236\u7C7B\u7684 <code>Class.getName</code>\u3002</p></blockquote><h3 id="simplename-field-1" tabindex="-1"><a class="header-anchor" href="#simplename-field-1" aria-hidden="true">#</a> simpleName <span class="symbol">- field</span></h3><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> simpleName</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.0</code> <code>\u6DFB\u52A0</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u83B7\u5F97\u5F53\u524D <code>classSet</code> \u4E2D\u7236\u7C7B\u7684 <code>Class.getSimpleName</code>\u3002</p></blockquote><h3 id="generic-method-2" tabindex="-1"><a class="header-anchor" href="#generic-method-2" aria-hidden="true">#</a> generic <span class="symbol">- method</span></h3><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">generic</span><span style="color:#ADBAC7;">()</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">GenericClass?</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.0</code> <code>\u6DFB\u52A0</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u83B7\u5F97\u5F53\u524D\u5B9E\u4F8B\u7236\u7C7B\u4E2D\u7684\u6CDB\u578B\u7236\u7C7B\u3002</p></blockquote><p>\u5982\u679C\u5F53\u524D\u5B9E\u4F8B\u4E0D\u5B58\u5728\u6CDB\u578B\u5C06\u8FD4\u56DE <code>null</code>\u3002</p><h3 id="generic-method-3" tabindex="-1"><a class="header-anchor" href="#generic-method-3" aria-hidden="true">#</a> generic <span class="symbol">- method</span></h3><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">generic</span><span style="color:#ADBAC7;">(initiate</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">GenericClass</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Unit</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">GenericClass?</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.0</code> <code>\u6DFB\u52A0</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u83B7\u5F97\u5F53\u524D\u5B9E\u4F8B\u7236\u7C7B\u4E2D\u7684\u6CDB\u578B\u7236\u7C7B\u3002</p></blockquote><p>\u5982\u679C\u5F53\u524D\u5B9E\u4F8B\u4E0D\u5B58\u5728\u6CDB\u578B\u5C06\u8FD4\u56DE <code>null</code>\u3002</p><h3 id="field-method-1" tabindex="-1"><a class="header-anchor" href="#field-method-1" aria-hidden="true">#</a> field <span class="symbol">- method</span></h3><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">field</span><span style="color:#ADBAC7;">(initiate</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">FieldConditions</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">FieldFinder</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">Result</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">Instance</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.0</code> <code>\u6DFB\u52A0</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u8C03\u7528\u7236\u7C7B\u5B9E\u4F8B\u4E2D\u7684\u53D8\u91CF\u3002</p></blockquote><h3 id="method-method-1" tabindex="-1"><a class="header-anchor" href="#method-method-1" aria-hidden="true">#</a> method <span class="symbol">- method</span></h3><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;">(initiate</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">MethodConditions</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">MethodFinder</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">Result</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">Instance</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.0</code> <code>\u6DFB\u52A0</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u8C03\u7528\u7236\u7C7B\u5B9E\u4F8B\u4E2D\u7684\u65B9\u6CD5\u3002</p></blockquote>`,94),p=[l];function c(t,r){return a(),n("div",null,p)}const i=s(e,[["render",c],["__file","CurrentClass.html.vue"]]);export{i as default};
