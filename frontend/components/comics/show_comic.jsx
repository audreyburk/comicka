const React = require('react');
const hashHistory = require('react-router').hashHistory;

const ComicStore = require('./../../stores/comic_store');
const ComicActions = require('./../../actions/comic_actions');

module.exports = React.createClass({
  render(){
    let content = <article className="content"></article>;
    const comic = this.state.comic;
    if (comic){
      const page = parseInt(this.props.params.page) - 1;
      content = (
        <article className="content">
          <img src={comic.banner_url}
               className="banner"></img>
          <img src={comic.pages[page].image_url}
               className="page"
               onClick={this._nextPage}></img>
        </article>);
    }

    return(content);
  },

  getInitialState(){
    return {comic: ComicStore.get(this.props.params.shortname)};
  },

  componentDidMount(){
    ComicActions.fetchComic(this.props.params.shortname);
    this.token = ComicStore.addListener(this._onChange);
  },

  componentWillReceiveProps(newProps){
    ComicActions.fetchComic(newProps.params.shortname);
  },

  _onChange(){
    this.setState({comic: ComicStore.get(this.props.params.shortname)});
  },

  _nextPage(){
    const params = this.props.params;
    const url = `/${params.shortname}/${parseInt(params.page) + 1}`;
    hashHistory.push(url);
  }

});
