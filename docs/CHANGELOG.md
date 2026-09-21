******

### 版本历史

******

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

# v4.17.0

###### 2026/09/18

##### 内置日志器与三方库声明精简

- `更新` 全局代理 `Level` / `LogConfigurator` / `LogManager` 改为继承 AutoJs6 内置的 `org.autojs.autojs.core.console.log` 同名类, `console.setGlobalLogConfig` 的示例与源码摘要同步 (宿主 6.8.0 以内置滚动文件日志器替换 log4j)
- `更新` 三方库声明不再包含宿主已移除的库: log4j 与 android-logging-log4j, Flexmark, JavaMail, JUnit, github-api 与 Jackson, commons-io 与 commons-lang3, kotlin-reflect, SpongyCastle, media3 与 Guava (`libraries.d.ts` 26,864 -> 25,081 行)
- `更新` 合并 AutoJs6 6.8.0 (5282) 的主应用与资源声明: 新增 `org.autojs.autojs.core.console.log` 包 (Appender / Level / LogConfigurator / LogEvent / Logger / LoggerRepository / LogManager) 与邮件插件契约类, 资源 ID 随宿主增删

# v4.16.0

###### 2026/09/16

##### 图色与图像匹配增强

- `新增` `images.countPointsByColor` 与 `images.getMeanColor` 声明, `images.readPixels` 接受 ImageWrapper 或文件路径
- `新增` `colors.distance`, `colors.invert`, `colors.blend`, `colors.contrast` 及 Color 实例对应方法声明
- `新增` `images.matchTemplate` 与 `images.findPointByImage` 的 `scales` 选项, 匹配项的 `width`, `height`, `scale`, `center`, `rect` 属性, 以及 `MatchingResult` 的 `size`, `isEmpty()`, `isNotEmpty()`, `filter()` 声明
- `完善` `images.matchTemplate` 参数接受图片路径并补充 `useTransparentMask` 选项
- `新增` `images.matchFeatures` 的 `ransacThreshold`, `minInliers`, `maxFeatures` 选项及图片参数, `ObjectFrame` 的 `width`, `height`, `angle`, `bounds`, `points`, `matches`, `inliers` 属性, 以及 `ImageFeatures` 的 `count`, `method`, `oneShot()` 声明
- `完善` `images.detectAndComputeFeatures` 补充 `maxFeatures` 选项及 `scale` 取值说明, 匹配器名称不区分大小写
- `更新` 合并 AutoJs6 6.8.0 (5280) 的主应用, 资源与三方库声明, 保留 Flow 任务栈及坐标点击声明

# v4.15.0

###### 2026/09/16

##### 坐标点击与 Flow 任务栈

- `新增` smartClickBounds / clickBoundsIfExists / clickBoundsAny 及 Flow 等待, 延时和别名声明
- `更新` maxAttempts 默认 0 表示不限尝试次数, FlowError.flowStack 提供异步任务诊断
- `更新` 同步宿主生成声明, Ace Editor 内置声明, LSP 聚合文件和索引

# v4.14.0

###### 2026/09/16

##### Flow 可选步骤与有界循环

- `新增` Flow 链式 clickIfExists / clickAny / findAny, whenPresent 和 repeatUntil 声明
- `更新` waitForStable 的 snapshot 投影与集合返回类型, stableFor 默认值与运行时保持一致
- `更新` 同步宿主生成声明与 Ace Editor LSP 聚合文件和索引

# v4.13.0

###### 2026/09/14

##### 打包应用共享存储配置

- `新增` LaunchConfig.requiresSharedStorage 及对应 getter / setter 声明
- `更新` 同步 AutoJs6 6.8.0 (5280) 的资源与依赖声明及 Ace Editor LSP 分组

# v4.12.0

###### 2026/09/13

##### Pangu 文本间距

- `新增` 全局 `pangu` 声明, 覆盖 pangu.js 10.1.0 的 `version`, `spaceText` 与 `hasProperSpacing`, 并为 `require('pangu')` 提供具体返回类型
- `更新` 同步 AutoJs6 主应用声明与 Ace Editor 内置声明, 重新生成 LSP 分组与索引

# v4.11.1

###### 2026/09/13

##### Android 本地网络权限

- `修复` `runtime.requestPermissions` 的通用权限名类型, 将参数声明为 `string[]`, 更正数组示例并说明 `access_local_network` 的系统与 targetSdk 条件
- `更新` 从 AutoJs6 6.8.0 (5280) 重新生成主应用与资源声明, 同步 Ace Editor 内置声明和 LSP 分组

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

