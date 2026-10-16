// Type definitions for AutoJs6 internal module files
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Oct 15, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/files/Files.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/Files.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/files/BatchRename.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/files/BatchRenameJsErrors.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/core/plugin/batchrename/BatchRenameScriptArguments.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/core/plugin/batchrename/BatchRenameScriptService.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/core/plugin/batchrename/BatchRenameScriptErrors.kt
 * @Source %AutoJs6%/plugin-api/batch-rename-api/src/main/java/org/autojs/plugin/batchrename/api/BatchRenameValues.kt
 */

declare namespace Internal {

    interface Files extends Omit<org.autojs.autojs.runtime.api.Files, 'append' | 'open' | 'read' | 'readAssets' | 'write'> {

        /**
         * @Overrides for JSDoc or more specific types
         */

        /**
         * @example
         * console.log(files.join("a", "b", "c", "pic.png")); // "a/b/c/pic.png"
         *
         * @example Source code summary (zh-CN: 源代码摘要)
         * const fs = __runtime__.files;
         * const files = Object.create(fs);
         * files.join = function (base) {
         *     let paths = Array.prototype.slice.call(arguments, 1);
         *     return fs.join(base, paths);
         * };
         *
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static String join(String parent, String... child) {
         *     return PFiles.join(parent, child);
         * }
         *
         * @see org.autojs.autojs.runtime.api.Files.join
         */
        join(parent: string, ...child: string[]): string;

