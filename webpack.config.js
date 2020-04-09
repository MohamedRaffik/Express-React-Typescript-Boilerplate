const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
  entry: path.join(__dirname, 'src', 'client', 'src', 'index.tsx'),
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.scss',
      '.sass',
      '.css',
      '.d.ts'
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /tests/]
      },
      {
        test: /\.module.((s?)css|sass)/,
        use: [
          argv.mode === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          '@teamsupercell/typings-for-css-modules-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.((s?)css|sass)/,
        use: [
          argv.mode === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'sass-loader'
        ],
        exclude: /\.module.((s?)css|sass)/
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist', 'client', 'public')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'src', 'client', 'public', 'index.html')
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src', 'client', 'src'),
    compress: true,
    port: 3000,
    historyApiFallback: true
  }
});
