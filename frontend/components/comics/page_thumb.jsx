const React = require('react');

module.exports = React.createClass({
  render(){
    return(
      <div className="page-thumb">
        <span>{this.props.page.page_number}</span>
        <img src={this.props.page.thumb_url}></img>
      </div>
    );
  }
});
