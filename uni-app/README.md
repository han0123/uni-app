# uni-app基础

- unip-app官网：https://zh.uniapp.dcloud.io/



## uni-app创建

创建uni-app的两种方式

- 通过 HBuilderX 创建（需安装 HBuilderX 编辑器，不太好不怎么推荐，有一定bug没解决）
- 使用命令行来进行创建



### 使用命令行

#### 这里是js的项目

~~~
npx degit dcloudio/uni-preset-vue#vite my-vue3-project
~~~

如果命令行出现错误的话，使用gitee下载

~~~
git clone git@gitee.com:dcloud/uni-preset-vue.git
~~~



#### 这里是ts的项目

~~~
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
~~~

如果命令行出现错误的话，使用gitee下载

~~~
# 通过 git 从 gitee 克隆下载
git clone -b vite-ts https://gitee.com/dcloud/uni-preset-vue.git
~~~



#### 编译与运行

~~~
1.创建项目
2.manifest.json添加appid
3.npm i
4.npm run dev:mp-weixin
5.导入mp-weixin（是在dist里面的）到开发者工具里面
//这两行之后就可以运行了
~~~



### uni-app的配置文件

![1700669782457](C:\Users\y720\AppData\Roaming\Typora\typora-user-images\1700669782457.png)

### uni-app和原生小程序的区别

- 属性绑定：小程序 src="{{url}}" 变成了  :src="url" (有点v-bind的感觉了)
- 事件绑定：bindtap = "eventElement" 变成了@tap="eventElement()" 可以携带参数
- 支持vue常用指令 v-if， v-for，v-show等，
- 后续还有补充，比如生命周器，组件等





## vscode上运行

- 使用vscode的原因

~~~
- vscode上面是更支持ts的，而HBuilderX对于ts是有一定的bug的
- vscode是更熟悉的软件，操作更方便
~~~

- 安装 uni-app 开发插件
  - [uni-create-view](https://marketplace.visualstudio.com/items?itemName=mrmaoddxxaa.create-uniapp-view) ：快速创建 uni-app 页面
  - [uni-helper](https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-helper-vscode) ：uni-app 代码提示
  - [uniapp 小程序扩展](https://marketplace.visualstudio.com/items?itemName=evils.uniapp-vscode) ：鼠标悬停查文档
- 👉 TS 类型校验
  - 安装 **类型声明文件** `pnpm i -D miniprogram-api-typings @uni-helper/uni-app-types`
  - 配置 `tsconfig.json`
- 👉 JSON 注释问题
  - 设置文件关联，把 `manifest.json` 和 `pages.json` 设置为 `jsonc`

`tsconfig.json` 参考

~~~json
// tsconfig.json
{
  "extends": "@vue/tsconfig/tsconfig.json",
  "compilerOptions": {
    "sourceMap": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "lib": ["esnext", "dom"],
    // 类型声明文件
    "types": [
      "@dcloudio/types", // uni-app API 类型
      "miniprogram-api-typings", // 原生微信小程序类型
      "@uni-helper/uni-app-types" // uni-app 组件类型
    ]
  },
  // vue 编译器类型，校验标签类型
  "vueCompilerOptions": {
    // 原配置 `experimentalRuntimeMode` 现调整为 `nativeTags`
    "nativeTags": ["block", "component", "template", "slot"], 
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
~~~



**工作区设置参考**

~~~json
// .vscode/settings.json
{
  // 在保存时格式化文件
  "editor.formatOnSave": true,
  // 文件格式化配置
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 配置语言的文件关联
  "files.associations": {
    "pages.json": "jsonc", // pages.json 可以写注释
    "manifest.json": "jsonc" // manifest.json 可以写注释
  }
}
~~~



版本升级

- 原依赖 `@types/wechat-miniprogram` 现调整为 [miniprogram-api-typings](https://github.com/wechat-miniprogram/api-typings)。
- 原配置 `experimentalRuntimeMode` 现调整为 `nativeTags`。

这一步处理很关键，否则 TS 项目无法校验组件属性类型。

![1700670644152](C:\Users\y720\AppData\Roaming\Typora\typora-user-images\1700670644152.png)



## 基础架构

### 引入 uni-ui 组件库[](https://megasu.gitee.io/uni-app-shop-note/rabbit-shop/#引入-uni-ui-组件库)

#### 操作步骤[](https://megasu.gitee.io/uni-app-shop-note/rabbit-shop/#操作步骤)

安装 [uni-ui 组件库](https://uniapp.dcloud.net.cn/component/uniui/quickstart.html#npm安装)

~~~
npm i @dcloudio/uni-ui
~~~

**配置自动导入组件**

~~~json
// pages.json
{
  // 组件自动导入
  "easycom": {
    "autoscan": true,
    "custom": {
      // uni-ui 规则如下配置  
      "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue" 
    }
  },
  "pages": [
    // …省略
  ]
}
~~~

**安装类型声明文件**（安装ts）

~~~
npm i -D @uni-helper/uni-ui-types
~~~

**配置类型声明文件**

~~~json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": [
      "@dcloudio/types", // uni-app API 类型
      "miniprogram-api-typings", // 原生微信小程序类型
      "@uni-helper/uni-app-types", // uni-app 组件类型
      "@uni-helper/uni-ui-types" // uni-ui 组件类型  
    ]
  },
  // vue 编译器类型，校验标签类型
  "vueCompilerOptions": {
    "nativeTags": ["block", "component", "template", "slot"]
  }
}
~~~



### 小程序端 Pinia 持久化[](https://megasu.gitee.io/uni-app-shop-note/rabbit-shop/#小程序端-pinia-持久化)

说明：`Pinia` 用法与 `Vue3` 项目完全一致，`uni-app` 项目仅需解决**持久化插件兼容性**问题。



安装持久化存储插件： [pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/config.html#storage)

~~~
npm i pinia-plugin-persistedstate
~~~



插件默认使用 `localStorage` 实现持久化，小程序端不兼容，需要替换持久化 API。