# v4.6.1

###### 2026/09/01

##### 预览器命名声明同步

- `替换` 将 `FileUtils.PreviewType` 与 `previewType` 分别统一为 `PreviewerType` 与 `previewerType`, 同步主应用声明中的预览器语义命名
- `依赖` 从 AutoJs6 6.8.0 (5277) 重新生成主应用, 资源与第三方库声明, 并同步 Ace Editor 内置声明和 LSP 分组

# v4.6.0

###### 2026/08/31

##### PNG 量化资源预算与取消声明

- `新增` `Images.PngQuantizationOptions.maxPixels` 与 `maxMemoryBytes`, 声明默认 16000000 像素和 256 MiB 附加工作内存上限
- `指标` 字节和文件结果增加 `peakWorkingMemoryBytes`, v4 返回计入预算的峰值内存, 旧插件返回 `-1`
- `异常` 声明资源上限错误的稳定代码, 原因和预算字段, 并同步显式取消令牌及脚本退出联动对应的 Java API
- `依赖` 从 AutoJs6 6.8.0 (5277) 重新生成资源控制, 取消与结果 Java 声明, 并同步 Ace Editor 内置声明和 LSP 分组

# v4.5.0

###### 2026/08/31

##### PNG 量化色彩与流式文件输出声明

- `新增` `images.quantizeToFile` 与 `Images.PngQuantizationFileResult`, 直接写入 PNG 文件并返回路径, 大小, 实际质量和量化误差
- `完善` `Images.PngQuantizationOptions.preserveAlpha`, 默认保留透明度, 设为 `false` 时声明完全不透明输出语义
- `依赖` 从 AutoJs6 6.8.0 (5277) 重新生成文件描述符输出, 色彩选项与结果 Java 声明, 并同步 Ace Editor 内置声明和 LSP 分组

# v4.4.0

###### 2026/08/30

##### PNG 量化质量结果与回退策略声明

- `新增` `images.quantize` 与 `Images.PngQuantizationResult`, 返回索引 PNG 字节, 输出大小, 实际质量和标准化量化误差
- `完善` 空选项声明为 `minQuality=0` 的尽力而为策略, 显式 `quality` 或 `minQuality` 保持严格下限语义
- `异常` 主应用声明同步 `PngQuantBridge.QualityTooLowException` 与稳定错误代码, 可区分质量不足和内部失败
- `依赖` 从 AutoJs6 6.8.0 (5276) 重新生成主应用与资源声明, 并同步 Ace Editor 内置声明和 LSP 分组

# v4.3.0

###### 2026/08/30

##### PNG 量化具名参数声明

- `新增` `Images.PngQuantizationOptions` 及 `images.save`, `saveImage`, `compress`, `compressToBytes` 的对象参数声明, 覆盖颜色预算, 速度, 质量区间, 抖动与 posterize
- `兼容` 保留数字 `quality` 与省略参数的既有重载语义, 并声明选项对象仅适用于 Image Quantization 插件提供的 PNG 输出
- `依赖` 从 AutoJs6 6.8.0 (5276) 重新生成主应用与资源声明, 并同步 Ace Editor 内置声明和 LSP 分组

# v4.2.0

###### 2026/08/27

##### R8 Retrace 与校验产物导出声明

- `新增` `runtime.retraceR8Stack` 声明, 通过协议 1.1 提供者按 mapping 与 retrace metadata 溯源绑定还原混淆堆栈
- `新增` `runtime.loadJarWithR8` 的 3 个导出重载, 原子导出经重新哈希的 mapping, seeds, usage 与 retrace metadata, 且不隐式导出 DEX
- `约束` 所有路径只由宿主解析, 未选择精确提供者或任一哈希、元数据、输出校验失败时均终止且不回退 D8/dx
- `依赖` 从 AutoJs6 宿主提交 `dafddc732` 重新生成主应用与资源声明, 并同步 Ace Editor 内置声明和 LSP 分组

# v4.1.0

###### 2026/08/26

##### AI 插件唯一目标接口声明

