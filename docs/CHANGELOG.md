******

### 版本历史

******

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