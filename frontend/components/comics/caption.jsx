const React = require('react');

module.exports = React.createClass({
  render(){
    const comic = this.context.comic;
    console.log(page);
    return(
      <div id="caption">
        {comic.title ? <h3>{comic.title}</h3> : ""}
        {comic.caption ? <p>{comic.caption}</p> : ""}
      </div>
    );
  },

  contextTypes: {
    comic: React.PropTypes.object,
  }
});
