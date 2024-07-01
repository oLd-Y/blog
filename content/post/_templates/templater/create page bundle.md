<%*
let title = await tp.system.prompt("Enter the title");
let folder = `/${title}/`
/**
const key = "id";
if (!app.metadataCache.getFileCache(f)?.frontmatter?.[key]) {
	await app.fileManager.processFrontMatter(f, (data) => {
		data[key] = ulid();
	});
}
*/
// 获取 Obsidian 根 vault 路径
let vaultPath = app.vault.adapter.basePath;
// 构建封面保存路径
let imagePath = `${vaultPath}${folder}cover.jpg`;
// fileName = tp.system.suggester(["中文", "English"], ["index.zh-cn", "index.en"], true, "请选择博客的语言")

await tp.file.create_new(tp.file.find_tfile("new index template"), "index.zh-cn", true, folder)

const strings = ["http://api.mtyqx.cn/api/random.php", "https://www.loliapi.com/acg/", "https://img.moehu.org/pic.php?id=img1", "https://picsum.photos/1920/1440"];
const randomIndex = Math.floor(Math.random() * strings.length);

await tp.user.download_image(strings[randomIndex], imagePath);
-%>



