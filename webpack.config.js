const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"bundle.[contenthash].js",
        path:path.resolve(__dirname,"dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Always',
          filename:'index.html',
          template:`./src/assets/html/index.html`,
        }),
        // new MiniCssExtractPlugin({
        //   filename:"[name].[contentHash].css"
        // })
      ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
}