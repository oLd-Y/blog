
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

await tp.file.create_new(tp.file.find_tfile("new index template"), "index", true, folder)

await tp.user.download_image("http://api.mtyqx.cn/api/random.php", imagePath);
-%>