- `替换` `ai`, `ask`, `chat`, `stream`, `session` 与 `catalog` 统一使用插件目标输入, 选项, 响应和流式类型
- `精简` 移除未发布的双路径重载, 宿主直连响应形状及过渡类型, 超时只保留 `timeout` 规范属性
- `完善` 省略选择器时声明官方 3-Stone AI 默认目标, 并统一消息, usage, finish reason, target, session 和稳定错误类型
- `依赖` 同步 Ace Editor 内置声明与生成的 LSP 声明分组

# v4.0.9

###### 2026/08/26

##### AI 统一目标目录与精确路由声明

- `替换` 以 `ai.catalog` 统一声明本机模型与在线配置目标, 删除未发布的旧目录、配置探测及兼容别名
- `新增` `target` 精确选择、官方 3-Stone AI 默认目标、target/profile/backend/plugin 元数据及 reasoning 输出声明
- `完善` 生成、流式与持久会话的完整 usage、finish reason 及稳定错误代码, 严格声明目标不存在、未配置、不可用或能力不匹配时不回退
- `依赖` 重新生成 AutoJs6 主应用、资源及三方库声明, 并同步 Ace Editor 内置声明

# v4.0.8

###### 2026/08/25

##### R8 显式编译入口声明

- `新增` `ScriptRuntime.loadJarWithR8` 的 3 个重载, 覆盖显式 keep rules, 有序 classpath 与 consumer-rule ordinal 绑定
- `约束` 声明保留完整参数数组类型, 与默认关闭且无 D8/dx 回退的宿主入口一致
- `依赖` 同步 AutoJs6 主应用, API 文档与 Ace Editor 内置声明

# v4.0.7

###### 2026/08/21

##### AI 本机 backend profile 声明

- `新增` 本机插件生成及持久会话的 `backend` 选项, 覆盖 `cpu`, `gpu` 和 `npu`, 默认 CPU 且不可用 profile 不回退
- `新增` 统一目标目录的 `backendProfiles` 判别联合类型, 精确声明设备可用性及稳定不可用原因
- `约束` 模型枚举和云端提供商选项禁止误用本机 `backend`, 持久会话创建后固定同一 profile
- `依赖` 同步 AutoJs6 主应用与 Ace Editor 内置声明

# v4.0.6

###### 2026/08/21

##### AI 本机结构化 JSON 声明

- `新增` 本机插件路由及持久会话的 `structuredJson` 和 `responseSchema` 选项
- `约束` `responseSchema` 必须是 JSON 对象并会隐式启用结构化输出, 会话创建后为每轮固定同一 schema
- `精确` `ai.ask` 及响应 `text` 仍返回完整 JSON 文本, 流式增量仍为可能尚未完整的文本片段
- `依赖` 重新生成并同步 AutoJs6 主应用, 资源及三方库声明

# v4.0.5

###### 2026/08/21

##### AI 持久多轮会话声明

- `新增` `ai.session` 及持久会话选项, 覆盖官方插件简写, system preface 和固定生成参数
- `新增` `Ai.Session` 的 `ask`, `chat`, `stream`, `close` 方法及只读状态, 提供商和模型属性
- `约束` 会话轮次仅接收当前用户提示字符串, 明确流式取消会关闭整个会话
- `依赖` 重新生成并同步 AutoJs6 主应用, 资源及三方库声明

# v4.0.4

###### 2026/08/21

##### AI 本机插件路由声明完善

- `新增` `ai.chat`, `ai.stream` 和统一目标目录的插件重载, 覆盖路由响应, 流式事件及目标发现
- `完善` 官方插件简写, 第三方组件选择, 多轮纯文本消息及本地生成参数声明
- `精确` 插件 token 用量, 生成耗时, 可空模型 ID 及稳定路由错误类型
- `依赖` 重新生成并同步 AutoJs6 主应用, 资源及三方库声明

# v4.0.3

###### 2026/08/21

##### YOLO 独立插件目标检测声明

- `新增` `yolo`/`$yolo` 模块及 `load`, `detect`, `close` 声明, 覆盖会话选项, 检测结果及稳定错误代码
- `约束` 声明显式 Provider 组件, CPU 设备及线程, 阈值, 结果数和超时范围
- `优化` 同步 Node 插件运行器的主应用声明, 移除已淘汰的 NativeNodeEmbedded 和 libuv 诊断桥接声明
- `依赖` 重新生成并同步 AutoJs6 主应用, 资源及三方库声明

# v4.0.2

###### 2026/08/12

##### Python 引擎源码路由声明

