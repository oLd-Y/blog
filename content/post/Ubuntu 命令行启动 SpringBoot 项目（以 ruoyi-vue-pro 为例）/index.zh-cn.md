---
title: Ubuntu 命令行启动 SpringBoot 项目（以 ruoyi-vue-pro 为例）
categories: 计算机
tags:
  - windows
  - wsl
  - springboot
date: 2024-07-18
description: 
image: 
weight: 1
draft: false
lastmod: 2024-08-01T13:02:15+08:00
---

最近在上手 neovim，尝试使用 wsl 作为我的开发环境。本文就以 ruoyi-vue-pro 为例，整理一下在命令行中启动 SpringBoot 项目的完整过程，最终效果是可以在 windows 中的浏览器中访问 wsl 中启动的项目。

操作系统版本：Windows 11 专业版 23H2 22631.3880
wsl 版本：Ubuntu 22.04 LTS
java 版本：OpenJDK 17.0.1
maven 版本：3.9.1
项目版本：ruoyi-vue-pro，master-jdk17 分支

## 安装必要开发工具

如果是在 Ubuntu 中开发，默认已安装了 git。

### 安装 JDK 17

首先 `java -version` 确保自己的 jdk 版本正确。

如果不对，需要安装指定的版本：

```shell
sudo apt install openjdk-17-jdk -y
```

ubuntu 中可以使用 `sudo update-alternatives --config java` 命令切换 jdk 的版本。

### 安装 Maven

可以直接使用 `sudo apt install maven -y` 安装 ubuntu 库中的 maven。如果觉得版本较旧，也可以按照下面的步骤手动安装较新的版本（需先卸载原有的 maven。以 3.8.7 版本为例）。

