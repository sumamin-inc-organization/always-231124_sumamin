const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    entry:"./src/index.js",
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
        filename:"bundle.[contenthash].js",
        path:path.resolve(__dirname,"dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Always',
          filename:'index.html',
          template:`./src/assets/html/index.html`,
        }),
      ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
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