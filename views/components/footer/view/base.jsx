'use strict';

var React = require('react');

var Footer = React.createClass({
  render : function () {
    return (
      <footer className="footer grey-bg">
        <span> &copy; All rights reserved</span>
      </footer>
    )
  }
});

module.exports = Footer;