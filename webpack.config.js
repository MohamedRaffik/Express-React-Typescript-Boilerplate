const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'client', 'src', 'index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /tests/, /coverage/]
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist', 'client')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'src', 'client', 'public', 'index.html')
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src', 'client', 'src'),
    compress: true,
    port: 3000,
    historyApiFallback: true
  }
};
