const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//浏览器兼容性，决定使用browserlist的那个环境，默认production
process.env.NODE_ENV = 'development'

module.exports = {
    // mode: 'development', //设置当前环境为开发环境
    // mode:'production', //默认值为生产环境
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: "./src/main.js",//入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),//打包后的文件存放的地方
        filename: "js/bundle.js",//打包后输出文件的文件名
        // publicPath: 'dist/', //公共目录，将所有文件都加上此路径
    },
    devServer: {
        contentBase: './dist', //为那个文件夹提供本地服务
        open: true, //打开浏览器
        host: '127.0.0.1', //主机
        port: 3000, //端口
        inline: true, //页面更新
        compress: true, //启用gzip压缩
        progress: true, //将进度条输出在控制台
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    // {
                    //     loader: "style-loader" // 将CSS注入DOM。
                    // },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: "css-loader" // 解析css
                    },
                    {
                        loader: "less-loader" // 将less解析成css
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
                            limit: 8192,
                            name: '[name].[hash:8].[ext]',
                            outputPath: 'imgs'
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 预设：基本js兼容性处理
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: "usage", //按需加载
                                    corejs: {
                                        version: 3 //指定core-js版本
                                    }
                                }
                            ]
                        ]
                    }
                }
            },
            {
                // 排除下面的文件
                exclude: /\.(vue|html|js|css|less|jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:8].[ext]',
                    outputPath: 'assets'
                }
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.BannerPlugin('===版权所有==='), //在文件头部添加添加版权
        new HtmlWebpackPlugin({
            template: 'index.html' //指定默认模板
        }), //将在dist/目录下生成一个默认html模板
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}