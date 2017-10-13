/**
 * Created by apple on 2017/9/27.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    /*入口*/
    entry: path.join(__dirname, 'src/router/index.js'),
    devtool: "source-map",

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './server/views'),
        filename: 'bundle-[chunkhash].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // babel 转换为兼容性的 js
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'平台',
            template: 'index.html', // 源模板文件
            filename: 'index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
            showErrors: true,
            inject: 'body'
        })
    ]
};