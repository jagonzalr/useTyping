'use strict'

const path = require('path')
const eslintFormatter = require('react-dev-utils/eslintFormatter')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcPath = path.join(__dirname, './demo')

let config = {
  devtool: 'cheap-module-source-map',
  target: 'web',
  mode: 'development',
  stats: {
    colors: true,
    hash: true,
    timings: true,
    assets: true,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: false
  },
  entry: {
    build: ['./demo/index']
  },
  output: {
    pathinfo: true,
    filename: '[name].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    port: 3000,
    host: '127.0.0.1',
    historyApiFallback: true,
    // noInfo: false,
    // stats: { colors: true, progress: true },
    // contentBase: path.join(__dirname, '../src'),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: eslintFormatter
            }
          }
        ],
        include: [srcPath],
        exclude: [/node_modules/]
      },
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          cacheCompression: false,
          cacheDirectory: true
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.js', '.mjs', '.json', '.jsx'],
    symlinks: false,
    fallback: {
      fs: 'empty',
      net: 'empty'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html',
      inject: true
    }),
    new CaseSensitivePathsPlugin()
  ]
}

module.exports = config
