<!--suppress HtmlDeprecatedAttribute, HttpUrlsUsage -->

<div align="center">
  <p>
    <img src="https://s1.imagehub.cc/images/2023/03/24/c5f6f649b6ed3aae341966a92fca2747.md.png" alt="autojs6-ts-declarations-banner_1024×310" border="0" width="496" />
  </p>

  <p>AutoJs6 声明文件 (d.ts)</p>
  <p>TypeScript Declarations for AutoJs6</p>

  <p>
    <a href="http://dts-project.autojs6.com/blob/main/package.json"><img alt="Version name" src="https://img.shields.io/badge/dynamic/json?color=534BAE&label=version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2FSuperMonster003%2FAutoJs6-TypeScript-Declarations%2Fmaster%2Fpackage.json"/></a>
    <a href="http://dts-issues.autojs6.com"><img alt="GitHub issues" src="https://img.shields.io/github/issues/SuperMonster003/AutoJs6-TypeScript-Declarations?color=009688"/></a>
    <a href="http://project.autojs6.com"><img alt="GitHub AutoJs6 repository" src="https://img.shields.io/badge/autojs6-6.2.1--alpha2-388E3C"/></a>
    <a href="https://github.com/topics/javascript"><img alt="GitHub top language" src="https://img.shields.io/github/languages/top/SuperMonster003/AutoJs6-TypeScript-Declarations?color=3178C6"/></a>
    <a href="https://github.com/SuperMonster003/AutoJs6-TypeScript-Declarations/blob/main/docs/TODO.md"><img alt="Todo list" src="https://img.shields.io/badge/todo-1-B64FC8"/></a>
   <br>
    <a href="https://github.com/SuperMonster003/AutoJs6-TypeScript-Declarations/commit/f8250babdb161e12ad2e14c73e8aa2b5d7d89cbc"><img alt="Created" src="https://img.shields.io/date/1635813883?color=C56000&label=created"/></a>
    <a href="https://github.com/SuperMonster003/AutoJs6-TypeScript-Declarations/blob/main/LICENSE"><img alt="GitHub License" src="https://img.shields.io/github/license/SuperMonster003/AutoJs6-TypeScript-Declarations?color=C63F17"/></a>
    <a href="https://github.com/SuperMonster003/AutoJs6-TypeScript-Declarations/find/master"><img alt="GitHub Code Size" src="https://img.shields.io/github/languages/code-size/SuperMonster003/AutoJs6-TypeScript-Declarations?color=795548"/></a>
    <a href="https://www.jetbrains.com/?from=AutoJs6-TypeScript-Declarations"><img alt="JetBrains supporter" src="https://img.shields.io/badge/supporter-JetBrains-ee4677"/></a>
  </p>
</div>

******

### 待办事项

******

| Status | Task    |        Date         | Cost | Progress |
|:------:|---------|:-------------------:|:----:|:--------:|
|   ✔    | 发布至 NPM | 2023-03-24 16:01:36 |  4   |   100%   |

