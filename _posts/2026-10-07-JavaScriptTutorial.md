---
layout: post
title: "JavaScript 教程实例大全"
subtitle: "里面都是 JavaScript"
author: "bill74186"
header-img: "img/post-bg-3.png"
header-mask: 0.2
tags:
  - 教程
  - JS
---

> 看完就“废”了

![js-logo.png](/img/in-post/js-logo.png)

## JavaScript 教程实例大全
涵盖从基础语法到对象、浏览器对象、HTML DOM 的完整知识体系，每个知识点都配有代码实例与详细解释。

> **免责声明：**  
> 本教程基于菜鸟教程（Runoob）的 JavaScript 教程及其四大实例页面整合而成：
> - [JavaScript 教程](https://www.runoob.com/js/js-tutorial.html)
> - [JavaScript 实例](https://www.runoob.com/js/js-examples.html)
> - [JavaScript 对象实例](https://www.runoob.com/js/js-ex-objects.html)
> - [JavaScript 浏览器支持实例](https://www.runoob.com/js/js-ex-browser.html)
> - [JavaScript HTML DOM 实例](https://www.runoob.com/js/js-ex-dom.html)  
> 一些解释使用了 CSDN 博客文章的内容
>
> 我并非抄袭窃取他人私密文档，这些资料都是公开的。我的获取方式也是合法的  
> 本文章只供学习与交流使用。

---

## 目录：

- [1. JavaScript 简介](#1-javascript-简介)
    - [JavaScript 是脚本语言](#javascript-是脚本语言)
    - [JavaScript 能做什么](#javascript-能做什么)
        - [直接写入 HTML 输出流](#直接写入-html-输出流)
        - [对事件的反应](#对事件的反应)
        - [改变 HTML 内容](#改变-html-内容)
        - [改变 HTML 图像](#改变-html-图像)
        - [改变 HTML 样式](#改变-html-样式)
        - [验证输入](#验证输入)
    - [JavaScript 与 Java 的区别](#javascript-与-java-的区别)
    - [ECMAScript 版本](#ecmascript-版本)
- [2. JavaScript 用法](#2-javascript-用法)
    - [`<script>` 标签](#标签)
    - [`<body>` 中的 JavaScript](#中的-javascript)
    - [JavaScript 函数和事件](#javascript-函数和事件)
    - [在 `<head>` 或者 `<body>` 的 JavaScript](#在-或者-的-javascript)
    - [`<head>` 中的 JavaScript 函数](#中的-javascript-函数)
    - [`<body>` 中的 JavaScript 函数](#中的-javascript-函数)
    - [外部的 JavaScript](#外部的-javascript)
    - [注意细节](#注意细节)
- [3. JavaScript 输出](#3-javascript-输出)
    - [JavaScript 显示数据](#javascript-显示数据)
        - [使用 window.alert()](#使用-windowalert)
        - [操作 HTML 元素](#操作-html-元素)
        - [写到 HTML 文档](#写到-html-文档)
        - [写到控制台](#写到控制台)
- [4. JavaScript 语法](#4-javascript-语法)
    - [JavaScript 字面量](#javascript-字面量)
    - [JavaScript 变量](#javascript-变量)
    - [JavaScript 操作符](#javascript-操作符)
    - [JavaScript 语句](#javascript-语句)
    - [JavaScript 关键字](#javascript-关键字)
    - [JavaScript 注释](#javascript-注释)
    - [JavaScript 数据类型](#javascript-数据类型)
    - [JavaScript 字母大小写](#javascript-字母大小写)
    - [JavaScript 字符集](#javascript-字符集)
- [5. JavaScript 语句](#5-javascript-语句)
    - [JavaScript 语句](#javascript-语句)
    - [分号 ;](#分号)
    - [JavaScript 代码块](#javascript-代码块)
    - [JavaScript 语句标识符](#javascript-语句标识符)
    - [空格](#空格)
    - [对代码行进行折行](#对代码行进行折行)
- [6. JavaScript 注释](#6-javascript-注释)
    - [单行注释](#单行注释)
    - [多行注释](#多行注释)
    - [使用注释来阻止执行](#使用注释来阻止执行)
    - [在行末使用注释](#在行末使用注释)
- [7. JavaScript 变量](#7-javascript-变量)
    - [实例](#实例)
    - [变量命名规则](#变量命名规则)
    - [声明（创建）变量](#声明创建变量)
    - [一条语句，多个变量](#一条语句多个变量)
    - [Value = undefined](#value-undefined)
    - [重新声明变量](#重新声明变量)
    - [使用 let 和 const (ES6)](#使用-let-和-const-es6)
        - [let](#let)
        - [const](#const)
    - [let 与 var 的区别（块级作用域）](#let-与-var-的区别块级作用域)
- [8. JavaScript 数据类型](#8-javascript-数据类型)
    - [JavaScript 拥有动态类型](#javascript-拥有动态类型)
    - [JavaScript 字符串](#javascript-字符串)
    - [JavaScript 数字](#javascript-数字)
    - [JavaScript 布尔](#javascript-布尔)
    - [JavaScript 数组](#javascript-数组)
    - [JavaScript 对象](#javascript-对象)
    - [Undefined 和 Null](#undefined-和-null)
    - [声明变量类型](#声明变量类型)
- [9. JavaScript 类型转换](#9-javascript-类型转换)
    - [JavaScript 数据类型](#javascript-数据类型)
    - [typeof 操作符](#typeof-操作符)
    - [constructor 属性](#constructor-属性)
    - [将数字转换为字符串](#将数字转换为字符串)
    - [将字符串转换为数字](#将字符串转换为数字)
    - [一元运算符 +](#一元运算符)
    - [将布尔值转换为数字](#将布尔值转换为数字)
    - [自动转换类型](#自动转换类型)
    - [自动转换为字符串](#自动转换为字符串)
    - [类型转换对照表](#类型转换对照表)
- [10. JavaScript 正则表达式](#10-javascript-正则表达式)
    - [语法](#语法)
    - [使用字符串方法](#使用字符串方法)
        - [search() 方法使用正则表达式](#search-方法使用正则表达式)
        - [replace() 方法使用正则表达式](#replace-方法使用正则表达式)
    - [正则表达式修饰符](#正则表达式修饰符)
    - [正则表达式模式](#正则表达式模式)
    - [使用 test()](#使用-test)
    - [使用 exec()](#使用-exec)
- [11. JavaScript 运算符](#11-javascript-运算符)
    - [运算符说明](#运算符说明)
    - [JavaScript 算术运算符](#javascript-算术运算符)
    - [JavaScript 赋值运算符](#javascript-赋值运算符)
    - [用于字符串的 + 运算符](#用于字符串的-运算符)
    - [对字符串和数字进行加法运算](#对字符串和数字进行加法运算)
- [12. JavaScript 比较和逻辑运算符](#12-javascript-比较和逻辑运算符)
    - [比较运算符](#比较运算符)
    - [逻辑运算符](#逻辑运算符)
    - [条件运算符（三元运算符）](#条件运算符三元运算符)
- [13. JavaScript 条件语句](#13-javascript-条件语句)
    - [if 语句](#if-语句)
    - [if...else 语句](#ifelse-语句)
    - [if...else if...else 语句](#ifelse-ifelse-语句)
    - [随机链接实例](#随机链接实例)
- [14. JavaScript switch 语句](#14-javascript-switch-语句)
    - [语法](#语法)
    - [实例：显示今天的星期名称](#实例显示今天的星期名称)
    - [default 关键词](#default-关键词)
- [15. JavaScript 循环](#15-javascript-循环)
    - [一般写法 vs 使用 for 循环](#一般写法-vs-使用-for-循环)
    - [For 循环](#for-循环)
        - [语句 1 的用法](#语句-1-的用法)
        - [语句 2 的用法](#语句-2-的用法)
        - [语句 3 的用法](#语句-3-的用法)
    - [循环输出 HTML 标题](#循环输出-html-标题)
    - [For/In 循环](#forin-循环)
    - [While 循环](#while-循环)
    - [Do/While 循环](#dowhile-循环)
    - [break 和 continue 语句](#break-和-continue-语句)
- [16. JavaScript 函数](#16-javascript-函数)
    - [函数语法](#函数语法)
    - [调用带参数的函数](#调用带参数的函数)
    - [带有返回值的函数](#带有返回值的函数)
    - [局部变量和全局变量](#局部变量和全局变量)
- [17. JavaScript 作用域](#17-javascript-作用域)
    - [JavaScript 局部作用域](#javascript-局部作用域)
    - [JavaScript 全局变量](#javascript-全局变量)
    - [JavaScript 变量生命周期](#javascript-变量生命周期)
    - [HTML 中的全局变量](#html-中的全局变量)
- [18. JavaScript 闭包](#18-javascript-闭包)
    - [计数器困境](#计数器困境)
    - [JavaScript 内嵌函数](#javascript-内嵌函数)
    - [JavaScript 闭包](#javascript-闭包)
- [19. JavaScript 类（class）](#19-javascript-类class)
    - [创建类](#创建类)
    - [使用类](#使用类)
    - [类表达式](#类表达式)
    - [构造方法](#构造方法)
    - [类的方法](#类的方法)
    - [严格模式 "use strict"](#严格模式-use-strict)
    - [类关键字](#类关键字)
- [20. JavaScript 异步编程](#20-javascript-异步编程)
    - [异步的概念](#异步的概念)
    - [什么时候用异步编程](#什么时候用异步编程)
    - [回调函数](#回调函数)
    - [异步 AJAX](#异步-ajax)
- [21. JavaScript Promise](#21-javascript-promise)
    - [Promise 的三种状态](#promise-的三种状态)
    - [then() 方法](#then-方法)
    - [catch() 方法](#catch-方法)
    - [finally() 方法](#finally-方法)
    - [Promise 的链式调用](#promise-的链式调用)
    - [Promise 的静态方法](#promise-的静态方法)
        - [Promise.all()](#promiseall)
        - [Promise.race()](#promiserace)
        - [Promise.resolve() 和 Promise.reject()](#promiseresolve-和-promisereject)
    - [使用 Promise 处理 AJAX 请求](#使用-promise-处理-ajax-请求)
    - [Promise 与 async/await](#promise-与-asyncawait)
- [22. JavaScript 事件](#22-javascript-事件)
    - [对事件做出反应](#对事件做出反应)
    - [onclick 事件](#onclick-事件)
    - [HTML 事件属性](#html-事件属性)
    - [使用 HTML DOM 来分配事件](#使用-html-dom-来分配事件)
    - [onload 和 onunload 事件](#onload-和-onunload-事件)
    - [onchange 事件](#onchange-事件)
    - [onmouseover 和 onmouseout 事件](#onmouseover-和-onmouseout-事件)
    - [onmousedown、onmouseup 以及 onclick 事件](#onmousedownonmouseup-以及-onclick-事件)
    - [addEventListener 事件监听](#addeventlistener-事件监听)
- [23. JavaScript 错误处理](#23-javascript-错误处理)
    - [JavaScript try 和 catch](#javascript-try-和-catch)
    - [finally 语句](#finally-语句)
    - [Throw 语句](#throw-语句)
- [24. JavaScript 对象](#24-javascript-对象)
    - [所有事物都是对象](#所有事物都是对象)
    - [访问对象的属性](#访问对象的属性)
    - [访问对象的方法](#访问对象的方法)
    - [创建 JavaScript 对象](#创建-javascript-对象)
        - [使用 Object](#使用-object)
        - [使用对象字面量](#使用对象字面量)
        - [使用对象构造器](#使用对象构造器)
        - [创建对象实例](#创建对象实例)
    - [把属性添加到 JavaScript 对象](#把属性添加到-javascript-对象)
    - [把方法添加到 JavaScript 对象](#把方法添加到-javascript-对象)
    - [JavaScript 类](#javascript-类)
    - [JavaScript for...in 循环](#javascript-forin-循环)
    - [JavaScript 的对象是可变的](#javascript-的对象是可变的)
- [25. JavaScript this 关键字](#25-javascript-this-关键字)
    - [方法中的 this](#方法中的-this)
    - [单独使用 this](#单独使用-this)
    - [函数中使用 this（默认）](#函数中使用-this默认)
    - [函数中使用 this（严格模式）](#函数中使用-this严格模式)
    - [事件中的 this](#事件中的-this)
    - [显式函数绑定](#显式函数绑定)
- [26. JavaScript JSON](#26-javascript-json)
    - [什么是 JSON?](#什么是-json)
    - [JSON 实例](#json-实例)
    - [JSON 语法规则](#json-语法规则)
    - [JSON 字符串转换为 JavaScript 对象](#json-字符串转换为-javascript-对象)
    - [JavaScript 对象转换为 JSON 字符串](#javascript-对象转换为-json-字符串)
    - [JSON 与 JS 对象的关系](#json-与-js-对象的关系)
    - [相关函数](#相关函数)
- [27. JavaScript 内置对象实例](#27-javascript-内置对象实例)
    - [String（字符串）对象](#string字符串对象)
        - [返回字符串的长度](#返回字符串的长度)
        - [为字符串添加样式](#为字符串添加样式)
        - [indexOf() 方法 - 返回字符串中指定文本首次出现的位置](#indexof-方法-返回字符串中指定文本首次出现的位置)
        - [match() 方法 - 查找字符串中特定的字符](#match-方法-查找字符串中特定的字符)
        - [replace() 方法 - 替换字符串中的字符](#replace-方法-替换字符串中的字符)
    - [Number（数字）对象](#number数字对象)
        - [数字的创建](#数字的创建)
        - [isNaN() - 判断是否是数字](#isnan-判断是否是数字)
        - [精度问题](#精度问题)
    - [Boolean（布尔）对象](#boolean布尔对象)
        - [检查逻辑值](#检查逻辑值)
    - [Array（数组）对象](#array数组对象)
        - [创建数组](#创建数组)
        - [concat() - 合并两个数组](#concat-合并两个数组)
        - [concat() - 合并三个数组](#concat-合并三个数组)
        - [join() - 用数组的元素组成字符串](#join-用数组的元素组成字符串)
        - [pop() - 删除数组的最后一个元素](#pop-删除数组的最后一个元素)
        - [push() - 数组的末尾添加新的元素](#push-数组的末尾添加新的元素)
        - [reverse() - 反转数组中元素的顺序](#reverse-反转数组中元素的顺序)
        - [shift() - 删除数组的第一个元素](#shift-删除数组的第一个元素)
        - [slice() - 从数组中选择元素](#slice-从数组中选择元素)
        - [sort() - 数组排序（按字母顺序升序）](#sort-数组排序按字母顺序升序)
        - [sort() - 数字排序（按数字顺序升序）](#sort-数字排序按数字顺序升序)
        - [sort() - 数字排序（按数字顺序降序）](#sort-数字排序按数字顺序降序)
        - [splice() - 在数组中添加/删除元素](#splice-在数组中添加删除元素)
        - [toString() - 转换数组到字符串](#tostring-转换数组到字符串)
        - [unshift() - 在数组的开头添加新元素](#unshift-在数组的开头添加新元素)
    - [Date（日期）对象](#date日期对象)
        - [使用 Date() 方法返回今天的日期和时间](#使用-date-方法返回今天的日期和时间)
        - [getTime() - 计算从 1970 年到今天的毫秒数](#gettime-计算从-1970-年到今天的毫秒数)
        - [setFullYear() - 设置具体的日期](#setfullyear-设置具体的日期)
        - [toUTCString() - 把当日的日期转换为 UTC 字符串](#toutcstring-把当日的日期转换为-utc-字符串)
        - [getDay() - 显示星期](#getday-显示星期)
        - [显示一个钟表](#显示一个钟表)
    - [Math（算数）对象](#math算数对象)
        - [round() - 对数字进行舍入](#round-对数字进行舍入)
        - [random() - 返回 0 到 1 之间的随机数](#random-返回-0-到-1-之间的随机数)
        - [max() - 返回两个数中的较大值](#max-返回两个数中的较大值)
        - [min() - 返回两个数中的较小值](#min-返回两个数中的较小值)
        - [摄氏度与华氏转换](#摄氏度与华氏转换)
- [28. JavaScript 浏览器对象实例](#28-javascript-浏览器对象实例)
    - [Window 对象](#window-对象)
        - [弹出警告框](#弹出警告框)
        - [带有换行的警告框](#带有换行的警告框)
        - [确认框](#确认框)
        - [提示框](#提示框)
        - [打开新窗口](#打开新窗口)
        - [打开新窗口并控制其外观](#打开新窗口并控制其外观)
        - [关闭窗口](#关闭窗口)
        - [检查窗口是否已关闭](#检查窗口是否已关闭)
        - [打印当前页面](#打印当前页面)
        - [调整窗口大小](#调整窗口大小)
        - [滚动窗口](#滚动窗口)
        - [setTimeout() 和 clearTimeout()](#settimeout-和-cleartimeout)
        - [setInterval() 和 clearInterval()](#setinterval-和-clearinterval)
    - [Navigator 对象](#navigator-对象)
    - [Screen 对象](#screen-对象)
    - [History 对象](#history-对象)
        - [返回历史列表中的 URL 数量](#返回历史列表中的-url-数量)
        - [后退按钮](#后退按钮)
        - [前进按钮](#前进按钮)
        - [跳转到指定的 URL](#跳转到指定的-url)
    - [Location 对象](#location-对象)
        - [返回主机名和当前 URL 的端口号](#返回主机名和当前-url-的端口号)
        - [返回当前页面的整个 URL](#返回当前页面的整个-url)
        - [返回当前 URL 的路径名](#返回当前-url-的路径名)
        - [返回当前 URL 的协议部分](#返回当前-url-的协议部分)
        - [加载新文档](#加载新文档)
        - [重新载入当前文档](#重新载入当前文档)
        - [替代当前文档](#替代当前文档)
- [29. JavaScript HTML DOM 实例](#29-javascript-html-dom-实例)
    - [Document 对象](#document-对象)
        - [使用 document.write() 输出文本](#使用-documentwrite-输出文本)
        - [使用 document.write() 输出 HTML](#使用-documentwrite-输出-html)
        - [返回文档中锚的数目](#返回文档中锚的数目)
        - [返回文档中表单的数目](#返回文档中表单的数目)
        - [返回文档中的图像数](#返回文档中的图像数)
        - [返回文档中的链接数](#返回文档中的链接数)
        - [返回文档中的所有 cookies](#返回文档中的所有-cookies)
        - [返回文档的标题](#返回文档的标题)
        - [返回文档的完整 URL](#返回文档的完整-url)
        - [write() 和 writeln() 的不同](#write-和-writeln-的不同)
        - [通过 ID 获取元素](#通过-id-获取元素)
        - [通过名称获取元素](#通过名称获取元素)
        - [通过标签名获取元素](#通过标签名获取元素)
    - [Anchor 对象](#anchor-对象)
    - [Area 对象](#area-对象)
    - [Base 对象](#base-对象)
    - [Button 对象](#button-对象)
    - [Form 对象](#form-对象)
        - [重置表单](#重置表单)
        - [提交表单](#提交表单)
    - [Frame/IFrame 对象](#frameiframe-对象)
    - [Image 对象](#image-对象)
    - [Event 对象](#event-对象)
        - [获取被按下的键盘键的 keycode](#获取被按下的键盘键的-keycode)
        - [获取鼠标的坐标](#获取鼠标的坐标)
        - [获取鼠标相对于屏幕的坐标](#获取鼠标相对于屏幕的坐标)
        - [检查 shift 键是否被按下](#检查-shift-键是否被按下)
        - [获取事件类型](#获取事件类型)
    - [Option 和 Select 对象](#option-和-select-对象)
        - [禁用和启用下拉列表](#禁用和启用下拉列表)
        - [获取下拉列表的选项数量](#获取下拉列表的选项数量)
        - [将下拉列表变成多行列表](#将下拉列表变成多行列表)
        - [在下拉列表中选择多个选项](#在下拉列表中选择多个选项)
        - [获取下拉列表中被选中的选项](#获取下拉列表中被选中的选项)
        - [改变下拉列表中被选中的选项的文本](#改变下拉列表中被选中的选项的文本)
        - [删除下拉列表中的选项](#删除下拉列表中的选项)
    - [Table, TableHeader, TableRow, TableData 对象](#table-tableheader-tablerow-tabledata-对象)
        - [改变表格边框的宽度](#改变表格边框的宽度)
        - [改变表格的 cellpadding 和 cellspacing](#改变表格的-cellpadding-和-cellspacing)
        - [获取表格中的行](#获取表格中的行)
        - [获取表格中某行的单元格](#获取表格中某行的单元格)
        - [为表格创建一个标题](#为表格创建一个标题)
        - [删除表格中的行](#删除表格中的行)
        - [添加表格中的行](#添加表格中的行)
        - [添加表格行中的单元格](#添加表格行中的单元格)
        - [单元格内容水平对齐](#单元格内容水平对齐)
        - [单元格内容垂直对齐](#单元格内容垂直对齐)
        - [改变单元格的内容](#改变单元格的内容)
- [30. JavaScript 高级应用实例](#30-javascript-高级应用实例)
    - [创建一个欢迎 cookie](#创建一个欢迎-cookie)
    - [简单的计时](#简单的计时)
    - [使用计时事件制作的钟表](#使用计时事件制作的钟表)
    - [创建对象的实例](#创建对象的实例)
    - [创建用于对象的模板](#创建用于对象的模板)
    - [JavaScript 验证用户输入](#javascript-验证用户输入)
- [附录：JavaScript 学习要点速查](#附录javascript-学习要点速查)
    - [变量声明](#变量声明)
    - [数据类型](#数据类型)
    - [DOM 查找方法](#dom-查找方法)
    - [常用事件](#常用事件)

## 正文：

有点长

## 1. JavaScript 简介

JavaScript 是互联网上最流行的脚本语言，可用于 HTML 和 web，更可广泛用于服务器、PC、笔记本电脑、平板电脑和智能手机等设备。

### JavaScript 是脚本语言

- JavaScript 是一种轻量级的编程语言。
- JavaScript 是可插入 HTML 页面的编程代码。
- JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。
- JavaScript 很容易学习。

### JavaScript 能做什么

#### 直接写入 HTML 输出流

```javascript
document.write("<h1>这是一个标题</h1>");
document.write("<p>这是一个段落。</p>");
```

> **注意：** 您只能在 HTML 输出中使用 `document.write`。如果您在文档加载后使用该方法，会覆盖整个文档。

#### 对事件的反应

```html
<button type="button" onclick="alert('欢迎!')">点我!</button>
```

`alert()` 函数在 JavaScript 中并不常用，但它对于代码测试非常方便。`onclick` 事件只是众多事件之一。

#### 改变 HTML 内容

```javascript
x = document.getElementById("demo"); // 查找元素
x.innerHTML = "Hello JavaScript";   // 改变内容
```

您会经常看到 `document.getElementById("some id")`。这个方法是 HTML DOM 中定义的。DOM（Document Object Model，文档对象模型）是用于访问 HTML 元素的正式 W3C 标准。

#### 改变 HTML 图像

```html
<script>
function changeImage() {
    element = document.getElementById('myimage');
    if (element.src.match("bulbon")) {
        element.src = "/images/pic_bulboff.gif";
    } else {
        element.src = "/images/pic_bulbon.gif";
    }
}
</script>
<img id="myimage" onclick="changeImage()" src="/images/pic_bulboff.gif" width="100" height="180">
```

代码 `element.src.match("bulbon")` 的作用是检索 `<img>` 标签的 `src` 属性值是否包含 `bulbon` 字符串。如果存在，图片 `src` 更新为 `bulboff.gif`；否则更新为 `bulbon.gif`。

#### 改变 HTML 样式

```javascript
x = document.getElementById("demo");   // 找到元素
x.style.color = "#ff0000";             // 改变样式
```

#### 验证输入

```javascript
if (isNaN(x)) {
    alert("不是数字");
}
```

更严格的验证（使用正则去除空格）：

```javascript
if (isNaN(x) || x.replace(/(^\s*)|(\s*$)/g, "") == "") {
    alert("不是数字");
}
```

### JavaScript 与 Java 的区别

JavaScript 与 Java 是两种完全不同的语言，无论在概念上还是设计上。Java（由 Sun 发明）是更复杂的编程语言。ECMA-262 是 JavaScript 标准的官方名称。JavaScript 由 Brendan Eich 发明，于 1995 年出现在 Netscape 中，并于 1997 年被 ECMA 采纳。

### ECMAScript 版本

| 年份 | 名称 | 描述 |
|------|------|------|
| 1997 | ECMAScript 1 | 第一个版本 |
| 1998 | ECMAScript 2 | 版本变更 |
| 1999 | ECMAScript 3 | 添加正则表达式、try/catch |
| 2009 | ECMAScript 5 | 添加 "strict mode" 严格模式、JSON 支持 |
| 2011 | ECMAScript 5.1 | 版本变更 |
| 2015 | ECMAScript 6 | 添加类和模块 |
| 2016 | ECMAScript 7 | 增加指数运算符 `**`、`Array.prototype.includes` |

---

## 2. JavaScript 用法

HTML 中的 JavaScript 脚本代码必须位于 `<script>` 与 `</script>` 标签之间。脚本代码可被放置在 HTML 页面的 `<body>` 和 `<head>` 部分中。

### `<script>` 标签

如需在 HTML 页面中插入 JavaScript，请使用 `<script>` 标签：

```html
<script>
    alert("我的第一个 JavaScript");
</script>
```

> 那些老旧的实例可能会在 `<script>` 标签中使用 `type="text/javascript"`。现在已经不必这样做了。JavaScript 是所有现代浏览器以及 HTML5 中的默认脚本语言。

### `<body>` 中的 JavaScript

在本例中，JavaScript 会在页面加载时向 HTML 的 `<body>` 写文本：

```html
<!DOCTYPE html>
<html>
<body>
    <script>
        document.write("<h1>这是一个标题</h1>");
        document.write("<p>这是一个段落</p>");
    </script>
</body>
</html>
```

### JavaScript 函数和事件

上面例子中的 JavaScript 语句，会在页面加载时执行。通常，我们需要在某个事件发生时执行代码，比如当用户点击按钮时。如果我们把 JavaScript 代码放入函数中，就可以在事件发生时调用该函数。

### 在 `<head>` 或者 `<body>` 的 JavaScript

您可以在 HTML 文档中放入不限数量的脚本。脚本可位于 HTML 的 `<body>` 或 `<head>` 部分中，或者同时存在于两个部分中。通常的做法是把函数放入 `<head>` 部分中，或者放在页面底部。

### `<head>` 中的 JavaScript 函数

```html
<!DOCTYPE html>
<html>
<head>
    <script>
        function myFunction() {
            document.getElementById("demo").innerHTML = "我的第一个 JavaScript 函数";
        }
    </script>
</head>
<body>
    <h1>我的 Web 页面</h1>
    <p id="demo">一个段落</p>
    <button type="button" onclick="myFunction()">尝试一下</button>
</body>
</html>
```

### `<body>` 中的 JavaScript 函数

```html
<!DOCTYPE html>
<html>
<body>
    <h1>我的 Web 页面</h1>
    <p id="demo">一个段落</p>
    <button type="button" onclick="myFunction()">尝试一下</button>
    <script>
        function myFunction() {
            document.getElementById("demo").innerHTML = "我的第一个 JavaScript 函数";
        }
    </script>
</body>
</html>
```

### 外部的 JavaScript

也可以把脚本保存到外部文件中。外部文件通常包含被多个网页使用的代码。外部 JavaScript 文件的文件扩展名是 `.js`。

```html
<!DOCTYPE html>
<html>
<body>
    <script src="myScript.js"></script>
</body>
</html>
```

`myScript.js` 文件代码如下：

```javascript
function myFunction() {
    document.getElementById("demo").innerHTML = "我的第一个 JavaScript 函数";
}
```

> **重要：** 外部脚本不能包含 `<script>` 标签。

### 注意细节

1. 在标签中填写 `onclick` 事件调用函数时，是 `onclick=函数名()`，不是 `onclick=函数名`。
2. 外部 javascript 文件不使用 `<script>` 标签，直接写 javascript 代码。
3. HTML 输出流中使用 `document.write`，相当于在原有 html 代码中添加一串 html 代码。而如果在文档加载后使用（如使用函数），会覆盖整个文档。

```javascript
<script>
function myfunction() {
    document.write("使用函数来执行 document.write，即在文档加载后再执行这个操作，会实现文档覆盖");
}
document.write("<h1>这是一个标题</h1>");
document.write("<p>这是一个段落。</p>");
</script>
<p>
    您只能在 HTML 输出流中使用 <strong>document.write</strong>。
    如果您在文档已加载后使用它（比如在函数中），会覆盖整个文档。
</p>
<button type="button" onclick="myfunction()">点击这里</button>
```

---

## 3. JavaScript 输出

JavaScript 没有任何打印或者输出的函数。

### JavaScript 显示数据

JavaScript 可以通过不同的方式来输出数据：

- 使用 **window.alert()** 弹出警告框。
- 使用 **document.write()** 方法将内容写到 HTML 文档中。
- 使用 **innerHTML** 写入到 HTML 元素。
- 使用 **console.log()** 写入到浏览器的控制台。

#### 使用 window.alert()

```html
<!DOCTYPE html>
<html>
<body>
    <h1>我的第一个页面</h1>
    <p>我的第一个段落。</p>
    <script>
        window.alert(5 + 6);
    </script>
</body>
</html>
```

#### 操作 HTML 元素

如需从 JavaScript 访问某个 HTML 元素，可以使用 `document.getElementById(id)` 方法，并通过 `innerHTML` 来获取或插入元素内容：

```html
<!DOCTYPE html>
<html>
<body>
    <h1>我的第一个 Web 页面</h1>
    <p id="demo">我的第一个段落</p>
    <script>
        document.getElementById("demo").innerHTML = "段落已修改。";
    </script>
</body>
</html>
```

**解释：** `document.getElementById("demo")` 是使用 id 属性查找 HTML 元素；`innerHTML = "段落已修改。"` 是用于修改元素的 HTML 内容。

#### 写到 HTML 文档

出于测试目的，可以将 JavaScript 直接写在 HTML 文档中：

```html
<!DOCTYPE html>
<html>
<body>
    <h1>我的第一个 Web 页面</h1>
    <p>我的第一个段落。</p>
    <script>
        document.write(Date());
    </script>
</body>
</html>
```

> **注意：** 使用 `document.write()` 可以向文档写入内容。如果在文档已完成加载后执行 `document.write`，整个 HTML 页面将被覆盖。

```html
<button onclick="myFunction()">点我</button>
<script>
function myFunction() {
    document.write(Date());
}
</script>
```

#### 写到控制台

如果浏览器支持调试，可以使用 `console.log()` 方法在浏览器中显示 JavaScript 值。浏览器中使用 F12 启用调试模式，在调试窗口中点击 "Console" 菜单。

```html
<!DOCTYPE html>
<html>
<body>
    <h1>我的第一个 Web 页面</h1>
    <script>
        a = 5;
        b = 6;
        c = a + b;
        console.log(c);
    </script>
</body>
</html>
```

---

## 4. JavaScript 语法

JavaScript 是一个程序语言。语法规则定义了语言结构。

### JavaScript 字面量

在编程语言中，一般固定值称为字面量，如 3.14。

**数字（Number）字面量** 可以是整数或者是小数，或者是科学计数(e)：

```javascript
3.14
1001
123e5
```

**字符串（String）字面量** 可以使用单引号或双引号：

```javascript
"John Doe"
'John Doe'
```

**表达式字面量** 用于计算：

```javascript
5 + 6
5 * 10
```

**数组（Array）字面量** 定义一个数组：

```javascript
[40, 100, 1, 5, 25, 10]
```

**对象（Object）字面量** 定义一个对象：

```javascript
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
```

**函数（Function）字面量** 定义一个函数：

```javascript
function myFunction(a, b) { return a * b; }
```

### JavaScript 变量

JavaScript 使用关键字 **var** 来定义变量，使用等号来为变量赋值：

```javascript
var x, length;
x = 5;
length = 6;
```

> 变量是一个**名称**。字面量是一个**值**。

### JavaScript 操作符

JavaScript 使用 **算术运算符** 来计算值：

```javascript
(5 + 6) * 10
```

JavaScript 使用 **赋值运算符** 给变量赋值：

```javascript
x = 5;
y = 6;
z = (x + y) * 10;
```

### JavaScript 语句

在 HTML 中，JavaScript 语句用于向浏览器发出命令。语句是用分号分隔：

```javascript
x = 5 + 6;
y = x * 10;
```

### JavaScript 关键字

JavaScript 关键字用于标识要执行的操作。`var` 关键字告诉浏览器创建一个新的变量：

```javascript
var x = 5 + 6;
var y = x * 10;
```

JavaScript 保留关键字（按字母顺序）：

| abstract | else | instanceof | super |
|----------|------|------------|-------|
| boolean | enum | int | switch |
| break | export | interface | synchronized |
| byte | extends | let | this |
| case | false | long | throw |
| catch | final | native | throws |
| char | finally | new | transient |
| class | float | null | true |
| const | for | package | try |
| continue | function | private | typeof |
| debugger | goto | protected | var |
| default | if | public | void |
| delete | implements | return | volatile |
| do | import | short | while |
| double | in | static | with |

### JavaScript 注释

双斜杠 `//` 后的内容将会被浏览器忽略：

```javascript
// 我不会执行
```

### JavaScript 数据类型

```javascript
var length = 16;                               // Number
var points = x * 10;                           // Number
var lastName = "Johnson";                      // String
var cars = ["Saab", "Volvo", "BMW"];           // Array
var person = {firstName:"John", lastName:"Doe"}; // Object
```

### JavaScript 字母大小写

JavaScript 对大小写是敏感的。函数 `getElementById` 与 `getElementbyID` 是不同的。同样，变量 `myVariable` 与 `MyVariable` 也是不同的。

### JavaScript 字符集

JavaScript 使用 Unicode 字符集。Unicode 覆盖了所有的字符，包含标点等字符。

> JavaScript 中，常见的是驼峰法的命名规则，如 `lastName`（而不是 `lastname`）。

---

## 5. JavaScript 语句

JavaScript 语句向浏览器发出的命令。语句的作用是告诉浏览器该做什么。

### JavaScript 语句

下面的 JavaScript 语句向 id="demo" 的 HTML 元素输出文本 "你好 Dolly"：

```javascript
document.getElementById("demo").innerHTML = "你好 Dolly";
```

### 分号 ;

分号用于分隔 JavaScript 语句。通常我们在每条可执行的语句结尾添加分号。使用分号的另一用处是在一行中编写多条语句：

```javascript
a = 5; b = 6; c = a + b;
```

> 在 JavaScript 中，用分号来结束语句是可选的。

### JavaScript 代码块

JavaScript 可以分批地组合起来。代码块以左花括号开始，以右花括号结束。代码块的作用是一并地执行语句序列：

```javascript
function myFunction() {
    document.getElementById("demo").innerHTML = "你好Dolly";
    document.getElementById("myDIV").innerHTML = "你最近怎么样?";
}
```

### JavaScript 语句标识符

JavaScript 语句通常以一个**语句标识符**为开始，并执行该语句。语句标识符是保留关键字不能作为变量名使用：

| 语句 | 描述 |
|------|------|
| break | 用于跳出循环。 |
| catch | 语句块，在 try 语句块执行出错时执行 catch 语句块。 |
| continue | 跳过循环中的一个迭代。 |
| do ... while | 执行一个语句块，在条件语句为 true 时继续执行该语句块。 |
| for | 在条件语句为 true 时，可以将代码块执行指定的次数。 |
| for ... in | 用于遍历数组或者对象的属性。 |
| function | 定义一个函数。 |
| if ... else | 用于基于不同的条件来执行不同的动作。 |
| return | 返回结果，并退出函数。 |
| switch | 用于基于不同的条件来执行不同的动作。 |
| throw | 抛出（生成）错误。 |
| try | 实现错误处理，与 catch 一同使用。 |
| var | 声明一个变量。 |
| while | 当条件语句为 true 时，执行语句块。 |

### 空格

JavaScript 会忽略多余的空格。下面的两行代码是等效的：

```javascript
var person = "runoob";
var person="runoob";
```

### 对代码行进行折行

可以在文本字符串中使用反斜杠对代码行进行换行：

```javascript
document.write("你好 世界!");
```

> **注意：** 不能像这样折行：`document.write \ ("你好世界!");`

---

## 6. JavaScript 注释

JavaScript 注释可用于提高代码的可读性。JavaScript 不会执行注释。

### 单行注释

单行注释以 `//` 开头。

```javascript
// 输出标题：
document.getElementById("myH1").innerHTML = "欢迎来到我的主页";
// 输出段落：
document.getElementById("myP").innerHTML = "这是我的第一个段落。";
```

### 多行注释

多行注释以 `/*` 开始，以 `*/` 结尾。

```javascript
/*
下面的这些代码会输出
一个标题和一个段落
并将代表主页的开始
*/
document.getElementById("myH1").innerHTML = "欢迎来到我的主页";
document.getElementById("myP").innerHTML = "这是我的第一个段落。";
```

### 使用注释来阻止执行

注释可用于阻止其中一条代码行的执行（可用于调试）：

```javascript
// document.getElementById("myH1").innerHTML = "欢迎来到我的主页";
document.getElementById("myP").innerHTML = "这是我的第一个段落。";
```

也可用于阻止代码块的执行：

```javascript
/*
document.getElementById("myH1").innerHTML = "欢迎来到我的主页";
document.getElementById("myP").innerHTML = "这是我的第一个段落。";
*/
```

### 在行末使用注释

```javascript
var x = 5;      // 声明 x 并把 5 赋值给它
var y = x + 2;  // 声明 y 并把 x+2 赋值给它
```

> **好习惯：** 养成写注释的习惯，方便二次阅读、维护代码，也方便别人理解和维护你的代码。

---

## 7. JavaScript 变量

变量是用于存储信息的"容器"。在 JavaScript 中，变量用于存储数据，并可以在程序执行过程中动态更改。变量可以存储各种类型的数据，如数字、字符串、对象、函数等。

可以使用 `var`、`let` 和 `const` 关键字来声明变量：

- **`var`**：ES5 引入的变量声明方式，具有函数作用域。
- **`let`**：ES6 引入的变量声明方式，具有块级作用域。
- **`const`**：ES6 引入的常量声明方式，具有块级作用域，且值不可变。

### 实例

```javascript
var x = 5;
var y = 6;
var z = x + y;
```

就像代数那样：
```
x = 5
y = 6
z = x + y
```

通过表达式 `z = x + y`，能够计算出 z 的值为 11。

### 变量命名规则

- 变量必须以字母开头
- 变量也能以 `$` 和 `_` 符号开头（不过我们不推荐这么做）
- 变量名称对大小写敏感（`y` 和 `Y` 是不同的变量）

> JavaScript 语句和 JavaScript 变量都对大小写敏感。

### 声明（创建）变量

使用 `var` 关键词来声明变量：

```javascript
var carname;          // 声明后变量为空，值为 undefined
carname = "Volvo";    // 赋值
```

也可以在声明变量时对其赋值：

```javascript
var carname = "Volvo";
document.getElementById("demo").innerHTML = carname;
```

**var 声明特点：**
- 变量可以重复声明（覆盖原变量）。
- 变量未赋值时，默认值为 `undefined`。
- `var` 声明的变量会提升（Hoisting），但不会初始化。

### 一条语句，多个变量

```javascript
var lastname = "Doe", age = 30, job = "carpenter";
```

声明也可横跨多行：

```javascript
var lastname = "Doe",
age = 30,
job = "carpenter";
```

> 一条语句中声明的多个变量不可以同时赋同一个值：`var x, y, z = 1;` 此时 x, y 为 `undefined`，z 为 1。

### Value = undefined

未使用值来声明的变量，其值实际上是 `undefined`：

```javascript
var carname;  // carname 的值为 undefined
```

### 重新声明变量

如果重新声明 JavaScript 变量，该变量的值不会丢失：

```javascript
var carname = "Volvo";
var carname;   // carname 的值依然是 "Volvo"
```

### 使用 let 和 const (ES6)

#### let

`let` 是 ES6 引入的新变量声明方式，推荐使用：

```javascript
let city = "北京";
let age = 30;
console.log(city, age); // 输出: 北京 30
```

#### const

`const` 用于定义常量，即一旦赋值后，变量的值不能再被修改：

```javascript
const z = 10;
// z = 20; // 报错，常量不可重新赋值

if (true) {
    const z = 20; // 不同的常量
    console.log(z); // 输出 20
}
console.log(z); // 输出 10
```

### let 与 var 的区别（块级作用域）

使用 `var` 关键字声明的变量不具备块级作用域的特性，它在 `{}` 外依然能被访问到：

```javascript
{
    var x = 2;
}
// 这里可以使用 x 变量
```

`let` 声明的变量只在 `let` 命令所在的代码块 `{}` 内有效：

```javascript
{
    let x = 2;
}
// 这里不能使用 x 变量
```

在块中重新声明变量也会重新声明块外的变量（var 的问题）：

```javascript
var x = 10;
// 这里输出 x 为 10
{
    var x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 2
```

使用 `let` 可以避免这个问题：

```javascript
let x = 10;
// 这里输出 x 为 10
{
    let x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 10
```

---

## 8. JavaScript 数据类型

- **值类型（基本类型）**：字符串（String）、数字（Number）、布尔（Boolean）、空（Null）、未定义（Undefined）、Symbol。
- **引用数据类型（对象类型）**：对象（Object）、数组（Array）、函数（Function），还有两个特殊的对象：正则（RegExp）和日期（Date）。

> **Symbol** 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。

### JavaScript 拥有动态类型

JavaScript 拥有动态类型。这意味着相同的变量可用作不同的类型：

```javascript
var x;           // x 为 undefined
var x = 5;       // 现在 x 为数字
var x = "John";  // 现在 x 为字符串
```

使用 `typeof` 操作符查看变量的数据类型：

```javascript
typeof "John"                 // 返回 string
typeof 3.14                   // 返回 number
typeof false                  // 返回 boolean
typeof [1,2,3,4]              // 返回 object
typeof {name:'John', age:34}  // 返回 object
```

> `typeof [1,2,3,4]` 返回 `"object"`，这是 JavaScript 早期设计的一个"缺陷"，数组本质上是特殊类型的对象。正确检测数组的方法：
> ```javascript
> Array.isArray([1,2,3]);   // true
> [1,2,3] instanceof Array; // true
> ```

### JavaScript 字符串

字符串是存储字符（比如 "Bill Gates"）的变量。字符串可以是引号中的任意文本。您可以使用单引号或双引号：

```javascript
var carname = "Volvo XC60";
var carname = 'Volvo XC60';
```

您可以在字符串中使用引号，只要不匹配包围字符串的引号即可：

```javascript
var answer = "It's alright";
var answer = "He is called 'Johnny'";
var answer = 'He is called "Johnny"';
```

### JavaScript 数字

JavaScript 只有一种数字类型。数字可以带小数点，也可以不带：

```javascript
var x1 = 34.00;   // 使用小数点来写
var x2 = 34;      // 不使用小数点来写
```

极大或极小的数字可以通过科学（指数）计数法来书写：

```javascript
var y = 123e5;    // 12300000
var z = 123e-5;   // 0.00123
```

### JavaScript 布尔

布尔（逻辑）只能有两个值：`true` 或 `false`。常用在条件测试中。

```javascript
var x = true;
var y = false;
```

### JavaScript 数组

```javascript
var cars = new Array();
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

// 或者
var cars = new Array("Saab", "Volvo", "BMW");

// 字面量方式（推荐）
var cars = ["Saab", "Volvo", "BMW"];
```

数组下标是基于零的，所以第一个项目是 `[0]`，第二个是 `[1]`，以此类推。

### JavaScript 对象

对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔：

```javascript
var person = {firstname:"John", lastname:"Doe", id:5566};
```

声明可横跨多行：

```javascript
var person = {
    firstname : "John",
    lastname  : "Doe",
    id        : 5566
};
```

对象属性有两种寻址方式：

```javascript
name = person.lastname;
name = person["lastname"];
```

### Undefined 和 Null

`Undefined` 这个值表示变量不含有值。可以通过将变量的值设置为 `null` 来清空变量。

```javascript
cars = null;
person = null;
```

### 声明变量类型

当声明新变量时，可以使用关键词 "new" 来声明其类型：

```javascript
var carname = new String;
var x = new Number;
var y = new Boolean;
var cars = new Array;
var person = new Object;
```

> JavaScript 变量均为对象。当您声明一个变量时，就创建了一个新的对象。

---

## 9. JavaScript 类型转换

`Number()` 转换为数字，`String()` 转换为字符串，`Boolean()` 转换为布尔值。

### JavaScript 数据类型

在 JavaScript 中有 6 种不同的数据类型：string、number、boolean、object、function、symbol。

3 种对象类型：Object、Date、Array。2 个不包含任何值的数据类型：null、undefined。

### typeof 操作符

使用 `typeof` 操作符来查看 JavaScript 变量的数据类型：

```javascript
typeof "John"                 // 返回 string
typeof 3.14                   // 返回 number
typeof NaN                    // 返回 number
typeof false                  // 返回 boolean
typeof [1,2,3,4]              // 返回 object
typeof {name:'John', age:34}  // 返回 object
typeof new Date()             // 返回 object
typeof function () {}         // 返回 function
typeof myCar                  // 返回 undefined（如果 myCar 没有声明）
typeof null                   // 返回 object
```

**注意：** NaN 的数据类型是 number；数组(Array)的数据类型是 object；日期(Date)的数据类型为 object；null 的数据类型是 object；未定义变量的数据类型为 undefined。

### constructor 属性

`constructor` 属性返回所有 JavaScript 变量的构造函数：

```javascript
"John".constructor              // 返回函数 String() { [native code] }
(3.14).constructor              // 返回函数 Number() { [native code] }
false.constructor               // 返回函数 Boolean() { [native code] }
[1,2,3,4].constructor           // 返回函数 Array() { [native code] }
{name:'John', age:34}.constructor // 返回函数 Object() { [native code] }
new Date().constructor          // 返回函数 Date() { [native code] }
function () {}.constructor      // 返回函数 Function(){ [native code] }
```

可以使用 constructor 属性来查看对象是否为数组：

```javascript
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}
```

### 将数字转换为字符串

全局方法 `String()` 可以将数字转换为字符串：

```javascript
String(x)         // 将变量 x 转换为字符串并返回
String(123)       // 将数字 123 转换为字符串并返回
String(100 + 23)  // 将数字表达式转换为字符串并返回
```

Number 方法 `toString()` 也有同样的效果：

```javascript
x.toString();
(123).toString();
(100 + 23).toString();
```

数字转换为字符串的其他方法：

| 方法 | 描述 |
|------|------|
| toExponential() | 把对象的值转换为指数计数法。 |
| toFixed() | 把数字转换为字符串，结果的小数点后有指定位数的数字。 |
| toPrecision() | 把数字格式化为指定的长度。 |

### 将字符串转换为数字

全局方法 `Number()` 可以将字符串转换为数字：

```javascript
Number("3.14")   // 返回 3.14
Number(" ")      // 返回 0
Number("")       // 返回 0
Number("99 88")  // 返回 NaN
```

字符串转数字的方法：

| 方法 | 描述 |
|------|------|
| parseFloat() | 解析一个字符串，并返回一个浮点数。 |
| parseInt() | 解析一个字符串，并返回一个整数。 |

### 一元运算符 +

`Operator +` 可用于将变量转换为数字：

```javascript
var y = "5";      // y 是一个字符串
var x = + y;      // x 是一个数字
```

如果变量不能转换，它仍然会是一个数字，但值为 NaN：

```javascript
var y = "John";   // y 是一个字符串
var x = + y;      // x 是一个数字 (NaN)
```

### 将布尔值转换为数字

```javascript
Number(false)  // 返回 0
Number(true)   // 返回 1
```

### 自动转换类型

当 JavaScript 尝试操作一个 "错误" 的数据类型时，会自动转换为 "正确" 的数据类型：

```javascript
5 + null       // 返回 5，null 转换为 0
"5" + null     // 返回 "5null"，null 转换为 "null"
"5" + 1        // 返回 "51"，1 转换为 "1"
"5" - 1        // 返回 4，"5" 转换为 5
```

### 自动转换为字符串

当尝试输出一个对象或一个变量时，JavaScript 会自动调用变量的 toString() 方法：

```javascript
myVar = {name:"Fjohn"}   // toString 转换为 "[object Object]"
myVar = [1,2,3,4]        // toString 转换为 "1,2,3,4"
myVar = new Date()       // toString 转换为日期字符串
```

### 类型转换对照表

| 原始值 | 转换为数字 | 转换为字符串 | 转换为布尔值 |
|--------|------------|--------------|--------------|
| false | 0 | "false" | false |
| true | 1 | "true" | true |
| 0 | 0 | "0" | false |
| 1 | 1 | "1" | true |
| "0" | 0 | "0" | true |
| "1" | 1 | "1" | true |
| NaN | NaN | "NaN" | false |
| Infinity | Infinity | "Infinity" | true |
| "" | 0 | "" | false |
| "20" | 20 | "20" | true |
| "Runoob" | NaN | "Runoob" | true |
| [ ] | 0 | "" | true |
| [20] | 20 | "20" | true |
| [10,20] | NaN | "10,20" | true |
| function(){} | NaN | "function(){}" | true |
| { } | NaN | "[object Object]" | true |
| null | 0 | "null" | false |
| undefined | NaN | "undefined" | false |

---

## 10. JavaScript 正则表达式

正则表达式（Regular Expression，在代码中常简写为 regex、regexp 或 RE）使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜索模式。搜索模式可用于文本搜索和文本替换。

### 语法

```
/正则表达式主体/修饰符(可选)
```

```javascript
var patt = /runoob/i;
```

**实例解析：**
- `/runoob/i` 是一个正则表达式。
- `runoob` 是一个**正则表达式主体**（用于检索）。
- `i` 是一个**修饰符**（搜索不区分大小写）。

### 使用字符串方法

在 JavaScript 中，正则表达式通常用于两个字符串方法：`search()` 和 `replace()`。

#### search() 方法使用正则表达式

```javascript
var str = "Visit Runoob!";
var n = str.search(/Runoob/i);
// 输出结果为：6
```

**解释：** `search()` 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。

#### replace() 方法使用正则表达式

```javascript
var str = document.getElementById("demo").innerHTML;
var txt = str.replace(/microsoft/i, "Runoob");
// 结果输出为：Visit Runoob!
```

**解释：** `replace()` 方法用于在字符串中用一些字符串替换另一些字符串，或替换一个与正则表达式匹配的子串。

### 正则表达式修饰符

| 修饰符 | 描述 |
|--------|------|
| i | 执行对大小写不敏感的匹配。 |
| g | 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。 |
| m | 执行多行匹配。 |

### 正则表达式模式

方括号用于查找某个范围内的字符：

| 表达式 | 描述 |
|--------|------|
| [abc] | 查找方括号之间的任何字符。 |
| [0-9] | 查找任何从 0 至 9 的数字。 |
| (x\|y) | 查找任何以 \| 分隔的选项。 |

元字符是拥有特殊含义的字符：

| 元字符 | 描述 |
|--------|------|
| \d | 查找数字。 |
| \s | 查找空白字符。 |
| \b | 匹配单词边界。 |
| \uxxxx | 查找以十六进制数 xxxx 规定的 Unicode 字符。 |

量词：

| 量词 | 描述 |
|------|------|
| n+ | 匹配任何包含至少一个 n 的字符串。 |
| n* | 匹配任何包含零个或多个 n 的字符串。 |
| n? | 匹配任何包含零个或一个 n 的字符串。 |

### 使用 test()

`test()` 方法是一个正则表达式方法，用于检测一个字符串是否匹配某个模式。如果字符串中含有匹配的文本，则返回 true，否则返回 false。

```javascript
var patt = /e/;
patt.test("The best things in life are free!");
// 字符串中含有 "e"，所以输出为：true

// 也可以合并为一行
/e/.test("The best things in life are free!");
```

### 使用 exec()

`exec()` 方法用于检索字符串中的正则表达式的匹配。该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。

```javascript
/e/.exec("The best things in life are free!");
// 字符串中含有 "e"，所以输出为：e
```

---

## 11. JavaScript 运算符

### 运算符说明

- **运算符 `=`** 用于赋值。
- **运算符 `+`** 用于加值。

```javascript
y = 5;
z = 2;
x = y + z;  // x 的值是 7
```

### JavaScript 算术运算符

`y = 5`，下面的表格解释了这些算术运算符：

| 运算符 | 描述 | 例子 | x 运算结果 | y 运算结果 |
|--------|------|------|------------|------------|
| `+` | 加法 | `x = y + 2` | 7 | 5 |
| `-` | 减法 | `x = y - 2` | 3 | 5 |
| `*` | 乘法 | `x = y * 2` | 10 | 5 |
| `/` | 除法 | `x = y / 2` | 2.5 | 5 |
| `%` | 取模（余数） | `x = y % 2` | 1 | 5 |
| `++` | 自增（前置） | `x = ++y` | 6 | 6 |
| `++` | 自增（后置） | `x = y++` | 5 | 6 |
| `--` | 自减（前置） | `x = --y` | 4 | 4 |
| `--` | 自减（后置） | `x = y--` | 5 | 4 |

### JavaScript 赋值运算符

给定 `x=10` 和 `y=5`：

| 运算符 | 例子 | 等同于 | 运算结果 |
|--------|------|--------|----------|
| `=` | `x = y` | | x = 5 |
| `+=` | `x += y` | `x = x + y` | x = 15 |
| `-=` | `x -= y` | `x = x - y` | x = 5 |
| `*=` | `x *= y` | `x = x * y` | x = 50 |
| `/=` | `x /= y` | `x = x / y` | x = 2 |
| `%=` | `x %= y` | `x = x % y` | x = 0 |

### 用于字符串的 + 运算符

`+` 运算符用于把文本值或字符串变量加起来（连接起来）：

```javascript
txt1 = "What a very";
txt2 = "nice day";
txt3 = txt1 + txt2;  // "What a verynice day"
```

要想在两个字符串之间增加空格，需要把空格插入一个字符串之中：

```javascript
txt1 = "What a very ";
txt2 = "nice day";
txt3 = txt1 + txt2;  // "What a very nice day"
```

或者把空格插入表达式中：

```javascript
txt1 = "What a very";
txt2 = "nice day";
txt3 = txt1 + " " + txt2;  // "What a very nice day"
```

### 对字符串和数字进行加法运算

两个数字相加，返回数字相加的和；如果数字与字符串相加，返回字符串：

```javascript
x = 5 + 5;       // 10
y = "5" + 5;     // "55"
z = "Hello" + 5; // "Hello5"
```

> **规则：** 如果把数字与字符串相加，结果将成为字符串！

---

## 12. JavaScript 比较和逻辑运算符

比较和逻辑运算符用于测试 true 或 false。

### 比较运算符

给定 `x=5`：

| 运算符 | 描述 | 例子 | 返回值 |
|--------|------|------|--------|
| `==` | 等于 | `x == 8` | false |
| `==` | 等于 | `x == 5` | true |
| `===` | 绝对等于（值和类型均相等） | `x === "5"` | false |
| `===` | 绝对等于 | `x === 5` | true |
| `!=` | 不等于 | `x != 8` | true |
| `!==` | 不绝对等于（值和类型有一个不相等，或两个都不相等） | `x !== "5"` | true |
| `!==` | 不绝对等于 | `x !== 5` | false |
| `>` | 大于 | `x > 8` | false |
| `<` | 小于 | `x < 8` | true |
| `>=` | 大于或等于 | `x >= 8` | false |
| `<=` | 小于或等于 | `x <= 8` | true |

### 逻辑运算符

给定 `x=6` 且 `y=3`：

| 运算符 | 描述 | 例子 | 返回值 |
|--------|------|------|--------|
| `&&` | and | `(x < 10 && y > 1)` | true |
| `\|\|` | or | `(x == 5 \|\| y == 5)` | false |
| `!` | not | `!(x == y)` | true |

### 条件运算符（三元运算符）

```javascript
// 语法
variablename = (condition) ? value1 : value2;
```

```javascript
// 实例：判断用户是否成年
var age = 18;
var voteable = (age < 18) ? "太年轻" : "足够成熟";
```

---

## 13. JavaScript 条件语句

条件语句用于基于不同的条件来执行不同的动作。在 JavaScript 中，我们可使用以下条件语句：

- **if 语句** - 只有当指定条件为 true 时，使用该语句来执行代码
- **if...else 语句** - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
- **if...else if....else 语句** - 使用该语句来选择多个代码块之一来执行
- **switch 语句** - 使用该语句来选择多个代码块之一来执行

### if 语句

只有当指定条件为 true 时，该语句才会执行代码。

```javascript
// 语法
if (condition) {
    // 当条件为 true 时执行的代码
}
```

```javascript
// 实例：当时间小于 20:00 时，生成问候 "Good day"
var time = 18;
if (time < 20) {
    x = "Good day";
}
```

> 请使用小写的 `if`。使用大写字母（IF）会生成 JavaScript 错误！

### if...else 语句

在条件为 true 时执行代码，在条件为 false 时执行其他代码。

```javascript
// 语法
if (condition) {
    // 当条件为 true 时执行的代码
} else {
    // 当条件不为 true 时执行的代码
}
```

```javascript
// 实例：当时间小于 20:00 时，生成问候 "Good day"，否则生成问候 "Good evening"
var time = 22;
if (time < 20) {
    x = "Good day";
} else {
    x = "Good evening";
}
// x 的结果是：Good evening
```

### if...else if...else 语句

使用 if....else if...else 语句来选择多个代码块之一来执行。

```javascript
// 语法
if (condition1) {
    // 当条件 1 为 true 时执行的代码
} else if (condition2) {
    // 当条件 2 为 true 时执行的代码
} else {
    // 当条件 1 和条件 2 都不为 true 时执行的代码
}
```

```javascript
// 实例：根据时间生成不同问候
var time = 15;
if (time < 10) {
    document.write("<b>早上好</b>");
} else if (time >= 10 && time < 20) {
    document.write("<b>今天好</b>");
} else {
    document.write("<b>晚上好!</b>");
}
```

### 随机链接实例

这个实例演示了一个链接，当您点击链接时，会带您到不同的地方去。每种机会都是 50% 的概率。

```javascript
function randomLink() {
    var r = Math.random();
    if (r < 0.5) {
        window.location.href = "https://www.runoob.com";
    } else {
        window.location.href = "https://www.google.com";
    }
}
```

---

## 14. JavaScript switch 语句

使用 `switch` 语句来选择多个代码块之一来执行。

### 语法

```javascript
switch(n) {
    case 1:
        // 执行代码块 1
        break;
    case 2:
        // 执行代码块 2
        break;
    default:
        // 与 case 1 和 case 2 不同时执行的代码
}
```

工作原理：首先设置表达式 `n`（通常是一个变量）。随后表达式的值会与结构中的每个 `case` 的值做比较。如果存在匹配，则与该 `case` 关联的代码块会被执行。

### 实例：显示今天的星期名称

```javascript
var d = new Date().getDay();
var x;
switch (d) {
    case 0:
        x = "今天是星期日";
        break;
    case 1:
        x = "今天是星期一";
        break;
    case 2:
        x = "今天是星期二";
        break;
    case 3:
        x = "今天是星期三";
        break;
    case 4:
        x = "今天是星期四";
        break;
    case 5:
        x = "今天是星期五";
        break;
    case 6:
        x = "今天是星期六";
        break;
}
// 假设今天是周三，x 的结果为：今天是星期三
```

### default 关键词

`default` 关键词规定当匹配不存在时所做的事：

```javascript
var d = new Date().getDay();
var x;
switch (d) {
    case 6:
        x = "今天是星期六";
        break;
    case 0:
        x = "今天是星期日";
        break;
    default:
        x = "期待周末";
}
// 如果今天不是周六或周日，x 的结果为：期待周末
```

---

## 15. JavaScript 循环

循环可以将代码块执行指定的次数。JavaScript 支持不同类型的循环：

- **for** - 循环代码块一定的次数
- **for/in** - 循环遍历对象的属性
- **while** - 当指定的条件为 true 时循环指定的代码块
- **do/while** - 同样当指定的条件为 true 时循环指定的代码块

### 一般写法 vs 使用 for 循环

```javascript
// 一般写法
document.write(cars[0] + "<br>");
document.write(cars[1] + "<br>");
document.write(cars[2] + "<br>");
document.write(cars[3] + "<br>");
document.write(cars[4] + "<br>");
document.write(cars[5] + "<br>");

// 使用 for 循环
for (var i = 0; i < cars.length; i++) {
    document.write(cars[i] + "<br>");
}
```

### For 循环

```javascript
// 语法
for (语句 1; 语句 2; 语句 3) {
    // 被执行的代码块
}
```

- **语句 1**：（代码块）开始前执行
- **语句 2**：定义运行循环（代码块）的条件
- **语句 3**：在循环（代码块）已被执行之后执行

```javascript
// 实例
for (var i = 0; i < 5; i++) {
    x = x + "该数字为 " + i + "<br>";
}
// 输出：
// 该数字为 0
// 该数字为 1
// 该数字为 2
// 该数字为 3
// 该数字为 4
```

#### 语句 1 的用法

通常我们会使用语句 1 初始化循环中所用的变量 (`var i=0`)。语句 1 是可选的。

```javascript
// 可以在语句 1 中初始化任意（或者多个）值
for (var i = 0, len = cars.length; i < len; i++) {
    document.write(cars[i] + "<br>");
}

// 可以省略语句 1（比如在循环开始前已经设置了值时）
var i = 2, len = cars.length;
for (; i < len; i++) {
    document.write(cars[i] + "<br>");
}
```

#### 语句 2 的用法

通常语句 2 用于评估初始变量的条件。语句 2 同样是可选的。

> 如果您省略了语句 2，那么必须在循环内提供 `break`。否则循环就无法停下来。

#### 语句 3 的用法

通常语句 3 会增加初始变量的值。语句 3 也是可选的。增量可以是负数 (`i--`)，或者更大 (`i=i+15`)。

```javascript
// 语句 3 也可以省略（比如当循环内部有相应的代码时）
var i = 0, len = cars.length;
for (; i < len;) {
    document.write(cars[i] + "<br>");
    i++;
}
```

### 循环输出 HTML 标题

```javascript
for (var i = 1; i <= 6; i++) {
    document.write("<h" + i + ">标题 " + i + "</h" + i + ">");
}
```

### For/In 循环

JavaScript `for/in` 语句循环遍历对象的属性：

```javascript
var person = {fname:"Bill", lname:"Gates", age:56};
var txt = "";
for (x in person) { // x 为属性名
    txt = txt + person[x] + " ";
}
// txt 的结果为：Bill Gates 56
```

### While 循环

`while` 循环会在指定条件为真时循环执行代码块。

```javascript
// 语法
while (条件) {
    // 需要执行的代码
}
```

```javascript
// 实例：只要变量 i 小于 5，循环将继续运行
while (i < 5) {
    x = x + "该数字为 " + i + "<br>";
    i++;
}
```

### Do/While 循环

`do/while` 循环是 `while` 循环的变体。该循环会在检查条件是否为真之前执行一次代码块，然后如果条件为真的话，就会重复这个循环。

```javascript
// 语法
do {
    // 需要执行的代码
} while (条件);
```

```javascript
// 实例
do {
    x = x + "该数字为 " + i + "<br>";
    i++;
} while (i < 5);
```

> 该循环至少会执行一次，即使条件为 false 它也会执行一次，因为代码块会在条件被测试前执行。

### break 和 continue 语句

- **break** 语句用于跳出循环。
- **continue** 用于跳过循环中的一个迭代。

```javascript
// break 实例：跳出循环
for (var i = 0; i < 10; i++) {
    if (i == 3) {
        break;
    }
    x = x + "该数字为 " + i + "<br>";
}
// 输出：该数字为 0, 1, 2

// continue 实例：跳过当前迭代
for (var i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    x = x + "该数字为 " + i + "<br>";
}
// 输出：0, 1, 2, 4, 5, 6, 7, 8, 9（跳过了 3）
```

---

## 16. JavaScript 函数

函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。

### 函数语法

```javascript
function functionname() {
    // 执行代码
}
```

> 当调用该函数时，会执行函数内的代码。可以在某事件发生时直接调用函数（比如当用户点击按钮时），并且可由 JavaScript 在任何位置进行调用。

> **注意：** JavaScript 对大小写敏感。关键词 `function` 必须是小写的，并且必须以与函数名称相同的大小写来调用函数。

### 调用带参数的函数

在调用函数时，您可以向其传递值，这些值被称为参数。这些参数可以在函数中使用。

```javascript
// 语法
function myFunction(var1, var2) {
    // 代码
}
```

```javascript
// 实例：计算两个数的乘积
function myFunction(a, b) {
    return a * b;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
// 输出：12
```

### 带有返回值的函数

有时，我们会希望函数将值返回调用它的地方。通过使用 `return` 语句就可以实现。

```javascript
// 语法
function myFunction() {
    var x = 5;
    return x;
}
```

```javascript
// 实例：计算两个数字的乘积，并返回结果
function myFunction(a, b) {
    return a * b;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
// 输出：12
```

> 在使用 `return` 语句时，函数会停止执行，并返回指定的值。整个 JavaScript 并不会停止执行，仅仅是函数。

### 局部变量和全局变量

在 JavaScript 函数内部声明的变量（使用 `var`）是局部变量，所以只能在函数内部访问它。（该变量的作用域是局部的）。您可以在不同的函数中使用名称相同的局部变量，因为只有声明过该变量的函数才能识别出该变量。

只要函数运行完毕，本地变量就会被删除。

在函数外声明的变量是全局变量，网页上的所有脚本和函数都能访问它。

```javascript
// 全局变量
var carName = "Volvo";
// 这里可以使用 carName 变量
function myFunction() {
    // 这里也可以使用 carName 变量
}

// 局部变量
// 这里不能使用 carName 变量
function myFunction() {
    var carName = "Volvo";
    // 这里可以使用 carName 变量
}
// 这里不能使用 carName 变量
```

> **变量生命周期：** JavaScript 变量的生命期从它们被声明的时间开始。局部变量会在函数运行以后被删除。全局变量会在页面关闭后被删除。

> **注意：** 如果您把值赋给尚未声明的变量，该变量将被自动作为全局变量声明。例如 `carname = "Volvo"` 将声明一个全局变量 `carname`，即使它在函数内执行。

---

## 17. JavaScript 作用域

作用域是可访问变量的集合。在 JavaScript 中，对象和函数同样也是变量。**作用域为可访问变量、对象、函数的集合。**

### JavaScript 局部作用域

变量在函数内声明，变量为局部变量，具有局部作用域。局部变量只能在函数内部访问。

```javascript
// 此处不能调用 carName 变量
function myFunction() {
    var carName = "Volvo";
    // 函数内可调用 carName 变量
}
```

因为局部变量只作用于函数内，所以不同的函数可以使用相同名称的变量。局部变量在函数开始执行时创建，函数执行完后局部变量会自动销毁。

### JavaScript 全局变量

变量在函数外定义，即为全局变量。全局变量有**全局作用域**：网页中所有脚本和函数均可使用。

```javascript
var carName = "Volvo";
// 此处可调用 carName 变量
function myFunction() {
    // 函数内可调用 carName 变量
}
```

如果变量在函数内没有声明（没有使用 var 关键字），该变量为全局变量：

```javascript
// 此处可调用 carName 变量
function myFunction() {
    carName = "Volvo";
    // 此处可调用 carName 变量
}
```

### JavaScript 变量生命周期

JavaScript 变量生命周期在它声明时初始化。局部变量在函数执行完毕后销毁。全局变量在页面关闭后销毁。

### HTML 中的全局变量

在 HTML 中，全局变量是 window 对象，所以 window 对象可以调用函数内的未声明（未加 var）的局部变量。

```javascript
// 此处可使用 window.carName
function myFunction() {
    carName = "Volvo";
}
```

> **注意：** 所有全局变量都属于 window 对象。你的全局变量或函数，可以覆盖 window 对象的变量或者函数。局部变量，包括 window 对象可以覆盖全局变量和函数。

---

## 18. JavaScript 闭包

JavaScript 变量可以是局部变量或全局变量。私有变量可以用到闭包。

### 计数器困境

设想下如果你想统计一些数值，且该计数器在所有函数中都是可用的。你可以使用全局变量：

```javascript
var counter = 0;
function add() {
    return counter += 1;
}
add();
add();
add();
// 计数器现在为 3
```

但问题来了，页面上的任何脚本都能改变计数器，即便没有调用 `add()` 函数。

如果在函数内声明计数器，如果没有调用函数将无法修改计数器的值：

```javascript
function add() {
    var counter = 0;
    return counter += 1;
}
add();
add();
add();
// 本意是想输出 3, 但事与愿违，输出的都是 1 !
```

### JavaScript 内嵌函数

所有函数都能访问它们上一层的作用域。JavaScript 支持嵌套函数。嵌套函数可以访问上一层的函数变量。

```javascript
function add() {
    var counter = 0;
    function plus() { counter += 1; }
    plus();
    return counter;
}
```

### JavaScript 闭包

还记得函数自我调用吗？

```javascript
var add = (function () {
    var counter = 0;
    return function () { return counter += 1; }
})();

add();
add();
add();
// 计数器为 3
```

**实例解析：**

变量 `add` 指定了函数自我调用的返回值。自我调用函数只执行一次，设置计数器为 0，并返回函数表达式。`add` 变量可以作为一个函数使用。非常棒的部分是它可以访问函数上一层作用域的计数器。

这个叫作 JavaScript **闭包**。它使得函数拥有私有变量变成可能。计数器受匿名函数的作用域保护，只能通过 `add` 方法修改。

> 闭包是一种保护私有变量的机制，它在函数执行时创建一个私有作用域，从而保护内部的私有变量不受外界干扰。直观地说，闭包就像是一个不会被销毁的栈环境。

---

## 19. JavaScript 类（class）

**类是用于创建对象的模板。** 使用 `class` 关键字来创建一个类，类体在一对大括号 `{}` 中。每个类中包含了一个特殊的方法 `constructor()`，它是类的构造函数，用于创建和初始化一个由 class 创建的对象。

```javascript
// 语法
class ClassName {
    constructor() { ... }
}
```

### 创建类

```javascript
class Runoob {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}
```

### 使用类

定义好类后，可以使用 `new` 关键字来创建对象：

```javascript
class Runoob {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}
let site = new Runoob("菜鸟教程", "https://www.runoob.com");
```

创建对象时会自动调用构造函数方法 `constructor()`。

### 类表达式

类表达式是定义类的另一种方法。类表达式可以命名或不命名：

```javascript
// 未命名/匿名类
let Runoob = class {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
};
console.log(Runoob.name);  // output: "Runoob"

// 命名类
let Runoob = class Runoob2 {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
};
console.log(Runoob.name);  // 输出: "Runoob2"
```

### 构造方法

- 构造方法名为 `constructor()`。
- 构造方法在创建新对象时会自动执行。
- 构造方法用于初始化对象属性。
- 如果不定义构造方法，JavaScript 会自动添加一个空的构造方法。

### 类的方法

可以添加任意数量的方法：

```javascript
class Runoob {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
let runoob = new Runoob("菜鸟教程", 2018);
document.getElementById("demo").innerHTML = "菜鸟教程 " + runoob.age() + " 岁了。";
```

也可以向类的方法发送参数：

```javascript
class Runoob {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}
let date = new Date();
let year = date.getFullYear();
let runoob = new Runoob("菜鸟教程", 2020);
document.getElementById("demo").innerHTML = "菜鸟教程 " + runoob.age(year) + " 岁了。";
```

### 严格模式 "use strict"

类声明和类表达式的主体都执行在严格模式下。构造函数、静态方法、原型方法、getter 和 setter 都在严格模式下执行。

```javascript
class Runoob {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        // date = new Date(); // 错误，未声明变量
        let date = new Date(); // 正确
        return date.getFullYear() - this.year;
    }
}
```

### 类关键字

| 关键字 | 描述 |
|--------|------|
| extends | 继承一个类 |
| static | 在类中定义一个静态方法 |
| super | 调用父类的构造方法 |

---

## 20. JavaScript 异步编程

### 异步的概念

异步（Asynchronous, async）是与同步（Synchronous, sync）相对的概念。同步按代码顺序执行，异步不按照代码顺序执行，异步的执行效率更高。异步就是从主线程发射一个子线程来完成任务。

### 什么时候用异步编程

在处理一些简短、快速的操作时，例如计算 1 + 1 的结果，往往在主线程中就可以完成。当一个事件没有结束时，界面将无法处理其他请求。为了避免这种情况，常常用子线程来完成一些可能消耗时间足够长的事情，比如读取一个大文件或者发出一个网络请求。

### 回调函数

回调函数就是一个函数，它是在启动一个异步任务的时候告诉它：等你完成了这个任务之后要干什么。

```javascript
function print() {
    document.getElementById("demo").innerHTML = "RUNOOB!";
}
setTimeout(print, 3000);
```

也可以写成匿名函数：

```javascript
setTimeout(function () {
    document.getElementById("demo").innerHTML = "RUNOOB!";
}, 3000);
```

**注意：** `setTimeout` 会在子线程中等待 3 秒，在 `setTimeout` 函数执行之后主线程并没有停止，所以：

```javascript
setTimeout(function () {
    document.getElementById("demo1").innerHTML = "RUNOOB-1!"; // 三秒后子线程执行
}, 3000);
document.getElementById("demo2").innerHTML = "RUNOOB-2!"; // 主线程先执行
```

执行结果：先输出 "RUNOOB-2!"，三秒后输出 "RUNOOB-1!"。

### 异步 AJAX

XMLHttpRequest 常常用于请求来自远程服务器上的 XML 或 JSON 数据：

```javascript
var xhr = new XMLHttpRequest();
xhr.onload = function () {
    // 输出接收到的文字数据
    document.getElementById("demo").innerHTML = xhr.responseText;
};
xhr.onerror = function () {
    document.getElementById("demo").innerHTML = "请求出错";
};
// 发送异步 GET 请求
xhr.open("GET", "https://www.runoob.com/try/ajax/ajax_info.txt", true);
xhr.send();
```

---

## 21. JavaScript Promise

Promise 是一个 ECMAScript 6 提供的类，目的是更加优雅地书写复杂的异步任务。Promise 是 JavaScript 中用于处理异步操作的对象，它代表一个异步操作的最终完成（或失败）及其结果值。

### Promise 的三种状态

- **pending**：初始状态，既不是成功，也不是失败状态
- **fulfilled**：意味着操作成功完成
- **rejected**：意味着操作失败

```javascript
const myPromise = new Promise((resolve, reject) => {
    // 异步操作代码
    if (/* 操作成功 */) {
        resolve('成功的结果'); // 将 Promise 状态改为 fulfilled
    } else {
        reject('失败的原因');  // 将 Promise 状态改为 rejected
    }
});
```

### then() 方法

`then()` 方法用于指定 Promise 状态变为 fulfilled 或 rejected 时的回调函数：

```javascript
myPromise.then(
    (result) => {
        console.log('成功:', result);
    },
    (error) => {
        console.error('失败:', error);
    }
);
```

### catch() 方法

`catch()` 方法专门用于处理 Promise 被拒绝的情况：

```javascript
myPromise
    .then((result) => {
        console.log('成功:', result);
    })
    .catch((error) => {
        console.error('失败:', error);
    });
```

### finally() 方法

`finally()` 方法无论 Promise 最终状态如何都会执行：

```javascript
myPromise
    .then((result) => {
        console.log('成功:', result);
    })
    .catch((error) => {
        console.error('失败:', error);
    })
    .finally(() => {
        console.log('操作完成');
    });
```

### Promise 的链式调用

Promise 的一个强大特性是可以链式调用多个异步操作：

```javascript
doFirstThing()
    .then((result) => doSecondThing(result))
    .then((newResult) => doThirdThing(newResult))
    .then((finalResult) => {
        console.log('最终结果:', finalResult);
    })
    .catch((error) => {
        console.error('链中某处出错:', error);
    });
```

### Promise 的静态方法

#### Promise.all()

等待所有 Promise 完成，或任意一个 Promise 失败：

```javascript
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // results 是一个包含所有 Promise 结果的数组
    })
    .catch((error) => {
        console.error(error);
    });
```

#### Promise.race()

返回最先完成（无论成功或失败）的 Promise 的结果：

```javascript
Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
```

#### Promise.resolve() 和 Promise.reject()

快速创建已解决或已拒绝的 Promise：

```javascript
const resolvedPromise = Promise.resolve('立即解决的值');
const rejectedPromise = Promise.reject('立即拒绝的原因');
```

### 使用 Promise 处理 AJAX 请求

```javascript
function fetchData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(new Error(xhr.statusText));
            }
        };
        xhr.onerror = () => reject(new Error('网络错误'));
        xhr.send();
    });
}

fetchData('https://api.example.com/data')
    .then((data) => {
        console.log('获取数据成功:', data);
    })
    .catch((error) => {
        console.error('获取数据失败:', error);
    });
```

### Promise 与 async/await

ES2017 引入了 async/await，它基于 Promise 并提供更直观的语法：

```javascript
async function fetchData() {
    try {
        const user = await getUser(123);
        const posts = await getPosts(user.id);
        console.log('用户帖子:', posts);
    } catch (error) {
        console.error('获取数据失败:', error);
    }
}
```

---

## 22. JavaScript 事件

HTML DOM 使 JavaScript 有能力对 HTML 事件做出反应。

### 对事件做出反应

我们可以在事件发生时执行 JavaScript，比如当用户在 HTML 元素上点击时。如需在用户点击某个元素时执行代码，请向一个 HTML 事件属性添加 JavaScript 代码：

```
onclick = JavaScript
```

HTML 事件的例子：
- 当用户点击鼠标时
- 当网页已加载时
- 当图像已加载时
- 当鼠标移动到元素上时
- 当输入字段被改变时
- 当提交 HTML 表单时
- 当用户触发按键时

### onclick 事件

```html
<!-- 当用户在 <h1> 元素上点击时，会改变其内容 -->
<h1 onclick="this.innerHTML='Ooops!'">点击文本!</h1>
```

从事件处理器调用一个函数：

```html
<!DOCTYPE html>
<html>
<head>
    <script>
        function changetext(id) {
            id.innerHTML = "Ooops!";
        }
    </script>
</head>
<body>
    <h1 onclick="changetext(this)">点击文本!</h1>
</body>
</html>
```

### HTML 事件属性

```html
<!-- 向 button 元素分配 onclick 事件 -->
<button onclick="displayDate()">点这里</button>
```

### 使用 HTML DOM 来分配事件

HTML DOM 允许您使用 JavaScript 来向 HTML 元素分配事件：

```javascript
<script>
document.getElementById("myBtn").onclick = function() { displayDate(); };
</script>
```

### onload 和 onunload 事件

`onload` 和 `onunload` 事件会在用户进入或离开页面时被触发。`onload` 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。`onload` 和 `onunload` 事件可用于处理 cookie。

```html
<body onload="checkCookies()">
```

### onchange 事件

`onchange` 事件常结合对输入字段的验证来使用。当用户改变输入字段的内容时，会调用 `upperCase()` 函数。

```html
<input type="text" id="fname" onchange="upperCase()">
```

### onmouseover 和 onmouseout 事件

`onmouseover` 和 `onmouseout` 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。

```html
<div onmouseover="mOver(this)" onmouseout="mOut(this)"
     style="background-color:#D94A38;width:120px;height:20px;padding:40px;">
    Mouse Over Me
</div>

<script>
function mOver(obj) {
    obj.innerHTML = "Thank You";
}
function mOut(obj) {
    obj.innerHTML = "Mouse Over Me";
}
</script>
```

### onmousedown、onmouseup 以及 onclick 事件

`onmousedown`、`onmouseup` 以及 `onclick` 构成了鼠标点击事件的所有部分。首先当点击鼠标按钮时，会触发 `onmousedown` 事件，当释放鼠标按钮时，会触发 `onmouseup` 事件，最后，当完成鼠标点击时，会触发 `onclick` 事件。

### addEventListener 事件监听

`addEventListener()` 方法用于向指定元素添加事件句柄。

```javascript
// 语法
element.addEventListener(event, function, useCapture);
```

- 第一个参数是事件的类型（如 "click" 或 "mousedown"）。
- 第二个参数是事件触发后调用的函数。
- 第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。

```javascript
// 实例：点击元素时输出 "Hello World!"
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Hello World!");
});

// 添加多个事件句柄
document.getElementById("myBtn").addEventListener("click", myFunction);
document.getElementById("myBtn").addEventListener("click", mySecondFunction);

// 移除事件句柄
document.getElementById("myBtn").removeEventListener("click", myFunction);
```

> 事件传递有两种方式：冒泡与捕获。
> - **冒泡**：内部元素的事件会先被触发，然后再触发外部元素。
> - **捕获**：外部元素的事件会先被触发，然后才会触发内部元素的事件。

---

## 23. JavaScript 错误处理

- **try** 语句测试代码块的错误。
- **catch** 语句处理错误。
- **throw** 语句创建自定义错误。
- **finally** 语句在 try 和 catch 语句之后，无论是否有触发异常，该语句都会执行。

### JavaScript try 和 catch

`try` 语句允许我们定义在执行时进行错误测试的代码块。`catch` 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。JavaScript 语句 `try` 和 `catch` 是成对出现的。

```javascript
// 语法
try {
    // 异常的抛出
} catch(e) {
    // 异常的捕获与处理
} finally {
    // 结束处理
}
```

```javascript
// 实例：故意在 try 块中写了一个错字，catch 块会捕捉到错误
var txt = "";
function message() {
    try {
        adddlert("Welcome guest!");  // adddlert 拼写错误，应为 alert
    } catch(err) {
        txt = "本页有一个错误。\n\n";
        txt += "错误描述：" + err.message + "\n\n";
        txt += "点击确定继续。\n\n";
        alert(txt);
    }
}
```

### finally 语句

`finally` 语句不论之前的 try 和 catch 中是否产生异常都会执行该代码块。

```javascript
function myFunction() {
    const messageElement = document.getElementById("p01");
    const inputElement = document.getElementById("demo");
    messageElement.innerHTML = "";
    const rawValue = inputElement.value.trim();

    try {
        if (rawValue === "") {
            throw new Error("输入不能为空，请填写一个数字");
        }
        if (isNaN(rawValue)) {
            throw new Error("请输入有效的数字（如：5、10.5、-3）");
        }
        const x = Number(rawValue);
        if (x > 10) {
            throw new Error(`数字 ${x} 太大了，请输入 5-10 之间的数字`);
        }
        if (x < 5) {
            throw new Error(`数字 ${x} 太小了，请输入 5-10 之间的数字`);
        }
        messageElement.innerHTML = `验证通过！您输入的数字是：${x}`;
        messageElement.style.color = "green";
    } catch (err) {
        messageElement.innerHTML = `错误：${err.message}`;
        messageElement.style.color = "red";
    } finally {
        inputElement.value = "";
        inputElement.focus();
    }
}
```

### Throw 语句

`throw` 语句允许我们创建自定义错误。正确的技术术语是：创建或**抛出异常**（exception）。

```javascript
// 语法
throw exception
```

异常可以是 JavaScript 字符串、数字、逻辑值或对象。

```javascript
// 实例：检测输入变量的值，如果值是错误的，会抛出一个异常
function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        if (x == "") throw "值为空";
        if (isNaN(x)) throw "不是数字";
        x = Number(x);
        if (x < 5) throw "太小";
        if (x > 10) throw "太大";
    } catch(err) {
        message.innerHTML = "错误: " + err;
    }
}
```

---

## 24. JavaScript 对象

JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...此外，JavaScript 允许自定义对象。

### 所有事物都是对象

JavaScript 提供多个内建对象，比如 String、Date、Array 等等。对象只是带有属性和方法的特殊数据类型。

- 布尔型可以是一个对象。
- 数字型可以是一个对象。
- 字符串也可以是一个对象。
- 日期是一个对象。
- 数学和正则表达式也是对象。
- 数组是一个对象。
- 甚至函数也可以是对象。

### 访问对象的属性

属性是与对象相关的值。访问对象属性的语法是：`objectName.propertyName`

```javascript
var message = "Hello World!";
var x = message.length;
// x 的值将是：12
```

### 访问对象的方法

方法是能够在对象上执行的动作。调用方法的语法：`objectName.methodName()`

```javascript
var message = "Hello world!";
var x = message.toUpperCase();
// x 的值将是：HELLO WORLD!
```

### 创建 JavaScript 对象

#### 使用 Object

```javascript
person = new Object();
person.firstname = "John";
person.lastname = "Doe";
person.age = 50;
person.eyecolor = "blue";
```

#### 使用对象字面量

```javascript
var person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isStudent: false,
    greet: function() {
        console.log('Hello, I am ' + this.firstName + ' ' + this.lastName);
    }
};

console.log(person.firstName); // 输出: John
person.greet(); // 输出: Hello, I am John Doe
```

或者：

```javascript
person = {firstname:"John", lastname:"Doe", age:50, eyecolor:"blue"};
```

JavaScript 对象就是一个 **name:value** 集合。

#### 使用对象构造器

```javascript
function person(firstname, lastname, age, eyecolor) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;
}
```

> 在 JavaScript 中，`this` 通常指向的是我们正在执行的函数本身，或者是指向该函数所属的对象（运行时）。

#### 创建对象实例

```javascript
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");
```

### 把属性添加到 JavaScript 对象

您可以通过为对象赋值，向已有对象添加新属性：

```javascript
person.firstname = "John";
person.lastname = "Doe";
person.age = 30;
person.eyecolor = "blue";

x = person.firstname;
// x 的值将是：John
```

### 把方法添加到 JavaScript 对象

方法只不过是附加在对象上的函数。在构造器函数内部定义对象的方法：

```javascript
function person(firstname, lastname, age, eyecolor) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;

    this.changeName = changeName;
    function changeName(name) {
        this.lastname = name;
    }
}

// 使用：
myMother.changeName("Doe");
```

### JavaScript 类

JavaScript 是面向对象的语言，但 JavaScript 不使用类。在 JavaScript 中，不会创建类，也不会通过类来创建对象。JavaScript 基于 prototype，而不是基于类的。

### JavaScript for...in 循环

JavaScript `for...in` 语句循环遍历对象的属性。

```javascript
// 语法
for (variable in object) {
    // 执行的代码
}
```

```javascript
// 实例
var person = {fname:"John", lname:"Doe", age:25};
var txt = "";
for (x in person) {
    txt = txt + person[x] + " ";
}
// txt 的结果为：John Doe 25
```

### JavaScript 的对象是可变的

对象是可变的，它们是通过引用来传递的。

```javascript
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
var x = person;  // 不会创建 person 的副本，是引用
x.age = 10;      // x.age 和 person.age 都会改变
```

---

## 25. JavaScript this 关键字

在 JavaScript 中 `this` 不是固定不变的，它会随着执行环境的改变而改变：

- 在方法中，this 表示该方法所属的对象。
- 如果单独使用，this 表示全局对象。
- 在函数中，this 表示全局对象。
- 在函数中，在严格模式下，this 是未定义的(undefined)。
- 在事件中，this 表示接收事件的元素。
- 类似 call() 和 apply() 方法可以将 this 引用到任何对象。

### 方法中的 this

在对象方法中，this 指向调用它所在方法的对象：

```javascript
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
```

### 单独使用 this

单独使用 this，则它指向全局(Global)对象。在浏览器中，window 就是该全局对象：

```javascript
var x = this;  // [object Window]
```

严格模式下，如果单独使用，this 也是指向全局(Global)对象：

```javascript
"use strict";
var x = this;
```

### 函数中使用 this（默认）

在函数中，函数的所属者默认绑定到 this 上：

```javascript
function myFunction() {
    return this;  // [object Window]
}
```

### 函数中使用 this（严格模式）

严格模式下函数是没有绑定到 this 上，这时候 this 是 **undefined**：

```javascript
"use strict";
function myFunction() {
    return this;  // undefined
}
```

### 事件中的 this

在 HTML 事件句柄中，this 指向了接收事件的 HTML 元素：

```html
<button onclick="this.style.display='none'">点我后我就消失了</button>
```

### 显式函数绑定

`apply` 和 `call` 就是函数对象的方法，允许切换函数执行的上下文环境（context），即 this 绑定的对象：

```javascript
var person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
var person2 = {
    firstName: "John",
    lastName: "Doe",
};
person1.fullName.call(person2);  // 返回 "John Doe"
```

**解释：** 当使用 person2 作为参数调用 person1.fullName 方法时，this 将指向 person2，即便它是 person1 的方法。

---

## 26. JavaScript JSON

JSON 是用于存储和传输数据的格式。JSON 通常用于服务端向网页传递数据。

### 什么是 JSON?

- JSON 英文全称 **JavaScript Object Notation**
- JSON 是一种轻量级的数据交换格式
- JSON 是独立的语言
- JSON 易于理解

> JSON 使用 JavaScript 语法，但是 JSON 格式仅仅是一个文本。文本可以被任何编程语言读取及作为数据格式传递。

### JSON 实例

以下 JSON 语法定义了 sites 对象：3 条网站信息（对象）的数组：

```json
{"sites":[
    {"name":"Runoob", "url":"www.runoob.com"},
    {"name":"Google", "url":"www.google.com"},
    {"name":"Taobao", "url":"www.taobao.com"}
]}
```

### JSON 语法规则

- 数据为键/值对。
- 数据由逗号分隔。
- 大括号保存对象。
- 方括号保存数组。

### JSON 字符串转换为 JavaScript 对象

使用 JavaScript 内置函数 `JSON.parse()` 将字符串转换为 JavaScript 对象：

```javascript
var text = '{ "sites" : [' +
    '{ "name":"Runoob" , "url":"www.runoob.com" },' +
    '{ "name":"Google" , "url":"www.google.com" },' +
    '{ "name":"Taobao" , "url":"www.taobao.com" } ]}';

obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.sites[1].name + " " + obj.sites[1].url;
```

### JavaScript 对象转换为 JSON 字符串

使用 `JSON.stringify()` 方法将 JavaScript 值转换为 JSON 字符串：

```javascript
var obj = {a: 'Hello', b: 'World'};
var json = JSON.stringify(obj);
// 结果是 '{"a": "Hello", "b": "World"}'
```

### JSON 与 JS 对象的关系

JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串。

```javascript
var obj = {a: 'Hello', b: 'World'};  // 这是一个 JS 对象
var json = '{"a": "Hello", "b": "World"}';  // 这是一个 JSON 字符串
```

### 相关函数

| 函数 | 描述 |
|------|------|
| JSON.parse() | 用于将一个 JSON 字符串转换为 JavaScript 对象。 |
| JSON.stringify() | 用于将 JavaScript 值转换为 JSON 字符串。 |

---

## 27. JavaScript 内置对象实例

使用内置的 JavaScript 对象实例。

### String（字符串）对象

#### 返回字符串的长度

```javascript
var txt = "Hello World!";
document.write(txt.length);
// 输出：12
```

**解释：** `length` 属性返回字符串的字符长度，包括空格和标点符号。

#### 为字符串添加样式

```javascript
var txt = "Hello World!";
document.write(txt.big());      // 大字体
document.write(txt.small());    // 小字体
document.write(txt.bold());     // 粗体
document.write(txt.italics());  // 斜体
document.write(txt.fontcolor("red")); // 红色字体
document.write(txt.fontsize(5));      // 字号为 5
```

**解释：** 这些方法用于为字符串添加 HTML 样式标签。

#### indexOf() 方法 - 返回字符串中指定文本首次出现的位置

```javascript
var str = "Hello world, welcome to the universe.";
var n = str.indexOf("welcome");
document.write(n);
// 输出：13
```

**解释：** `indexOf()` 方法返回某个指定的字符串值在字符串中首次出现的位置。如果没有找到匹配的字符串则返回 -1。

#### match() 方法 - 查找字符串中特定的字符

```javascript
var str = "The rain in SPAIN stays mainly in the plain";
var n = str.match(/ain/gi);
document.write(n);
// 输出：ain,AIN,ain,ain
```

**解释：** `match()` 方法在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。`/gi` 表示全局匹配且不区分大小写。

#### replace() 方法 - 替换字符串中的字符

```javascript
var str = "Visit Microsoft!";
var n = str.replace("Microsoft", "Runoob");
document.write(n);
// 输出：Visit Runoob!
```

**解释：** `replace()` 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

---

### Number（数字）对象

#### 数字的创建

```javascript
var x1 = 34.00;   // 使用小数点
var x2 = 34;      // 不使用小数点
var y = 123e5;    // 12300000
var z = 123e-5;   // 0.00123
```

**解释：** JavaScript 只有一种数字类型。数字可以带小数点，也可以不带。极大或极小的数字可以通过科学（指数）计数法来书写。

#### isNaN() - 判断是否是数字

```javascript
var x = "Hello";
if (isNaN(x)) {
    alert("不是数字");
}
```

**解释：** `isNaN()` 函数用于检查其参数是否是非数字值。如果参数值为 NaN 或字符串、对象、undefined 等非数字值则返回 true，否则返回 false。

#### 精度问题

```javascript
var x = 0.1;
var y = 0.2;
var z = x + y;
document.write(z);
// 输出：0.30000000000000004
```

**解释：** JavaScript 中数字的精度问题，使用浮点数时可能出现精度丢失。可以使用 `toFixed()` 方法处理：

```javascript
var z = (x + y).toFixed(2);
document.write(z);
// 输出：0.30
```

---

### Boolean（布尔）对象

#### 检查逻辑值

```javascript
var b1 = new Boolean(0);
var b2 = new Boolean(1);
var b3 = new Boolean("");
var b4 = new Boolean(null);
var b5 = new Boolean(NaN);
var b6 = new Boolean("false");

document.write("0 是 " + b1 + "<br>");     // false
document.write("1 是 " + b2 + "<br>");     // true
document.write("空字符串是 " + b3 + "<br>"); // false
document.write("null 是 " + b4 + "<br>");   // false
document.write("NaN 是 " + b5 + "<br>");    // false
document.write("'false' 是 " + b6 + "<br>"); // true
```

**解释：** 0、空字符串、null、NaN 会被转换为 false，其他值（包括字符串 "false"）会被转换为 true。

---

### Array（数组）对象

#### 创建数组

```javascript
// 方式 1：使用构造函数
var cars = new Array();
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

// 方式 2：构造函数直接传参
var cars = new Array("Saab", "Volvo", "BMW");

// 方式 3：字面量方式（推荐）
var cars = ["Saab", "Volvo", "BMW"];
```

#### concat() - 合并两个数组

```javascript
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);
document.write(children);
// 输出：Cecilie,Lone,Emil,Tobias,Linus
```

**解释：** `concat()` 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。

#### concat() - 合并三个数组

```javascript
var arr1 = [1, 2];
var arr2 = [3, 4];
var arr3 = [5, 6];
var result = arr1.concat(arr2, arr3);
document.write(result);
// 输出：1,2,3,4,5,6
```

#### join() - 用数组的元素组成字符串

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();
document.write(energy);
// 输出：Banana,Orange,Apple,Mango

// 指定分隔符
var energy2 = fruits.join(" and ");
document.write(energy2);
// 输出：Banana and Orange and Apple and Mango
```

**解释：** `join()` 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的，默认使用逗号。

#### pop() - 删除数组的最后一个元素

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var removed = fruits.pop();
document.write("删除的元素：" + removed + "<br>");
document.write("剩余数组：" + fruits);
// 输出：
// 删除的元素：Mango
// 剩余数组：Banana,Orange,Apple
```

**解释：** `pop()` 方法用于删除并返回数组的最后一个元素。

#### push() - 数组的末尾添加新的元素

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
document.write(fruits);
// 输出：Banana,Orange,Apple,Mango,Kiwi
```

**解释：** `push()` 方法可向数组的末尾添加一个或多个元素，并返回新的长度。

#### reverse() - 反转数组中元素的顺序

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
document.write(fruits);
// 输出：Mango,Apple,Orange,Banana
```

**解释：** `reverse()` 方法用于颠倒数组中元素的顺序。

#### shift() - 删除数组的第一个元素

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var removed = fruits.shift();
document.write("删除的元素：" + removed + "<br>");
document.write("剩余数组：" + fruits);
// 输出：
// 删除的元素：Banana
// 剩余数组：Orange,Apple,Mango
```

**解释：** `shift()` 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。

#### slice() - 从数组中选择元素

```javascript
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
document.write(citrus);
// 输出：Orange,Lemon
```

**解释：** `slice()` 方法可从已有的数组中返回选定的元素。`slice(start, end)` 选择从 start 到 end（不包含 end）的元素。

#### sort() - 数组排序（按字母顺序升序）

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
document.write(fruits);
// 输出：Apple,Banana,Mango,Orange
```

**解释：** `sort()` 方法用于对数组的元素进行排序。默认按字母升序排序。

#### sort() - 数字排序（按数字顺序升序）

```javascript
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return a - b; });
document.write(points);
// 输出：1,5,10,25,40,100
```

**解释：** 默认的 `sort()` 方法按字符串顺序排序，对数字排序需要传入比较函数 `function(a, b) { return a - b; }`。

#### sort() - 数字排序（按数字顺序降序）

```javascript
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return b - a; });
document.write(points);
// 输出：100,40,25,10,5,1
```

**解释：** 降序排序使用 `return b - a;`。

#### splice() - 在数组中添加/删除元素

```javascript
// 在数组的第 2 位置添加一个元素
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
document.write(fruits);
// 输出：Banana,Orange,Lemon,Kiwi,Apple,Mango
```

**解释：** `splice(index, howmany, item1, ..., itemX)` 方法向/从数组中添加/删除项目，然后返回被删除的项目。第一个参数为操作位置，第二个参数为删除的个数（0 表示不删除），后面的参数为要添加的元素。

#### toString() - 转换数组到字符串

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.toString());
// 输出：Banana,Orange,Apple,Mango
```

**解释：** `toString()` 方法可把数组转换为字符串，并返回结果。

#### unshift() - 在数组的开头添加新元素

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
document.write(fruits);
// 输出：Lemon,Banana,Orange,Apple,Mango
```

**解释：** `unshift()` 方法可向数组的开头添加一个或更多元素，并返回新的长度。

---

### Date（日期）对象

#### 使用 Date() 方法返回今天的日期和时间

```javascript
var d = new Date();
document.write(d);
// 输出：Wed Oct 07 2026 10:00:00 GMT+0800 (中国标准时间)
```

**解释：** `new Date()` 创建一个表示当前日期和时间的对象。

#### getTime() - 计算从 1970 年到今天的毫秒数

```javascript
var d = new Date();
var ms = d.getTime();
document.write("从 1970/01/01 至今已有：" + ms + " 毫秒");
```

**解释：** `getTime()` 方法返回从 1970 年 1 月 1 日至今的毫秒数。这是 Unix 时间戳的毫秒表示。

#### setFullYear() - 设置具体的日期

```javascript
var d = new Date();
d.setFullYear(2020, 0, 1);
document.write(d);
// 输出：Wed Jan 01 2020 10:00:00 GMT+0800
```

**解释：** `setFullYear(year, month, day)` 方法用于设置年份，也可以设置月份和日期。月份从 0 开始（0 表示一月）。

#### toUTCString() - 把当日的日期转换为 UTC 字符串

```javascript
var d = new Date();
document.write(d.toUTCString());
// 输出：Wed, 07 Oct 2026 02:00:00 GMT
```

**解释：** `toUTCString()` 方法根据世界时间 (UTC) 把 Date 对象转换为字符串，并返回结果。

#### getDay() - 显示星期

```javascript
var d = new Date();
var weekday = new Array(7);
weekday[0] = "星期日";
weekday[1] = "星期一";
weekday[2] = "星期二";
weekday[3] = "星期三";
weekday[4] = "星期四";
weekday[5] = "星期五";
weekday[6] = "星期六";

document.write("今天是" + weekday[d.getDay()]);
```

**解释：** `getDay()` 方法返回表示星期的一个数字（0 到 6），0 表示星期日。需要配合数组将数字转换为星期名称。

#### 显示一个钟表

```javascript
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i; }  // 在小于 10 的数字前加 0
    return i;
}
// 在 <body onload="startTime()"> 中调用
```

**解释：** 该实例通过 `setTimeout` 每 500 毫秒更新一次时间显示，实现实时钟表效果。`checkTime` 函数用于在个位数前补零。

---

### Math（算数）对象

#### round() - 对数字进行舍入

```javascript
document.write(Math.round(2.5));
// 输出：3
```

**解释：** `round()` 方法可把一个数字舍入为最接近的整数。四舍五入。

#### random() - 返回 0 到 1 之间的随机数

```javascript
document.write(Math.random());
// 输出：0.123456789（每次不同）

// 获取 0 到 10 之间的随机整数
document.write(Math.floor(Math.random() * 11));
```

**解释：** `random()` 方法返回介于 0（包含）~ 1（不包含）之间的一个随机数。要获得指定范围的随机整数，可以使用 `Math.floor(Math.random() * (max + 1))`。

#### max() - 返回两个数中的较大值

```javascript
document.write(Math.max(5, 10));
// 输出：10
```

**解释：** `max()` 方法可返回两个指定的数中带有较大的值的那个数。

#### min() - 返回两个数中的较小值

```javascript
document.write(Math.min(5, 10));
// 输出：5
```

**解释：** `min()` 方法可返回两个指定的数中带有较小的值的那个数。

#### 摄氏度与华氏转换

```javascript
// 摄氏度转华氏度
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 华氏度转摄氏度
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

document.write(toFahrenheit(100)); // 输出：212
document.write(toCelsius(212));    // 输出：100
```

**解释：** 摄氏度转华氏度公式：`F = C * 9/5 + 32`；华氏度转摄氏度公式：`C = (F - 32) * 5/9`。

---

## 28. JavaScript 浏览器对象实例

使用 JavaScript 来访问和控制浏览器对象。

### Window 对象

所有浏览器都支持 `window` 对象。它表示浏览器窗口。所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。

#### 弹出警告框

```html
<input type="button" onclick="alert('你好，我是一个警告框！')" value="显示警告框">
```

**解释：** `window.alert()` 方法可以不带上 window 对象，直接使用 `alert()` 方法。警告框经常用于确保用户可以得到某些信息。

#### 带有换行的警告框

```javascript
alert("Hello\nHow are you?");
```

**解释：** 弹窗使用反斜杠 + "n"（`\n`）来设置换行。

#### 确认框

```javascript
var r = confirm("按下按钮");
if (r == true) {
    x = "你按下了\"确定\"按钮!";
} else {
    x = "你按下了\"取消\"按钮!";
}
```

**解释：** `confirm()` 方法显示一个带有指定消息和确认及取消按钮的对话框。如果访问者单击"确定"，返回 true；若单击"取消"，返回 false。

#### 提示框

```javascript
var person = prompt("请输入你的名字", "Harry Potter");
if (person != null && person != "") {
    x = "你好 " + person + "! 今天感觉如何?";
    document.getElementById("demo").innerHTML = x;
}
```

**解释：** `prompt()` 方法用于显示可提示用户进行输入的对话框。如果用户点击确认，那么返回值为输入的值；如果用户点击取消，那么返回值为 null。

#### 打开新窗口

```javascript
function openWin() {
    window.open("https://www.runoob.com");
}
```

**解释：** `window.open()` 方法用于打开一个新的浏览器窗口或查找一个已命名的窗口。

#### 打开新窗口并控制其外观

```javascript
function openWin() {
    window.open("https://www.runoob.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}
```

**解释：** 第三个参数可以控制新窗口的外观，包括工具栏、滚动条、是否可调整大小、位置和尺寸等。

#### 关闭窗口

```javascript
function closeWin() {
    myWindow.close();
}
```

**解释：** `close()` 方法用于关闭浏览器窗口。

#### 检查窗口是否已关闭

```javascript
function checkWin() {
    if (!myWindow) {
        document.getElementById("msg").innerHTML = "没有窗口被打开!";
    } else if (myWindow.closed) {
        document.getElementById("msg").innerHTML = "窗口已关闭!";
    } else {
        document.getElementById("msg").innerHTML = "窗口未关闭!";
    }
}
```

#### 打印当前页面

```javascript
function printPage() {
    window.print();
}
```

**解释：** `print()` 方法用于打印当前窗口的内容，会弹出打印对话框。

#### 调整窗口大小

```javascript
function resizeWin() {
    myWindow.resizeTo(800, 600);  // 调整到指定大小
    myWindow.focus();
}

function resizeBy() {
    myWindow.resizeBy(100, 50);    // 相对于当前大小调整
    myWindow.focus();
}
```

**解释：** `resizeTo(width, height)` 将窗口调整到指定的宽高；`resizeBy(width, height)` 相对于当前窗口的大小进行调整。

#### 滚动窗口

```javascript
// 由指定的像素数滚动内容
window.scrollBy(100, 100);

// 滚动到指定内容处
window.scrollTo(0, 500);
```

**解释：** `scrollBy(xnum, ynum)` 把内容滚动指定的像素数；`scrollTo(xpos, ypos)` 把内容滚动到指定的坐标。

#### setTimeout() 和 clearTimeout()

```javascript
var c = 0;
var t;

function timedCount() {
    document.getElementById('txt').value = c;
    c = c + 1;
    t = setTimeout(function() { timedCount(); }, 1000);
}

function stopCount() {
    clearTimeout(t);
}
```

**解释：** `setTimeout()` 方法用于在指定的毫秒数后调用函数或计算表达式。`clearTimeout()` 方法可取消由 `setTimeout()` 方法设置的 timeout。

#### setInterval() 和 clearInterval()

```javascript
var myVar = setInterval(function() { myTimer(); }, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
    clearInterval(myVar);
}
```

**解释：** `setInterval()` 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。`clearInterval()` 方法可取消由 `setInterval()` 方法设置的 timeout。

### Navigator 对象

`Navigator` 对象包含有关访问者浏览器的信息。

```javascript
document.write("浏览器代号: " + navigator.appCodeName + "<br>");
document.write("浏览器名称: " + navigator.appName + "<br>");
document.write("浏览器版本: " + navigator.appVersion + "<br>");
document.write("启用Cookies: " + navigator.cookieEnabled + "<br>");
document.write("硬件平台: " + navigator.platform + "<br>");
document.write("用户代理: " + navigator.userAgent + "<br>");
document.write("用户代理语言: " + navigator.systemLanguage);
```

**解释：** `navigator` 对象包含有关浏览器的信息，如浏览器名称、版本、用户代理字符串等。注意这些信息可能因浏览器而异，不总是可靠的。

### Screen 对象

`Screen` 对象包含有关客户端显示屏幕的信息。

```javascript
document.write("总宽度/高度: ");
document.write(screen.width + "*" + screen.height);
document.write("<br>");
document.write("可用宽度/高度: ");
document.write(screen.availWidth + "*" + screen.availHeight);
document.write("<br>");
document.write("色彩深度: ");
document.write(screen.colorDepth);
document.write("<br>");
document.write("色彩分辨率: ");
document.write(screen.pixelDepth);
```

**解释：** `screen` 对象返回渲染内容的屏幕相关信息，如屏幕的宽度、高度、颜色深度等。`availWidth` 和 `availHeight` 排除了界面特性，如任务栏。

### History 对象

`History` 对象包含浏览器的历史。

#### 返回历史列表中的 URL 数量

```javascript
document.write(history.length);
```

**解释：** `history.length` 属性返回浏览器历史列表中的 URL 数量。

#### 后退按钮

```javascript
function goBack() {
    window.history.back();
}
```

**解释：** `back()` 方法加载历史列表中的前一个 URL，等价于点击浏览器的后退按钮。

#### 前进按钮

```javascript
function goForward() {
    window.history.forward();
}
```

**解释：** `forward()` 方法加载历史列表中的下一个 URL，等价于点击浏览器的前进按钮。

#### 跳转到指定的 URL

```javascript
function goUrl() {
    window.history.go(-2);  // 后退两个页面
}
```

**解释：** `go(number|URL)` 方法加载 history 列表中的某个具体页面，或跳转到指定的 URL。负数表示后退，正数表示前进。

### Location 对象

`Location` 对象包含有关当前 URL 的信息。

#### 返回主机名和当前 URL 的端口号

```javascript
document.write(location.host);
// 可能输出：www.runoob.com:80
```

**解释：** `location.host` 返回主机名和端口号。如果端口是默认的 80，则可能不显示端口号。

#### 返回当前页面的整个 URL

```javascript
document.write(location.href);
// 输出：https://www.runoob.com/js/js-location.html
```

#### 返回当前 URL 的路径名

```javascript
document.write(location.pathname);
// 输出：/js/js-location.html
```

#### 返回当前 URL 的协议部分

```javascript
document.write(location.protocol);
// 输出：https:
```

#### 加载新文档

```javascript
function newDoc() {
    window.location.assign("https://www.runoob.com");
}
```

**解释：** `assign()` 方法可加载一个新的文档。

#### 重新载入当前文档

```javascript
function reloadDoc() {
    location.reload();
}
```

**解释：** `reload()` 方法用于刷新当前文档，类似于浏览器的刷新按钮。

#### 替代当前文档

```javascript
function replaceDoc() {
    window.location.replace("https://www.runoob.com");
}
```

**解释：** `replace()` 方法可用一个新文档取代当前文档。与 `assign()` 不同的是，`replace()` 不会在历史记录中生成新记录，而是替换当前记录。

---

## 29. JavaScript HTML DOM 实例

通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

### Document 对象

#### 使用 document.write() 输出文本

```javascript
document.write("Hello World!");
```

**解释：** `document.write()` 方法可向文档写入 HTML 表达式或 JavaScript 代码。

#### 使用 document.write() 输出 HTML

```javascript
document.write("<h1>这是一个标题</h1>");
document.write("<p>这是一个段落</p>");
```

#### 返回文档中锚的数目

```javascript
document.write("文档中锚的数目: " + document.anchors.length);
```

**解释：** `document.anchors` 返回文档中所有锚（`<a>` 标签带有 name 属性）的集合。

#### 返回文档中表单的数目

```javascript
document.write("文档中表单的数目: " + document.forms.length);
```

#### 返回文档中的图像数

```javascript
document.write("文档中的图像数: " + document.images.length);
```

#### 返回文档中的链接数

```javascript
document.write("文档中的链接数: " + document.links.length);
```

#### 返回文档中的所有 cookies

```javascript
document.write("Cookies: " + document.cookie);
```

**解释：** `document.cookie` 属性返回所有 cookies，格式为 `name=value; name2=value2; ...`。

#### 返回文档的标题

```javascript
document.write("文档标题: " + document.title);
```

#### 返回文档的完整 URL

```javascript
document.write("文档 URL: " + document.URL);
```

#### write() 和 writeln() 的不同

```javascript
document.write("第一行");
document.write("第二行");
// 输出：第一行第二行

document.writeln("第一行");
document.writeln("第二行");
// 输出：第一行 第二行（在 pre 标签中换行）
```

**解释：** `writeln()` 与 `write()` 类似，但会在每段输出后添加一个换行符。注意在 HTML 中换行符通常被忽略，需要配合 `<pre>` 标签才能显示。

#### 通过 ID 获取元素

```javascript
var x = document.getElementById("intro");
document.write(x.innerHTML);
```

**解释：** `getElementById()` 是通过元素的 id 属性获取元素，是最常用的 DOM 查找方法。

#### 通过名称获取元素

```javascript
var x = document.getElementsByName("fname");
document.write(x.length);
```

**解释：** `getElementsByName()` 方法可返回带有指定名称的对象的集合。

#### 通过标签名获取元素

```javascript
var x = document.getElementsByTagName("p");
document.write(x.length);
```

**解释：** `getElementsByTagName()` 方法可返回带有指定标签名的对象的集合。

---

### Anchor 对象

Anchor 对象表示 HTML 超链接。

```javascript
// 返回和设置链接的 href 属性
var x = document.getElementById("myAnchor");
document.write(x.href);
x.href = "https://www.runoob.com";

// 返回链接的 target 属性
document.write(x.target);

// 改变链接的 target 属性
x.target = "_blank";
```

**解释：** Anchor 对象的常用属性包括 `href`（链接地址）、`target`（目标）、`name`（名称）、`charset`（字符集）、`hreflang`（语言）等。

---

### Area 对象

Area 对象表示图像映射中的一个区域。

```javascript
// 返回图像映射某个区域的替代文字
var x = document.getElementById("myArea");
document.write(x.alt);

// 返回区域的 href 属性
document.write(x.href);

// 返回区域的坐标
document.write(x.coords);
```

**解释：** Area 对象的属性与 Anchor 类似，包括 `alt`、`coords`、`href`、`shape`、`target` 等。

---

### Base 对象

Base 对象表示 HTML 的 base 元素。

```javascript
// 返回页面上所有相对 URL 的基 URL
var x = document.getElementsByTagName("base")[0];
document.write(x.href);

// 返回页面上所有相对链接的基 target
document.write(x.target);
```

---

### Button 对象

Button 对象代表一个按钮。

```javascript
// 当点击完 button 不可用
function disableButton() {
    document.getElementById("myBtn").disabled = true;
}

// 返回 button 的 name
document.getElementById("myBtn").name;

// 返回 button 的 value
document.getElementById("myBtn").value;
```

**解释：** Button 对象的常用属性有 `disabled`（是否禁用）、`name`（名称）、`type`（类型）、`value`（值）、`form`（所属表单）等。

---

### Form 对象

Form 对象代表一个 HTML 表单。

```javascript
// 返回表单中所有元素的 value
var x = document.getElementById("myForm");
var txt = "";
for (var i = 0; i < x.length; i++) {
    txt += x.elements[i].value + "<br>";
}

// 返回表单中元素的数量
document.write(x.length);

// 返回发送表单数据的方法
document.write(x.method);

// 返回表单的 name
document.write(x.name);
```

#### 重置表单

```javascript
function resetForm() {
    document.getElementById("myForm").reset();
}
```

**解释：** `reset()` 方法可把表单中的元素重置为它们的默认值。

#### 提交表单

```javascript
function submitForm() {
    document.getElementById("myForm").submit();
}
```

**解释：** `submit()` 方法提交表单，类似于点击提交按钮。

---

### Frame/IFrame 对象

Frame 对象代表一个 HTML 框架，IFrame 对象代表一个内联框架。

```javascript
// 改变 iframe 的高度和宽度
var x = document.getElementById("myFrame");
x.height = "300";
x.width = "500";

// 改变 iframe 的 src
x.src = "https://www.runoob.com";

// 删除 iframe 的 frameborder
x.frameBorder = "no";
```

**解释：** IFrame 对象常用属性包括 `src`（源地址）、`width`、`height`（尺寸）、`frameBorder`（边框）、`scrolling`（滚动条）等。

---

### Image 对象

Image 对象代表嵌入的图像。

```javascript
// 改变图片的 src
var x = document.getElementById("myImg");
x.src = "new_image.gif";

// 返回 image 的替代文本
document.write(x.alt);

// 改变 image 的高度和宽度
x.height = "100";
x.width = "100";
```

**解释：** Image 对象常用属性有 `src`（图片地址）、`alt`（替代文本）、`width`、`height`（尺寸）、`border`（边框）等。

---

### Event 对象

Event 对象代表事件的状态。

#### 获取被按下的键盘键的 keycode

```javascript
function whichKey(event) {
    var key = event.keyCode;
    alert("按键码: " + key);
}
// <input type="text" onkeydown="whichKey(event)">
```

**解释：** `event.keyCode` 返回触发事件的按键的 Unicode 字符码或键码。

#### 获取鼠标的坐标

```javascript
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    alert("X 坐标: " + x + ", Y 坐标: " + y);
}
```

**解释：** `clientX` 和 `clientY` 返回鼠标相对于浏览器窗口（视口）的坐标。

#### 获取鼠标相对于屏幕的坐标

```javascript
function showScreenCoords(event) {
    var x = event.screenX;
    var y = event.screenY;
    alert("屏幕坐标 X: " + x + ", Y: " + y);
}
```

**解释：** `screenX` 和 `screenY` 返回鼠标相对于屏幕的坐标。

#### 检查 shift 键是否被按下

```javascript
function isShiftPressed(event) {
    if (event.shiftKey) {
        alert("Shift 键被按下了!");
    } else {
        alert("Shift 键没有被按下!");
    }
}
```

#### 获取事件类型

```javascript
function getEventType(event) {
    alert("事件类型: " + event.type);
}
```

---

### Option 和 Select 对象

#### 禁用和启用下拉列表

```javascript
function disableSelect() {
    document.getElementById("mySelect").disabled = true;
}

function enableSelect() {
    document.getElementById("mySelect").disabled = false;
}
```

#### 获取下拉列表的选项数量

```javascript
var x = document.getElementById("mySelect");
document.write(x.options.length);
```

#### 将下拉列表变成多行列表

```javascript
document.getElementById("mySelect").size = "4";
```

**解释：** `size` 属性设置下拉列表中可见选项的数目。

#### 在下拉列表中选择多个选项

```javascript
document.getElementById("mySelect").multiple = true;
```

**解释：** `multiple` 属性设置是否可选择多个选项。

#### 获取下拉列表中被选中的选项

```javascript
var x = document.getElementById("mySelect");
var selectedValue = x.options[x.selectedIndex].value;
var selectedText = x.options[x.selectedIndex].text;
alert("选中的值: " + selectedValue + ", 文本: " + selectedText);
```

#### 改变下拉列表中被选中的选项的文本

```javascript
var x = document.getElementById("mySelect");
x.options[x.selectedIndex].text = "新文本";
```

#### 删除下拉列表中的选项

```javascript
function removeOption() {
    var x = document.getElementById("mySelect");
    x.remove(x.selectedIndex);
}
```

**解释：** `remove(index)` 方法用于删除指定索引的选项。

---

### Table, TableHeader, TableRow, TableData 对象

#### 改变表格边框的宽度

```javascript
document.getElementById("myTable").border = "4";
```

#### 改变表格的 cellpadding 和 cellspacing

```javascript
var x = document.getElementById("myTable");
x.cellPadding = "10";
x.cellSpacing = "10";
```

#### 获取表格中的行

```javascript
var x = document.getElementById("myTable");
alert(x.rows[0].innerHTML);  // 第一行的 innerHTML
```

#### 获取表格中某行的单元格

```javascript
var x = document.getElementById("myTable");
alert(x.rows[0].cells[0].innerHTML);  // 第一行第一列的内容
```

#### 为表格创建一个标题

```javascript
var x = document.getElementById("myTable");
var caption = x.createCaption();
caption.innerHTML = "表格标题";
```

#### 删除表格中的行

```javascript
function deleteRow() {
    document.getElementById("myTable").deleteRow(0);
}
```

**解释：** `deleteRow(index)` 方法用于删除表格中指定索引的行。

#### 添加表格中的行

```javascript
function addRow() {
    var x = document.getElementById("myTable");
    var row = x.insertRow(0);  // 在第一行之前插入新行
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "新单元格 1";
    cell2.innerHTML = "新单元格 2";
}
```

**解释：** `insertRow(index)` 方法用于在表格中插入新行。

#### 添加表格行中的单元格

```javascript
function addCell() {
    var x = document.getElementById("myTable");
    var row = x.rows[0];
    var cell = row.insertCell(row.cells.length);
    cell.innerHTML = "新单元格";
}
```

#### 单元格内容水平对齐

```javascript
document.getElementById("myTable").rows[0].align = "center";
```

#### 单元格内容垂直对齐

```javascript
document.getElementById("myTable").rows[0].vAlign = "top";
```

#### 改变单元格的内容

```javascript
document.getElementById("myTable").rows[0].cells[0].innerHTML = "新内容";
```

---

## 30. JavaScript 高级应用实例

### 创建一个欢迎 cookie

```javascript
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("再次欢迎你 " + user);
    } else {
        user = prompt("请输入你的名字:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
// 在 <body onload="checkCookie()"> 中调用
```

**解释：** 该实例实现了一个简单的 cookie 功能：首次访问时提示用户输入名字并保存到 cookie，下次访问时直接读取 cookie 并欢迎用户。`setCookie` 设置 cookie，`getCookie` 读取 cookie，`checkCookie` 检查并处理 cookie。

### 简单的计时

```javascript
function timedMsg() {
    var t = setTimeout(function() { alert("5 秒了!"); }, 5000);
}
// <input type="button" value="显示计时的消息框!" onclick="timedMsg()">
```

**解释：** 使用 `setTimeout` 在 5 秒后弹出消息框。

### 使用计时事件制作的钟表

```javascript
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i; }
    return i;
}
// <body onload="startTime()">
// <div id="clock"></div>
```

**解释：** 通过递归调用 `setTimeout` 实现每秒更新时间的钟表效果。`checkTime` 函数用于在个位数前补零，使显示格式统一。

### 创建对象的实例

```javascript
function person(firstname, lastname, age, eyecolor) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;
}

var myFather = new person("John", "Doe", 50, "blue");
document.write(myFather.firstname + " " + myFather.lastname);
// 输出：John Doe
```

### 创建用于对象的模板

```javascript
function person(firstname, lastname, age, eyecolor) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;
    
    this.changeName = function(name) {
        this.lastname = name;
    };
}

var myMother = new person("Sally", "Rally", 48, "green");
myMother.changeName("Doe");
document.write(myMother.lastname);
// 输出：Doe
```

**解释：** 使用构造函数作为对象模板，通过 `new` 关键字创建对象实例，并在构造函数中定义方法。

### JavaScript 验证用户输入

```javascript
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("需要输入名字。");
        return false;
    }
}
```

```html
<form name="myForm" action="demo_form.php" onsubmit="return validateForm()" method="post">
    名字: <input type="text" name="fname">
    <input type="submit" value="提交">
</form>
```

**解释：** 表单提交时调用 `validateForm` 函数验证姓名字段是否为空，如果为空则弹出提示并阻止表单提交。

---

## 附录：JavaScript 学习要点速查

### 变量声明

| 关键字 | 作用域 | 可重新赋值 | 可重复声明 |
|--------|--------|------------|------------|
| `var` | 函数作用域 | 是 | 是 |
| `let` | 块级作用域 | 是 | 否 |
| `const` | 块级作用域 | 否 | 否 |

### 数据类型

- **基本类型**：String、Number、Boolean、Null、Undefined、Symbol
- **引用类型**：Object、Array、Function、Date、RegExp

### DOM 查找方法

| 方法 | 返回值 | 说明 |
|------|--------|------|
| `getElementById(id)` | 单个元素 | 通过 id 查找 |
| `getElementsByTagName(tag)` | 集合 | 通过标签名查找 |
| `getElementsByClassName(class)` | 集合 | 通过类名查找 |
| `getElementsByName(name)` | 集合 | 通过 name 属性查找 |
| `querySelector(selector)` | 单个元素 | 通过 CSS 选择器查找第一个 |
| `querySelectorAll(selector)` | 集合 | 通过 CSS 选择器查找所有 |

### 常用事件

| 事件 | 描述 |
|------|------|
| `onclick` | 鼠标点击 |
| `onload` | 页面加载完成 |
| `onunload` | 页面关闭 |
| `onchange` | 内容改变 |
| `onmouseover` | 鼠标移至元素上方 |
| `onmouseout` | 鼠标移出元素 |
| `onmousedown` | 鼠标按下 |
| `onmouseup` | 鼠标释放 |
| `onfocus` | 元素获得焦点 |
| `onblur` | 元素失去焦点 |
| `onkeydown` | 键盘按下 |
| `onkeyup` | 键盘释放 |
| `onsubmit` | 表单提交 |

---

## 结尾：

### 参考资料： 
- [菜鸟教程](https://www.runoob.com/)
- [CSDN 博客](https://www.csdn.net/)


### 免责声明：
 **再次声明：**  
> 本教程基于菜鸟教程（Runoob）的 JavaScript 教程及其四大实例页面整合而成：
> - [JavaScript 教程](https://www.runoob.com/js/js-tutorial.html)
> - [JavaScript 实例](https://www.runoob.com/js/js-examples.html)
> - [JavaScript 对象实例](https://www.runoob.com/js/js-ex-objects.html)
> - [JavaScript 浏览器支持实例](https://www.runoob.com/js/js-ex-browser.html)
> - [JavaScript HTML DOM 实例](https://www.runoob.com/js/js-ex-dom.html)  
> 一些解释使用了 CSDN 博客文章的内容
>
> 我并非抄袭窃取他人私密文档，这些资料都是公开的。我的获取方式也是合法的

**相关平台声明：**
- [菜鸟教程](https://www.runoob.com/disclaimer)
- [CSDN 博客](https://www.csdn.net/company/index.html#statement)