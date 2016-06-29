const React = require('react');
const SessionStore = require('./../stores/session_store');
const SessionActions = require('./../actions/session_actions');
const hashHistory = require('react-router').hashHistory;
const LoginForm = require('./login_form');

module.exports = React.createClass({
  getInitialState(){
    return {currentUser: SessionStore.currentUser()};
  },

  componentDidMount(){
    this.token = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount(){
    this.token.remove();
  },

  _onChange(){
    this.setState({currentUser: SessionStore.currentUser()})
  },

  render(){
    let buttons;
    if(SessionStore.isUserLoggedIn()){
      buttons = (
        <li className="header-item">
          <span>{this.state.currentUser.username}</span>
          <ul className="dropdown">
            <li className="dropdown-item">Profile</li>
            <li className="dropdown-item" onClick={this._logOut}>Log Out</li>
          </ul>
        </li>
      );
    } else {
      buttons = (
        <li className="header-item" onClick={this._selectInput}>
          <span>Log In</span>
          <LoginForm />
        </li>
      );
    }
    return(
      <header id="header">
        <ul id="header-content">
          <li id="logo">Comicka!</li>
          <li className="spacing"></li>
          <li className="header-item">About</li>
          <li className="header-item">Explore</li>
          { buttons }
        </ul>
      </header>
    );
  },

  _logOut(){
    SessionActions.logOut();
  },

  _selectInput(){
    const input = $(".text-field").get(0);
    input.focus();
    input.select();
  }
});
