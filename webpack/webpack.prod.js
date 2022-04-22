const { resolve, join } = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const glob = require('glob');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Webpack = require('webpack');
const common = require('./webpack.common.js');
const { PROJECT_PATH } = require('./constant');
const PATHS = {
    src: join(__dirname, '../src'),
};
// console.log(glob.sync(`${resolve(__dirname, './src')}/**/*`, { nodir: true }));
// console.log('=========', `${resolve(PROJECT_PATH, 'src')}/**/*.{tsx,scss,less,css}`);
// console.log(glob.sync(`../src/**/*.{tsx,scss,less,css}`, { nodir: true }));
// console.log(
//     glob.sync(`${resolve(PROJECT_PATH, './src')}/*/*.{tsx,scss,less,css}`, {
//         nonull: true,
//         matchBase: true,
//         sync: true,
//     }),
// );
module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    plugins: [
        new CleanWebpackPlugin(),
        // new PurgeCSSPlugin({
        //     paths: glob.sync(`${resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`, {
        //         // nodir: true,
        //         nonull: true,
        //     }),
        //     whitelist: ['html', 'body'],
        // }),
        new Webpack.BannerPlugin({
            raw: true,
            banner: '/** @preserve Powered by react-ts-quick-starter (https://github.com/vortesnail/react-ts-quick-starter) */',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
        }),
    ],
});
