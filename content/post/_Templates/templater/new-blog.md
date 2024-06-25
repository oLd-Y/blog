<%*
let qcFileName = await tp.system.prompt("Note Title")
let titleName = qcFileName
await tp.file.rename('index')
let baseFolder = "/"
let newFolder = `${baseFolder}/${titleName}/` 
await tp.file.move(newFolder + `index`);
let title = titleName
let description = ""
let slug = ""
let date = ""
let categories = ""
let tags = ""
let weight = ""

// 获取随机图片 Markdown URL
let markdownImage = await tp.web.random_picture();

// 提取图片 URL
let imageUrl = markdownImage.match(/\((.*?)\)/)[1];

// 下载图片并保存到 newFolder
async function downloadImage(url, filepath) {
    const response = await fetch(url);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 创建 newFolder 文件夹
    if (!await tp.file.exists(newFolder)) {
        await tp.file.createFolder(newFolder);
    }

    // 保存图片到 newFolder
    const fs = require('fs');
    fs.writeFileSync(filepath, buffer);
}

let imageFilename = 'cover.jpg';
let imageFilepath = `${newFolder}${imageFilename}`;
await downloadImage(imageUrl, imageFilepath);

// 设置 front matter 中的 image 字段
let image = imageFilepath;

setTimeout(() => { app.fileManager.processFrontMatter(tp.config.target_file, frontmatter =>{ 
    frontmatter["title"] = title; 
    frontmatter["description"] = description; 
    frontmatter["slug"] = slug; 
    frontmatter["date"] = date; 
    frontmatter["image"] = image; 
    frontmatter["categories"] = categories; 
    frontmatter["tags"] = tags; 
    frontmatter["weight"] = 1; 
}) }, 200)
-%>
