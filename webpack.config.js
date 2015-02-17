'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var _ = require('lodash');

var pathConfig = require('./webpack.path.config');



var defaultConfig = {
    //context: __dirname + "/views",
    entry: pathConfig.entry,
    output: {
       path: __dirname + "/client",
       filename: "[name].bundle.js",
       chunkFilename: "[id].bundle.js"
    },
    module: {
      loaders: pathConfig.module.loaders
    },
    resolve: {
      extensions: pathConfig.resolve.extensions
    },
    plugins: [
      new ExtractTextPlugin("[name].css")
    ]
};

function getClientConfig () {
  var clientOnly = {
    output: {
       path: __dirname + "/client/build",
       filename: "[name].bundle.js",
       chunkFilename: "[id].bundle.js"
    },plugins: [
      new ExtractTextPlugin("[name].css"),
      new CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",
          })
    ]
  };
  var config = _.merge({},defaultConfig,clientOnly);
  return config;
}

function getServerConfig () {
  var serverOnly = {
      output: {
        libraryTarget: "commonjs2",
        path: __dirname + "/server/build",
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
      }  
  };
  var config = _.merge({},defaultConfig,serverOnly);
  return config;
}

module.exports = [getClientConfig(),getServerConfig()];
