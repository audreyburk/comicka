const React = require('react');
const hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  render(){
    return(
      <li id="logo" onClick={this._home}>
        <div id="logo-img"></div>
      </li>
    );
  },

  _home(){
    hashHistory.push('/');
  }
});


// <img src="./../../app/assets/images/logo.png"></img>
