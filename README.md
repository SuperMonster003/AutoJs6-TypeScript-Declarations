<!--suppress HtmlDeprecatedAttribute -->

<div align="center">
  <p>
    <img alt="AJ_DTS_Banner" src="https://github.com/SuperMonster002/Hello-Sockpuppet/raw/master/auto.js-ts-declarations-banner_1024×310.png" width="512"/>
  </p>

  <p>Auto.js 声明文件 (.d.ts)</p>
  <p>Auto.js TypeScript Declarations</p>

  <p>
    <a href="https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations/releases/latest"><img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/SuperMonster003/Auto.js-TypeScript-Declarations"/></a>
    <a href="https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations/issues"><img alt="GitHub closed issues" src="https://img.shields.io/github/issues/SuperMonster003/Auto.js-TypeScript-Declarations?color=009688"/></a>
    <a href="https://github.com/hyb1996/Auto.js"><img alt="GitHub Auto.js repository" src="https://img.shields.io/badge/auto.js-4.1.1 alpha2-67a91b"/></a>
    <a href="https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations/find/master"><img alt="GitHub Code Lines" src="https://img.shields.io/tokei/lines/github/SuperMonster003/Auto.js-TypeScript-Declarations?color=37474F"/></a>
    <a href="https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations/blob/master/LICENSE"><img alt="GitHub License" src="https://img.shields.io/github/license/SuperMonster003/Auto.js-TypeScript-Declarations?color=534BAE"/></a>
    <a href="https://www.jetbrains.com/?from=Auto.js-TypeScript-Declarations"><img alt="JetBrains supporter" src="https://img.shields.io/badge/supporter-JetBrains-ee4677"/></a>
    <a href="https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations/blob/master/docs/TODO.md"><img alt="Todo list" src="https://img.shields.io/badge/todo-5-C63F17"/></a>
  </p>
</div>

******

### 待办事项

******

| Status | Task | Date | Cost | Progress |
| :---: | --- | :---: | :---: | :---: |
| ✔ | README.md 增加样例展示 | 2021-11-03 10:56:37 | 6 | 1 |
| ✒️ | Release 增加 full 和 lite 版本区分 | 2021-11-02 23:28:49 | 4 | 0.00 |
| ✒️ | 完成 manual.js | 2021-11-02 23:30:23 | 6 | 0.00 |

> 全部待办事项可参阅 [TODO.md](https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations/blob/master/docs/TODO.md) (共计 5 项)

******

### 功能简介

******

实现或增强开发工具的代码智能提示

