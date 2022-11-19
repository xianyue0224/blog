---
title: core 模块技术方案
shortTitle: core 模块技术方案
order: 7
date: 2022-11-19
isOriginal: true
sticky: false
star: false
article: true
timeline: true
pageInfo:
  - Original
  - Date
  - Category
  - Tag
  - ReadingTime
  - Word
  - PageView
category:
  - 项目
tag:
  - 慕课乐高
footer: true
---

## 命令执行流程
1) 准备阶段
2) 命令注册
3) 命令执行

## 流程图
![图 11](/img/core%E6%A8%A1%E5%9D%97%E6%8A%80%E6%9C%AF%E6%96%B9%E6%A1%88-2022-11-19-16-03-43.png)  

## 核心库
- import-local
- commander

## 工具库
- npmlog
- fs-extra
- semver
- colors
- user-home
- dotenv
- root-check