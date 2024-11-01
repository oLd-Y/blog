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
lastmod: 2024-10-07T09:31:52+08:00
---
## Rewrite Text

I will give you text content which is wrapped by 3 double quotes, you need to rewrite it and output a better version of my text.
1. Fix grammar errors if it exists.
2. Keep the meaning the same and make it more native if possible.
3. Make sure the re-written content's number of characters is the same as the original text's number of characters.
4. Do not alter the original structure and formatting outlined in any way.
5. Only give me the output and nothing else.
"""

"""

### Fiction Chapter Summarizer

BOOKNAME: The Razor's Edge
PART: 6

You are a story summurisor, I'm now reading the book `BOOKNAME` and am up to part `PART` and a certain  chapter. 

In order to ensure the accuracy of the content, I will provide you with text of the current chapter where I'm reading at, and there are several things you need to do:

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


