---
title: Use Vim mode on the command line in zsh
categories: CS
tags:
  - zsh
  - terminal
  - TODO
date: 2024-11-11
description: 
image: 
weight: 1
draft: true
lastmod: 2024-11-11T13:36:10+08:00
---
Add These code to your `~/.zshrc`:

```sh
# Enable vi mode
bindkey -v

# Reduce mode switching delay
export KEYTIMEOUT=1

# Change cursor shape for different vi modes
function zle-keymap-select {
    if [[ ${KEYMAP} == vicmd ]] ||
       [[ $1 = 'block' ]]; then
        echo -ne '\e[1 q'
    elif [[ ${KEYMAP} == main ]] ||
         [[ ${KEYMAP} == viins ]] ||
         [[ ${KEYMAP} = '' ]] ||
         [[ $1 = 'beam' ]]; then
        echo -ne '\e[5 q'
    fi
}
zle -N zle-keymap-select

# Initialize cursor shape on start-up
echo -ne '\e[5 q'

# Reset cursor shape when starting each new line
function zle-line-init {
    echo -ne '\e[5 q'
}
zle -N zle-line-init
```

After adding this, run the command `source ~/.zshrc` to make it take effects. And then you can use vim mode operation in the terminal.

Here are explanation of these code:

