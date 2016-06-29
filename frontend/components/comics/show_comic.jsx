const React = require('react');

module.exports = React.createClass({
  render(){
    return <span>oh shit it works {this.props.params.shortname}</span>;
  }
});
