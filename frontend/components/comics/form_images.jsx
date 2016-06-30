const React = require('react');

module.exports = React.createClass({
  contextTypes: {
    banner_url: React.PropTypes.string,
    thumb_url: React.PropTypes.string
  },

  render(){
    console.log(this.context);
    return(
      <section className="form-images">
        {this.context.banner_url ? <img src={this.context.banner_url}></img> : ""}
      </section>
    )
  }
});
