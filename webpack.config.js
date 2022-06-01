const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },               // 入口文件
    output: { // 出口文件
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js' // 動態抓黨名
    },              
    module: {
        rules: [{
            // 格式
            test: /\.(sass|scss|css)$/,
            //順序是由下到上 css > style
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: './dist'
                }
              },
                //'style-loader', 會跟原本的衝突 
                'css-loader',
                'sass-loader'
            ],
        }]

    },              
    plugins: [ // 對應的插件
        new MiniCssExtractPlugin({
            filename: "./css/[name].css" // 動態抓黨名
        }),
        new HtmlWebpackPlugin({
            chunks : ['index'],  //選擇注入資源 chunk 與上面設定的 entery相同
            inject  : 'body', //預設<body> js </body>  head or body
            template : './src/index.html',
            //來源
            filename : 'index.html'
            // 目的地
        })
    ],             
    // devServer: {},           // 服務器配置
    mode: 'development'      // 開發模式配置 // 上線用 production
}