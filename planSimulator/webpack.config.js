module.exports = {
  entry: __dirname + "/src/main.js", //ビルドするファイル
  output: {
    path: '/home/ec2-user/hikkoshizamurai-jp/docroot/dst/pc/js', //ビルドしたファイルを吐き出す場所
    filename: 'planSimulator.js' //ビルドした後のファイル名
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
      },
      {
        test: /\.(jpg|png)$/,
        loaders: 'url-loader'
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
