const React = require('react');
const ComicActions = require('./../../actions/comic_actions');
const ComicStore = require('./../../stores/comic_store');
const IndexItem = require('./index_item');

module.exports = React.createClass({
  componentDidMount(){
    ComicActions.fetchAllComics();
    this.token = ComicStore.addListener(this._onChange);
  },

  componentWillUnmount(){
    this.token.remove();
  },

  getInitialState(){
    return { comics: ComicStore.all() };
  },

  _onChange(){
    this.setState({ comics: ComicStore.all() });
  },

  renderItems(){
    return this.state.comics.map( comic => {
      return <IndexItem comic={comic} key={"item_" + comic.shortname}/>
    });
  },

  render(){
    return(
      <article className="index-content">
        {this.renderItems()}
      </article>
    );
  }
});
