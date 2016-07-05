const React = require('react');
const SessionStore = require('./../stores/session_store');
const ComicStore = require('./../stores/comic_store');
const SessionActions = require('./../actions/session_actions');
const hashHistory = require('react-router').hashHistory;
const LoginForm = require('./login_form');
const Logo = require('./logo');

module.exports = React.createClass({
  getInitialState(){
    return {currentUser: SessionStore.currentUser(),
            comic: this._getComic(),
            scrolled: $(window).scrollTop() > 50};
  },

  componentDidMount(){
    this.tokenA = SessionStore.addListener(this._onSessionChange);
    this.tokenB = ComicStore.addListener(this._onComicChange);
    $(window).on("scroll", this._onScroll);
  },

  componentWillUnmount(){
    this.tokenA.remove();
    this.tokenB.remove();
  },

  _onSessionChange(){
    this.setState({currentUser: SessionStore.currentUser()});
  },

  _onComicChange(){
    this.setState({comic: this._getComic()});
  },

  _onScroll(){
    if($(window).scrollTop() > 50){
      this.setState({scrolled: true})
    } else if (this.state.scrolled === true){
      this.setState({scrolled: false})
    }
  },

  _getComic(){
    if(this.props.shortname){
      return ComicStore.get(this.props.shortname);
    }
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

  _edit(){
    const url = `/${this.props.shortname}/edit`;
    hashHistory.push(url);
  },

  // TODO: make sure we can't click button before navigating
  _nav(pg){
    const url = `/${this.props.shortname}/${pg}`;
    window.scrollTo(0, 100);
    // window.scrollTo(0, ($('#page').offset().top - 50));
    hashHistory.push(url);
  },

  _explore(){
    const url = '/gunnerkrigg';
    hashHistory.push(url);
  },

  render(){
    const headerDisplay = this.state.scrolled ? "scrolled" : "top";
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
      <ul id="header-content" className={headerDisplay}>
        <li id="bar-logo" className={headerDisplay} onClick={this._home}>COMICKA</li>
        <li id="tagline" className={headerDisplay}>Comics are life.</li>
        <li className="spacing"></li>
        <li className="header-item">About</li>
        <li className="header-item" onClick={this._explore}>Explore</li>
        { login_button }
      </ul>
    );

    if(this.state.comic && this.props.pageNumber){
      const page = parseInt(this.props.pageNumber);
      const length = this.state.comic.length;
      let backClass = "header-item"
      let foreClass = "header-item"
      let first = 1,
          prev = page - 1,
          next = page + 1,
          last = length;

      if(page === 1){
        backClass += " no-nav";
        first = page;
        prev = page;
      }
      if(page === length){
        foreClass += " no-nav";
        next = page;
        last = page;
      }

      nav_buttons = (
        <ul id="header-content" className={headerDisplay}>
          <li id="bar-logo" className={headerDisplay} onClick={this._home}>COMICKA</li>
          <li id="tagline" className={headerDisplay}>Comics are life.</li>
          <li className="header-item" onClick={this._edit}>Edit</li>
          <li className={backClass} onClick={() => this._nav(first)}>{"<<"}</li>
          <li className={backClass} onClick={() => this._nav(prev)}>{"<"}</li>
          <li id="progress" className="spacing"></li>
          <li className={foreClass} onClick={() => this._nav(next)}>{">"}</li>
          <li className={foreClass} onClick={() => this._nav(last)}>{">>"}</li>
          { login_button }
        </ul>
      );
    }


    // render everything
    return(
      <div id="header-displacement">
        <header id="header" className={headerDisplay}>
          <div id="header-top">
             <div id="header-top-inner">
               <div id="logo" className={headerDisplay} onClick={this._home}></div>
             </div>
           </div>
          { nav_buttons }
        </header>
      </div>
    );
  }
});
