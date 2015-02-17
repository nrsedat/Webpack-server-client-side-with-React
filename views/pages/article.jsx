'use strict';

var React = require('react');

var ArticleComponent = require('../components/article');

var Article = React.createClass({
  render : function () {
    return (
      <article>
        <ArticleComponent.view />
      </article>
    )
  }
});

module.exports = Article;