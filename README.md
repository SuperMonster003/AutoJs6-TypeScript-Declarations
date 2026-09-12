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
    <a href="http://project.autojs6.com"><img alt="GitHub AutoJs6 repository" src="https://img.shields.io/badge/autojs6->=6.8.0-388E3C"/></a>
    <a href="https://github.com/topics/javascript"><img alt="GitHub top language" src="https://img.shields.io/github/languages/top/SuperMonster003/AutoJs6-TypeScript-Declarations?color=3178C6"/></a>
   <br>
    <a href="https://github.com/SuperMonster003/AutoJs6-TypeScript-Declarations/commit/f8250babdb161e12ad2e14c73e8aa2b5d7d89cbc"><img alt="Created" src="https://img.shields.io/date/1635813883?color=C56000&label=created"/></a>
    <a href="https://github.com/SuperMonster003/AutoJs6-TypeScript-Declarations/blob/main/LICENSE"><img alt="GitHub License" src="https://img.shields.io/github/license/SuperMonster003/AutoJs6-TypeScript-Declarations?color=C63F17"/></a>
    <a href="https://github.com/SuperMonster003/AutoJs6-TypeScript-Declarations/find/master"><img alt="GitHub Code Size" src="https://img.shields.io/github/languages/code-size/SuperMonster003/AutoJs6-TypeScript-Declarations?color=795548"/></a>
    <a href="https://www.jetbrains.com/?from=AutoJs6-TypeScript-Declarations"><img alt="JetBrains supporter" src="https://img.shields.io/badge/supporter-JetBrains-ee4677"/></a>
  </p>
</div>

******

### 功能简介

******

实现或增强开发工具的代码智能补全功能:

