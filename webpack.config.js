var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [__dirname + "/src/index.js", "./src/styles/main.scss"],
  mode: "development",
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true
    })
  ]
};
