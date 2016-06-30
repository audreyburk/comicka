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
      // TODO: not good to depend on array index!
      //       probably need another table column
      const pageNumber = this.context.pageNumber;
      let pageClass = "page";
      if(pageNumber === this.context.comic.pages.length) pageClass += " last-page";
      content = (
        <article className="content">
          <img src={comic.banner_url}
               className="banner"></img>
             <img src={comic.pages[pageNumber - 1].image_url}
               className={pageClass}
               onClick={this._nextPage}></img>
        </article>);
    }

    // {(comic.caption || comic.title) ? <Caption /> : "" }
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
    if(next <= this.context.comic.pages.length){
      const url = `/${params.shortname}/${next}`;
      hashHistory.push(url);
    }
  }

});
