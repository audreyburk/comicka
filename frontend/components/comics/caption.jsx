const React = require('react');

module.exports = React.createClass({
  render(){
    const comic = this.context.comic;
    const page = comic.pages[this.context.pageNumber];

    return(
      <div className="caption">
        {page.title ? <h3>{page.title}</h3> : ""}
        {page.caption ? <p>{page.caption}</p> : ""}
      </div>
    );
  },

  contextTypes: {
    comic: React.PropTypes.object,
    pageNumber: React.PropTypes.number
  }
});
