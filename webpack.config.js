const webpack = require('webpack');

module.exports = {
  entry: `./src/main.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/',
    port: 8081
  },
  module: {
    loaders: [
      {
       test: /\.vue$/,
       loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{
          presets: ['es2015','stage-0']
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue', 'vuex', '.json']
  }
};
