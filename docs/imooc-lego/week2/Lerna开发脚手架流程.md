---
title: Lerna开发脚手架流程
shortTitle: Lerna开发脚手架流程
order: 7
date: 2022-11-18
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
## 脚手架项目初始化
1) 初始化 npm 项目  
2) 安装 Lerna  
3) `lerna init` 初始化项目

## 创建 Package
1) `lerna create` 创建 Package
2) `lerna add` 安装依赖
3) `lerna link` 链接依赖

## 脚手架开发和测试
1) `lerna exec` 执行 shell 脚本  
2) `lerna run` 执行 npm 命令  
3) `lerna clean` 清空依赖
4) `lerna bootstrap` 重装依赖

## 脚手架发布上线
1) `lerna version` 提升版本号
2) `lerna changed` 查看上版本以来的所有变更
3) `lerna diff` 查看diff
4) `lerna publish` 项目发布