* AutoJs6 版本: [不低于 6.8.0](http://download.autojs6.com)
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

#### [ 1 ] - 获取声明文件 (d.ts) 的主目录

可以从 NPM 或 GitHub 获取主目录.

##### 从 NPM 获取 (推荐)

```shell
npm i @sm003/autojs6-dts
```

安装后, 定位到 `/node_modules/@sm003/autojs6-dts/declarations`.

##### 从 GitHub 获取

[下载最新项目 zip 数据包](https://github.com/SuperMonster003/AutoJs6-TypeScript-Declarations/archive/main.zip), 解压后得到 `declarations` 文件夹.

#### [ 2 ] - 放置声明文件的主目录

> 如使用 WebStorm, 此步骤可略过.

将主目录放置到项目的任意目录中.

假设用户有一个名为 `hello` 的项目, 项目目录结构如下:

> hello / images / ...  
> hello / docs / ...  
> hello / main.js  
> hello / project.json  
> ... ...

则 `declarations` 主目录支持以下方式放置:

> hello / declarations / (推荐)  
> hello / images / declarations /  
> hello / docs / declarations /  
> hello / ... / ... / declarations /

但不能放置在项目的同级或上级目录中.

#### [ 3 ] - 实现或增强代码智能补全

开发工具会自动识别并开始索引所有声明文件.

索引完成后开始编写代码并体验代码智能提示.

> 注: 部分编辑器可能需要重新启动才能开始声明文件的索引.

#### [ 4 ] - VSCode 编辑器的额外配置

VSCode 可能无法像 WebStorm 一样识别任意位置的 declarations 文件夹, 尤其是使用 npm 命令部署后, declarations 文件夹更是难以被 VSCode 默认识别. 因此需要将 [jsconfig.json](https://github.com/SuperMonster003/AutoJs6-TypeScript-Declarations/blob/main/jsconfig.json) 文件复制到项目根目录中, 如:

> hello / mode_modules / @sm003 / autojs6-dts / ...  
> hello / jsconfig.json  
> hello / main.js  
> ... ...

如果项目中本身已存在 jsconfig.json 文件, 只需将下列配置合并到已有文件即可:

```json
{
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@sm003/autojs6-dts/declarations",
      "./declarations"
    ]
  }
}
```

重启 VSCode 后, 示例中的 `hello/main.js` 可实现或增强代码智能补全.

******

### 获取更新

******

从 NPM 直接获取更新:

```shell
npm update @sm003/autojs6-dts
```

如需检查更新, 除直接到 [当前项目主页](http://dts-project.autojs6.com) 查看外, 还可定位到项目根目录的 package.json 文件, 鼠标悬停在 @sm003/autojs6-dts 依赖项的版本值处, 在浮动窗口中可查看是否存在版本更新. 另外 VSCode 也可借助 [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens) 插件实现版本更新检查.

通常情况下, [AutoJs6](http://autojs6.com) 发布版本更新后, 声明文件项目也会伴随更新.

******

### 版本历史

******

[comment]: <> (Version history only shows last 3 versions)

# v4.11.0

###### 2026/09/13

##### 设备内存页大小

- `新增` `device.pageSize` 与 `$device.pageSize` 只读数值声明, 以字节返回当前系统的内存页大小
- `更新` 从 AutoJs6 6.8.0 (5280) 重新生成主应用与资源声明, 同步 Ace Editor 内置声明和 LSP 分组

# v4.10.0

###### 2026/09/12

##### OCR 自动选择模式

- `新增` OCR 模式支持 `auto`, 空字符串及 nullish 重置, 读取类型限定为实际引擎名称或空字符串, 同步 `tap`, 单次调用选项与 Ace Editor 补全
- `更新` 从 AutoJs6 6.8.0 (5280) 重新生成主应用与资源声明, 同步 Ace Editor 内置声明和 LSP 分组

# v4.9.0

###### 2026/09/10

##### MediaInfo 多流查询

- `新增` MediaInfo 流序号, 流计数, InfoKind 与能力声明, 同步 Rhino 查询选项与 Ace Editor 补全

# v4.8.1

###### 2026/09/08

##### 控制台输入, 显示选项与 UI 模式控制台元素声明

- `新增` `console.rawInput` / `console.input` 恢复为可用声明 (阻塞读取控制台输入栏的一行文本, `input` 作为 JavaScript 表达式求值)
- `新增` `console.setTimeVisible` / `setTimeFormat` / `setColorful` / `setAvoidStatusBar` / `setInputVisible` 及 `console.build` 的 `timeVisible` / `timeFormat` / `colorful` / `avoidStatusBar` / `inputVisible` 选项
- `新增` JSX 元素 `<console>` / `<globalconsole>` 及其属性声明 (`global`, `title`, 标题栏与内容区样式, `timeVisible`, `timeFormat`, `colorful`, `inputVisible` 等)
- `依赖` 适配 AutoJs6 6.8.0 (5279) 的控制台重构

# v4.8.0

###### 2026/09/07

##### 无障碍自动化声明

- `新增` `aj6-int-flow.d.ts`: `Flow<T>` 链式对象与 `Flow` 命名空间 (等待选项, 作用域, 默认值, `FlowError` 与错误码), `flow` / `$flow` 命名空间对象 (`Internal.FlowApi`: 等待 / 工具集 / 事件等待起点, `all` / `race` / `any`, `defaults`, `trace`), 以及 `waitAsync` / `waitThenClick` / `clickWait` / `waitForStable` / `waitForStableThenClick` / `clickWhenStable` / `waitForVisible` / `waitForHidden` / `waitForGone` / `clickWhenStableAfter` 全局函数与 `wait.async`
- `新增` `Internal.Automator` 与全局的工具集 (`smartClick` / `clickIfExists` / `clickAny` / `findAny` / `scrollUntil` / `typeInto` / `dismissPopups` / `collectList` / `launchAndWait` / `backUntil` / `backToApp` / `toggle` / `retry`) 与事件驱动等待 (`waitForIdle` / `waitForEvent` / `waitForToast` / `waitForNotification`), 选项与结果类型置于 `Automator` 命名空间
- `新增` `Internal.Auto` 的 `wait` / `findWindows` / `findWindowRoots` / `explain` / `dump` / `stats`, `registerEvent` / `registerEvents` 的过滤选项重载, `setWindowFilter` 的匹配对象形式 (`Automator.WindowMatch`), `AutoState.adoptedByEvent`, `Automator.Flags` 新增 `appWindowsFallback` / `eventAssistedPolling`
- `新增` 字符串选择器重载 `select(syntax)` (全局与 `Internal.Selector`), `findIterator()` 与 `UiObjectIterator`
- `依赖` 从 AutoJs6 6.8.0 (5278) 重新生成主应用声明 (`UiObject` / `UiSelector` / `UiObjectCollection` 的新增方法与 `UiObjectIterator`), 并同步 Ace Editor 内置声明和 LSP 分组

# v4.7.0

###### 2026/09/01

##### Pinyin 自定义读音与矩阵工具声明

- `新增` `Pinyin.Options.customDictionary` 与 `Pinyin.CustomDictionary`, 声明按调用生效的汉字读音覆盖, 最长匹配优先及 64 KiB/1024 项边界
- `完善` `pinyin.compare` 返回数值排序结果, `pinyin.compact` 返回候选矩阵的笛卡尔积, 并移除原占位返回类型
- `依赖` 从 AutoJs6 6.8.0 (5277) 重新生成主应用与共享 Pinyin API 声明, 并同步 Ace Editor 内置声明和 LSP 分组
