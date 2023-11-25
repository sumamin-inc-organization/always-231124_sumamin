const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pages = ["index", "about","blog","contact","notice","price","recruit"];
module.exports = {
    mode:"development",
    entry: pages.reduce((config, page) => {
      config[page] = `./src/${page}.js`;
      return config;
    }, {}),
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    devtool: 'inline-source-map',
    devServer:{
      static:{
          directory:path.resolve(__dirname,'dist')
      },
      port:3000,
      open:true,
      hot:true,
      compress:true,
      historyApiFallback:true,
  },
    output:{
      assetModuleFilename: "assets/img/[name][ext]",
        filename:"[name].[contenthash].js",
        path:path.resolve(__dirname,"dist"),
        clean: true,
    },
    plugins: [].concat(
      pages.map(
        (page) =>
          new HtmlWebpackPlugin({
            inject: true,
            template: `./src/assets/html/${page}.html`,
            filename: `${page}.html`,
            chunks: [page],
            title: "ALWAYS",
          })
      ),
      new MiniCssExtractPlugin({ filename: "[name].css" }), // Add this line
    ),
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          // {
          //   test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          //   use: {
          //     loader:"file-loader",
          //     options:{
          //       name:"[name].[ext]",
          //       outputPath:"images"
          //     }
          //   }
          // },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource'
        }

        ],
      },
}