* Auto.js 版本: [4.1.1 Alpha2](https://github.com/SuperMonster002/Hello-Sockpuppet/raw/master/%5Bauto.js%5D%5B4.1.1_alpha2%5D%5Barm-v7%5D(b69a4e23).apk?raw=true)
* 支持的开发工具: [VSCode](https://code.visualstudio.com/download) / [WebStorm](https://www.jetbrains.com/webstorm/download/) / [HBuilderX](https://www.dcloud.io/hbuilderx.html) ...

<details open><summary>点击收起样例展示</summary>
   <div align="center">
      <br>
      <img alt="Demo" src="https://github.com/SuperMonster002/Hello-Sockpuppet/blob/master/auto.js-ts-declarations-demo.gif"/>
   </div>
</details>

******

### 使用说明

******

1. [下载最新项目数据包](https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations/archive/main.zip) (`*.zip`)
2. 解压并得到 `declarations` 文件夹
3. 将上述文件夹放置到项目的任意目录中

   <details><summary>查看步骤详情</summary>

   假设用户有一个名为 `hello` 的项目<br>
   项目目录结构如下:

       hello / images / ...
       hello / docs / ...
       hello / main.js
       hello / project.json
       ...

   则 `declarations` 文件夹支持以下方式放置

       hello / declarations / (推荐)
       hello / images / declarations /
       hello / docs / declarations /
       hello / ... / ... / declarations /

   但不能放置在项目的同级或上级目录中
   </details>

4. 开发工具会自动识别并开始索引所有声明文件
5. 索引完成后开始编写代码并体验代码智能提示

******

### 使用指南

******

* 项目文档 (制作中...)

******

### 版本历史

******

[comment]: <> (Version history only shows last 3 versions)

# v1.0.1

###### 2021/11/03

* `新增` README.md增加样例展示
* `优化` 将selector()返回类型移入Internal命名空间

# v1.0.0

###### 2021/11/02

* `新增` Auto.js v4.1.1 Alpha2 声明文件
* `新增` Auto.js 基于 JSX 的声明文件
* `新增` androidx 26 声明文件
* `新增` android platform 27 声明文件
* `新增` android framework 26 声明文件
* `新增` Auto.js 内部模块 app 声明文件
* `新增` Auto.js 内部模块 array-observe 声明文件
* `新增` Auto.js 内部模块 automator 声明文件
* `新增` Auto.js 内部模块 console 声明文件
* `新增` Auto.js 内部模块 continuation 声明文件
* `新增` Auto.js 内部模块 device 声明文件
* `新增` Auto.js 内部模块 dialogs 声明文件
* `新增` Auto.js 内部模块 engines 声明文件
* `新增` Auto.js 内部模块 events 声明文件
* `新增` Auto.js 内部模块 floaty 声明文件
* `新增` Auto.js 内部模块 globals 声明文件
* `新增` Auto.js 内部模块 http 声明文件
* `新增` Auto.js 内部模块 images 声明文件
* `新增` Auto.js 内部模块 init 声明文件
* `新增` Auto.js 内部模块 io 声明文件
* `新增` Auto.js 内部模块 java-util 声明文件
* `新增` Auto.js 内部模块 jvm-npm 声明文件
* `新增` Auto.js 内部模块 media 声明文件
* `新增` Auto.js 内部模块 object-observe 声明文件
* `新增` Auto.js 内部模块 plugins 声明文件
* `新增` Auto.js 内部模块 rhino 声明文件
* `新增` Auto.js 内部模块 root-automator 声明文件
* `新增` Auto.js 内部模块 selector 声明文件
* `新增` Auto.js 内部模块 sensors 声明文件
* `新增` Auto.js 内部模块 shell 声明文件
* `新增` Auto.js 内部模块 storages 声明文件
* `新增` Auto.js 内部模块 threads 声明文件
* `新增` Auto.js 内部模块 timers 声明文件
* `新增` Auto.js 内部模块 ui 声明文件
* `新增` Auto.js 内部模块 util 声明文件
* `新增` Auto.js 内部模块 web 声明文件
* `新增` androidx.annotation-annotation-1.2.0 扩展模块声明文件
* `新增` com.afollestad.materialdialogs-core-3.3.0 扩展模块声明文件
* `新增` com.github.hyb1996-enhancedfloaty-0.31 扩展模块声明文件
* `新增` com.github.hyb1996-settingscompat-1.1.5 扩展模块声明文件
* `新增` com.google.android.material-material-1.4.0 扩展模块声明文件
* `新增` com.google.code.gson-gson-2.8.8 扩展模块声明文件
* `新增` com.makeramen-roundedimageview-2.3.0 扩展模块声明文件
* `新增` com.squareup.okhttp3-okhttp-4.9.1 扩展模块声明文件
* `新增` de.mindpipe.android-android-logging-log4j-1.0.3 扩展模块声明文件
* `新增` junit-4.13.2 扩展模块声明文件
* `新增` kotlin-stdlib-jdk8 扩展模块声明文件
* `新增` log4j-1.2.17 扩展模块声明文件
* `新增` okhttp-urlconnection-2.7.5 扩展模块声明文件
* `新增` okio-1.6.0 扩展模块声明文件
* `新增` opencv-3.4.3 扩展模块声明文件
* `新增` rhino-1.7.7.2 扩展模块声明文件

##### 更多版本历史可参阅

* [CHANGELOG.md](https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations/blob/master/docs/CHANGELOG.md)

******

### 相关项目

******

* [Android d.ts Generator](https://github.com/NativeScript/android-dts-generator) { author: [NativeScript](https://github.com/NativeScript) }
    - `A tool that generates TypeScript declaration files (.d.ts) from Jars`
* [Auto.js](https://github.com/hyb1996/Auto.js) { author: [hyb1996](https://github.com/hyb1996) }
    - `安卓平台上的 JavaScript 自动化工具`
* [Ant-Forest](https://github.com/SuperMonster003/Ant-Forest) { author: [SuperMonster003](https://github.com/SuperMonster003) }
    - `基于 Auto.js 的蚂蚁森林能量自动收取脚本`

******

### 打赏 (Tip)

******

<details><summary>查看详情 (Click to show details)</summary><br>
<div align="center">
To tip online, scan the QR code below <br>
扫描对应二维码可打赏 <br><br>
I believe I could make it better with your support :) <br>
感谢每一份支持和鼓励 <br><br>

<a href="https://raw.githubusercontent.com/SuperMonster002/Hello-Sockpuppet/master/qr-alipay-sponsor_521%C3%97648.png"><img alt="Alipay sponsor" src="https://raw.githubusercontent.com/SuperMonster002/Hello-Sockpuppet/master/qr-alipay-sponsor_521%C3%97648.png" height="224"/></a>
<a href="https://raw.githubusercontent.com/SuperMonster002/Hello-Sockpuppet/master/qr-wechat-sponsor_521%C3%97648.png"><img alt="WeChat sponsor" src="https://raw.githubusercontent.com/SuperMonster002/Hello-Sockpuppet/master/qr-wechat-sponsor_521%C3%97648.png" height="224"/></a>
</div>
</details>