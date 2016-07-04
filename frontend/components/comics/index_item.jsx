const React = require('react');
const hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  _go(){
    const url = `/${this.props.comic.shortname}`;
    hashHistory.push(url);
  },

  render(){
    const comic = this.props.comic;
    return(
      <div className="index-item-container">
        <div className="dummy"></div>
        <div className="index-item" onClick={this._go}>
          <img src={comic.thumb_url}></img>
          <div className="title">{comic.title}</div>
        </div>
      </div>
    );
  }
});
