const React = require('react');
const ComicActions = require('./../../actions/comic_actions');

module.exports = React.createClass({
  componentDidMount(){
    this.token = ErrorStore.addListener(this._onErrorChange);
  },

  componentWillUnmount(){
    this.token.remove();
  },

  _onErrorChange(){
    this.setState({errors: ErrorStore.formErrors("new_comic")});
  },

  _addPage(){
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result){
      if(error === null){
        const url = result[0].url;
        const thumb_url = result[0].thumb_url;
        this.props.addPage(url, thumb_url);
      }
    }.bind(this));
  },

  // _updateComic(){
  //   const comic = {
  //     title: this.state.title,
  //     shortname: this.state.shortname,
  //     banner_url: this.context.banner_url,
  //     thumb_url: this.context.thumb_url
  //   };
  //   ComicActions.updateComic(comic);
  // },

  _addPage(){
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result){
      if(error === null){
        const url = result[0].url;
        const thumb_url = result[0].thumb_url;
        this.props.addPage(url, thumb_url);
      }
    }.bind(this));
  },

  render(){
    // TODO: can't submit updates till comic fetched
    const pageButton = (
      <input type="submit" value="Add Page" onClick={this._addPage}></input>
    );

    return(
      <section className="form-inputs">
        <h2>Create Comic:</h2>
        <form onSubmit={this._updateComic}>
          <label className="form-element" htmlFor="title">Comic Title:</label>
          <input type="text" onChange={this.props.onChange} className="form-element"
            id="title" value={this.props.comic.title}></input>

          <label className="form-element" htmlFor="shortname">Shortname:</label>
            <input type="text" onChange={this.props.onChange} className="form-element"
                   id="shortname" value={this.props.comic.shortname}></input>

                 <input type="submit" value="Update Comic"></input>
        </form>
        {pageButton}
      </section>
    )
  }
});
