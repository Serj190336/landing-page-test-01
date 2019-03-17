const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  watch: true,
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
    ignored: /node_modules/
  },
  devtool: "source-maps",
  devServer: {
    contentBase: path.join(__dirname, "src"),
    watchContentBase: true,
    hot: true,
    open: true,
    inline: true
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/index.bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "css-hot-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./images",
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  }
};
