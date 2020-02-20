var path = require("path");

module.exports = {
  entry: "./src/entry.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
          },
          {
              test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
        }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