1. 从 [maven 官网](https://archive.apache.org/dist/maven/maven-3/) 下载指定版本的压缩包。
```shell
wget https://apache.osuosl.org/maven/maven-3/3.8.7/binaries/apache-maven-3.8.7-bin.tar.gz
```

2. 解压下载的 maven 压缩包到 /opt 目录（或任何你想安装的目录）：
```shell
sudo tar xf apache-maven-3.8.7-bin.tar.gz -C /opt
```

3. 编辑环境变量
```shell
export M2_HOME=/opt/apache-maven-3.8.7
export PATH=$M2_HOME/bin:$PATH
```

让环境变量生效：
```sh
source ~/.bashrc # 或 ~/.zshrc 等
```

4. 验证
```sh
mvn -version
```

### 配置 Maven

打开 maven 的配置文件 setting.xml
- 如果是 apt 安装的则使用下面这条命令：
```sh
sudo -E vim /usr/share/maven/conf/settings.xml
```
- 如果是手动安装的则使用下面这条命令：
```sh
sudo -E vim /etc/maven/settings.xml
```

`-E` 参数表示继承当前的环境变量，否则使用的是默认的 vim 配置。

在 `<mirrors>` 标签内填写下列镜像：
```xml
    <mirror>
      <id>aliyunmaven</id>
      <mirrorOf>*</mirrorOf>
      <name>Aliyun Maven</name>
      <url>https://maven.aliyun.com/repository/public</url>
    </mirror>
    <mirror>
      <id>central</id>
      <mirrorOf>*</mirrorOf>
      <name>Central Repository</name>
      <url>https://repo1.maven.org/maven2</url>
    </mirror>
    <mirror>
      <id>tencent</id>
      <mirrorOf>*</mirrorOf>
      <name>Tencent Maven</name>
      <url>https://mirrors.cloud.tencent.com/nexus/repository/maven-public/</url>
    </mirror>
```

（可选）在 `proxies` 标签中加入如下代码，用于设置 maven 使用的代理。使用镜像的时候可以不设置。
```xml
    <proxy>
      <id>my-proxy</id>
      <active>true</active>
      <protocol>http</protocol>
      <host>宿主机的 WLAN IP</host>
      <port>7890</port>
    </proxy>
```

如果设置的代理，`<host>` 那一栏需要设置为 windows 的正在使用的网卡的默认网关或者 ip 地址，比如下面的这个 ip 地址（powershell 中 执行 ipconfig）：
![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240719203916.png)


## 下载 Ruoyi-Vue-Pro 并安装依赖

假设将项目下载到 `~` 目录。
```sh
cd ~
```

`git clone -b master-jdk17 https://github.com/YunaiV/ruoyi-vue-pro.git` 下载 ruoyi-vue-pro 的 master-jdk17 分支。

`cd ruoyi-vue-pro` 切换到项目根目录。

`mvn clean install -Dmaven.test.skip=true` 安装所需的依赖。`-Dmaven.test.skip=true` 用于跳过测试关的依赖安装，否则可能出现一些错误。

如果出现一些依赖安装失败，则可能需要删除依赖之后重新安装。例如我的 mq 相关依赖安装失败：
```txt
[ERROR] Failed to execute goal on project yudao-spring-boot-starter-mq: Could not resolve dependencies for project cn.iocoder.boot:yudao-spring-boot-starter-mq:jar:2.1.0-snapshot: Could not transfer artifact org.apache.rocketmq:rocketmq-rocksdb:jar:1.0.2 from/to aliyunmaven (https://maven.aliyun.com/repository/public): GET request of: org/apache/rocketmq/rocketmq-rocksdb/1.0.2/rocketmq-rocksdb-1.0.2.jar from aliyunmaven failed: Premature end of Content-Length delimited message body (expected: 29,977,931; received: 25,996,828) -> [Help 1]
```

则删除 `rocketmq-rocksdb`。
```sh
rm -rf ~/.m2/repository/org/apache/rocketmq/rocketmq-rocksdb/1.0.2
```

之后重新下载依赖
```sh
mvn clean install -Dmaven.test.skip=true
```

## 初始化 Mysql

执行以下命令：
```sh
# 安装 mysql
sudo apt install mysql-server -y
# 启动 mysql
sudo systemctl start mysql
# 设置 mysql 开机自启
sudo systemctl enable mysql
```

注：如果 wsl 中没有 systemd（即 systemctl 命令），则需要在 `wsl.conf` 文件中开启。

在 wsl 的 `/etc/wsl.conf` 文件中加入如下代码后重启以开启 systemd：
```sh
[boot]
systemd=true
```

创建并初始化 ruoyi-vue-pro 的数据库：
```sh
sudo mysql -u root -p
CREATE DATABASE ruoyi_vue_pro;
EXIT;
mysql -u root -p ruoyi_vue_pro < ~/ruoyi-vue-pro/sql/mysql/ruoyi-vue-pro.sql
```

ubuntu 默认安装的 mysql 是没有密码的。ubuntu 中 mysql 如果没有密码的话，项目启动的时候可能会出现一些权限相关的错误导致无法访问，所以我们需要修改 mysql 的密码，可以按照以下步骤执行：
1. 关闭 mysql 服务和进程：
```sh
sudo systemctl stop mysql
sudo killall mysqld
```
2. 打开 mysql 的安全模式，可以不用密码打开 mysql：
```sh
sudo mysqld_safe --skip-grant-tables
```
3. 开启另一个终端连接到 mysql：
```sh
mysql -u root
```
4. 刷新权限并重置密码：
```sql
FLUSH PRIVILEGES;
ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY '123456';
```
5. 退出 MySQL 命令行：
```sql
EXIT;
```
6. 停止并重新启动 MySQL：
在原始窗口中按 Ctrl+C 停止 MySQL 安全模式，然后启动 MySQL 正常模式：
```sh
sudo systemctl start mysql
```

接着我们可以开启 mysql 的远程连接。打开 mysql 的配置文件：
```sh
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
```

找到其中 `[mysqld]` 下的  `bind-adrress = 127.0.0.1`，将其改为 ``bind-adrress = 0.0.0.0`。

## 初始化 Redis

执行下列命令：
```sh
# 安装 redis
sudo apt install redis-server -y
# 启动 redis
sudo systemctl start redis
# 设置 redis 开机自启
sudo systemctl enable redis
```

然后同样打开其配置文件开启远程访问。`sudo vim /etc/redis/redis.conf` 打开配置文件，在其中找到并打开 `bind` 变量，将其值从 `127.0.0.1 ::1` 修改为 `0.0.0.0`
```sh
bind 0.0.0.0
```

由于 redis 不修改密码也没有出现什么问题，这里我就不修改了，有需要的小伙伴可以自行上网查阅。

## 修改 SpringBoot 的配置文件

做完上面的步骤，接下来我们就可以修改 ruoyi-vue-pro 的配置文件了。

打开 `~/ruoyi-vue-pro/yudao-server/src/main/resources/application-local.yaml` 文件，找到 datasource 属性，修改 mysql 的相关参数：

![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240719075615.png)

下方的 redis 没什么改动就不用改了。

## 打开防火墙

接着我们需要在 wsl 中打开需要的防火墙。这一步非常坑，虽然简单，但我在这里卡了很久。
```sh
sudo ufw allow 3306
sudo ufw allow 6379
sudo ufw allow 48080

# 查看打开的端口
sudo ufw status
# 关闭防火墙
sudo ufw disable
```

## 启动项目

所有东西都配置完成之后，我们就可以启动项目了。

首先切换到启动类所在的目录，即 yudao-server 目录。注意要在 yudao-server 目录下执行而不是在项目的根目录下执行。
```sh
cd yudao-server
```

然后执行 `mvn:spring-boot:run` 命令，不出意外的话，应该可以正常启动。

接着我们使用 `curl localhost:48080` 命令，如果看到下面的内容，就说明项目启动成功。
```sh
{"code":401,"data":null,"msg":"账号未登录"}%
```

如果 windows 防火墙没有拦截 wsl 的网络请求，在 windows 中的浏览器中访问 `localhost:48080` 也能看到同样的内容。

至此，整个项目的启动就到此结束。

## 注意事项

### 开启局域网访问

以上操作完成之后，可以在 wsl 和 windows 中使用 `localhost:端口` 访问本地的项目。但如果在 windows 或者其它局域网的设备中使用 `ip地址:端口` 的形式则不行。

要想开启 wsl 的局域网访问，新版的 wsl 中可以通过 wsl 的配置文件直接开启。其位置在 `%USERPROFILE%/.wslconfig`。

首先先贴上我的配置文件以供参考。
```ini
[wsl2]
kernel=C:\\Windows\\System32\\lxss\\tools\\kernel_6.1.21.2_minix
networkingMode=mirrored
dnsTunneling=true
firewall=true
autoProxy=true
swap=0

[experimental]
# requires dnsTunneling but are also OPTIONAL
bestEffortDnsParsing=true
useWindowsDnsCache=true
hostAddressLoopback=true
```

注意到 `[experimental]` 标签下有一个 `hostAddressLoopback` 标签，将其设置为 `true` 就可以使用 wsl 的局域网地址进行访问。

wsl 的局域网地址可以在 wsl 中通过命令 `ip addr` 进行查看。

像 `eth0`，`eth3` 这种以太网接口中的 `inet` 后面的就是这个接口的 ip 地址。

以下命令可以直接获取 `eth0` 接口的 IP 地址：
```sh
ip addr show eth0 | grep "inet\b" | awk '{print $2}' | cut -d/ -f1

# 或者
ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'
```


这里需要注意的是，网上的很多教程都说使用 `eth0` 接口的 ip 地址，但不知是不是我开了代理的缘故，使用 `eth0` 始终无法访问 wsl 中的服务，即便我放开了放火墙之类的也不行。还是偶然更换为另一个有 ip 地址的 `eth3` 才发现可以正常访问。

（注意）另外我也尝试了一下一些帖子中说的开启 windows 的端口代理，对我来说好像没啥作用，但这里也给出相关的代码万一有人需要。开启 windows 端口代理相关的代码如下所示：

首先以管理员方式打开 powershell，然后在其中执行如下命令用于设置端口代理：
```shell
# 新增端口代理
netsh interface portproxy add v4tov4 listenport=48080 listenaddress=0.0.0.0 connectport=48080 connectaddress=198.18.0.1 protocol=tcp

# 展示所有端口代理
netsh interface portproxy show all

# 删除指定端口代理
netsh interface portproxy delete v4tov4 listenport=48080 listenaddress=0.0.0.0
```

还有一点，如果 `.wslconfig` 文件中设置的是 `networkingMode=mirrored` 模式，则你不会在 windows 的网络接口查询中看到 `vEthernet (WSL)` 接口，因为这是一个虚拟网卡，使用镜像就不需要使用虚拟网卡了。因此类似于 `New-NetFirewallRule -DisplayName "WSL" -Direction Inbound -InterfaceAlias "vEthernet (WSL)"  -Action Allow` 之类的命令也会错误。
### Windows 添加防火墙的方法

有两种方法可以为 windows 添加（端口）防火墙：
1. 命令行添加防火墙。以下命令增加一个 8080 端口的出站（out）规则：
 ```sh
 netsh advfirewall firewall add rule name= "Open Port 8080" dir=out action=allow protocol=TCP localport=8080
 ```
 2. windows 搜索防火墙，新建入站、出站规则，指定端口即可，其它都无需更改。

### 其它

新 wsl 可能没有 `ifconfig` 或者 `ip` 工具，需要手动下载：
```sh
sudo apt install net-tools
```


## 参考链接
[juejin.cn/post/7037893084998270990](https://juejin.cn/post/7037893084998270990)
[Accessing network applications with WSL | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/networking)
