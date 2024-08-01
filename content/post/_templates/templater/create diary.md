<%*
let title = await tp.system.prompt("Enter the title");
let folder = `/_daily/`

// 获取 Obsidian 根 vault 路径
let vaultPath = app.vault.adapter.basePath;

// fileName = tp.system.suggester(["中文", "English"], ["index.zh-cn", "index.en"], true, "请选择博客的语言")

await tp.file.create_new(tp.file.find_tfile("new dairy template"), title, true, folder)
-%>