        /**
         * @param path
         * @param text
         * @param [encoding='utf-8']
         * @example
         * files.append("./1.txt", "hello");
         * files.append("./1.txt", "\n" + "world");
         * app.viewFile("./1.txt");
         * @example Source code summary (zh-CN: 源代码摘要)
         * public void append(String path, String text) {
         *     PFiles.append(path(path), text);
         * }
         * public void append(String path, String text, String encoding) {
         *     PFiles.append(path(path), text, encoding);
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static void append(String path, String text) {
         *     create(path);
         *     try {
         *         write(new FileOutputStream(path, true), text);
         *     } catch (FileNotFoundException e) {
         *         throw new UncheckedIOException(e);
         *     }
         * }
         * public static void append(String path, String text, String encoding) {
         *     create(path);
         *     try {
         *         write(new FileOutputStream(path, true), text, encoding);
         *     } catch (FileNotFoundException e) {
         *         throw new UncheckedIOException(e);
         *     }
         * }
         */
        append(path: string, text: string, encoding?: StandardCharsets): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * public void appendBytes(String path, byte[] bytes) {
         *     PFiles.appendBytes(path(path), bytes);
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static void appendBytes(String path, byte[] bytes) {
         *     create(path);
         *     try {
         *         writeBytes(new FileOutputStream(path, true), bytes);
         *     } catch (IOException e) {
         *         throw new UncheckedIOException(e);
         *     }
         * }
         */
        appendBytes(path: string, bytes: number[]): void;

        /**
         * @example
         * files.copy("./1.txt", "./Backup/1.txt");
         * @example Source code summary (zh-CN: 源代码摘要)
         * public boolean copy(String pathFrom, String pathTo) {
         *     return PFiles.copy(path(pathFrom), path(pathTo));
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static boolean copy(String pathFrom, String pathTo) {
         *     try {
         *         return copyStream(new FileInputStream(pathFrom), pathTo);
         *     } catch (FileNotFoundException e) {
         *         e.printStackTrace();
         *         return false;
         *     }
         * }
         */
        copy(pathFrom: string, pathTo: string): boolean;

        /**
         * @example
         * files.create("/sdcard/new_folder/");
         * @example
         * files.create("/sdcard/1.txt");
         * @example Source code summary (zh-CN: 源代码摘要)
         * public boolean create(String path) {
         *     return PFiles.create(path(path));
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static boolean create(String path) {
         *     File f = new File(path);
         *     if (path.endsWith(File.separator)) {
         *         return f.mkdir();
         *     } else {
         *         try {
         *             return f.createNewFile();
         *         } catch (IOException e) {
         *             return false;
         *         }
         *     }
         * }
         */
        create(path: string): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * public boolean createIfNotExists(String path) {
         *     return PFiles.createIfNotExists(path(path));
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static boolean createIfNotExists(String path) {
         *     ensureDir(path);
         *     File file = new File(path);
         *     if (!file.exists()) {
         *         try {
         *             return file.createNewFile();
         *         } catch (IOException e) {
         *             e.printStackTrace();
         *         }
         *     }
         *     return false;
         * }
         */
        createIfNotExists(path: string): boolean;

        /**
         * @example
         * files.createWithDirs("/sdcard/new_folder/a/b/c/d");
         * @example
         * files.createWithDirs("/sdcard/x/y/z/1.txt");
         * @example Source code summary (zh-CN: 源代码摘要)
         * public boolean createWithDirs(String path) {
         *     return PFiles.createWithDirs(path(path));
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static boolean createWithDirs(String path) {
         *     return createIfNotExists(path);
         * }
         */
        createWithDirs(path: string): boolean;

        /**
         * @example
         * files.cwd(); // e.g. '/storage/emulated/0/Scripts/Sample'
         * @example Source code summary (zh-CN: 源代码摘要)
         * public String cwd() {
         *     return mRuntime.engines.myEngine().cwd();
         * }
         */
        cwd(): string;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * public boolean ensureDir(String path) {
         *     return PFiles.ensureDir(path(path));
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static boolean ensureDir(String path) {
         *     int i = path.lastIndexOf('\\');
         *     if (i < 0)
         *         i = path.lastIndexOf('/');
         *     if (i >= 0) {
         *         String folder = path.substring(0, i);
         *         File file = new File(folder);
         *         if (file.exists())
         *             return true;
         *         return file.mkdirs();
         *     } else {
         *         return false;
         *     }
         * }
         */
        ensureDir(path: string): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * public boolean exists(String path) {
         *     return PFiles.exists(path(path));
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static boolean exists(String path) {
         *     return new File(path).exists();
         * }
         */
        exists(path: string): boolean;

        /**
         * @example
         * files.getExtension("/sdcard/1.txt"); // "txt"
         * @example Source code summary (zh-CN: 源代码摘要)
         * public String getExtension(String fileName) {
         *     return PFiles.getExtension(fileName);
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static String getExtension(String fileName) {
         *     int i = fileName.lastIndexOf('.');
         *     if (i < 0 || i + 1 >= fileName.length() - 1)
         *         return "";
         *     return fileName.substring(i + 1);
         * }
         */
        getExtension(fileName: string): string;

        /**
         * @example
         * files.getHumanReadableSize(0); // '0 B'
         * files.getHumanReadableSize(10); // '10 B'
         * files.getHumanReadableSize(1000); // '1000 B'
         * files.getHumanReadableSize(1024); // '1.0 KB'
         * files.getHumanReadableSize(2000); // '2.0 KB' (approximation)
         * files.getHumanReadableSize(2048); // '2.0 KB'
         * files.getHumanReadableSize(2000000); // '1.9 MB' (approximation)
         * files.getHumanReadableSize(2097152); // '2.0 MB'
         * files.getHumanReadableSize(3 * Math.pow(1024, 3)); // '3.0 GB'
         * files.getHumanReadableSize(4 * Math.pow(1024, 4)); // '4.0 TB'
         * files.getHumanReadableSize(5 * Math.pow(1024, 5)); // '5.0 PB'
         * files.getHumanReadableSize(6 * Math.pow(1024, 6)); // '6.0 EB'
         * files.getHumanReadableSize(-1); // '-1 B'
         * files.getHumanReadableSize(2e10); // '18.6 GB' (approximation)
         * files.getHumanReadableSize(-2e10); // '-20000000000 B'
         * files.getHumanReadableSize(); // Error
         * files.getHumanReadableSize(7 * Math.pow(1024, 7)); // Error
         * @example Source code summary (zh-CN: 源代码摘要)
         * public String getHumanReadableSize(long bytes) {
         *     return PFiles.getHumanReadableSize(bytes);
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static String getHumanReadableSize(long bytes) {
         *     int unit = 1024;
         *     if (bytes < unit) return bytes + " B";
         *     int exp = (int) (Math.log(bytes) / Math.log(unit));
         *     String pre = "KMGTPE".substring(exp - 1, exp);
         *     return String.format(Locale.getDefault(), "%.1f %sB", bytes / Math.pow(unit, exp), pre);
         * }
         */
        getHumanReadableSize(bytes: number): string;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * public String getName(String filePath) {
         *     return PFiles.getName(filePath);
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static String getName(String filePath) {
         *     filePath = filePath.replace('\\', '/');
         *     return new File(filePath).getName();
         * }
         */
        getName(filePath: string): string;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * public String getNameWithoutExtension(String filePath) {
         *     return PFiles.getNameWithoutExtension(filePath);
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static String getNameWithoutExtension(String filePath) {
         *     String fileName = getName(filePath);
         *     int b = fileName.lastIndexOf('.');
         *     if (b < 0)
         *         b = fileName.length();
         *     fileName = fileName.substring(0, b);
         *     return fileName;
         * }
         */
        getNameWithoutExtension(filePath: string): string;

        /**
         * @example
         * files.getSdcardPath(); // e.g. '/storage/emulated/0'
         * @example Source code summary (zh-CN: 源代码摘要)
         * public String getSdcardPath() {
         *     return PFiles.getSdcardPath();
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static String getSdcardPath() {
         *     return Environment.getExternalStorageDirectory().getPath();
         * }
         */
        getSdcardPath(): string;

        /**
         * @example
         * files.getSimplifiedPath('modules'); // 'modules'
         * files.getSimplifiedPath(files.getSdcardPath() + java.io.File.separator + 'Sample/modules'); // e.g. '/Sample/modules'
         * files.getSimplifiedPath('/storage/emulated/0/Sample/modules'); // e.g. '/Sample/modules'
         * @example Source code summary (zh-CN: 源代码摘要)
         * public String getSimplifiedPath(String path) {
         *     return PFiles.getSimplifiedPath(path);
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static String getSimplifiedPath(String path) {
         *     if (path.startsWith(Environment.getExternalStorageDirectory().getPath())) {
         *         return path.substring(Environment.getExternalStorageDirectory().getPath().length());
         *     }
         *     return path;
         * }
         */
        getSimplifiedPath(path: string): string;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * public boolean isDir(String path) {
         *     return PFiles.isDir(path(path));
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static boolean isDir(String path) {
         *     return new File(path).isDirectory();
         * }
         */
        isDir(path: string): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * public boolean isEmptyDir(String path) {
         *     return PFiles.isEmptyDir(path(path));
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static boolean isEmptyDir(String path) {
         *     File file = new File(path);
         *     return file.isDirectory() && file.list().length == 0;
         * }
         */
        isEmptyDir(path: string): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * public boolean isFile(String path) {
         *     return PFiles.isFile(path(path));
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static boolean isFile(String path) {
         *     return new File(path).isFile();
         * }
         */
        isFile(path: string): boolean;

        /**
         * @example
         * let dir = files.cwd();
         * let jsFiles = files.listDir(dir, function (name) {
         *     return name.endsWith('.js') && files.isFile(files.join(dir, name));
         * });
         * console.log(jsFiles);
         * @example Source code summary (zh-CN: 源代码摘要)
         * public String[] listDir(String path) {
         *     return PFiles.listDir(path(path));
         * }
         * public String[] listDir(String path, Func1<String, Boolean> filter) {
         *     return PFiles.listDir(path(path), filter);
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static String[] listDir(String path, final Func1<String, Boolean> filter) {
         *     final File file = new File(path);
         *     return wrapNonNull(file.list(new FilenameFilter() {
         *         public boolean accept(File dir, String name) {
         *             return filter.call(name);
         *         }
         *     }));
         * }
         * @see org.autojs.autojs.tool.Func1
         */
        listDir(path: string, filter?: org.autojs.autojs.tool.Func1<string, java.lang.Boolean> | ((name: string) => boolean)): string[];

        /**
         * @example
         * files.move("./1.txt", "./Backup/1.txt");
         * @example Source code summary (zh-CN: 源代码摘要)
         * public boolean move(String path, String newPath) {
         *     return PFiles.move(path(path), newPath);
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static boolean move(String path, String newPath) {
         *     File f = new File(path);
         *     return f.renameTo(new File(newPath));
         * }
         */
        move(pathFrom: string, pathTo: string): boolean;

        /**
         * @param path
         * @param [mode='r']
         * @param [encoding='utf-8']
         * @param [bufferSize=8192]
         * @example Source code summary (zh-CN: 源代码摘要)
         * static final int DEFAULT_BUFFER_SIZE = 8192;
         * static final String DEFAULT_ENCODING = Charset.defaultCharset().name();
         * public static PFileInterface open(String path, String mode, String encoding, int bufferSize) {
         *     switch (mode) {
         *         case "r":
         *             return new PReadableTextFile(path, encoding, bufferSize);
         *         case "w":
         *             return new PWritableTextFile(path, encoding, bufferSize, false);
         *         case "a":
         *             return new PWritableTextFile(path, encoding, bufferSize, true);
         *     }
         *     return null;
         * }
         * public static Object open(String path, String mode, String encoding) {
         *     return open(path, mode, encoding, DEFAULT_BUFFER_SIZE);
         * }
         * public static Object open(String path, String mode) {
         *     return open(path, mode, DEFAULT_ENCODING, DEFAULT_BUFFER_SIZE);
         * }
         * public static Object open(String path) {
         *     return open(path, "r", DEFAULT_ENCODING, DEFAULT_BUFFER_SIZE);
         * }
         * @see org.autojs.autojs.pio.PFileInterface
         * @see org.autojs.autojs.pio.PReadableTextFile
         * @see org.autojs.autojs.pio.PWritableTextFile
         * @see java.nio.charset.Charset
         */
        open(path: string, mode?: 'r', encoding?: StandardCharsets, bufferSize?: number): org.autojs.autojs.pio.PReadableTextFile;

        /**
         * @param path
         * @param mode
         * @param [encoding='utf-8']
         * @param [bufferSize=8192]
         * @example Source code summary (zh-CN: 源代码摘要)
         * static final int DEFAULT_BUFFER_SIZE = 8192;
         * static final String DEFAULT_ENCODING = Charset.defaultCharset().name();
         * public static PFileInterface open(String path, String mode, String encoding, int bufferSize) {
         *     switch (mode) {
         *         case "r":
         *             return new PReadableTextFile(path, encoding, bufferSize);
         *         case "w":
         *             return new PWritableTextFile(path, encoding, bufferSize, false);
         *         case "a":
         *             return new PWritableTextFile(path, encoding, bufferSize, true);
         *     }
         *     return null;
         * }
         * public static Object open(String path, String mode, String encoding) {
         *     return open(path, mode, encoding, DEFAULT_BUFFER_SIZE);
         * }
         * public static Object open(String path, String mode) {
         *     return open(path, mode, DEFAULT_ENCODING, DEFAULT_BUFFER_SIZE);
         * }
         * public static Object open(String path) {
         *     return open(path, "r", DEFAULT_ENCODING, DEFAULT_BUFFER_SIZE);
         * }
         * @see org.autojs.autojs.pio.PFileInterface
         * @see org.autojs.autojs.pio.PReadableTextFile
         * @see org.autojs.autojs.pio.PWritableTextFile
         * @see java.nio.charset.Charset
         */
        open(path: string, mode: 'w' | 'a', encoding?: StandardCharsets, bufferSize?: number): org.autojs.autojs.pio.PWritableTextFile;

        /**
         * @example
         * // e.g. "/storage/emulated/0/Scripts/1.png"
         * console.log(files.path("./1.png"));
         * @example Source code summary (zh-CN: 源代码摘要)
         * public String path(String relativePath) {
         *     String cwd = cwd();
         *     if (cwd == null || relativePath == null || relativePath.startsWith('/'))
         *         return relativePath;
         *     File f = new File(cwd);
         *     String[] paths = relativePath.split('/');
         *     for (String path : paths) {
         *         if (path.equals('.'))
         *             continue;
         *         if (path.equals('..')) {
         *             f = f.getParentFile();
         *             continue;
         *         }
         *         f = new File(f, path);
         *     }
         *     String path = f.getPath();
         *     return relativePath.endsWith(File.separator) ? path + "/" : path;
         * }
         * public String cwd() {
         *     return mRuntime.engines.myEngine().cwd();
         * }
         */
        path(relativePath?: string | null): string | null;

        /**
         * @param path
         * @param [encoding='utf-8']
         * @example Source code summary (zh-CN: 源代码摘要)
         * public String read(String path, String encoding) {
         *     return PFiles.read(path(path), encoding);
         * }
         * public String read(String path) {
         *     return PFiles.read(path(path));
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static String read(InputStream is, String encoding) {
         *     try {
         *         byte[] bytes = new byte[is.available()];
         *         is.read(bytes);
         *         return new String(bytes, encoding);
         *     } catch (IOException e) {
         *         throw new UncheckedIOException(e);
         *     } finally {
         *         closeSilently(is);
         *     }
         * }
         */
        read(path: string, encoding?: StandardCharsets): string;

        /**
         * @param path
         * @param [encoding='utf-8']
         * @example
         * // ['全局函数', '应用', '自动操作', '控制台', ...]
         * JSON.parse(files.readAssets('indices/all.json')).map(o => o.summary);
         * @example Source code summary (zh-CN: 源代码摘要)
         * public String readAssets(String path, String encoding) {
         *     try {
         *         return PFiles.read(mRuntime.getUiHandler().getContext().getAssets().open(path), encoding);
         *     } catch (IOException e) {
         *         throw new UncheckedIOException(e);
         *     }
         * }
         */
        readAssets(path: Files.AssetsPaths, encoding?: StandardCharsets): string;

        /**
         * @example
         * const data = files.readBytes("/sdcard/1.png");
         * const sb = new java.lang.StringBuilder();
         * for (let i = 0; i < data.length; i++) {
         *     sb.append(data[i].toString(16));
         * }
         * console.log(sb.toString());
         * @example Source code summary (zh-CN: 源代码摘要)
         * public byte[] readBytes(String path) {
         *     return PFiles.readBytes(path(path));
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static byte[] readBytes(InputStream is) {
         *     try {
         *         byte[] bytes = new byte[is.available()];
         *         is.read(bytes);
         *         return bytes;
         *     } catch (IOException e) {
         *         throw new UncheckedIOException(e);
         *     }
         * }
         */
        readBytes(path: string): number[];

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * public boolean remove(String path) {
         *     return PFiles.remove(path(path));
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static boolean remove(String path) {
         *     return new File(path).delete();
         * }
         */
        remove(path: string): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * public boolean removeDir(String path) {
         *     return PFiles.removeDir(path(path));
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static boolean removeDir(String path) {
         *     return deleteRecursively(new File(path));
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static boolean deleteRecursively(File file) {
         *     if (file.isFile())
         *         return file.delete();
         *     File[] children = file.listFiles();
         *     if (children != null) {
         *         for (File child : children) {
         *             if (!deleteRecursively(child))
         *                 return false;
         *         }
         *     }
         *     return file.delete();
         * }
         */
        removeDir(path: string): boolean;

        /**
         * @example
         * files.rename("./1.txt", "2.txt");
         * @example Source code summary (zh-CN: 源代码摘要)
         * public boolean rename(String path, String newName) {
         *     return PFiles.rename(path(path), newName);
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static boolean rename(String path, String newName) {
         *     File f = new File(path);
         *     return f.renameTo(new File(f.getParent(), newName));
         * }
         */
        rename(path: string, newName: string): boolean;

        /**
         * @example
         * files.rename("./1.txt", "2");
         * @example Source code summary (zh-CN: 源代码摘要)
         * public boolean renameWithoutExtension(String path, String newName) {
         *     return PFiles.renameWithoutExtension(path(path), newName);
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static boolean renameWithoutExtension(String path, String newName) {
         *     File file = new File(path);
         *     File newFile = new File(file.getParent(), newName + "." + getExtension(file.getName()));
         *     return file.renameTo(newFile);
         * }
         */
        renameWithoutExtension(path: string, newName: string): boolean;

        /**
         * @param path
         * @param text
         * @param [encoding="utf-8"]
         * @example
         * files.write("./1.txt", "Hello");
         * app.viewFile("./1.txt");
         * @example Source code summary (zh-CN: 源代码摘要)
         * public void write(String path, String text) {
         *     PFiles.write(path(path), text);
         * }
         * public void write(String path, String text, String encoding) {
         *     PFiles.write(path(path), text, encoding);
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static void write(OutputStream outputStream, String text, String encoding) {
         *     try {
         *         outputStream.write(text.getBytes(encoding));
         *     } catch (IOException e) {
         *         throw new UncheckedIOException(e);
         *     } finally {
         *         closeSilently(outputStream);
         *     }
         * }
         */
        write(path: string, text: string, encoding?: StandardCharsets): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * public void writeBytes(String path, byte[] bytes) {
         *     PFiles.writeBytes(path(path), bytes);
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public static void writeBytes(OutputStream outputStream, byte[] bytes) {
         *     try {
         *         outputStream.write(bytes);
         *         outputStream.close();
         *     } catch (IOException e) {
         *         throw new UncheckedIOException(e);
         *     }
         * }
         */
        writeBytes(path: string, bytes: number[]): void;

        toFile(path: string): java.io.File;

        /**
         * Batch renaming of files and folders (also `$files.batchRename`), available since AutoJs6
         * 6.8.0 through the external Batch Rename plugin: the plugin computes the new names, AutoJs6
         * enumerates the targets and performs, journals and undoes the renames. Calling it plans and
         * applies in one step; see {@link FilesBatchRename} for the members.
         * @since 6.8.0
         * @see https://docs.autojs6.com/#/files?id=m-batchrename
         */
        readonly batchRename: FilesBatchRename;

    }

    /**
     * `files.batchRename` (also `$files.batchRename`), available since AutoJs6 6.8.0 through the
     * external Batch Rename plugin. Every member throws (or rejects with) a `BatchRenameError` whose
     * `code` is `PLUGIN_UNAVAILABLE`, `PLUGIN_DISABLED` or `PLUGIN_INCOMPATIBLE` while the plugin is
     * missing, disabled or incompatible; {@link isAvailable} probes without throwing.
     *
     * A rename has two steps: {@link plan} enumerates the targets and computes every new name without
     * touching a file, {@link apply} runs the plan. `paths` is a path or an array of paths (relative
     * paths resolve against the script working directory); each named path is an item of depth 0, and
     * a named folder adds everything below it while `includeSubfolders` is on (the default). A plan
     * holds at most 2000 items. The synchronous forms block the script thread (stopping the script
     * cancels the wait); the `Async` forms deliver progress and the outcome on the script thread.
     *
     * Pinyin (`pinyin*` options and `${pinyin}`), photo metadata (`metadata`) and named presets
     * (`preset`, {@link presets}, {@link importPresets}) need Batch Rename 1.1.0 or later; older
     * plugins answer `PLUGIN_INCOMPATIBLE`. {@link preview} computes names without any file.
     *
     * @example
     * let plan = files.batchRename.plan('./photos', { search: 'IMG_', replace: 'Photo_', includeFolders: false });
     * plan.items.forEach(it => console.log(it.name + ' -> ' + it.newName + ' (' + it.status + ')'));
     * if (!plan.rejected) console.log(files.batchRename.apply(plan).counts.renamed);
     *
     * @example Source code summary (zh-CN: 源代码摘要)
     * override fun invoke(vararg args: Any?): Any? = guarded {
     *     ensureArgumentsLength(args, 2) { (paths, options) ->
     *         val planWork = planWork(paths, options)
     *         val progress = progressOf(options)
     *         sync { binder ->
     *             val plan = planWork()
     *             val items = plan["items"] as List<Map<String, Any?>>
     *             service.apply(plan["id"] as String, items.map { it["excluded"] == true }, null, binder.bind(progress))
     *         }
     *     }
     * }
     *
     * @see https://docs.autojs6.com/#/files?id=m-batchrename
     */
    interface FilesBatchRename {

        /**
         * Plans and applies in one step, like `apply(plan(paths, options), { onProgress: options.onProgress })`.
         * A rejected plan throws `PLAN_REJECTED` and renames nothing.
         * @since 6.8.0
         * @example
         * let result = files.batchRename('./docs', { search: 'txt', replace: 'md', target: 'extension', includeFolders: false });
         * console.log(result.counts.renamed);
         */
        (paths: string | string[], options: FilesBatchRename.Options): FilesBatchRename.Result;

        /**
         * Computes the new name and the status of every item without touching a file. Set `excluded`
         * of an item to true before {@link apply} to keep its name. A script keeps its last 16 plans;
         * applying an older one throws `PLAN_STALE`.
         * @since 6.8.0
         * @example
         * let plan = files.batchRename.plan('./camera', {
         *     search: /^IMG_\d+/,
         *     replace: '$YYYY-$MM-$DD_${padding=3;start=1}',
         *     enumerate: true,
         *     includeFolders: false,
         * });
         */
        plan(paths: string | string[], options: FilesBatchRename.Options): FilesBatchRename.Plan;

        /**
         * Computes the new name of one name that need not exist, reading and renaming no file. A
         * string is a file modified now; an item may give `isDirectory` and `lastModified` (epoch
         * milliseconds or a `Date`). `metadata: true` and names that are not one file name of 1 to
         * 1024 characters throw `INVALID_OPTIONS`.
         * @since 6.8.0
         * @example
         * files.batchRename.preview('IMG_0001.JPG', { search: 'IMG_', replace: 'Photo_', format: 'lower' }).newName; // photo_0001.jpg
         */
        preview(item: string | FilesBatchRename.PreviewItem, options: FilesBatchRename.Options): FilesBatchRename.PreviewResult;

        /**
         * Previews up to 2000 names as the only entries of one folder: counters follow the array order
         * and conflicts come only from the names themselves (`duplicateInBatch`).
         * @since 6.8.0
         * @example
         * files.batchRename.preview(['a.txt', 'b.txt'], { search: /^.+$/, replace: 'note_${start=1}', target: 'name', enumerate: true })
         *     .map(it => it.newName); // ['note_1.txt', 'note_2.txt']
         */
        preview(items: (string | FilesBatchRename.PreviewItem)[], options: FilesBatchRename.Options): FilesBatchRename.PreviewResult[];

        /**
         * Runs a plan once (a second run throws `PLAN_STALE`): only items with the status `rename`
         * are renamed. Changed `excluded` flags or another `onConflict` let the plugin plan again with
         * the same targets and time. Items deleted or modified since the plan become `stale`; the rest
         * proceeds. A rejected plan throws `PLAN_REJECTED`, renames nothing and stays usable. An error
         * thrown by `onProgress` never interrupts the batch: it is rethrown once the batch is journaled.
         * @since 6.8.0
         * @example
         * let result = files.batchRename.apply(plan, { onConflict: 'number', onProgress: (done, total) => console.log(done + '/' + total) });
         */
        apply(plan: FilesBatchRename.Plan, options?: FilesBatchRename.ApplyOptions): FilesBatchRename.Result;

        /**
         * Gives the items of a batch that still carry their new names their old names back, shallow
         * items first; items changed since the rename become `stale`, entries replaced by `'overwrite'`
         * come back from the AutoJs6 Trash. Batches of the file manager can be undone too. Throws
         * `UNDO_UNAVAILABLE` for an unknown batch or one with nothing left to undo.
         * @since 6.8.0
         * @example
         * files.batchRename.undo(files.batchRename('./notes', { search: 'draft', replace: 'final' }));
         */
        undo(target: FilesBatchRename.Result | string): FilesBatchRename.UndoResult;

        /**
         * The batches of the undo journal, newest first, from scripts and from the file manager.
         * Scripts and every plugin keep their newest 20 batches by default (50 or 100 as set on the
         * "Rename history" page of AutoJs6).
         * @param [limit] A non-negative integer; every batch when omitted.
         * @since 6.8.0
         * @example
         * let latest = files.batchRename.history().find(entry => entry.undoable);
         * if (latest) files.batchRename.undo(latest.batchId);
         */
        history(limit?: number): FilesBatchRename.HistoryEntry[];

        /**
         * Removes one batch of any source from the undo journal; it can no longer be undone, the
         * renamed files stay. False when the journal does not keep it.
         * @since 6.8.0
         * @example
         * files.batchRename.deleteHistory(result); // true
         */
        deleteHistory(target: FilesBatchRename.Result | FilesBatchRename.HistoryEntry | string): boolean;

        /**
         * Removes every batch, or those of one source, from the undo journal and answers how many.
         * @since 6.8.0
         * @example
         * files.batchRename.clearHistory({ source: 'script' });
         */
        clearHistory(options?: FilesBatchRename.ClearHistoryOptions): number;

        /**
         * The named presets the plugin keeps (at most 100), in its order, with their complete options.
         * @since 6.8.0
         */
        presets(): FilesBatchRename.Preset[];

        /**
         * Imports the presets of a document exported by the plugin, in order. A taken name is skipped
         * (`'skip'`, the default), replaced (`'overwrite'`) or stored as `name (n)` (`'rename'`);
         * invalid entries and entries past the limits are listed under `rejected`. A text that is not
         * a preset document throws `INVALID_OPTIONS`, one over 131072 characters `LIMIT_EXCEEDED`.
         * @since 6.8.0
         * @example
         * files.batchRename.importPresets({
         *     format: 'autojs6-batch-rename-presets',
         *     version: 1,
         *     presets: [{ name: 'Date prefix', options: { search: '^', regex: true, replace: '$YYYY$MM$DD_' } }],
         * }).imported; // ['Date prefix']
         */
        importPresets(json: string | FilesBatchRename.PresetDocument, options?: FilesBatchRename.ImportPresetsOptions): FilesBatchRename.ImportPresetsResult;

        /** Whether an installed, enabled, authorized and compatible Batch Rename plugin answers; never throws for the plugin. @since 6.8.0 */
        isAvailable(): boolean;

        /** @since 6.8.0 */
        planAsync(paths: string | string[], options: FilesBatchRename.Options): Promise<FilesBatchRename.Plan>;

        /** @since 6.8.0 */
        previewAsync(item: string | FilesBatchRename.PreviewItem, options: FilesBatchRename.Options): Promise<FilesBatchRename.PreviewResult>;

        /** @since 6.8.0 */
        previewAsync(items: (string | FilesBatchRename.PreviewItem)[], options: FilesBatchRename.Options): Promise<FilesBatchRename.PreviewResult[]>;

        /** `onProgress` runs on the script thread. @since 6.8.0 */
        applyAsync(plan: FilesBatchRename.Plan, options?: FilesBatchRename.ApplyOptions): Promise<FilesBatchRename.Result>;

        /** @since 6.8.0 */
        undoAsync(target: FilesBatchRename.Result | string): Promise<FilesBatchRename.UndoResult>;

        /** @since 6.8.0 */
        presetsAsync(): Promise<FilesBatchRename.Preset[]>;

        /** @since 6.8.0 */
        importPresetsAsync(json: string | FilesBatchRename.PresetDocument, options?: FilesBatchRename.ImportPresetsOptions): Promise<FilesBatchRename.ImportPresetsResult>;

        /** The error class of `files.batchRename`; `e instanceof files.batchRename.BatchRenameError`. @since 6.8.0 */
        readonly BatchRenameError: FilesBatchRename.BatchRenameErrorConstructor;
    }

    namespace FilesBatchRename {

        type ErrorCode =
            | 'PLUGIN_UNAVAILABLE'
            | 'PLUGIN_DISABLED'
            | 'PLUGIN_INCOMPATIBLE'
            | 'INVALID_OPTIONS'
            | 'INVALID_PATHS'
            | 'LIMIT_EXCEEDED'
            | 'PLAN_REJECTED'
            | 'PLAN_STALE'
            | 'IO_FAILED'
            | 'UNDO_UNAVAILABLE'
            | 'INTERNAL';

        /** `name` is `'BatchRenameError'`; `toString()` yields `BatchRenameError [CODE]: message`; `message` is not enumerable. */
        interface BatchRenameError extends Error {
            readonly name: 'BatchRenameError';
            readonly code: ErrorCode | string;
        }

        interface BatchRenameErrorConstructor {
            new(message: string, code?: ErrorCode | string): BatchRenameError;
            (message: string, code?: ErrorCode | string): BatchRenameError;
            readonly prototype: BatchRenameError;
        }

        type Target = 'all' | 'name' | 'extension';

        type TextFormat = 'none' | 'lower' | 'upper' | 'title' | 'capitalize';

        type ConflictPolicy = 'fail' | 'skip' | 'number' | 'overwrite';

        type ProgressCallback = (done: number, total: number, item: ResultItem) => void;

        type PinyinTone = 'none' | 'mark' | 'number';

        type PinyinSeparator = 'none' | 'space' | 'underscore' | 'hyphen';

        type PinyinCase = 'lower' | 'capitalize';

        /**
         * Options of `files.batchRename(paths, options)`, `plan` and `preview`; null and undefined
         * values take the default. `search` is required unless `preset` names a preset that gives it.
         */
        type Options = SearchOptions | PresetOptions;

        interface SearchOptions extends CommonOptions {
            /**
             * Plain text, or regular expression source with `regex`. A `RegExp` is always a regular
             * expression whose `g` / `i` flags replace `matchAll` / `caseSensitive` (`m`, `s`, `u`, `y`
             * apply as well). An empty string matches every item and replaces nothing.
             */
            search: string | RegExp;
            /** A preset of the plugin: the defaults, then the preset, then the other options given here. An unknown name throws `INVALID_OPTIONS`. */
            preset?: string;
        }

        interface PresetOptions extends CommonOptions {
            /** Overrides the search of the preset. */
            search?: string | RegExp;
            /** A preset of the plugin: the defaults, then the preset, then the other options given here. An unknown name throws `INVALID_OPTIONS`. */
            preset: string;
        }

        /** The options besides `search` and `preset`. */
        interface CommonOptions {
            /**
             * Replacement with variables: counters `${start=X;increment=X;padding=X}` (with `enumerate`),
             * date and time `$YYYY` ... `$f` (unless `dateTime` is false), random values
             * `${rstringalnum=N}`, `${rstringalpha=N}`, `${rstringdigit=N}`, `${ruuidv4}` (with `random`),
             * `${pinyin}` (the pinyin of the original target part, always on) and the photo metadata
             * variables `$CAMERA_MAKE`, `$CAMERA_MODEL`, `$LENS`, `$ISO`, `$APERTURE`, `$SHUTTER`,
             * `$FOCAL`, `$FLASH`, `$WIDTH`, `$HEIGHT`, `$AUTHOR`, `$COPYRIGHT`, `$LATITUDE`, `$LONGITUDE`,
             * `$ALTITUDE`, `$DATE_TAKEN_YYYY`, `$DATE_TAKEN_YY`, `$DATE_TAKEN_MM`, `$DATE_TAKEN_DD`,
             * `$DATE_TAKEN_HH`, `$DATE_TAKEN_mm`, `$DATE_TAKEN_SS`, `$EXPOSURE_BIAS`, `$ORIENTATION`,
             * `$COLOR_SPACE` (with `metadata`); `$$` is a literal `$`. Regular expressions also take `$1`,
             * `$<name>` and `$&`. Default `''`.
             */
            replace?: string;
            /** Default false. */
            regex?: boolean;
            /** Replace every match instead of the first; default false. */
            matchAll?: boolean;
            /** Default false. */
            caseSensitive?: boolean;
            /** The part searched and replaced; default `'all'`. Folders and names like `.nomedia` have no extension. */
            target?: Target;
            /** Default true. */
            includeFiles?: boolean;
            /** Default true; also covers named folders. */
            includeFolders?: boolean;
            /** Add everything below the named folders; default true. */
            includeSubfolders?: boolean;
            /** Default `'none'`; case mapping follows the current language. */
            format?: TextFormat;
            /** Expand `${...}` counters; default false (literal text). */
            enumerate?: boolean;
            /** Expand random values; default false (literal text). */
            random?: boolean;
            /** Time of the date variables: modification time or the time of `plan`; false (or `'none'`) keeps them literal. Default `'modified'`. */
            dateTime?: 'modified' | 'now' | 'none' | false;
            /** Unicode normalization; default false. */
            normalize?: 'nfc' | 'nfd' | 'none' | false;
            /** Full-width forms and the ideographic space to half-width; default false. */
            halfWidth?: boolean;
            /** Replace characters FAT32 / exFAT reject and suffix reserved Windows names; default false. */
            sanitize?: boolean;
            /** Default `'_'`. */
            sanitizeReplacement?: string;
            /** Remove leading white space and trailing white space and dots; default false. */
            trim?: boolean;
            /** Continue counters after the largest number already present in the folders; default false. */
            continueNumbering?: boolean;
            /** Default `'fail'`. */
            onConflict?: ConflictPolicy;
            /** Suffix of the `'number'` policy, must contain `{n}`; default `' ({n})'`. */
            conflictNumberPattern?: string;
            /** Convert the Chinese characters of the new name to pinyin after the replacement, before `format`; default false. */
            pinyin?: boolean;
            /** Tones of `pinyin` and `${pinyin}`: none (`zhang`), marks (`zhāng`) or numbers (`zhang1`); default `'none'`. */
            pinyinTone?: PinyinTone;
            /** Separator between adjacent syllables; default `'none'`. */
            pinyinSeparator?: PinyinSeparator;
            /** `'lower'` (`zhangsan`) or `'capitalize'` (`ZhangSan`); default `'lower'`. */
            pinyinCase?: PinyinCase;
            /** Keep only the first letter of every syllable; default false. */
            pinyinInitials?: boolean;
            /**
             * Expand the photo metadata variables from the EXIF (and XMP) of image files; missing values
             * expand to nothing and mark `metadataMissing`, `$DATE_TAKEN_*` fall back to the modification
             * time. Default false; `preview` rejects it.
             */
            metadata?: boolean;
            /** Progress of the one-step call; `plan` ignores it. */
            onProgress?: ProgressCallback;
        }

        interface ApplyOptions {
            /** Overrides the policy of the plan. */
            onConflict?: ConflictPolicy;
            /** Called once per handled rename; `total` counts the items to rename. */
            onProgress?: ProgressCallback;
        }

        /** The options of a plan with every default filled in; a `RegExp` search appears as its source. */
        interface NormalizedOptions {
            search: string;
            replace: string;
            regex: boolean;
            /** Flags among `m`, `s`, `u` and `y`. */
            regexFlags: string;
            matchAll: boolean;
            caseSensitive: boolean;
            target: Target;
            includeFiles: boolean;
            includeFolders: boolean;
            includeSubfolders: boolean;
            format: TextFormat;
            enumerate: boolean;
            random: boolean;
            dateTime: 'modified' | 'now' | 'none';
            normalize: 'nfc' | 'nfd' | 'none';
            halfWidth: boolean;
            sanitize: boolean;
            sanitizeReplacement: string;
            trim: boolean;
            continueNumbering: boolean;
            onConflict: ConflictPolicy;
            conflictNumberPattern: string;
            pinyin: boolean;
            pinyinTone: PinyinTone;
            pinyinSeparator: PinyinSeparator;
            pinyinCase: PinyinCase;
            pinyinInitials: boolean;
            metadata: boolean;
        }

        interface PreviewItem {
            /** One file name of 1 to 1024 characters. */
            name: string;
            /** Default false. */
            isDirectory?: boolean;
            /** Epoch milliseconds or a `Date`; the time of the call when missing. */
            lastModified?: number | Date;
        }

        interface PreviewResult {
            readonly newName: string;
            readonly status: PlanStatus;
            readonly reason: PlanReason | null;
        }

        interface ClearHistoryOptions {
            /** Every source when missing. */
            source?: 'script' | 'explorer';
        }

        interface Preset {
            readonly name: string;
            /** The complete options of the preset. */
            readonly options: NormalizedOptions;
        }

        /** The format of the files the plugin exports; missing options take their defaults. */
        interface PresetDocument {
            format: 'autojs6-batch-rename-presets';
            version: 1;
            presets: { name: string; options: Partial<NormalizedOptions> }[];
        }

        interface ImportPresetsOptions {
            /** Default `'skip'`. */
            onConflict?: 'skip' | 'overwrite' | 'rename';
        }

        interface ImportPresetsResult {
            /** The names stored, `'rename'` names included. */
            readonly imported: string[];
            readonly skipped: string[];
            /** `index` is the position in `presets`; `reason` is in English. */
            readonly rejected: { readonly index: number; readonly name: string | null; readonly reason: string }[];
        }

        type PlanStatus = 'rename' | 'unchanged' | 'conflict' | 'invalid' | 'excluded';

        type PlanReason =
            | 'noMatch'
            | 'sameName'
            | 'excludedByCaller'
            | 'notIncluded'
            | 'duplicateInBatch'
            | 'existingEntry'
            | 'numbersExhausted'
            | 'numbered'
            | 'overwrite'
            | 'empty'
            | 'dotName'
            | 'separator'
            | 'tooLong'
            | 'restrictedCharacter';

        interface Plan {
            readonly id: string;
            /** With `preset`, the options the plugin merged (defaults, preset, given options); `apply` keeps using them. */
            readonly options: NormalizedOptions;
            /** In enumeration order: named paths first in their order, each folder depth first, sorted by name. */
            readonly items: PlanItem[];
            readonly counts: { readonly [status in PlanStatus]: number };
            /** True with an `invalid` item, or with a `conflict` item under `'fail'`. */
            readonly rejected: boolean;
        }

        interface PlanItem {
            /** Absolute path. */
            readonly path: string;
            readonly name: string;
            readonly kind: 'file' | 'dir';
            /** 0 for a named path, one more per folder level below it. */
            readonly depth: number;
            /** The current name for items that keep it; the unusable name for `conflict` and `invalid`. */
            readonly newName: string;
            readonly status: PlanStatus;
            readonly reason: PlanReason | null;
            /** Set to true before `apply` to keep the name (reason `excludedByCaller`). */
            excluded: boolean;
            /** The `'overwrite'` policy replaces an existing entry of that name. */
            readonly overwrites: boolean;
            /** A photo metadata variable of the new name had no value; false without `metadata`. */
            readonly metadataMissing: boolean;
        }

        type ResultStatus = 'renamed' | 'skipped' | 'failed' | 'stale' | 'excluded';

        interface ResultItem {
            /** Path before the batch. */
            readonly path: string;
            /** Path after the batch, renamed parent folders included. */
            readonly newPath: string;
            readonly status: ResultStatus;
            /** The plan's reason for `skipped` and `excluded`; `missing`, `kindChanged`, `changed`, `occupied`, `trashFailed` or `ioFailed` otherwise. */
            readonly reason: string | null;
        }

        interface Result {
            /** Batch of the undo journal; null when nothing was to be renamed. */
            readonly batchId: string | null;
            readonly counts: { readonly [status in ResultStatus]: number };
            /** One per plan item, in the same order. */
            readonly items: ResultItem[];
            readonly undoable: boolean;
        }

        interface UndoItem {
            /** Path before the undo. */
            readonly path: string;
            /** Path after the undo. */
            readonly newPath: string;
            readonly status: 'restored' | 'stale' | 'failed';
            readonly reason: string | null;
        }

        interface UndoResult {
            readonly batchId: string;
            readonly state: 'restored' | 'recoveryRequired';
            readonly counts: { readonly restored: number; readonly stale: number; readonly failed: number };
            readonly items: UndoItem[];
            /** True while some items can still be undone (failed ones, for instance). */
            readonly undoable: boolean;
        }

        interface HistoryEntry {
            readonly batchId: string;
            readonly source: 'script' | 'explorer';
            readonly state: 'committed' | 'partial' | 'rejected' | 'restored' | 'recoveryRequired';
            /** Milliseconds since the epoch. */
            readonly createdAt: number;
            /** Milliseconds since the epoch. */
            readonly updatedAt: number;
            readonly counts: { readonly renamed: number; readonly notRenamed: number; readonly restored: number };
            readonly undoable: boolean;
        }
    }
}

declare namespace Files {

    type AssetsPaths = 'modules/__app__.js' | 'modules/__automator__.js' | 'modules/__console__.js' | 'modules/__continuation__.js' | 'modules/__device__.js' | 'modules/__dialogs__.js' | 'modules/__engines__.js' | 'modules/__events__.js' | 'modules/__floaty__.js' | 'modules/__globals__.js' | 'modules/__http__.js' | 'modules/__images__.js' | 'modules/__files__.js' | 'modules/__json2__.js' | 'modules/__media__.js' | 'modules/__plugins__.js' | 'modules/__RootAutomator__.js' | 'modules/__selector__.js' | 'modules/__sensors__.js' | 'modules/__shell__.js' | 'modules/__storages__.js' | 'modules/__threads__.js' | 'modules/__timers__.js' | 'modules/__ui__.js' | 'modules/__util__.js' | 'modules/__web__.js' | 'docs/all.html' | 'indices/all.json' | 'indices/all_android_classes.json' | 'docs/app.html' | 'modules/array-observe.min.js' | 'autojs.keystore' | 'js/js-beautify/beautify.js' | 'sample/图片与图色处理/找图/block.png' | 'docs/canvas.html' | 'docs/console.html' | 'docs/coordinates-based-automation.html' | 'editor/theme/dark_plus.json' | 'docs/device.html' | 'docs/dialogs.html' | 'docs/assets/dnt_helper.js' | 'docs/documentation.html' | 'sample/JavaScript/E4X.js' | 'docs/engines.html' | 'docs/events.html' | 'docs/images/ex-gravity.png' | 'docs/images/ex-padding.png' | 'docs/images/ex1-horizontal.png' | 'docs/files.html' | 'docs/floaty.html' | 'docs/assets/fonts.css' | 'docs/globals.html' | 'sample/协程/协程HelloWorld/hello.txt' | 'sample/JavaScript/HelloWorld.js' | 'docs/http.html' | 'docs/images.html' | 'docs/index.html' | 'init.js' | 'modules/jvm-npm.js' | 'docs/keys.html' | 'editor/theme/light_plus.json' | 'sample/调用Java API/liveConnect.js' | 'modules/lodash.js' | 'sample/协程/ui中使用协程/main.js' | 'sample/协程/协程HelloWorld/main.js' | 'sample/图片与图色处理/找图/mario.png' | 'docs/media.html' | 'docs/modules.html' | 'modules/object-observe-lite.min.js' | 'docs/overview.html' | 'sample/协程/ui中使用协程/project.json' | 'sample/协程/协程HelloWorld/project.json' | 'modules/promise.js' | 'docs/qa.html' | 'modules/result-adapter.js' | 'docs/assets/fonts/S6u9w4BMUTPHh6UVSwiPGQ.woff2' | 'docs/assets/fonts/S6uyw4BMUTPHjx4wXg.woff2' | 'docs/sensors.html' | 'docs/assets/sh.css' | 'docs/assets/sh_javascript.min.js' | 'docs/shell.html' | 'docs/storages.html' | 'docs/assets/style.css' | 'docs/threads.html' | 'docs/timers.html' | 'sample/事件与按键、触摸监听/Toast监听.js' | 'docs/ui.html' | 'sample/对话框/UI模式下使用对话框.js' | 'docs/util.html' | 'sample/复杂界面/WannaCry(仅为娱乐).js' | 'docs/widgets-based-automation.html' | 'docs/work-with-java.html' | 'js/js-beautify/xml_formatter.js' | 'sample/安卓7.0+点按和手势/三指下滑.js' | 'sample/安卓7.0+点按和手势/三指捏合.js' | 'sample/界面控件/下拉菜单.js' | 'sample/控制台/产生随机数.js' | 'sample/本地存储/保存数组和复杂对象.js' | 'sample/本地存储/保存整数等简单数据.js' | 'sample/控制台/保存日志.js' | 'sample/脚本引擎/停止所有正在运行的脚本.js' | 'sample/文件读写/写入文本文件.js' | 'sample/Shell命令/冻结网易云音乐.js' | 'sample/画布/函数图像简单版.js' | 'sample/画布/函数图像高级版.js' | 'sample/界面控件/列表控件.js' | 'sample/文件读写/删除所有空文件夹.js' | 'sample/悬浮窗/动态悬浮文字.js' | 'sample/图片与图色处理/区域找色1.js' | 'sample/图片与图色处理/区域找色2.js' | 'sample/对话框/单选框.js' | 'sample/界面控件/卡片布局.js' | 'sample/应用/卸载应用.js' | 'sample/多线程/原子变量.js' | 'sample/安卓7.0+点按和手势/双指捏合.js' | 'sample/应用/发送意图-文本消息分享.js' | 'sample/多线程/变量可见性实验.js' | 'sample/图片与图色处理/图片处理.js' | 'sample/界面控件/图片控件.js' | 'sample/界面控件/复选框单选框控件.js' | 'sample/多线程/多线程按键监听.js' | 'sample/多线程/多线程简单示例.js' | 'sample/对话框/多选框.js' | 'sample/定时器/定时执行.js' | 'sample/图片与图色处理/实时显示触摸点颜色.js' | 'sample/应用/应用工具.js' | 'sample/应用/强制停止应用.js' | 'sample/复杂界面/待办事项.js' | 'sample/定时器/循环执行.js' | 'sample/安卓7.0+点按和手势/心形手势.js' | 'sample/悬浮窗/悬浮文字.js' | 'sample/悬浮窗/悬浮窗输入框.js' | 'sample/悬浮窗/悬浮窗运行脚本按钮简单版.js' | 'sample/悬浮窗/悬浮运行脚本按钮.js' | 'sample/图片与图色处理/截图并保存.js' | 'sample/传感器/打印常用传感器信息.js' | 'sample/应用/打开应用.js' | 'sample/图片与图色处理/找图/找出所有问号方块.js' | 'sample/图片与图色处理/找图/找出问号方块并画出位置.js' | 'sample/图片与图色处理/找图/找出马里奥.js' | 'sample/图片与图色处理/找到QQ红点位置.js' | 'sample/悬浮窗/护眼模式.js' | 'sample/安卓7.0+点按和手势/拉出通知栏.js' | 'sample/界面控件/按钮控件.js' | 'sample/事件与按键、触摸监听/按键监听.js' | 'sample/控制台/控制台示例.js' | 'sample/JavaScript/数字.js' | 'sample/HTTP网络请求/文件上传.js' | 'sample/HTTP网络请求/文件下载.js' | 'sample/文件读写/文件编码转换(高级).js' | 'sample/文件读写/文件编码转换.js' | 'sample/界面控件/文本控件.js' | 'sample/界面控件/时间日期选择控件.js' | 'sample/传感器/显示常用传感器信息.js' | 'sample/控制台/格式化输出.js' | 'sample/对话框/模拟更新下载对话框.js' | 'sample/图片与图色处理/模糊找色.js' | 'sample/安卓7.0+点按和手势/点击左上角.js' | 'sample/复杂界面/用户调查.js' | 'sample/复杂界面/界面模板一.js' | 'sample/复杂界面/登录界面.js' | 'sample/对话框/确认框.js' | 'sample/对话框/简单计算器.js' | 'sample/图片与图色处理/精确找色.js' | 'sample/多线程/线程启动与关闭.js' | 'sample/控制台/终端模拟器.js' | 'sample/Shell命令/结束所有后台进程.js' | 'sample/界面控件/自定义控件-使用配置勾选框.js' | 'sample/界面控件/自定义控件-布局模板.js' | 'sample/界面控件/自定义控件-带颜色按钮.js' | 'sample/界面控件/自定义控件-模块-配置勾选框.js' | 'sample/图片与图色处理/获取网络图片并保存.js' | 'sample/HTTP网络请求/获取网页.js' | 'sample/设备与设备信息/获取设备信息.js' | 'sample/对话框/菜单.js' | 'sample/界面控件/表格控件-内置图标查看器.js' | 'sample/Shell命令/解冻并打开网易云音乐.js' | 'sample/事件与按键、触摸监听/触摸监听.js' | 'sample/文件读写/读写文本文件.js' | 'sample/文件读写/读取文本文件.js' | 'sample/控制台/调整控制台大小位置.js' | 'sample/设备与设备信息/调整设备亮度.js' | 'sample/设备与设备信息/调整设备音量.js' | 'sample/画布/贪吃蛇.js' | 'sample/画布/贪吃蛇重力感应版.js' | 'sample/对话框/输入框.js' | 'sample/界面控件/输入框控件.js' | 'sample/脚本引擎/运行录制文件.js' | 'sample/脚本引擎/运行新的脚本任务.js' | 'sample/脚本引擎/运行脚本文件.js' | 'sample/界面控件/进度条控件.js' | 'sample/事件与按键、触摸监听/通知监听.js' | 'sample/Shell命令/锁屏.js' | 'sample/事件与按键、触摸监听/长按返回退出当前程序.js' | 'sample/本地存储/随手记.js' | 'sample/复杂界面/音乐浏览器.js' | 'sample/事件与按键、触摸监听/音量键控制程序.js' | 'sample/图片与图色处理/颜色获取和检测.js';

}

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * const fs = __runtime__.files;
 * const files = Object.create(fs);
 * scope.open = function (path, mode, encoding, bufferSize) {
 *     if (arguments.length === 1) {
 *         return files.open(path);
 *     } else if (arguments.length === 2) {
 *         return files.open(path, mode);
 *     } else if (arguments.length === 3) {
 *         return files.open(path, mode, encoding);
 *     } else if (arguments.length === 4) {
 *         return files.open(path, mode, encoding, bufferSize);
 *     }
 * };
 * @see org.autojs.autojs.runtime.api.Files.open
 */
declare function open(path: string, mode?: 'r', encoding?: StandardCharsets, bufferSize?: number): org.autojs.autojs.pio.PReadableTextFile;
/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * const fs = __runtime__.files;
 * const files = Object.create(fs);
 * scope.open = function (path, mode, encoding, bufferSize) {
 *     if (arguments.length === 1) {
 *         return files.open(path);
 *     } else if (arguments.length === 2) {
 *         return files.open(path, mode);
 *     } else if (arguments.length === 3) {
 *         return files.open(path, mode, encoding);
 *     } else if (arguments.length === 4) {
 *         return files.open(path, mode, encoding, bufferSize);
 *     }
 * };
 * @see org.autojs.autojs.runtime.api.Files.open
 */
declare function open(path: string, mode: 'w' | 'a', encoding?: StandardCharsets, bufferSize?: number): org.autojs.autojs.pio.PWritableTextFile;
