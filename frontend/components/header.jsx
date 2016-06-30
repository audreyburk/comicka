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

  contextTypes: {
    comic: React.PropTypes.object,
    pageNumber: React.PropTypes.number
  },

  render(){
    let login_button;

    // display login form or user options dropdown
    if(SessionStore.isUserLoggedIn()){
      login_button = (
        <li className="header-item">
          <span>{this.state.currentUser.username}</span>
          <ul className="dropdown">
            <li className="dropdown-item">Profile</li>
            <li className="dropdown-item" onClick={this._logOut}>Log Out</li>
          </ul>
        </li>
      );
    } else {
      login_button = (
        <li className="header-item" onClick={this._selectInput}>
          <span>Log In</span>
          <LoginForm />
        </li>
      );
    }

    // display nav options or page stuff
    let nav_buttons = (
      <ul id="header-content">
        <li id="logo">Comicka!</li>
        <li className="spacing"></li>
        <li className="header-item">About</li>
        <li className="header-item">Explore</li>
        { login_button }
      </ul>
    );

    if(this.context.comic){
      let backClass = "header-item"
      let foreClass = "header-item"
      let first = 1,
          prev = this.context.pageNumber - 1,
          next = this.context.pageNumber + 1,
          last = this.context.comic.pages.length;



      // TODO: Let's please have json export length!
      if(this.context.pageNumber === 1){
        backClass += " no-nav";
        first = this.context.pageNumber;
        prev = this.context.pageNumber;
      }
      if(this.context.pageNumber === this.context.comic.pages.length){
        foreClass += " no-nav";
        next = this.context.pageNumber;
        last = this.context.pageNumber;
      }

      nav_buttons = (
        <ul id="header-content">
          <li id="logo">Comicka!</li>
          <li className={backClass} onClick={() => this._nav(first)}>{"<<"}</li>
          <li className={backClass} onClick={() => this._nav(prev)}>{"<"}</li>
          <li id="progress" className="spacing">{this.context.pageNumber}</li>
          <li className={foreClass} onClick={() => this._nav(next)}>{">"}</li>
          <li className={foreClass} onClick={() => this._nav(last)}>{">>"}</li>
          { login_button }
        </ul>
      );
    }

    // render everything
    return(
      <header id="header">
        { nav_buttons }
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
  },

  // TODO: make sure we can't click button before navigating

  _first(){
  },

  _previous(){

  },

  _next(){
    // const comic = this.context.comic;
    // const next = this.context.pageNumber + 1;
    // if(next <= comic.pages.length){
    //   const url = `/${comic.shortname}/${next}`;
    //   hashHistory.push(url);
    // }
  },

  _last(){

  },

  _nav(pg){
    const comic = this.context.comic;
    const url = `/${comic.shortname}/${pg}`;
    hashHistory.push(url);
  }
});
