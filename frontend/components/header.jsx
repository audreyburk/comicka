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
        <div>
          <p>Welcome, {this.state.currentUser.username}</p>
          <button onClick={this._logOut}>Log Out</button>
        </div>
      );
    } else {
      buttons = (
        <div>
          <button onClick={this._logIn}>Log In</button>
        </div>
      );
    }
    return(
      <div>
        <h1>Comicka!</h1>
        { buttons }
      </div>
    );
  },

  _logIn(){
    hashHistory.push("/login");
  },

  _logOut(){
    SessionActions.logOut();
  }
});
