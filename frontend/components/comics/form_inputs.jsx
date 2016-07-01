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

  render(){
    // TODO: can't submit updates till comic fetched
    console.log(this.props);
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
      </section>
    )
  }
});
