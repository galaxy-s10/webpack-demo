const path = require('path')

module.exports = {
    entry: "./src/main.js",//入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),//打包后的文件存放的地方
        filename: "bundle.js",//打包后输出文件的文件名
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当小于8k,会将图片转成base64格式
                            // 当大于8k,需要使用file-loader模块进行解析
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    }
}