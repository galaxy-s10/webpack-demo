const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const base = require('./base')

// process.env.NODE_ENV = 'development'

module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', //指定默认模板
            minify: {
                // 压缩html
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }), //将在dist/目录下生成一个默认html模板
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }), //将css提取到单独文件中
        new OptimizeCSSAssetsPlugin() //压缩css
    ]
});