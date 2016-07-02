const React = require('react');
const PageActions = require('./../../actions/page_actions');

module.exports = React.createClass({
  getInitialState(){
    return this.props.page;
  },

  _onChange(e){
    this.setState({[e.target.id]: e.target.value});
  },

  _updatePage(e){
    e.preventDefault();
    PageActions.updatePage(this.state);
  },

  _stopProp(e){
    e.stopPropagation();
  },

  render(){
    return(
      <div className="modal" onClick={this.props.closeModal}>
        <div className="modal-content" onClick={this._stopProp}>
          <img className="modal-page" src={this.state.image_url}></img>

          <form onSubmit={this._updatePage}>
            <label className="form-element" htmlFor="title">Page Title:</label>
            <input type="text" onChange={this._onChange} className="form-element"
              id="title" value={this.state.title}></input>

            <label className="form-element" htmlFor="caption">Caption:</label>
              <input type="text" onChange={this._onChange} className="form-element"
                     id="caption" value={this.state.caption}></input>

            <input type="submit"></input>
          </form>
        </div>
      </div>
    );
  }
});
