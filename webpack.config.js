const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production';

  return {
    entry: {
      app: './src/index.js'
    },
    output: {
      filename: devMode ? '[name].js' : '[name].[chunkhash:8].js',
      chunkFilename: devMode ? '[name].js' : 'chunk-[name].[chunkhash:8].js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: 'chunk-[name].[contenthash:8].css'
      }),
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
    },
  }
};
