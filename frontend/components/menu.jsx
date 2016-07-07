const React = require('react');
const hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
    _new(){
      hashHistory.push('/new');
    },

    _explore(){
      const url = '/gunnerkrigg';
      hashHistory.push(url);
    },

    _home(){
      hashHistory.push('/');
    },

    render(){
    return(
      <li className="header-item" id="menu-button">
        <i className="fa fa-bars" aria-hidden="true"></i>
        <ul className="dropdown">
          <li className="dropdown-item" onClick={this.props.edit}>Edit</li>
          <li className="dropdown-item" onClick={this._home}>Index</li>
          <li className="dropdown-item">About</li>
          <li className="dropdown-item" onClick={this._explore}>Explore</li>
          <li className="dropdown-item" onClick={this._new}>New Comic</li>
        </ul>
      </li>
    );
  }
});
