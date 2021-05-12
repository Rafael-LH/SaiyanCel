const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = (env, args) => {
  console.log(`Mode: ${args.mode}`)
  console.log(process.env.API)
  return {
    entry: {
      index: path.resolve(__dirname, 'src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@styles': path.resolve(__dirname, './src/assets/styles'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@images': path.resolve(__dirname, './src/assets/images'),
        '@config': path.resolve(__dirname, './src/config')
      }
    },
    devServer: {
      host: '0.0.0.0',
      port: 9000,
      historyApiFallback: true
    },
    devtool: "eval-source-map",
    module: {
      rules: [

        {
          test: /\.(js|jsx)$/i,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.html$/i,
          loader: 'html-loader'
        },

        {
          test: /\.(jpg|png|jpeg|gif)$/i,
          use: [
            {
              loader: 'url-loader'
            }
          ]
        },

      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
      }),
      new webpack.EnvironmentPlugin({
        apiRest: args.mode === 'development' && process.env.API,
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATA_BASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGIND_SENDER_ID,
        appId: process.env.APP_ID,
      })
    ]
  }
} 
