# 简笔 - 一个极简的写作区

阻挡干扰，专注写作

## 简介

简笔是一个极简主义的网页写作App。

本软件的目的之有一个——专注于写作。使用的时候，无需关心其他繁杂事务，只需关心面前的“纸笔”。

所有数据都将使用HTML5本地存储功能保存在您的浏览器上。

应用链接：[中文](https://imbearchild.github.io/ZenPenPlus/index.html?lang=cn)（初次加载时间可能较长，请耐心等待）

README：[English](https://github.com/ImBearChild/ZenPenPlus/blob/master/readme_en.md)

## 功能

* 全屏写作，隔绝干扰
* 有日间与夜间双色主题
* 纯网页应用，无需下载App
* 支持黑体、斜体、超链接与引用功能
* 可以转存为Markdown、HTML与纯文本
* 基于HTML5的本地自动保存
* 心流模式，让思维自由流淌
* 设置与关于界面
* 字体加载
* 字数统计
* (如果你喜欢)可以下载到本地直接使用，无需搭建服务器

## 心流模式

心流的哲学是这样的，先让你的思维尽情的流淌，不要停，不要纠结，不要拖延，很快的构建出一个原型。接下来再进行修改和精细化的调整。而光靠自我控制，有时是不行的，需要一些外界的鞭策和帮助。

为了做到这一点，你需要设定一个时间，十分钟也好，二十分钟也罢，然后打开心流模式，在这段时间内，你需要尽情写作。一旦你停下来，前面输入的内容就会慢慢变淡，在数秒后就会完全消失。

我希望这个简单的功能，就能够有效的给你激励，并持续提供足够的成就感和刺激感给你。

## 相对原版ZenPen的改进

* 添加对中文（亚洲文字）的字数统计支持
* 添加心流(Flowstate)模式
* 添加多语言支持（中文、English）
* 添加UI动画
* 支持移动设备(仅限Firefox与Chrome)
* 设置与关于界面
* 字体加载

---------

## 文件说明

`src`目录下是项目的源代码，`docs`目录下是经过`makedoc.py`压缩的源代码。两者代码无实质上区别，均可直接使用。本项目的Github Page实际上指向的是`docs`目录，因此每次发布release都会在`dev`分支使用`makedoc.py`压缩后合并到`master`分支。

`run_doc.sh`与`run_src.sh`会启动对应目录的开发用的服务器。

注意：`makedoc.py`需要Node.js包`clean-css-cli`、`uglify-js`才能运行。`run_doc.sh`与`run_src.sh`需要Node.js包`http-server`。（本项目的命令行工具均不支持Windows环境，WSL理论上可用，但我没有测试过。）

---------

## 版权信息

### 使用的第三方库

* translater.js (MIT License) [Link](https://github.com/jaywcjlove/translater.js)
* FontAwesome (SIL OFL 1.1 and MIT License)
* FileSaver.js [Link](http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js)
* Blob.js [Link](http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js)
* screenfull.js (Sindre Sorhus; MIT License)

### 许可协议

The MIT License

Copyright (C) 2020 ~ [ImBearChild](https://github.com/ImBearChild/)

原作：[ZenPen](https://github.com/tholman/zenpen) (MIT License)
