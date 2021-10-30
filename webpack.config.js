const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),

    new MiniCssExtractPlugin({
      filename: 'assests/[name].css',
    }),
    new WebpackPwaManifest({
      name: 'Moongram - tu app de fotos de mascotas',
      short_name: 'Moongram',
      description:
        'Con Petgram puedes encontrar fotos de animales domésticos my fácilmente',
      background_color: '#ffffff',
      theme_color: '#b1a',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          purpose: 'maskable',
        },
      ],
    }),
  ],
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },

    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3005,
    open: true,
  },
  devtool: 'source-map',
};
