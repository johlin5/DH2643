const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const distPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  mode: "development",
  output: {
    filename: "bundle.js",
    path: distPath,
    publicPath: distPath,
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: distPath,
    port: 9000,
    allowedHosts: "all",
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
};
