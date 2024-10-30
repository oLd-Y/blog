---
title: Ubuntu 命令行启动 Vue3 项目（以 ruoyi-ui-admin-vue3 为例）
catogories: 计算机
tags:
  - 前端
  - vue3
date: 2024-07-19
description: 
image: cover.jpg
weight: 1
draft: false
lastmod: 2024-07-19T16:27:50+08:00
---

之前写了一篇[[Ubuntu 命令行启动 SpringBoot 项目（以 ruoyi-vue-pro 为例）/index.zh-cn|Ubuntu 命令行启动 SpringBoot 项目（以 ruoyi-vue-pro 为例）]]总结了一下一个 SpringBoot 后端项目的启动流程。本篇顺便总结一下前端 Vue3 项目的启动过程，这个比后端启动简单一点。

## 步骤

仍然是在 wsl 中 配置。以 ruoyi-ui-admin-vue3 项目为例。首先下载其项目到本地：
```sh
git clone --depth 1 https://github.com/yudaocode/yudao-ui-admin-vue3.git
cd yudao-ui-admin-vue3
```

然后执行初始化的代码：
```sh
# 安装 pnpm，提升依赖的安装速度
npm config set registry https://registry.npmjs.org
npm install -g pnpm
# 安装依赖
pnpm install

# 启动服务
npm run dev
```

## 可能的错误
### 可能的错误1
如果是在 wsl 中执行这些命令，执行到最后一条命令 `npm run dev` 时，可能会出现如下错误：
```txt
The CJS build of Vite's Node API is deprecated. See https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.
error when starting dev server:
Error: listen EACCES: permission denied 0.0.0.0:80
    at Server.setupListenHandle [as _listen2] (node:net:1881:21)
    at listenInCluster (node:net:1946:12)
    at doListen (node:net:2116:7)
    at process.processTicksAndRejections (node:internal/process/task_queues:83:21)
```

原因是当前不是超级用户，无法使用 80 作为项目启动的端口。

解决方法要么是提升 nodejs 的执行权限，要么是修改 vite.config.ts 中的启动端口。我这里选择的是提升 nodejs 的执行权限。

执行下列代码提升 nodejs 的权限：
```sh
# 提供 setcap 命令
sudo apt-get install libcap2-bin
# 找到 nodejs 的 exe 的绝对路径并为其赋予可绑定特权端口的权限
sudo setcap cap_net_bind_service=+ep readlink -f \which node\`
```

### 可能的错误2

在 wsl 中再次启动可能会遇到如下错误：
```txt
node:events:497
      throw er; // Unhandled 'error' event
      ^

Error: spawn xdg-open ENOENT
    at ChildProcess._handle.onexit (node:internal/child_process:286:19)
    at onErrorNT (node:internal/child_process:484:16)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
Emitted 'error' event on ChildProcess instance at:
    at ChildProcess._handle.onexit (node:internal/child_process:292:12)
    at onErrorNT (node:internal/child_process:484:16)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'spawn xdg-open',
  path: 'xdg-open',
  spawnargs: [ 'http://localhost:80/' ]
}
```

这个错误是项目会自动打开浏览器，但系统中没有 `xdg-open` 包用于自动打开。如果你的 wsl 只有一个终端，可以在 `vite.config.ts` 文件中将 `open: env.VITE_OPEN === 'true',` 改为 `open: env.VITE_OPEN === 'false',` 以关闭自动打开浏览器。

或者 `sudo apt-get install xdg-utils` 下载 xdg-utils 包。

### 可能的错误3

再次启动，如果再遇到依赖相关的错误，例如：
```sh
Error: The following dependencies are imported but could not be resolved:

  src/api/ai/write (imported by /home/lyao/ruoyi-vue-pro/yudao-server/yudao-ui-admin-vue3/src/views/ai/write/index/components/Left.vue?id=0)

Are they installed?
    at file:///home/lyao/ruoyi-vue-pro/yudao-server/yudao-ui-admin-vue3/node_modules/.pnpm/vite@5.1.4_@types+node@20.12.7_sass@1.75.0_terser@5.30.4/node_modules/vite/dist/node/chunks/dep-jDlpJiMN.js:52270:23
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async file:///home/lyao/ruoyi-vue-pro/yudao-server/yudao-ui-admin-vue3/node_modules/.pnpm/vite@5.1.4_@types+node@20.12.7_sass@1.75.0_terser@5.30.4/node_modules/vite/dist/node/chunks/dep-jDlpJiMN.js:51682:38
```

直接 `pnpm install` 重新下载相关的依赖即可。

我的项目启动就到此为止，启动之后可以在 windows 浏览器中访问 `localhost:80` 地址查看项目了。
![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240719162711.png)
