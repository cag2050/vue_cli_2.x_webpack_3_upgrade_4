# vue_cli_2.x_webpack_3_upgrade_4

> A Vue.js project

### 配置参考：
https://juejin.im/post/5b0a6d366fb9a07aa213d16a

vue-cli 3.x 拉取 2.x 模板 (旧版本)：https://cli.vuejs.org/zh/guide/creating-a-project.html#%E6%8B%89%E5%8F%96-2-x-%E6%A8%A1%E6%9D%BF-%E6%97%A7%E7%89%88%E6%9C%AC

### 此项目（webpack 4、vue-loader 15）配置了 Css Modules后，不能用id选择器了（虽然css modules不推荐用id选择器），先只用class类选择器，此问题待解决

### 打包对比

webpack 3：
![](https://github.com/cag2050/vue_cli_2.x_webpack_3_upgrade_4/blob/master/src/assets/webpack3.jpg)
webpack 4：
![](https://github.com/cag2050/vue_cli_2.x_webpack_3_upgrade_4/blob/master/src/assets/webpack4.jpg)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
