const React = require('react');
const hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
    _new(){
      hashHistory.push('/new');
    },

    _about(){
      hashHistory.push('/about');
    },

    _explore(){
      const url = '/gunnerkrigg';
      hashHistory.push(url);
    },

    _home(){
      hashHistory.push('/');
    },

    render(){
      debugger
      return(
        <li className="header-item" id="menu-button">
          <i className="fa fa-bars" aria-hidden="true"></i>
          <ul className="dropdown">
            {this.props.edit ? <li className="dropdown-item" onClick={this.props.edit}>Edit</li> : ""}
            <li className="dropdown-item" onClick={this._new}>New Comic</li>
            <li className="dropdown-item" onClick={this._home}>Index</li>
            <li className="dropdown-item" onClick={this._about}>About</li>
          </ul>
        </li>
      );
  }
});
