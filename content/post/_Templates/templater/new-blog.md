---
draft: true
---

<%*
const fs = require('fs');
const path = require('path');

// 获取用户输入的 Note Title
let qcFileName = await tp.system.prompt("Note Title");
let titleName = qcFileName;

// 定义 baseFolder 和 newFolder
let baseFolder = "/content/post/";
let newFolder = `${baseFolder}${titleName}/`;

// 获取 Obsidian 根 vault 路径
let vaultPath = app.vault.adapter.basePath;

// 构建新的 markdown 文件路径
let mdFilePath = `${vaultPath}${newFolder}index.md`;

// 构建封面保存路径
let imagePath = `${vaultPath}${newFolder}cover.jpg`;

// 确保新文件夹存在
if (!fs.existsSync(`${vaultPath}${newFolder}`)) {
    fs.mkdirSync(`${vaultPath}${newFolder}`, { recursive: true });
}

// 创建新的 markdown 文件并添加 front matter
let frontMatter = `---
title: ${titleName}
description: ""
slug: ""
date: ${new Date().toISOString()}
image: "cover"
categories:
  - ""
tags: 
weight: 1
---
`;

// 将 front matter 写入新的 markdown 文件
fs.writeFileSync(mdFilePath, frontMatter);

// 下载封面图片并更新 front matter
async function downloadAndSetImage() {
    try {
        await tp.user.download_image("http://api.mtyqx.cn/api/random.php", imagePath);
        setTimeout(() => { 
            app.fileManager.processFrontMatter(mdFilePath, frontmatter => {
                frontmatter["image"] = "cover.jpg";
            }) 
        }, 200);
    } catch (error) {
        console.error("Failed to download the cover image:", error);
    }
}

downloadAndSetImage();

-%>
