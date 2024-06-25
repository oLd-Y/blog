<%*
let qcFileName = await tp.system.prompt("Note Title")
let titleName = qcFileName
await tp.file.rename('index')
let baseFolder = ""
let newFolder = `${baseFolder}/${titleName}/` 
await tp.file.move(newFolder + `index`);
let title = titleName

// 获取 Obsidian 根 vault 路径
let vaultPath = app.vault.adapter.basePath;

// 构建封面保存路径
let imagePath = `${vaultPath}/${newFolder}` + `cover.jpg`;

// 创建目录（如果不存在）
const fs = require('fs');
const dirs = imagePath.substring(0, imagePath.lastIndexOf('/'));

if (!fs.existsSync(dirs)) {
    fs.mkdirSync(dirs, { recursive: true });
}

// 下载图片
await tp.user.download_image("http://api.mtyqx.cn/api/random.php", imagePath);

let description = ""
let slug = ""
let date = ""
let image = "cover.jpg"
let categories = ""
let tags = ""
let weight = ""

setTimeout(() => { 
    app.fileManager.processFrontMatter(tp.config.target_file, frontmatter => {
        frontmatter["title"] = title; 
        frontmatter["description"] = description; 
        frontmatter["slug"] = slug; 
        frontmatter["date"] = date; 
        frontmatter["image"] = image; 
        frontmatter["categories"] = categories; 
        frontmatter["tags"] = tags; 
        frontmatter["weight"] = 1; 
    }) 
}, 200)
-%>
