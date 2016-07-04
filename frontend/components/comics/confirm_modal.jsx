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
          <h2>Are you sure you want to delete this page?</h2>
          <div className="delete-buttons">
            <input type="submit" value="Delete" id="delete" onClick={this.props.cb}></input>
            <input type="submit" value="Cancel" id="cancel"></input>
          </div>
        </form>
      </div>
    );
  }
});
