const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development", // 环境模式
  entry: path.resolve(__dirname, "./src/main.js"), // 打包入口
  output: {
    filename: "js/[name].js", // 打包完的静态资源文件名
    path: path.resolve(__dirname, "dist"), // 打包出口
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"), // 我们要使用的 html 模板地址
      filename: "index.html", // 打包后输出的文件名
      title: "从零搭建 Vue3 项目", // index.html 模板内，通过 <%= htmlWebpackPlugin.options.title %> 拿到的变量
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 8080,
  },
};
