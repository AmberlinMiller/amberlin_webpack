const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',               // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },              // 出口文件
    module: {
        rules: [{
            // 格式
            test: /\.css$/,
            //順序是由下到上 css > style
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: './dist'
                }
              },
                //'style-loader', 會跟原本的衝突 
                'css-loader'
            ],
        }]

    },              
    plugins: [ // 對應的插件
        new MiniCssExtractPlugin({
            filename: "./css/style.css"
        })
    ],             
    // devServer: {},           // 服務器配置
    mode: 'development'      // 開發模式配置 // 上線用 production
}