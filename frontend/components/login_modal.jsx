const React = require('react');
const LoginForm = require('./login_form');
const hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  _stopProp(e){
    e.stopPropagation();
  },

  _prevent(e){
    e.preventDefault();
  },

  render(){
    return(
      <div className="modal" onClick={this.props.closeModal}>
        <div className="modal-content login-modal" onClick={this._stopProp}>
          <h2>You must be logged in to create comics</h2>
          <LoginForm closeModal={this.props.closeModal} />
        </div>
      </div>
    );
  }
});
