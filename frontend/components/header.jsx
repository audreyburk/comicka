const React = require('react');
const SessionStore = require('./../stores/session_store');
const SessionActions = require('./../actions/session_actions');
const hashHistory = require('react-router').hashHistory;

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
        <li onClick={this._logOut}>
          {this.state.currentUser.username} (Log Out)
        </li>
      );
    } else {
      buttons = <li onClick={this._logIn}>Log In</li>;
    }
    return(
      <header id="header">
        <ul id="header-content">
          <li>Comicka!</li>
          <li>About</li>
          <li>Explore</li>
          { buttons }
        </ul>
      </header>
    );
  },

  _logIn(){
    hashHistory.push("/login");
  },

  _logOut(){
    SessionActions.logOut();
  }
});
