---
title: Docker 备忘录
shortTitle: Docker 备忘录
order: 1
date: 2022-11-15
isOriginal: true
sticky: true
star: true
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
  - 备忘录
tag:
  - Docker
footer: true
---
Docker 常见操作备忘录。
<!-- more -->

## 指令
一些常用指令。
### 拉取镜像
::: code-tabs#shell
@tab 指令
```shell
docker pull <镜像名>:<标签>
```
@tab 示例
```shell
docker pull node:latest
```
:::
:::tip 
 **<标签>** 可省略，默认使用`latest`标签。
去[这里](https://hub.docker.com/)找镜像👨‍💻
:::

### 查看所有镜像
```shell
docker images
```

### 删除镜像
::: code-tabs#shell
@tab 指令
```shell
docker rmi <镜像ID>
```
@tab 示例
```shell
docker rmi 09dd6972778e
```
:::

:::tip 
 **<镜像ID>** 支持模糊匹配，只需要输入前几位字符就可以，只要能与其他镜像的ID区分开就行，哪怕就输入一位都是可以的。
:::

### 构建镜像
::: code-tabs#shell
@tab 指令
```shell
docker build -t <镜像名> <路径>
```
@tab 示例
```shell
docker build -t docker-demo-image .
```
:::

:::tip 
 **<路径>** 表示构建镜像所需的 `Dockfile` 文件和 `.dockerignore` 文件来源于哪个目录，示例中的 `.` 表示使用当前目录下的这两个文件。  
 ![图 4](/img/Docker%E5%A4%87%E5%BF%98%E5%BD%95-2022-11-16-19-11-35.png)  
:::

### 上传镜像
```shell
docker push <用户名>/<仓库>:<标签>
```

### 启动容器
::: code-tabs#shell
@tab 指令
```shell
docker run -p <本机端口号>:<虚拟机端口号> -v=<宿主机文件路径>:<容器内文件路径> -d --name <容器名> <镜像名>
```
@tab 示例
```shell
docker run -p 81:80 -d --name nginx1 nginx
```
:::
::: tip
- `-p` 端口映射
- `-v` 数据卷，文件映射
- `-d` 后台运行
- `--name` 定义容器名称  
成功启动容器后，在浏览器访问 **localhost:<本机端口号>** 可以看到Nginx的默认首页。  
![图 2](/img/Docker%E5%A4%87%E5%BF%98%E5%BD%95-2022-11-16-17-03-15.png)  
:::

### 查看所有容器
```shell
docker ps
```
::: tip
加 `-a` 显示隐藏的容器。  
![图 1](/img/Docker%E5%A4%87%E5%BF%98%E5%BD%95-2022-11-16-16-58-19.png)  
:::

### 停止容器
::: code-tabs#shell
@tab 指令
```shell
docker stop <容器ID>
```
@tab 示例
```shell
docker stop 784acb87b8a9
```
:::

:::tip 
 **<容器ID>** 和 **<镜像ID>** 一样，支持模糊匹配。
:::

### 删除容器
::: code-tabs#shell
@tab 指令
```shell
docker rm <容器ID>
```
@tab 示例
```shell
docker rm 784acb87b8a9
```
:::

:::tip 
加 `-f` 可以强制删除。
:::

### 查看容器详细信息
::: code-tabs#shell
@tab 指令
```shell
docker inspect <容器ID>
```
@tab 示例
```shell
docker inspect 784acb87b8a9
```
:::

### 查看容器日志
::: code-tabs#shell
@tab 指令
```shell
docker logs <容器ID>
```
@tab 示例
```shell
docker logs 784acb87b8a9
```
:::

### 进入容器控制台
::: code-tabs#shell
@tab 指令
```shell
docker exec -it <容器ID> /bin/sh
```
@tab 示例
```shell
docker exec -it 784acb87b8a9 /bin/sh
```
:::

::: tip
这个命令会以交互式的伪终端方式进入到容器中，实现不需要进入容器终端进行交互，可以在宿主机与容器进行交互。
![图 3](/img/Docker%E5%A4%87%E5%BF%98%E5%BD%95-2022-11-16-17-11-22.png)  
输入 `exit` 可以退出交互式终端。
:::

## Dockerfile
一个简单的配置文件，描述如何构建一个新的image镜像。
::: warning
- 必须是 `Dockerfile` 这个文件名，必须在项目根目录。
- Docker虚拟机里默认没有各个时区，需要在Dockerfile里配置
:::
::: code-tabs#shell
@tab 语法
```shell
# 指定基于哪个镜像去构建
FROM <镜像名>:<标签>

# 指定运行时的工作目录
WORKDIR <相对路径>

# 把需要的代码拷贝到工作目录
COPY <相对路径> <相对路径>

# 构建镜像时，一般用于做一些系统配置，安装必备的软件。可有多个RUN
RUN <指令>


# 启动容器时，只能有一个CMD
CMD <指令>

# 环境变量
ENV <键名>=<键值>
```
@tab 示例
```shell
FROM node:latest
WORKDIR /app
COPY . /app

# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone

# 设置镜像
RUN npm set registry https://registry.npm.taobao.org

# 安装依赖
RUN npm install

# 启动
CMD echo $SERVER_NAME && echo $AUTHOR_NAME && npm run dev 

# 环境变量
ENV SERVER_NAME="docker-demo"
ENV AUTHOR_NAME="xianyue"
```
:::

::: warning
`CMD` 指令一定要是可以阻塞控制台的命令，例如 `npm run dev` 这个指令运行后，会处于一个类似于 `watch` 的状态，输入其他命令是不奏效的，这是“阻塞控制台”。但是像`npm install` 这样的命令，执行完后就可以继续输入别的命令了。
:::

## .dockerignore
这个文件类似 `.gitignore` ，用于指定需要被docker忽略的文件，在构建镜像的时候生效。
```shell
.git
node_modules
logs
.docker-volumes
```

## Docker Compose
秉持**单一职责**原则，一个容器最好只负责一个服务，因此，当应用依赖于多个不同的服务运行时，需要同时运行多个容器去支持它。例如，一个Web应用在依赖于nodejs环境运行的同时，它将产生的数据存在mongodb中，那么就应该在虚拟机中再运行一个mongodb服务，涉及到管理、运行多个服务了，docker compose是一个非常好的解决方案。
### docker-compose.yml文件
::: code-tabs#shell
@tab 语法
```yml
version: <版本号>
services:
  <服务1名称>: 
    image: <镜像名> 
    container_name: <容器名>
    ports:
      - <宿主机端口>:<容器端口>
  <服务2名称>:
    build:
      context: <路径> 
      dockerfile: Dockerfile
    image: <镜像名>
    container_name: <容器名>
    ports:
      - <宿主机端口>:<容器端口>
```
@tab 示例
```yml
version: '1'
services:
  web-app-server:
    build:
      context: .
      dockerfile: Dockerfile
    image: web-app-image
    container_name: web-app-container
    ports:
      - 8081:5173
  mongodb:
    image: mongo
    container_name: mongodb
    ports:
      - 27016:27017
```
:::
::: tip
这里以两个服务为例子，实际上这个数量可能远远不止于2。  
第一个服务，它依赖的镜像是从官网上 **pull** 下来的，因此对比第二个服务，它少了一个 **build** 字段，把image、container_name、ports这三个字段的值连起来看，像不像[启动容器](#启动容器)的命令？其实，服务就相当于容器，那这里有两个服务，就相当于要启动两个容器，各个配置项的信息无非就是告诉docker要怎样启动容器嘛。  
第二个服务的build字段，像不像[构建镜像](#构建镜像)的命令？
:::

### 指令
docker compose 有很多指令可以使用，基本上和docker本身的指令差不多，在[这里](https://docs.docker.com/compose/reference/)可以查看所有指令的用法。

### 构建服务
实际上就是构建镜像。
::: code-tabs#shell
@tab 指令
```shell
docker compose build <服务名>
```
@tab 示例
```shell
docker compose build web-app-server
```
:::

### 启动所有服务
```shell
docker compose up -d
```
::: tip
 `-d` 表示后台运行。
:::

### 查看所有服务
```shell
docker compose ps
```
::: tip
需要先运行上一个指令启动所有服务才能看到。
:::

### 停止所有服务
```shell
docker compose down
```