- `新增` `PythonScriptSource`, `PythonFileSource`, `PythonProjectSource` 和 `PersistedScriptLaunchContext` 等主应用声明, 并补齐 `IntentTask`/`TimedTask` 的 `sourceKind` 与 `projectRoot` 持久化上下文
- `优化` 增加 `ScriptSource(sourceName, extension)` 构造签名, 同步 `engines.execScriptFile` 源码摘要, 明确 `.py` 路由及禁止回退到 JavaScript 引擎
- `依赖` 重新生成并同步 AutoJs6 主应用, 资源及三方库声明

# v4.0.1

###### 2026/08/11

##### AI 本机文本生成插件显式选择声明

- `新增` ai/ask 的本机文本生成插件显式选择重载及组件, 提供商和模型类型
- `约束` 插件选项仅支持单条 user 文本和超时, 并禁止与云端提供商选项混用

# v4.0.0

###### 2026/07/27

##### AutoJs6 6.8.0 Alpha7 声明同步与生成声明整合

- `新增` ai/tts/powerManager/settings/workManager 模块声明及运行时别名
- `优化` 适配 AutoJs6 6.8.0 Alpha7 内置模块 API 声明
- `优化` 同步 tasks/app/images/ocr/plugins/web 等模块的签名, 别名, 空值及返回类型
- `优化` 补齐运行时挂载, `$` 前缀别名及关键全局对象 smoke 样例
- `依赖` 重新生成并整合 Android/AutoJs6 主应用, 资源及三方库声明
- `调整` 发布入口统一为 `declarations/autojs6/index.d.ts`, 移除旧入口及生成分片

# v3.0.0

###### 2026/06/15

* `新增` converter/formatter/sysprops/zip/nanoid/mediainfo/pinyin4j/jsox 等内置模块声明文件
* `优化` 适配 AutoJs6 6.7.1 Alpha4 内置模块 API 声明
* `优化` 完善 index 入口引用/全局变量声明及 `$` 前缀模块别名
* `优化` 同步 colors/Color/images/Canvas/pinyin/mime/sqlite/media/recorder/tasks 等既有模块声明
* `优化` 增加关键全局对象 smoke 样例及 TypeScript 验证命令记录
* `依赖` 刷新 Android/AutoJs6 主应用及三方库生成声明文件

# v2.1.3

###### 2023/12/02

* `新增` opencc 模块声明文件
* `优化` 完善 ocr 章节缺失的 detect 及 recognizeText 声明
* `优化` 适配 AutoJs6 6.5.0
* `依赖` 附加 Android OpenCC 声明文件版本 1.2.0
* `依赖` 升级 Android dx 声明版本 1.11 -> 1.14
* `依赖` 降级 Jackson DataBind 声明版本 2.14.3 -> 2.13.3
* `依赖` 降级 Apache Commons IO 声明文件版本 2.14.0 -> 2.8.0

# v2.1.2

###### 2023/10/30

* `新增` shizuku 模块声明文件
* `新增` barcode 模块声明文件
* `新增` qrcode 模块声明文件
* `优化` 适配 AutoJs6 6.4.0
* `依赖` 附加 JavaMail for Android 声明文件
* `依赖` 附加 Okio 声明文件版本 3.2.0
* `依赖` 附加 Shizuku 声明文件版本 13.1.5
* `依赖` 附加 MLKit Barcode Bundled 声明文件版本 17.2.0
* `依赖` 附加 MLKit Barcode Common 声明文件版本 17.0.0
* `依赖` 升级 Kotlin Stdlib 声明文件版本 1.7.21 -> 1.9.20-RC2
* `依赖` 升级 Joda Time 声明文件版本 2.12.1 -> 2.12.5
* `依赖` 升级 Zip4j 声明文件版本 2.11.2 -> 2.11.5
* `依赖` 升级 Gson 声明文件版本 2.10 -> 2.10.1
* `依赖` 升级 Okhttp3 声明版本 5.0.0-alpha.9 -> 5.0.0-alpha.11
* `依赖` 升级 OpenCV 声明版本 4.5.5 -> 4.8.0
* `依赖` 升级 Apache Commons Lang3 声明文件版本 3.12.0 -> 3.13.0
* `依赖` 升级 Apache Commons IO 声明文件版本 2.8.0 -> 2.14.0
* `依赖` 升级 Android Analytics 声明版本 14.0.0 -> 14.4.0
* `依赖` 升级 Androidx Preference 声明版本 1.2.0 -> 1.2.1
* `依赖` 升级 Androidx Recyclerview 声明版本 1.3.0 -> 1.3.2
* `依赖` 升级 Androidx Annotation 声明版本 1.6.0 -> 1.7.0
* `依赖` 升级 Androidx AppCompat 声明版本 1.4.2 -> 1.6.1
* `依赖` 升级 Jackson DataBind 声明版本 2.13.3 -> 2.14.3
* `依赖` 升级 Androidx WebKit 声明版本 1.6.0 -> 1.8.0
* `依赖` 升级 Androidx Preference 声明版本 1.2.0 -> 1.2.1
* `依赖` 升级 Glide 声明版本 4.14.2 -> 4.16.0
* `依赖` 升级 Android Material 声明版本 1.7.0 -> 1.10.0
* `依赖` 移除 Zeugma Solutions LocaleHelper 声明版本 1.5.1

