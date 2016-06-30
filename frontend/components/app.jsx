const React = require('react');

const Header = require('./header');

module.exports = React.createClass({
  render(){
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  },

  componentDidMount(){
    this.token = ComicStore.addListener(this._onChange);
  },

  getChildContext() {
    const comic = this.state.comic;
    const pathname = this.props.location.pathname.split("/");
    const pageNumber = parseInt(pathname[2]);
    return {comic: comic, pageNumber: pageNumber};
  },

  childContextTypes: {
    comic: React.PropTypes.object,
    pageNumber: React.PropTypes.number
  },

  _onChange(){
    this.setState({comic: this.getComic()});
  },

  getInitialState(){
    return {comic: this.getComic()};
  },

  getComic(){
    if(this.props.params.shortname){
      return ComicStore.get(this.props.params.shortname);
    }
  }
  // TODO: Should we be listening to currentUser session change here?
  //       Instead of in tons of other places?
});
