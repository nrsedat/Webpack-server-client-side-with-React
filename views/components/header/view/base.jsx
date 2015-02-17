'use strict';

var React = require('react');

var Header = React.createClass({
  render : function () {
    return (
      <header>
        <Header.NavBar />
      </header>
    );
  }
});

Header.NavBar = React.createClass({
  render: function () {
    return (
      <div className="nav-bar nav-border grey-bg">
        <Header.NavBar.Logo />
        <Header.NavBar.Menu />
        <Header.NavBar.Ecom />
      </div>
    );
  }
});

Header.NavBar.Logo = React.createClass({
  render: function () {
    return (
      <a href="/" className="logo">Brand</a>
    );
  }
});

Header.NavBar.Menu = React.createClass({
  render : function () {
    return (
      <button className="menu">Menu</button>
    );
  }
});


Header.NavBar.Ecom = React.createClass({
  render : function () {
    return (
      <div className="ecom">
        <a href="/details/failsafe">subscribe</a>
      </div>
    );
  }
});

module.exports = Header;
