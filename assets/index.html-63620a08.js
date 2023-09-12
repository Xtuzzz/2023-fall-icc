import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as r,e as t}from"./app-e1273ce0.js";const n={},i=t('<h1 id="openjudge" tabindex="-1"><a class="header-anchor" href="#openjudge" aria-hidden="true">#</a> Openjudge</h1><p>非常现代化且好用（x）的在线评测平台，我们会在OJ上布置作业，也会在这里完成上机考试。</p><h2 id="在线评测原理" tabindex="-1"><a class="header-anchor" href="#在线评测原理" aria-hidden="true">#</a> 在线评测原理</h2><p>我们使用“在线评测系统”检查你提交的作业是否正确。当你将某道题的源代码提交到OJ后，编程网格会首先将代码编译为可执行程序。随后，每道题都定义了一系列<strong>测试数据</strong>；每组测试数据由<strong>测试输入</strong>和<strong>期望输出</strong>两部分组成。对于每一组测试数据，编程网格会运行刚刚编译好的程序，并使用测试输入作为程序输入。接下来，它会等待你的程序运行完成，并捕获程序的运行时输出。最后，比较运行时输出和期望输出是否相同。如果相同，则意味着该程序通过了这一次测试。每组测试数据都会进行这样的流程，只有全部测试数据都通过，才能认为你的代码是正确的。</p><p>这里强调：</p><ul><li>测试数据一般都会有很多组，而且不一定包含题面的“例子输入”/“例子输出”。因此，即便你的程序对于“例子输入”/“例子输出”得到了正确的结果，<strong>不意味</strong>着你的程序能够通过所有测试。</li><li>只有当所有测试都通过，你的程序才被认为是正确的。编程网格不设置过程分；即便有一组测试数据未通过，也认为你的解答是错误的。</li></ul><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><ul><li><a href="./basic">基本使用说明</a></li><li><a href="./submit_result">提交结果说明</a></li></ul>',8),o=[i];function s(d,h){return a(),r("div",null,o)}const u=e(n,[["render",s],["__file","index.html.vue"]]);export{u as default};