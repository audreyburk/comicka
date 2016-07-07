const React = require('react');
const PageActions = require('./../../actions/page_actions');
const ConfirmModal = require('./confirm_modal');
const hashHistory = require('react-router').hashHistory;

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
    this.props.closeModal();
  },

  _deletePage(e){
    e.preventDefault();
    const _yes = () => {
      PageActions.deletePage(this.state.id);
      this.props.closeModal();
    }

    // TODO: we never got initial state. Bad?
    this.setState({confirm: _yes});
  },

  _goToPage(){
    const url = `/${this.props.comic.shortname}/${this.props.page.page_number}`;
    hashHistory.push(url);
  },

  closeConfirm(){
    this.setState({confirm: false});
  },

  _stopProp(e){
    e.stopPropagation();
  },

  _prevent(e){
    e.preventDefault();
  },

  render(){
    return(
      <div className="modal" onClick={this.props.closeModal}>
        {this.state.confirm ?
          <ConfirmModal cb={this.state.confirm}
                        closeConfirm={this.closeConfirm} /> : ""}

        <div className="modal-content" onClick={this._stopProp}>
          <img className="modal-page" src={this.state.image_url}></img>

          <form className="modal-form" onSubmit={this._prevent}>
            <label className="form-element" htmlFor="title">Page Title:</label>
            <input type="text" onChange={this._onChange} className="form-element"
              id="title" value={this.state.title}></input>

            <label className="form-element" htmlFor="caption">Caption:</label>
              <input type="text" onChange={this._onChange} className="form-element"
                     id="caption" value={this.state.caption}></input>

              <div className="form-buttons">
                <div className="buttons-abreast">
                  <input type="submit" value="Delete Page" onClick={this._deletePage} className="form-element" id="other-delete"></input>
                  <input type="submit" value="Go to Page" onClick={this._goToPage} className="form-element" id="go"></input>
                </div>
                <input type="submit" value="Update Page" onClick={this._updatePage} className="form-element" id="update"></input>
              </div>
          </form>
        </div>
      </div>
    );
  }
});
