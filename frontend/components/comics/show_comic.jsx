const React = require('react');
const hashHistory = require('react-router').hashHistory;

const ComicStore = require('./../../stores/comic_store');

const Caption = require('./caption');

module.exports = React.createClass({
  getInitialState(){
    return {comic: null};
  },

  componentDidMount(){
    this.token = ComicStore.addListener(this._onComicStoreChange);
  },

  componentWillUnmount(){
    this.token.remove();
  },

  _onComicStoreChange(){
    const comic = ComicStore.get(this.props.params.shortname);
    this.setState( comic );
  },

  _nextPage(){
    const next = this.props.params.page + 1
    if(next <= this.state.comic.length){
      window.scrollTo(0, ($('#page').offset().top - 50));
      const url = `/${this.props.params.shortname}/${next}`;
      hashHistory.push(url);
    }
  },

  render(){
    let content = <article className="content"></article>;
    const comic = this.state.comic;
    if (comic){
      const pageNumber = this.props.params.page;
      const page = comic.pages[pageNumber];
      let pageClass = "";

      if(pageNumber === this.state.comic.length) pageClass = "last-page";
      content = (
        <article className="content">
          <img src={comic.banner_url}
               className="full-img"></img>
             <img src={page.image_url}
             id="page"
             className={pageClass}
             onClick={this._nextPage}></img>
           <Caption page={page}/>
        </article>);
    }

    return(content);
  }
});
