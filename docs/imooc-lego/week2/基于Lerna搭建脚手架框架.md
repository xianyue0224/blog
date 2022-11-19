---
title: 基于Lerna搭建脚手架框架
shortTitle: 基于Lerna搭建脚手架框架
order: 8
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

开发一个名为 miffa 的脚手架。

## 新建文件夹
文件夹名为 **miffa** ，在命令行中进入到该目录下。

:::tip 
miffa 中文译为 **米法** ，是开放世界冒险游戏*塞尔达传说*中一个很厉害的角色。
:::

## 初始化项目
先使用 npm 初始化
```shell
npm init -y
```
因为是一个使用Lerna管理的**多Package**项目，还需要安装Lerna，并使用Lerna初始化
::: code-tabs#shell
@tab 安装 Lerna
```shell
npm i lerna -D

// 建议也全局安装一下，不然后续Lerna相关的命令需要使用 npx 执行，很麻烦
npm i lerna -g
```
@tab 使用 Lerna 初始化
```shell
lerna init
```
:::
现在目录长这样  
![图 3](/img/%E5%9F%BA%E4%BA%8ELerna%E6%90%AD%E5%BB%BA%E8%84%9A%E6%89%8B%E6%9E%B6%E6%A1%86%E6%9E%B6-2022-11-18-19-54-50.png)  

我们把 `.gitignore` 文件完善一下
```shell
node_modules/
packages/**/node_modules
vscode
.idea
```

## 创建第一个 Package
我们脚手架的核心逻辑写在一个名为core的包下，现在创建它：
```shell
lerna create core
```
相关的提问：
![图 4](/img/%E5%9F%BA%E4%BA%8ELerna%E6%90%AD%E5%BB%BA%E8%84%9A%E6%89%8B%E6%9E%B6%E6%A1%86%E6%9E%B6-2022-11-18-20-00-34.png)  

包名为 **@miffa/core** 是因为miffa是个 **多Package** 项目，其中的每个Package最后都是要单独发布到npm的，所以我们最好把这些Packages都放到一个组织下，这个组织的名字自然而然为**miffa**最合适。

> 用同样的方法创建第二个package，名为utils，将来我们会在里面写很多工具函数。

现在，我们的目录长这样了：  
![图 5](/img/%E5%9F%BA%E4%BA%8ELerna%E6%90%AD%E5%BB%BA%E8%84%9A%E6%89%8B%E6%9E%B6%E6%A1%86%E6%9E%B6-2022-11-18-20-07-38.png)  

## 关联远程仓库
这个步骤需要我们在 Github 或者 Gitee 上创建一个仓库，然后在本地关联并推送同步代码。这是一个很基本的步骤，就不多解释了，放一个miffa的远程仓库[链接](https://gitee.com/xianyue0224/miffa)吧。

## 使用 Lerna 发布
可以尝试随意在core或者utils包中做一些修改，然后使用`git commit`添加一条commit记录，然后我们接下来将尝试使用Lerna一键完成推送远程代码仓库以及发布最新包的操作。

1) 设置发布配置  
    因为我们要发布的包都是在一个组织下的，在发布前我们需要先把它设为公开，很简单，在`package.json`文件中添加以下内容
```json
"publishConfig": {
    "access": "public"
}
```
2) 执行 `npm login` 登录npm，记得提前把镜像切回官方
3) 执行 `lerna publish` 发布  
    这个命令会帮你干几件事情，首先，帮你把所有包的版本号更新，会提问你版本更新的方式：  
    ![图 6](/img/%E5%9F%BA%E4%BA%8ELerna%E6%90%AD%E5%BB%BA%E8%84%9A%E6%89%8B%E6%9E%B6%E6%A1%86%E6%9E%B6-2022-11-18-21-21-34.png)  
随意选择吧，这里建议选择patch，选完这个后，会帮你将本地代码同步远程仓库，并且打上一个版本号标签：  
![图 7](/img/%E5%9F%BA%E4%BA%8ELerna%E6%90%AD%E5%BB%BA%E8%84%9A%E6%89%8B%E6%9E%B6%E6%A1%86%E6%9E%B6-2022-11-18-21-23-04.png)  
最后，会询问你要不要将最新的代码发布到npm，我们选择是（y），就会自动发布了 **（这里记得提前在npm上创建组织）** 。