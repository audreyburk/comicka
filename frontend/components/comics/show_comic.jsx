const React = require('react');
const hashHistory = require('react-router').hashHistory;

const ComicStore = require('./../../stores/comic_store');
const ComicActions = require('./../../actions/comic_actions');

const Caption = require('./caption');

module.exports = React.createClass({
  render(){
    let content = <article className="content"></article>;
    const comic = this.context.comic;
    if (comic){
      const pageNumber = this.context.pageNumber;
      let pageClass = "page";

      if(pageNumber === this.context.comic.length) pageClass += " last-page";
      content = (
        <article className="content">
          <img src={comic.banner_url}
               className="full-img"></img>
           <img src={comic.pages[pageNumber].image_url}
             className={pageClass}
             onClick={this._nextPage}></img>
           <Caption />
        </article>);
    }

    return(content);
  },

  contextTypes: {
    comic: React.PropTypes.object,
    pageNumber: React.PropTypes.number
  },

  componentDidMount(){
    ComicActions.fetchComic(this.props.params.shortname);
  },

  _nextPage(){
    const params = this.props.params;
    const next = this.context.pageNumber + 1
    if(next <= this.context.comic.length){
      const url = `/${params.shortname}/${next}`;
      hashHistory.push(url);
    }
  }

});
