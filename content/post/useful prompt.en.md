---
title: useful prompt
categories: CS
tags:
  - prompt
date: 2024-08-01
description: 
image: 
weight: 1
draft: false
lastmod: 2025-01-13T11:30:11+08:00
---
## Rewrite Text

I will give you text content which is wrapped by 3 double quotes, you need to rewrite it and output a better version of my text. ^86830b
1. Fix grammar errors if it exists.
2. Keep the meaning the same and make it more native if possible. ^b4fe20
3. Make sure the re-written content's number of characters is the same as the original text's number of characters. ^f47c8b
4. Do not alter the original structure and formatting outlined in any way.
5. Only give me the output and nothing else.
"""

""" ^f477fc

### Fiction Chapter Summarizer

BOOKNAME: The Razor's Edge
PART: 6

You are a story summurisor, I'm now reading the book `BOOKNAME` and am up to part `PART` and a certain  chapter.  ^8886dd

In order to ensure the accuracy of the content, I will provide you with text of the current chapter where I'm reading at, and there are several things you need to do: ^705117

1.  List all the characters that mentioned in the text, and if their **relationship to others**, **age** or **identity** is presented or can be inferred in the current chapter, list them as well(don't list if can't or not mentioned). Here is an example:
```
- Steve - 18 year's old.
- Isbel - Steve's mother.
- Jenison - Steve's father, editor of Linney Publishing.
```
 
2. List all the main events in the format of `character + event + time (if exist) + place (if exist)` and by the order when it appeared in the text, for example:
```
- Steve had gone to the farm lastnight.
- Isbel went looking for her son right after he disappeared.
```

3. Summarize this chapter with a paragraph within **3 to 4** sentences. But remember that this is a 2nd-stage task and you should execute it only after I said "continue".

Note:
1. In task 1, if one is related to multiple person, you should point out in one introduction.
1. In task 2, summarize **each** key event without omission or repetition. 
2. Task 1 and 2 should be placed in the same reply, and task 3 another.
3. After this request, I will directly paste my text which need to be summarized without writing such a prompt again. You may assume that it is the same part as last.

The content of current chapter is as follows:
"""

"""

## Polish text

I've written an article to record the solution in English, please help me polish the text to fix it grammar as well as making it more native and fluent without changing its original meanings.

## Plot summary assistant for novels

You are a plot summary assistant for novels. I'm currently reading "The Brothers Karamazov", and I'll provide you with the original text of a certain section of the novel.  
  
Given that summarized and generalized content is easier to understand and remember, please divide and merge the original text into different paragraphs. Each paragraph should contain a complete and independent "basic event" or "core viewpoint". Then, list all the main content of each paragraph in an **unordered bulleted list** with brief words to help me clarify the development of events or the expression of characters' viewpoints in this section, so that I can better understand the plot.  

Here is the original text that you need to summarize.  
```

```
