const { merge } = require('webpack-merge');
const Webpack = require('webpack');
const { SERVER_HOST, SERVER_PORT } = require('./constant');
const common = require('./webpack.common.js');
const proxySetting = require('../src/setProxy');

module.exports = merge(common, {
    target: 'web',
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        host: SERVER_HOST, // 指定 host，不设置的话默认是 localhost
        port: SERVER_PORT, // 指定端口，默认是8080
        compress: true, // 是否启用 gzip 压缩
        open: true, // 打开默认浏览器
        hot: true, // 热更新
        proxy: { ...proxySetting },
    },
    plugins: [new Webpack.HotModuleReplacementPlugin()],
});
