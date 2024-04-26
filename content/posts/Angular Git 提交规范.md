---
title: Angular Git 提交规范
lastmod: 2024-04-26T18:07:23+08:00
draft: false
toc: true
---

## 格式 {#格式}

type(scope): subject

-   type: 本次提交的类型, 必填.
-   scope: 提交的范围, 指定相关文件夹, 更好定位错误, 可选.
-   subject: 提交的描述, 必填.

例如 `fix(src/login): 修改弹窗显示错误`.


## type 的种类 {#type-的种类}

| type     | 描述                                              |
|----------|-------------------------------------------------|
| feat     | feature, 增加了一个新功能.                        |
| fix      | 修复了 bug.                                       |
| style    | 仅修改了代码格式（如删除空格、换行等）            |
| docs     | documents, 修改了文档                             |
| build    | 修改了编译相关的内容，发布版本、对项目构建或者依赖，即npm、gulp、yarn等文件 |
| ci       | 修改了持续集成，示例范围：Travis、Circle、BrowserStack、SauceLabs |
| perf     | performance, 包含优化相关，比如提升性能、优化用户体验 |
| test     | 包含测试用例的修改时                              |
| refactor | 既不修复错误也不添加功能的代码更改                |
| chore    | 有其他修改（不在上述类型中的修改）                |
