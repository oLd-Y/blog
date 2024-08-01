---
title: maven 配置文件设置汇总
catogories: 
tags:
  - maven
date: 2024-07-17
description: 
image: 
weight: 1
draft: true
lastmod: 2024-08-01T10:10:17+08:00
---

## maven 是什么？

简而言之，maven 是依赖以及一个 java 项目的各个生命周期的中间件。

## 常用配置

sudo -E nvim /usr/share/maven/conf/settings.xml  打开 linux 中的 maven 配置文件

### 设置镜像

在 mirrors 标签中加入如下代码

```xml
    <mirror>
      <id>aliyunmaven</id>
      <mirrorOf>*</mirrorOf>
      <name>Aliyun Maven</name>
      <url>https://maven.aliyun.com/repository/public</url>
    </mirror>
    <mirror>
      <id>central</id>
      <mirrorOf>*</mirrorOf>
      <name>Central Repository</name>
      <url>https://repo1.maven.org/maven2</url>
    </mirror>
    <mirror>
      <id>tencent</id>
      <mirrorOf>*</mirrorOf>
      <name>Tencent Maven</name>
      <url>https://mirrors.cloud.tencent.com/nexus/repository/maven-public/</url>
    </mirror>

```

### 设置代理

在 proxies 标签中加入如下代码

```xml
    <proxy>
      <id>my-proxy</id>
      <active>true</active>
      <protocol>http</protocol>
      <host>127.0.0.1</host>
      <port>7890</port>
    </proxy>

```