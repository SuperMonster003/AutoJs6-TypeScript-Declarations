******

### 版本历史

******

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