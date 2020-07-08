const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.pug$/,
        use: ["html-loader", "pug-html-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "images",
          outputPath: "images",
          useRelativePath: true,
        },
      },
      {
        test: /\.(eot|ttf|woff2?|otf)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "fonts",
          outputPath: "fonts",
          useRelativePath: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.pug",
      filename: "./index.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/index2.pug",
      filename: "./index2.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
