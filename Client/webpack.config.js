const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
  return {
    entry: {
      index: path.resolve(__dirname, 'src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve:{
     extensions: [".js",".jsx"] 
    },
    devServer:{
      host: '0.0.0.0',
      port: 9000,
      historyApiFallback: true
    },
    devtool: "eval-source-map",
    module: {
      rules: [

        {
          test: /\.js$/i,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.html$/i,
          loader: 'html-loader'
        },

      ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
      }),
    ]
  }
} 
