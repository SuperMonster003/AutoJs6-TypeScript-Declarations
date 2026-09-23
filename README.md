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

# v4.20.0

###### 2026/09/23

##### Agent 登记脚本执行通道

- `新增` `ai.agent.result(value)` 与 `ai.agent.context()` 声明及 `AgentExecutionContext`, 对应 AutoJs6 6.8.0 / build 5287
- `新增` 登记脚本结果的 JSON 值类型, 64 KiB 上限与上下文快照说明, `docs/smoke/ai-agent-execution-smoke.ts` 覆盖有效调用与未开放任务 API 的负例

# v4.19.0

###### 2026/09/21

##### 电子书模块声明

- `新增` 全局对象 `epub` / `$epub` 声明 (AutoJs6 6.8.0, 由 Readium EPUB Reader 插件提供): `open` / `openAsync`, 便捷层 `metadata` / `toc` / `readingOrder` / `text` / `cover` / `search` 及其 `Async` 形态, 阅读器 `read` / `readAsync`, `isAvailable` / `isAvailableAsync` 与 `EpubError`
- `新增` `Internal.Epub` 命名空间: `Book` (元数据, 目录, 阅读顺序, 位置数, 正文提取 `text` / `textAll`, 封面与资源导出, 全文搜索及关闭), `ReaderSession` 事件发射器 (`open` / `progress` / `bookmark` / `error` / `close` 事件, 跳转, 翻页, 偏好, 书签与关闭), `Locator`, `Metadata` / `TocEntry` / `ReadingOrderEntry` / `SearchHit` / `Bookmark`, `ReadOptions` / `Preferences` / `TextOptions` / `ExportOptions` / `SearchOptions` 与 `ErrorCode`
- `新增` `docs/smoke/epub-smoke.ts` 编译样例, 覆盖书籍对象, 便捷层, 阅读器会话事件与控制, 错误类及负例
- `新增` `epub.annotations` / `annotationsAsync` 与 `Book.annotations` / `annotationsAsync` (Readium EPUB Reader 插件 1.1.0, EPUB 契约版本 2: 阅读器为一本书保存的高亮与笔记, 按阅读顺序, 最多 2000 条, 插件为 1.0.0 时为 `PLUGIN_INCOMPATIBLE`), `Internal.Epub.Annotation` / `AnnotationStyle` 与 `ReaderSession` 的 `highlight` 事件 (`HighlightEvent`, `action` 为 `added` / `updated` / `removed`); `docs/smoke/epub-smoke.ts` 补充高亮与笔记用例与负例

##### 邮件模块声明

- `新增` 服务商预设 `Provider` 的 `pop3Xoauth2TwoLine` 字段 (Angus Mail 插件预设目录版本 3: POP3 的 `AUTH XOAUTH2` 是否只接受两行形式, Outlook.com 与 Microsoft 365 为 `true`)
- `新增` `SavedAccount.oauth` 与 `SavedAccountOAuth` (Angus Mail 插件 1.2.0: 在插件设置页经浏览器以 Google / Microsoft 账号登录的账户在 `mail.accounts.list()` 中带有 `provider` / `authorizedAt` / `expiresAt` / `needsReauth`, 令牌本身不出现)
- `新增` `Internal.Mail.TriggerEvent` 接口: AutoJs6 "邮件到达时" 任务启动的脚本通过 `engines.myEngine().execArgv.mail` 收到的事件 (Angus Mail 插件 1.1.0 后台守望, 邮件契约版本 2: `triggerId`, `alias`, `address`, `folder`, 信封 `message` 与 `receivedAt`)

# v4.18.0

###### 2026/09/20

##### 邮件模块声明

- `新增` 全局对象 `mail` / `$mail` 声明 (AutoJs6 6.8.0, 由 Angus Mail 插件提供): `connect` / `connectAsync`, `setDefault`, `default`, `close`, `providers`, `accounts`, `MailError` 及转发到默认客户端的全部客户端方法
- `新增` `Internal.Mail` 命名空间: `Client` 与 `Operations` (收发, 文件夹, 列表, 搜索, 读取, 附件与原文下载, 标记, 移动, 复制, 删除, 清除, 追加与监听的同步及 `Async` 形态), `Watch` 事件发射器, `Message` / `Attachment` / `Address` / `SendMessage`, `AccountOptions` / `Provider` / `SavedAccount`, `SearchQuery` / `SearchResult`, `Folder` / `FolderStatus` / `SendResult` / `SessionTestResult` 与 `ErrorCode`
- `新增` `docs/smoke/mail-smoke.ts` 编译样例, 覆盖别名与令牌连接, 搜索回退标记, 附件下载, 标记与移动, 监听事件及负例