> 全部待办事项可参阅 [TODO.md](https://github.com/SuperMonster003/AutoJs6-TypeScript-Declarations/blob/main/docs/TODO.md) (共计 1 项)

******

### 功能简介

******

实现或增强开发工具的代码智能补全功能:

* AutoJs6 版本: [6.2.1 Alpha2](http://download.autojs6.com)
* 支持的开发工具: [VSCode](https://code.visualstudio.com/download) / [WebStorm](https://www.jetbrains.com/webstorm/download/) / [HBuilderX](https://www.dcloud.io/hbuilderx.html) ...

******

### 样例展示

******

<details><summary>点击展开或收起样例展示</summary>
   <div align="center">
      <br>
      <img src="https://s1.imagehub.cc/images/2023/03/24/3bbae966e4c0cbe611de7cf9dffb8150.gif" alt="autojs6-ts-declarations-demo" border="0"/>
   </div>
</details>

******

### 使用说明

******

#### 获取声明文件 (d.ts) 的主目录

可以从 NPM 或 GitHub 获取主目录.

##### 从 NPM 获取

```shell
npm i @sm003/autojs6-dts
```

安装后, 定位到 `/node_modules/@sm003/autojs6-dts/declarations`.

##### 从 GitHub 获取

[下载最新项目 zip 数据包](https://github.com/SuperMonster003/AutoJs6-TypeScript-Declarations/archive/main.zip), 解压后得到 `declarations` 文件夹.

#### 放置声明文件的主目录

将主目录放置到项目的任意目录中.

假设用户有一个名为 `hello` 的项目, 项目目录结构如下:

> hello / images / ...  
> hello / docs / ...  
> hello / main.js  
> hello / project.json  
> ...

则 `declarations` 主目录支持以下方式放置:

> hello / declarations / (推荐)  
> hello / images / declarations /  
> hello / docs / declarations /  
> hello / ... / ... / declarations /

但不能放置在项目的同级或上级目录中.

#### 实现或增强代码智能补全

开发工具会自动识别并开始索引所有声明文件.

索引完成后开始编写代码并体验代码智能提示.

> 注: 部分编辑器可能需要重新启动才能开始声明文件的索引.

******

### 版本历史

******

[comment]: <> (Version history only shows last 3 versions)

# v2.0.0

###### 2023/03/24

* `优化` 适配 AutoJs6 6.2.1 Alpha2
* `优化` android platform 27 声明文件升级为 33 版本
* `优化` 还原方法签名中 param0/param1/... 的原始参数名称
* `管理` 项目已发布至 NPM (@sm003/autojs6-dts)

# v1.0.2

###### 2021/11/05

* `新增` Error 实例的 javaException/rhinoException 属性描述
* `修复` auto() 方法描述指向错误
* `优化` 方法签名完善
  · android.content.pm.PackageManager.getApplicationInfo
  · android.content.pm.PackageManager.getApplicationLabel

# v1.0.1

###### 2021/11/03

* `新增` README.md 增加样例展示
* `优化` 将 selector() 返回类型移入 Internal 命名空间

##### 更多版本历史可参阅

* [CHANGELOG.md](https://github.com/SuperMonster003/AutoJs6-TypeScript-Declarations/blob/main/docs/CHANGELOG.md)

******

### 相关项目

******

| 项目                                                                              | 简介                        | 开发者                                                   |
|---------------------------------------------------------------------------------|---------------------------|-------------------------------------------------------|
| [Android d.ts Generator](https://github.com/NativeScript/android-dts-generator) | 由 jar 文件生成 d.ts 声明文件的工具   | [NativeScript](https://github.com/NativeScript)       |
| [AutoJs6-VSCode-Extension](http://vscext-project.autojs6.com)                   | AutoJs6 调试器 (VSCode 平台插件) | [SuperMonster003](https://github.com/SuperMonster003) |

******

### 打赏 (Tip)

******

<details><summary>查看详情 (Click to show details)</summary><br>
<div align="center">
To tip online, scan the QR code below <br>
扫描对应二维码可打赏 <br><br>
I believe I could make it better with your support :) <br>
感谢每一份支持和鼓励 <br><br>

<a href="https://s1.imagehub.cc/images/2023/03/24/83583b97ee8c4d3f7d7acfbe0c60bb8d.png"><img src="https://s1.imagehub.cc/images/2023/03/24/83583b97ee8c4d3f7d7acfbe0c60bb8d.png" alt="qr-alipay-sponsor_521×648" height="224" border="0"/></a>
<a href="https://s1.imagehub.cc/images/2023/03/24/de74a1d70a60d656431fc5625882f821.png"><img src="https://s1.imagehub.cc/images/2023/03/24/de74a1d70a60d656431fc5625882f821.png" alt="qr-wechat-sponsor_521×648" height="224" border="0"/></a>
</div>
</details>