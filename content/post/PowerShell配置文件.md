---
lastmod: 2026-08-26T16:10:03+08:00
---
可以通过修改PowerShell中的配置文件修改它的一些行为，例如默认打开的文件目录。

以下为不同的用户、程序相应的文件：

```
$PROFILE.AllUsersAllHosts
$PROFILE.AllUsersCurrentHost
$PROFILE.CurrentUserAllHosts
$PROFILE.CurrentUserCurrentHost
```

其中，变量中的 `User` 指的是当前主机的用户，而 `Host` 指的不是不同的主机，而是当前运行 PowerShell 的程序，例如在 vscode 的控制台界面也能行如 PowerShell。

`$PROFILE` 是一个字符串变量，表示当前用户、当前 Host 对应的 PowerShell Profile 路径。 `AllUsersAllHosts`、`AllUsersCurrentHost`、`CurrentUserAllHosts`、 `CurrentUserCurrentHost` 是 PowerShell 通过扩展类型系统（ETS） 提供给 `$PROFILE` 的属性，用于方便地引用不同范围的 Profile 路径。 直接使用 `$PROFILE` 时，它等价于 `$PROFILE.CurrentUserCurrentHost` 所表示的路径。