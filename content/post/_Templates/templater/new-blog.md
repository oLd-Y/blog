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

// 获取随机图片 URL
async function getRandomImage() {
    const response = await fetch('https://source.unsplash.com/random');
    return response.url;
}

let image = await getRandomImage();

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
