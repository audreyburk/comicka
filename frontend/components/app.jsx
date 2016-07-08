const React = require('react');
const ComicActions = require('./../actions/comic_actions');
const ComicStore = require('./../stores/comic_store');

const Header = require('./header');
const Footer = require('./footer');

module.exports = React.createClass({
  componentDidMount(){
    if(this.props.params.shortname){
      ComicActions.fetchComic(this.props.params.shortname);
    }
  },

  componentWillReceiveProps(newProps){
    if(newProps.params.shortname){
      ComicActions.fetchComic(newProps.params.shortname);
    }
  },

  render(){
    return (
      <div id="app">
        <Header shortname={this.props.params.shortname}
                pageNumber={this.props.params.page} />
        {this.props.children}
        <Footer />
      </div>
    );
  }

  // TODO: Should we be listening to currentUser session change here?
  //       Instead of in tons of other places?
});
