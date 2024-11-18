---
title: Obsidian latex-suite usage.en
categories: CS
tags:
  - obsidian
  - Latex
  - plugin
  - TODO
date: 2024-11-18
description: 
image: 
weight: 1
draft: true
lastmod: 2024-11-18T09:50:39+08:00
---
I'm using the obsidian-latex-suite, what is the flags option in its snippets used for?
The whole document of snippets is as follows:


Copy
Snippets
Snippets are shortcuts that allow you to insert certain text based on certain triggers. For example, the default snippet

{trigger: "@l", replacement: "\\lambda", options: "mA"}
will expand "@l" to "\lambda".

Snippets can be edited in the plugin settings. The structure of a snippet is as follows:

{
  trigger: string | RegExp,
  replacement: string,
  options: string,
  priority?: number,
  description?: string,
  flags?: string,
}
trigger : The text that triggers this snippet.
Triggers can also be regular expressions. See here for more info.
replacement : The text to replace the trigger with.
Replacements can also be JavaScript functions. See here for more info.
options : See below.
priority (optional): This snippet's priority. Snippets with higher priority are run first. Can be negative. Defaults to 0.
description (optional): A description for this snippet.
flags (optional): Flags for regex snippets.

Based on the documentation shown, the flags option in obsidian-latex-suite snippets is specifically used when the trigger is a regular expression (RegExp). It allows you to specify regex flags that modify how the regular expression behaves.

Common regex flags include:

i for case-insensitive matching
g for global matching (find all matches rather than stopping after the first)
m for multiline mode
s for allowing dot (.) to match newlines
u for unicode support
For example, if you wanted to create a snippet that matches "@lambda" case-insensitively, you could write:

json

Copy
{
  trigger: /@lambda/,
  replacement: "\\lambda",
  options: "mA",
  flags: "i"
}
This way, both "@lambda", "@LAMBDA", and "@LaMbDa" would trigger the snippet.

The flags field is marked as optional in the documentation (flags?: string), so you only need to include it when you're using regex triggers and need to modify their behavior.


## Cheatsheet


| Trigger | Replacement        | Meaning      |
| ------- | ------------------ | ------------ |
| mk      | $ $                | math keyword |
| dm      | \$$  <br>  <br>\$$ | display math |
| sr      | ^{2}               | square       |
| cb      | ^{3}               | cube         |
| rd      | ^{ }               | raised       |
| _       | _{ }               | under score  |
| sq      | \sqrt{ }           |              |
| x/y Tab | \frac{x}{y}        | fraction     |
| //      | \frac{ }{ }        |              |
| "       | \text{ }           |              |
| text    | \text{ }           |              |
| x1      | x_{1}              |              |
| x,.     | \mathbf{x}         |              |
| x.,     | \mathbf{x}         |              |
| xdot    | \dot{x}            |              |
| xhat    | \hat{x}            |              |
| xbar    | \bar{x}            |              |
| xvec    | \vec{x}            |              |
| xtilde  | \tilde{x}          |              |
| xund    | \underline{x}      |              |
| ee      | e^{ }              |              |
| invs    | ^{-1}              |              |
