'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
const fs = require('fs')

const spinner = ora('building for production...')
spinner.start()

// 将当前时间戳写入json文件
let json_obj = {"build_str": new Date().getTime().toString()}
fs.writeFile(path.resolve(__dirname, '../static/json/build_str.json'), JSON.stringify(json_obj), function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("打包字符串写入文件：static/json/build_str.json，成功！");
    realBuild()
})

function realBuild () {
    rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
        if (err) throw err
        webpack(webpackConfig, (err, stats) => {
            spinner.stop()
            if (err) throw err
            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
                chunks: false,
                chunkModules: false
            }) + '\n\n')

            if (stats.hasErrors()) {
                console.log(chalk.red('  Build failed with errors.\n'))
                process.exit(1)
            }

            console.log(chalk.cyan('  Build complete.\n'))
            console.log(chalk.yellow(
                '  Tip: built files are meant to be served over an HTTP server.\n' +
                '  Opening index.html over file:// won\'t work.\n'
            ))
        })
    })
}
