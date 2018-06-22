# git使用

廖雪峰的官方网站：https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000

git有异于传统集中式分布版本控制系统，属于分布式版本控制系统
***
## 基本操作指令
```
$ git config
```
查看所有配置指令
```
$ git cd D:/user
```
进入D盘的user文件夹
```
$ pwd
```
查看当前目录的路径
```
$ folder
```
在当前目录创建folder文件夹
```
$ touch a.txt
```
创建a.txt文件
```
$ rm a
```
删除当亲目录的a文件
```
$ rm -r a/
```
删除a文件以及其子文件
```
$ clone http://github.com/...
```
克隆github的项目为本地仓库
```
$ git init
```
将该目录创建为仓库，会生成一个.git文件夹，该文件夹里的内容不要改动

## 把文件添加到版本库
（可以先用`$ git status`查看当前状态）
1. 用命令`$ git add`告诉Git，把文件添加到仓库（正常的情况就是没有任何显示，Unix哲学“没有消息就是好消息”。也可以用`$ git add .`添加全部文件）
2. 用命令`$ git commit`命令告诉Git，把文件提交到仓库（后面加上`-m "注释信息"`可以不写，但最好写上）

## 链接远程仓库
由于本地Gitc仓库和Github仓库之间的传输是通过SSH加密的，所以连接时需要设置ssh key
1. 创建SSH KEY。先看一下你C盘用户目录下有没有.ssh目录，有的话看下里面有没有id_rsa和id_rsa.pub这两个文件，有就跳到下一步，没有就通过下面命令创建
```
$ ssh-keygen -t rsa -C "youremail@example.com"
```