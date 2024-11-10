---
title: Make a window always on top through AHK
categories: CS
tags:
  - trick
  - tool
  - ahk
  - windows
date: 2024-11-08
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-08T10:54:08+08:00
---
Have you ever found yourself reading a document while using a note-taking app, wishing you could keep the app window floating? It could be frustrating when the window disappears as soon as you click outside of it.

Fortunately, there's a simple solution using AutoHotKey(AHK). While you can find installation instructions elsewhere, I'll share the script that solves this problem.

Create an AHK script and write following code:
```AHK
^space::
{
    WinSetAlwaysOnTop -1, "A"
}
```

Once you save and run the script, you can "pin" any active window by pressing `Ctrl+Space`. Using the same keyboard shortcut will toggle the window between pinned and unpinned states.

[reference](https://www.howtogeek.com/196958/ways-to-make-a-window-always-on-top-on-windows/)

