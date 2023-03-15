const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './client/index.jsx',
  // Default to development
  mode: process.env.NODE_ENV,
  output: {
    // output production to /dist (change if you want)
    path: path.resolve(__dirname, ('./dist')),
    publicPath: '/',
    filename: '.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // options...
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public', 'index.html'),
      fileName: './index.html',
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css/mystyles.css',
    }),
  ],
  devServer: {
    headers: { 'Allow-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    port: 8080,
    static: {
      directory: path.join(__dirname, './dist'),
      publicPath: '/dist',
    },
    proxy: {
      '/': 'http://localhost:3000/',
    },
  },
};
