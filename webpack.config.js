const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.pug$/,
        use: ["html-loader?attrs=false", "pug-html-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        exclude: "/src/fonts/",
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          context: "src",
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        exclude: "/src/img/",
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          context: "src",
          limit: false,
        },
      },
      {
        test: /\.(css)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          context: "src",
          limit: false,
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