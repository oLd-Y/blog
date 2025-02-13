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
lastmod: 2024-12-02T20:36:39+08:00
---
Tutorial link: [LazyVim for Ambitious Developers](https://lazyvim-ambitious-devs.phillips.codes/)

In keybindings, `C` means `Ctrl`.

## [Chapter 1. Introduction and Installation](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-1/#_introduction_and_installation)

Use a GPU-accelerated terminal for installing LazyVim, such as: [Kitty Terminal](https://sw.kovidgoyal.net/kitty/), [Alacritty](https://alacritty.org/), [Windows Terminal](https://github.com/microsoft/terminal?tab=readme-ov-file), etc.

For installation instructions, please refer to the [official website](https://www.lazyvim.org/installation)

keys:
1. `<Space>l`, n, open the lazy.nvim plugin manager. Press `S` to sync the update.


## [Chapter 2. What is Modal Editing, Anyway?](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-2/#_what_is_modal_editing_anyway)

In normal mode, `"` can open available registers.

`:x` is almost equivalent to `:wq`, but `:x` does not perform save operations when the file has not been modified.

keys:
1. `C-R`, i, pop up the register menu.
2. `"`, n, pop up the register menu.
3. `C-c`, can also exit the insert mode and enter the normal mode.
4. `:q!`, force to quit neovim without saving.
5. `:x` nearly equals to `:wq`, except that `:x` won't execute the "save" operation if there is no modifications.
6. `:e <path>` to edit a new file, `<Tab>` to cicyle through the available directories, `C-y` to accept the current directory, `<Down>` to enter the selected directory.

## [Chapter 3. Getting Around](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-3/#_getting_around)

keys:
1. `s` to enable the seek mode of `flash`.
2. `C-<Up>`, `C-<Down>`, `C-y`, `C-e` to scroll the screen.
3. `<Space>fc`, open the configuration directory of lazyvim.
4. set vim options in `lua/option.lua` file:
```lua
vim.opt.number = false
vim.opt.relativenumber = false
```
5. `f`/`F` to find next/previous character, press again to continously forward/backward. `;` is set to repeat the operation by default. Or you can use `f` to jump to the third character after the current cursor. 
6. `t`/`T` is same like `f`/`F` , but `t`/`T` arrive right before the target character.
7. `w`,`e`,`b` to go to "beginning of the next word", "end of the next word", "beginning of the previous word". `W`, `E`, `B` move a little bigger, which omit punctuation.
8. `be`/`ge` to go to the end of previous word.
9. `A`/`I` to move to the end/beginning of a line and enter insert mode.
10. `^`/`$`/`0` to move to the beginning/end/beginning of the line in normal mode.
11. `gg`/`G` to move to the beginning/end of the file. `100G`/`100gg`/`:100` to move to line 100.
12. `C-o`/`C-i` to jump backward/farward in jump history.

## [Chapter 4. Opening Files](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-4/#_opening_files)

1. `cwd` is typically the directory where you enter nvim in the terminal, while `root dir` is where there is a configuration file such as `.git`, `package.json`, etc.
2. `:LazyExtras` opens the `mini.files` plugin. `mini.files` is compatible with many lazyvim text editing operations. Use `=` to save modifications. To find and disable the same plugin again, press `x`.

keys:
1. `<Space> q q`, closes the entire nvim window and save the session.
2. `<Space><Space>`/`Space>ff`, find file (root dir), which is case insensitive and become sensitive right after there is a upper case character. `<Space>fF` to find file (cwd).
4. Also, you can use `:lcd` to temprarily change the `cwd` for a buffer.
5. `s` to enable the seek mode. Note that it will jump to the *first* character of the seeking word.

## [Chapter 5. Configuration and Plugin Basics](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-5/#_configuration_and_plugin_basics)

`.config/nvim/lua/config/keymaps.lua` is generally used for setting key bindings in Neovim or those that come with lazyvim.

In plugin configuration parameters, keys set key bindings, and opts sets plugin-related option configurations.

Reference examples for various configurations:

1. Disable a certain feature: 
```lua
return {
  { "nvim-neo-tree/neo-tree.nvim", enabled = false },
}
```
2. Modiry a certain built-in plugin `mini.files`:
```lua
return {
  "echasnovski/mini.files",
  keys = {
    {
      "<leader>e",
      function()
        require("mini.files").open(vim.api.nvim_buf_get_name(0), true)
      end,
      desc = "Open mini.files (directory of current file)",
    },
    {
      "<leader>E",
      function()
        require("mini.files").open(vim.uv.cwd(), true)
      end,
      desc = "Open mini.files (cwd)",
    },
    {
      "<leader>fm",
      function()
        require("mini.files").open(LazyVim.root(), true)
      end,
      desc = "Open mini.files (root)",
    },
  },
  opts = {
    -- mappings = {
    --   go_in = "<Right>",
    --   go_out = "<Left>",
    -- },
    windows = {
      width_nofocus = 20,
      width_focus = 40,
      width_preview = 80,
    },

    options = {
      use_as_default_explorer = true,
    },
  },
}
```
3. Modify `nvim-cmp`:
```lua
return {
  {
    "hrsh7th/nvim-cmp",
    opts = function(_, opts)
      local cmp = require("cmp")
      opts.mapping = vim.tbl_extend(
        "force",
        opts.mapping,
        {
          ["<Right>"] = cmp.mapping.confirm({ select = true }),
          ["<CR>"] = function(fallback) cmp.abort() fallback() end,
        }
      )
    end,
  },
}
```
4. Configure `guess-indent`:
```lua
return {
  "nmac427/guess-indent.nvim",
  opts = {
    auto_cmd = true,
    override_editorconfig = true
  },
}
```
5. Configure `nvim-spider`:
```lua
return {
  "chrisgrieser/nvim-spider",
  opts = {},
  keys = {
    {
      "w",
      "<cmd>lua require('spider').motion('w')<CR>",
      mode = { "n", "o", "x" },
      desc = "Move to start of next of word",
    },
    {
      "e",
      "<cmd>lua require('spider').motion('e')<CR>",
      mode = { "n", "o", "x" },
      desc = "Move to end of word",
    },
    {
      "b",
      "<cmd>lua require('spider').motion('b')<CR>",
      mode = { "n", "o", "x" },
      desc = "Move to start of previous word",
    },
  },
}
```

## [Chapter 6. Basic Editing](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-6/#_basic_editing)

keys:
1. `80i*<Escape>` will insert 80 `*` which is nifty.
2. `dsfoos`, delete from the cursor to the **first character** of the target word `foo`.
3. `X` delete the character before the cursor.
4. `J` to join lines.
5. `gU<range>` converts a sequence of characters into uppercase, while the `gu<range>` do the inverse.
6. `~` inverts the case of character under the cursor.
7. `q<reg_name>` will start recording a sequence of operations called `macro`, and press `q` again will stop the recording. The fastest way to play back the latest macro is press `Q`, or you can use `@<reg_name>` instead.

## [Chapter 7. Objects and Operator-Pending Mode](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-7/#_objects_and_operator_pending_mode)

1. `(`, `{` move the cursor to the beginning of a sentence or paragraph, while `)`, `}` to the end.


debugger, python, time out error: 

possible solutions:
1. venv-selector nvim plugin should be installed.
2. enable a venv for a project before starting debugging for python. 
3. make sure your python3.exe could be properly recognized. user/global.
4. `:DapShowLog`
5. related plugin: nvim-dap
6. related keywords: nvim-dap-python

possible references:
[Debugpy - Windows · Issue #118 · mfussenegger/nvim-dap-python · GitHub](https://github.com/mfussenegger/nvim-dap-python/issues/118)

[Attach to debugpy · mfussenegger/nvim-dap · Discussion #846 · GitHub](https://github.com/mfussenegger/nvim-dap/discussions/846)

[reddit.com/r/neovim/comments/199jt2c/nvimdap\_debugpy\_cant\_work\_in\_windows/](https://www.reddit.com/r/neovim/comments/199jt2c/nvimdap_debugpy_cant_work_in_windows/)

