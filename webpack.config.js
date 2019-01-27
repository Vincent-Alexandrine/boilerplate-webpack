const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPage = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: 'index.html'
});

module.exports = {
  resolve: {
    alias: {
      Atoms: path.resolve(__dirname, 'src/components/atoms/'),
      Molecules: path.resolve(__dirname, 'src/components/molecules/'),
      Organism: path.resolve(__dirname, 'src/components/organisms/'),
      Screens: path.resolve(__dirname, 'src/components/screens/')
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }, {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }, {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [htmlPage]
};
