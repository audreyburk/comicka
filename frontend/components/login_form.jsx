const React = require('react');
const hashHistory = require('react-router').hashHistory;

const SessionActions = require('./../actions/session_actions');
const SessionStore = require('./../stores/session_store');
const ErrorStore = require('./../stores/error_store');

module.exports = React.createClass({
  render(){
    let baseErrors = "",
        usernameErrors = "",
        passwordErrors = ""

    if(!$.isEmptyObject(this.state.errors)){
      baseErrors = <div className="field-error">{this.state.errors.base}</div>
      usernameErrors = <div className="field-error">{this.state.errors.username}</div>
      passwordErrors = <div className="field-error">{this.state.errors.password}</div>
    }

    return(
      <form id="login" className="dropdown" onSubmit={this._onSubmit}>
        <label className="login-field"><span>Username:</span>
          <input className="text-field" type="text" id="username"
                 onChange={this._onChange}></input>
               {usernameErrors}
        </label>

        <label className="login-field"><span>Password:</span>
          <input className="text-field" type="password" id="password"
                 onChange={this._onChange}></input>
               {passwordErrors}
        </label>
        {baseErrors}
        {baseErrors ? <br></br> : ""}
        <div className="login-field">
          <input type="submit" value="Log In" className="button"
            onClick={this._whichSubmit}></input>
          <input type="submit" value="Sign Up" className="button"
            onClick={this._whichSubmit}></input>
          <input type="submit" value="Demo Login" className="button"
            onClick={this._whichSubmit}></input>
        </div>
      </form>
    );
  },

  getInitialState(){
    return {username: "", password: "", errors: ErrorStore.formErrors("login")};
  },

  componentDidMount(){
    this.tokenA = SessionStore.addListener(this._onSessionChange);
    this.tokenB = ErrorStore.addListener(this._onErrorChange);
  },

  componentWillUnmount(){
    this.tokenA.remove();
    this.tokenB.remove();
  },

  _onSessionChange(){
    if(SessionStore.isUserLoggedIn) hashHistory.push("/");
  },
  _onErrorChange(){
    this.setState({errors: ErrorStore.formErrors("login")});
  },

  _onChange(e){
    this.setState({[e.target.id]: e.target.value})
  },

  _onSubmit(e){
    e.preventDefault();
    switch (this.submit) {
      case "Log In":
        SessionActions.logIn({username: this.state.username,
                               password: this.state.password});
        break;
      case "Sign Up":
        SessionActions.signUp({username: this.state.username,
                               password: this.state.password});
        break;
      case "Demo Login":
        SessionActions.logIn({username:"jyllian", password:"demoaccount"});
        break;
    }
  },

  _whichSubmit(e){
    this.submit = e.currentTarget.value;
  }
});
