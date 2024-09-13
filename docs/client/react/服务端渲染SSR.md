---
title: 服务端渲染SSR（React）
autoGroup-1: SSR
---

## 服务端渲染SSR（React）

## 快速导航

<TOC />

## 什么是客户端渲染？

react在客户端执行，消耗客户端性能。客户端渲染，页面初始加载的HTML页面中无网页展示内容，需要加载执行`JavaScript`文件中的`React`代码，通过JavaScript渲染生成页面，同时，JavaScript代码会完成页面交互事件的绑定。详细流程可参考下图

**客户端渲染流程**

浏览器发送请求–>服务器返回`HTML`–>浏览器发送`bundle.js`请求–>服务器返回`bundle.js`–>浏览器执行`bundle.js`中的`react`代码完成渲染

![](https://gcc68.oss-cn-hangzhou.aliyuncs.com/2019-11-22-%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-11-22%20%E4%B8%8B%E5%8D%883.46.07.png)


## 什么时服务端渲染？

服务端渲染（Server-Side Render），是指将单页应用（SPA）在服务端渲染为HTML片段，发送到到浏览器，然后为期绑定状态与事件，成为完全可交互页面的过程。

服务端渲染（SSR），客户端渲染（CSR）

对比SPA站点和SSR站点在SEO区别：

SSR优势在于：

- 更友好的SEO（Search Engine Optimization）：爬虫可以直接抓取渲染之后的页面，CSR首次返回的HTMPL文档中，是空节点（root），不包含内容。而SSR返回渲染之后的HTML片段，内容完整，所以能更好地被爬虫分析与索引
- 更快的首屏加载速度：无需等待JavaScript完成下载且执行才显示内容，更快捷地看到完整渲染的页面。有更好的用户体验
- 需要服务端支持，Umijs主要关注是应用UI曾渲染，完成SSR需要服务端（例如，node）


**服务端渲染流程**

浏览器发送请求->服务器运行React代码生成页面->服务器返回页面

## 什么是同构？

> 一套react代码，在服务端执行一次，在客户端也执行一次。在服务端执行同构`renderToString`知识返回界面展示，并不能绑定事件，需要在客户端再次执行js代码绑定事件

服务器运行React代码渲染出HTML–>发送HTML给浏览器–>浏览器接收到内容展示–>浏览器加载js文件–>Js中的React代码在浏览器端重新执行–>JS中的React代码接管页面操作


路由同构

> 让路由在服务端、客户端各跑一遍

