const React = require('react');

module.exports = React.createClass({
  componentDidMount(){
    $(window).on("scroll", this._onScroll);
  },

  getInitialState(){
    return {class: "hide"};
  },

  _onScroll(){
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      this.setState({class: "show"});
    } else if(this.state.class === "show"){
      this.setState({class: "hide"});
    }
  },

  _github(){
    window.location.href='http://github.com/jordanburk/comicka';
  },

  _mail(){
    window.location.href='mailto:jordan.g.burk@gmail.com';
  },

  render(){
    return(
      <footer className={this.state.class}>
        <ul>
          <li className="spacing"></li>
          <li>jordanburk</li>
          <li id="mail" onClick={this._mail}></li>
          <li id="github" onClick={this._github}></li>
        </ul>
      </footer>
    );
  }
});
