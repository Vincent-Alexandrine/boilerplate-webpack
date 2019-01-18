const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPage = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: 'index.html'
});

module.exports = {
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/Components/'),
      Containers: path.resolve(__dirname, 'src/components/Containers/'),
      Screens: path.resolve(__dirname, 'src/components/Screens/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [htmlPage]
};
