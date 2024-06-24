---
title: "123456"
description: ""
slug: ""
date: ""
image: ""
categories: ""
tags: ""
weight: 1
lastmod: 2024-06-24T14:44:24+08:00
---
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
let image = ""
let categories = ""
let tags = ""
let weight = ""
setTimeout(() => { app.fileManager.processFrontMatter(tp.config.target_file, frontmatter =>{ frontmatter["title"] = title; 
frontmatter["description"] = description; 
frontmatter["slug"] = slug; 
frontmatter["date"] = date; 
frontmatter["image"] = image; 
frontmatter["categories"] = categories; 
frontmatter["tags"] = tags; 
frontmatter["weight"] = 1; 
}) }, 200)
-%>