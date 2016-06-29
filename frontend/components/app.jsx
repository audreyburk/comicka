const React = require('react');

const Header = require('./header');

module.exports = React.createClass({
  render(){
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
  // TODO: Should we be listening to currentUser session change here?
  //       Instead of in tons of other places?
});
