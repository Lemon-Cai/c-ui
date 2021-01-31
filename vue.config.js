// const webpack = require("webpack");

module.exports = {
  devServer: {
    port: 8888, // 端口
    open: true // 自动打开浏览器
  },
  configureWebpack: {
    plugins: [
      // new webpack.DllReferencePlugin({
      //   context: process.cwd(),
      //   manifest: require("./public/vendor/vendor-manifest.json")
      // })
    ]
  }
};
