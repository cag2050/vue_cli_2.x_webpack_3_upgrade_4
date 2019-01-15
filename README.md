# vue_cli_2.x_webpack_3_upgrade_4

> A Vue.js project

### 此项目实现功能：
1. webpack 升级到 4.x
2. 上线后程序刷新一次浏览器，来使用新上线资源
3. 将vue spa项目运行在docker的nginx容器中

### webpack 升级到 4.x 配置参考：
https://juejin.im/post/5b0a6d366fb9a07aa213d16a

### 上线后程序刷新一次浏览器，来使用新上线资源
* 修改的地方：
1. 相应目录下，新建文件：static/json/build_str.json
2. build/build.js 修改：
```
// 将当前时间戳写入json文件
let json_obj = {"build_str": new Date().getTime().toString()}
fs.writeFile(path.resolve(__dirname, '../static/json/build_str.json'), JSON.stringify(json_obj), function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("打包字符串写入文件：static/json/build_str.json，成功！");
    realBuild()
})
```
3. src/main.js 修改：
```
router.beforeEach((to, from, next) => {
    axios.get('/static/json/build_str.json?v=' + new Date().getTime().toString())
        .then(res => {
            let newBuildStr = res.data.build_str
            let oldBuildStr = localStorage.getItem('build_str') || ''
            if (oldBuildStr !== newBuildStr) {
                console.log('auto refresh')
                localStorage.setItem('build_str', newBuildStr)
                location.reload()
            }
        })
    next()
})
```

### 将vue spa项目运行在docker的nginx容器中，步骤：
1. 安装docker
2. 下载nginx镜像（`[:tag]`：是具体的nignx版本，比如：`:1.15.7`；默认从 https://hub.docker.com/ 下载镜像）：
```
docker pull nginx[:tag]
```
3. 运行命令打包项目：`npm run build`
4. 编写nginx的配置文件（文件在本项目中位置：`nginx/default.conf`）
5. 在当前目录下运行 docker 命令（`[:tag]`部分，需要替换成具体的值）：
```
docker run -p 9081:80 -v $PWD/dist/:/usr/share/nginx/dist/ -v $PWD/nginx/default.conf:/etc/nginx/conf.d/default.conf -d nginx[:tag]
```
6. 宿主机（就是本机）访问项目网址：http://localhost:9081/

### `docker run`命令参数说明：

参数 | 说明
--- | ---
-v, --volume value：Bind mount a volume (default []) | 宿主机会覆盖容器内文件
-p, --publish value：Publish a container's port(s) to the host (default []) | 宿主机端口对应容器内端口
-d, --detach：Run container in background and print container ID | 保持容器在后台持续运行；后续可以使用`docker exec -it <容器名|容器id> bash`，进入容器的bash命令

* vue-cli 3.x 拉取 2.x 模板 (旧版本)：https://cli.vuejs.org/zh/guide/creating-a-project.html#%E6%8B%89%E5%8F%96-2-x-%E6%A8%A1%E6%9D%BF-%E6%97%A7%E7%89%88%E6%9C%AC

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