# v2.1.1

###### 2023/07/21

* `优化` 适配 AutoJs6 6.3.3

# v2.1.0

###### 2023/07/06

* `新增` crypto 模块声明文件
* `优化` README.md 增加 VSCode 配置说明
* `优化` jsconfig.json 指定声明文件根目录以增加适配性
* `优化` 内置模块支持 "$" 前缀
* `优化` base64.encode/decode 支持字节数组
* `优化` 适配 AutoJs6 6.3.2

# v2.0.2

###### 2023/05/26

* `新增` ViewPrototype 原型声明
* `优化` 适配 AutoJs6 6.3.1

# v2.0.1

###### 2023/04/29

* `新增` s13n 模块声明文件
* `优化` 适配 AutoJs6 6.3.0

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

# v1.0.0

###### 2021/11/02

* `新增` Auto.js v4.1.1 Alpha2 声明文件
* `新增` Auto.js 基于 JSX 的声明文件
* `新增` androidx 26 声明文件
* `新增` android platform 27 声明文件
* `新增` android framework 26 声明文件
* `新增` app 模块声明文件
* `新增` array-observe 模块声明文件
* `新增` automator 模块声明文件
* `新增` console 模块声明文件
* `新增` continuation 模块声明文件
* `新增` device 模块声明文件
* `新增` dialogs 模块声明文件
* `新增` engines 模块声明文件
* `新增` events 模块声明文件
* `新增` floaty 模块声明文件
* `新增` globals 模块声明文件
* `新增` http 模块声明文件
* `新增` images 模块声明文件
* `新增` init 模块声明文件
* `新增` io 模块声明文件
* `新增` java-util 模块声明文件
* `新增` jvm-npm 模块声明文件
* `新增` media 模块声明文件
* `新增` object-observe 模块声明文件
* `新增` plugins 模块声明文件
* `新增` rhino 模块声明文件
* `新增` root-automator 模块声明文件
* `新增` selector 模块声明文件
* `新增` sensors 模块声明文件
* `新增` shell 模块声明文件
* `新增` storages 模块声明文件
* `新增` threads 模块声明文件
* `新增` timers 模块声明文件
* `新增` ui 模块声明文件
* `新增` util 模块声明文件
* `新增` web 模块声明文件
* `依赖` 附加 androidx.annotation-annotation-1.2.0 声明文件
* `依赖` 附加 com.afollestad.materialdialogs-core-3.3.0 声明文件
* `依赖` 附加 com.github.hyb1996-enhancedfloaty-0.31 声明文件
* `依赖` 附加 com.github.hyb1996-settingscompat-1.1.5 声明文件
* `依赖` 附加 com.google.android.material-material-1.4.0 声明文件
* `依赖` 附加 com.google.code.gson-gson-2.8.8 声明文件
* `依赖` 附加 com.makeramen-roundedimageview-2.3.0 声明文件
* `依赖` 附加 com.squareup.okhttp3-okhttp-4.9.1 声明文件
* `依赖` 附加 de.mindpipe.android-android-logging-log4j-1.0.3 声明文件
* `依赖` 附加 junit-4.13.2 声明文件
* `依赖` 附加 kotlin-stdlib-jdk8 声明文件
* `依赖` 附加 log4j-1.2.17 声明文件
* `依赖` 附加 okhttp-urlconnection-2.7.5 声明文件
* `依赖` 附加 okio-1.6.0 声明文件
* `依赖` 附加 opencv-3.4.3 声明文件
* `依赖` 附加 rhino-1.7.7.2 声明文件
