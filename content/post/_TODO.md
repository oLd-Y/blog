---
lastmod: 2024-12-08T15:28:36+08:00
draft: true
---
- [ ] `git config --global core.editor "nvim"`
- [ ] 如何删除已经 commit 的内容 [Claude](https://claude.ai/chat/5679b15a-19cf-43e0-9762-002bb4f1df9c)
- [ ] deepl 启动
- [ ] 本地大模型翻译
- [ ] hugo obsidian wiki link 格式渲染
- [ ] 给 Rime 的配置说明创建软链接。 
- [ ] vim 标记 \` 和 ' 区别 [Vim tips: Moving around using marks and jumps - Linux.com](https://www.linux.com/news/vim-tips-moving-around-using-marks-and-jumps/)
- [ ] tmux，[WSL+ZSH+TMUX+NeoVIM在WSL上配置ZSH+TMUX+NeoVIM，OhMyZSH优化Shell体验，T - 掘金](https://juejin.cn/post/7257440759581392933)
- [ ] 显示隐藏 tmux pane [How do you hide a tmux pane? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/145857/how-do-you-hide-a-tmux-pane)
```sh
# Bind key to break the pane and hide it
bind-key b command-prompt -p "Break pane (hidden):" \
    "run-shell 'tmux break-pane -dP -F \"#{session_name}:#{window_index}.#{pane_index}\" > ~/.tmux_hidden_pane'"

# Bind key to reattach the last hidden pane
bind-key r run-shell "tmux join-pane -vs $(cat ~/.tmux_hidden_pane) && rm ~/.tmux_hidden_pane"	
```
- [ ] https://github.com/stevearc/overseer.nvim
- [ ] makefile 




