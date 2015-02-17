'use strict';

var React = require('react');

var Article = React.createFactory(require('../build/article.bundle'));
var Index = React.createFactory(require('../build/index.bundle'));


var index = function (request, reply) {
  var context = {
    content : React.renderToString(Index()),
    style : 'index'
  };
  reply.view('index',context);
}

var article = function (request,reply) {
  var context = {
    content : React.renderToString(Article()),
    style : 'article'
  };
  reply.view('index',context);
}

exports.index = index;
exports.article = article;