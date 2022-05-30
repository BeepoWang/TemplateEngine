const path = require('path');
module.exports = {
  // 模式
  mode: 'development',
  // 入口
  entry: '/src/index.js',
  // 出口
  output: {
    filename: 'bundle.js'
  },
  // 配置webpack-dev-server
  devServer: {
    // 静态文件根目录
    contentBase: path.resolve(__dirname, 'public'),
    // 不压缩
    compress: false,
    // 端口号
    port: 8080,
    // 启动后自动打开浏览器
    open: true,
    // 虚拟打包的路径
    publicPath: '/dist'
  }
};
