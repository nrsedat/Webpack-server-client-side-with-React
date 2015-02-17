'use strict';

var React = require('react');

var IndexComponent = require('../components/index');

var Index = React.createClass({
  render : function () {
    return (
      <article>
        <IndexComponent.view />
      </article>
    )
  }
});

module.exports = Index;