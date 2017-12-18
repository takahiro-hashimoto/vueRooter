const webpack = require('webpack');

module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/main.js`,
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/build`,
    // 出力ファイル名
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'build',
    port: 8081
  },
  // ソースマップを有効にする
  devtool: 'source-map',

  plugins: [
    // JSファイルのminifyを実行する
    new webpack.optimize.UglifyJsPlugin({
      // minify時でもソースマップを利用する
      sourceMap: true
    })
  ],

  module: {
    loaders: [
      {
       test: /\.js$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       query://loaderに渡したいクエリパラメータを指定します
        {
          presets: ['es2015','stage-0']
        }
      }
    ]
  }
};
