---
title: useful prompt
categories: CS
tags:
  - prompt
date: 2024-08-01
description: 
image: 
weight: 1
draft: false
lastmod: 2024-10-07T09:31:52+08:00
---
<%*
let title = await tp.system.prompt("Enter the title");
if (title === null) {
	return;
}
let folder = `/${title}/`

// 获取 Obsidian 根 vault 路径
let vaultPath = app.vault.adapter.basePath;
// 构建封面保存路径
let imagePath = `${vaultPath}${folder}`;
// fileName = tp.system.suggester(["中文", "English"], ["index.zh-cn", "index.en"], true, "请选择博客的语言")

await tp.file.create_new(tp.file.find_tfile("new index template"), "index.en", true, folder)

const strings = ["http://api.mtyqx.cn/api/random.php", "https://www.loliapi.com/acg/", "https://img.moehu.org/pic.php?id=img1", "https://picsum.photos/1920/1440"];
const randomIndex = Math.floor(Math.random() * strings.length);

// await tp.user.download_image(strings[randomIndex], imagePath);
-%>