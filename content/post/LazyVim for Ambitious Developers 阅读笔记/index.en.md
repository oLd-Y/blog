---
title: LazyVim for Ambitious Developers reading notes
categories: CS
tags:
  - neovim
  - lazyvim
  - reading-notes
  - online-tutorial
date: 2024-09-24
description: 
image: 
weight: 1
draft: false
lastmod: 2024-10-23T14:31:09+08:00
---
Tutorial link: [LazyVim for Ambitious Developers](https://lazyvim-ambitious-devs.phillips.codes/)

## [Chapter 1. Introduction and Installation](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-1/#_introduction_and_installation)

Use a GPU-accelerated terminal for installing LazyVim, such as: [Kitty Terminal](https://sw.kovidgoyal.net/kitty/), [Alacritty](https://alacritty.org/), [Windows Terminal](https://github.com/microsoft/terminal?tab=readme-ov-file), etc.

For installation instructions, please refer to the [official website](https://www.lazyvim.org/installation)

## [Chapter 2. What is Modal Editing, Anyway?](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-2/#_what_is_modal_editing_anyway)

In normal mode, `"` can open available registers.

`:x` is almost equivalent to `:wq`, but `:x` does not perform save operations when the file has not been modified.

## [Chapter 3. Getting Around](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-3/#_getting_around)

None

## [Chapter 4. Opening Files](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-4/#_opening_files)

Space q q closes the entire nvim window

`:LazyExtras` opens the mini.files plugin. mini.files is compatible with many lazyvim text editing operations. Use `=` to save modifications.

To find and disable the same plugin again, press x.

## [Chapter 5. Configuration and Plugin Basics](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-5/#_configuration_and_plugin_basics)

`.config/nvim/lua/config/keymaps.lua` is generally used for setting key bindings in Neovim or those that come with lazyvim.

In plugin configuration parameters, keys set key bindings, and opts sets plugin-related option configurations.

Reference examples for various configurations:

1. Disable a certain feature: 
