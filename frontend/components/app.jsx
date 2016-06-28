const React = require('react');

const Header = require('./header');

module.exports = React.createClass({
  render(){
    return (
      <div>
        <Header />
        <p>Hello!</p>
        {this.props.children}
      </div>
    );
  }
});
