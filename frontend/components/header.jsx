const React = require('react');
const SessionStore = require('./../stores/session_store');
const SessionActions = require('./../actions/session_actions');
const hashHistory = require('react-router').hashHistory;
const LoginForm = require('./login_form');
const Logo = require('./logo');

module.exports = React.createClass({
  getInitialState(){
    return {currentUser: SessionStore.currentUser(),
            scrolled: $(window).scrollTop() > 150};
  },

  componentDidMount(){
    this.token = SessionStore.addListener(this._onChange);
    $(window).on("scroll", this._onScroll);
  },

  componentWillUnmount(){
    this.token.remove();
  },

  _onChange(){
    this.setState({currentUser: SessionStore.currentUser()})
  },

  _onScroll(){
    if($(window).scrollTop() > 150){
      this.setState({scrolled: true})
    } else if (this.state.scrolled === true){
      this.setState({scrolled: false})
    }
  },

  contextTypes: {
    comic: React.PropTypes.object,
    pageNumber: React.PropTypes.number
  },

  _logOut(){
    SessionActions.logOut();
  },

  _new(){
    hashHistory.push('/new');
  },

  _selectInput(){
    const input = $(".text-field").get(0);
    input.focus();
    input.select();
  },

  _home(){
    hashHistory.push('/');
  },

  // TODO: make sure we can't click button before navigating
  _nav(pg){
    const comic = this.context.comic;
    const url = `/${comic.shortname}/${pg}`;
    window.scrollTo(0, ($('#page').offset().top - 50));
    hashHistory.push(url);
  },

  _explore(){
    const url = '/gunnerkrigg';
    hashHistory.push(url);
  },

  render(){
    let login_button;

    // display login form or user options dropdown
    if(SessionStore.isUserLoggedIn()){
      login_button = (
        <li className="header-item">
          <span>{this.state.currentUser.username}</span>
          <ul className="dropdown">
            <li className="dropdown-item" onClick={this._new}>New Comic</li>
            <li className="dropdown-item" onClick={this._logOut}>Log Out</li>
          </ul>
        </li>
      );
    } else {
      login_button = (
        <li className="header-item">
          <span id="ugh" onClick={this._selectInput}>Log In</span>
          <LoginForm />
        </li>
      );
    }

    // display nav options or page stuff
    let nav_buttons = (
      <ul id="header-content">
        <Logo />
        <li className="spacing"></li>
        <li className="header-item">About</li>
        <li className="header-item" onClick={this._explore}>Explore</li>
        { login_button }
      </ul>
    );

    if(this.context.comic && this.context.pageNumber){
      let backClass = "header-item"
      let foreClass = "header-item"
      let first = 1,
          prev = this.context.pageNumber - 1,
          next = this.context.pageNumber + 1,
          last = this.context.comic.length;

      if(this.context.pageNumber === 1){
        backClass += " no-nav";
        first = this.context.pageNumber;
        prev = this.context.pageNumber;
      }
      if(this.context.pageNumber === this.context.comic.length){
        foreClass += " no-nav";
        next = this.context.pageNumber;
        last = this.context.pageNumber;
      }

      nav_buttons = (
        <ul id="header-content">
          <Logo />
          <li className={backClass} onClick={() => this._nav(first)}>{"<<"}</li>
          <li className={backClass} onClick={() => this._nav(prev)}>{"<"}</li>
          <li id="progress" className="spacing"></li>
          <li className={foreClass} onClick={() => this._nav(next)}>{">"}</li>
          <li className={foreClass} onClick={() => this._nav(last)}>{">>"}</li>
          { login_button }
        </ul>
      );
    }

    const headerTop = this.state.scrolled ?
       " ": ( <div id="header-top">
                <div id="header-top-inner">
                  <div id="logo-text" onClick={this._home}></div>
                </div>
              </div> );

    // render everything
    return(
      <div id="header-displacement">
        <header id="header">
          { headerTop }
          { nav_buttons }
        </header>
      </div>
    );
  }
});
