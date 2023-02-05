const merge = require('webpack-merge');
const base = require('./base');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    contentBase: 'dist', //为那个文件夹提供本地服务,加上可直接访问该文件夹里面的资源
    // open: true, //打开浏览器
    host: '127.0.0.1', //主机
    port: 3000, //端口
    inline: true, //页面更新
    compress: true, //启用gzip压缩
    progress: true, //将进度条输出在控制台
  },
});
