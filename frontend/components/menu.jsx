const React = require('react');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('./../stores/session_store');

const LoginModal = require('./login_modal');

module.exports = React.createClass({
    getInitialState(){
      return {modal: false};
    },

    _new(){
      if(SessionStore.isUserLoggedIn()){
        hashHistory.push('/new');
      } else {
        this.setState({modal: true});
      }
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

    closeModal(){
      this.setState({modal: false});
      hashHistory.push('/new');
    },

    render(){
      return(
        <li className="header-item" id="menu-button">
          <i className="fa fa-bars" aria-hidden="true"></i>
          <ul className="dropdown">
            {this.props.edit ? <li className="dropdown-item" onClick={this.props.edit}>Edit</li> : ""}
            <li className="dropdown-item" onClick={this._new}>New Comic</li>
            <li className="dropdown-item" onClick={this._home}>Index</li>
          </ul>
          { this.state.modal ? <LoginModal closeModal={this.closeModal} /> : "" }
        </li>
      );
  }
});
