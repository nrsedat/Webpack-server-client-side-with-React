'use strict';

var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
      'index' : path.join(__dirname,'/views/pages/index.jsx'),
      'article' : path.join(__dirname,'/views/pages/article.jsx')
    },
    output: {
       path: __dirname + "/client",
       filename: "[name].bundle.js",
       chunkFilename: "[id].bundle.js"
    },
    module: {
      loaders: [
      // Extract css files
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!compass-loader")
        },
        {   test: /\.jsx$/,
            loader: 'jsx-loader' 
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json'] 
    }
}