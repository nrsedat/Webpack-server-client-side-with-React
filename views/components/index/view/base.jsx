'use strict';

var React = require('react');

var Header = require('../../header');
var Footer = require('../../footer');

var Index = React.createClass({
  render : function () {
    return  (
      <div>
        <Header.view />
        <article><h1>Index</h1></article>
        <Footer.view />
      </div>
    )
  }
});

module.exports = Index;