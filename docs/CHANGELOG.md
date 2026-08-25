******

### 版本历史

******

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
- `新增` `ai.models` 的 `backendProfiles` 判别联合类型, 精确声明设备可用性及稳定不可用原因
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

- `新增` `ai.chat`, `ai.stream` 和 `ai.models` 的本机插件重载, 覆盖路由响应, 流式事件及模型目录
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
