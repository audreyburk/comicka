const React = require('react');

module.exports = React.createClass({
  render(){
    const page = this.props.page;

    return(
      <div className="caption">
        {page.title ? <h3>{page.title}</h3> : ""}
        {page.caption ? <p>{page.caption}</p> : ""}
      </div>
    );
  }
});
