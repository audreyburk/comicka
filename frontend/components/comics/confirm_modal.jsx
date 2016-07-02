const React = require('react');

module.exports = React.createClass({
  _onSubmit(e){
    e.preventDefault();
    this.props.closeConfirm();
  },

  _stopProp(e){
    e.stopPropagation();
  },

  render(){
    return(
      <div className="modal" onClick={this._stopProp}>
        <form className="confirm-modal" onSubmit={this._onSubmit}>
          <input type="submit" value="Yes" onClick={this.props.cb}></input>
          <input type="submit" value="No"></input>
        </form>
      </div>
    );
  }
});
