const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const isProduction = env === "production";
  ("styles.css");
  return {
    mode: "development",
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [{loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: "../",
            hmr:process.env.NODE_ENV !== 'production'
          },},'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: 'cssChunk.css',
      ignoreOrder: false
    })],
    devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
