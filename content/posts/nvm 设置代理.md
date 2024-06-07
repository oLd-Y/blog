---
tags: 
draft: false
lastmod: 2024-06-07T12:07:40+08:00
title: nvm 设置代理
date: 2024-06-07
---
nvm 下载会卡住，即使设置了也是如此
```
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node
```

因此将其镜像源修改为阿里云：
```
export NVM_NODEJS_ORG_MIRROR=https://mirrors.aliyun.com/nodejs-release/
```

放入 ``