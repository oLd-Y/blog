<%*
let title = await tp.system.prompt("Enter the title");
if (title === null) {
	return;
}

await tp.file.create_new(tp.file.find_tfile("frontmatters"), title, true)

-%>



