const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js"],
    alias: {
      // Resolve aliases required by ReactDOM when referencing 'react'
      react: path.resolve(
        __dirname,
        "node_modules/@tvontario/react/react.production.min"
      ),
      ReactDOM: path.resolve(
        __dirname,
        "node_modules/@tvontario/react/react-dom.production.min"
      ),
      "react-dom": "ReactDOM",
      "material-ui": path.resolve(
        __dirname,
        "node_modules/@tvontario/material-ui/material-ui.production.min"
      ),
      gvl: path.resolve(
        __dirname,
        "node_modules/gvl/dist/ilc_core-min.css"
      ),
    },
    fallback: {
      fs: false
    }
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"],
      },
      {
        test: /\.svg$/,
        loader: "url-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      }
    ],
  },
};
