const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPage = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: 'index.html'
});

module.exports = {
  output: {
    publicPath: '/',
  },
  resolve: {
    alias: {
      Actions: path.resolve(__dirname, 'src/actions/'),
      Assets: path.resolve(__dirname, 'src/assets/'),
      Atoms: path.resolve(__dirname, 'src/components/atoms/'),
      Molecules: path.resolve(__dirname, 'src/components/molecules/'),
      Organisms: path.resolve(__dirname, 'src/components/organisms/'),
      Reducers:  path.resolve(__dirname, 'src/reducers/'),
      Screens: path.resolve(__dirname, 'src/components/screens/'),
      Src: path.resolve(__dirname, 'src/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
    }
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
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
      }, {
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				exclude: /\.(js|jsx|css|html|scss|sass)$/,
				use: [
					'file-loader'
				]
			}
    ]
  },
  plugins: [htmlPage]
};
