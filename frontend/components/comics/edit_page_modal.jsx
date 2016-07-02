const React = require('react');


module.exports = React.createClass({
  stopProp(e){
    e.stopPropagation();
  },

  render(){
    return(
      <div className="modal" onClick={this.props.closeModal}>
        <div className="modal-content" onClick={this.stopProp}>
          <img className="modal-page" src={this.props.page.image_url}></img>
          <form onSubmit={this.props.updatePage}>

            <input type="submit"></input>
          </form>
        </div>
      </div>
    );
  }
});
