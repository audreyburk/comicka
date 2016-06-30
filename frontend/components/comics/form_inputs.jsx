const React = require('react');
const ComicActions = require('./../../actions/comic_actions');

module.exports = React.createClass({
  getInitialState(){
    return {title: "",
            shortname: "",
            // banner_url: "https://pixabay.com/static/uploads/photo/2016/03/28/12/35/cat-1285634_960_720.png",
            // thumb_url: "fdsa",
            pages: {},
            errors: ErrorStore.formErrors("new")};
  },

  contextTypes: {
    banner_url: React.PropTypes.string,
    thumb_url: React.PropTypes.string
  },

  componentDidMount(){
    this.token = ErrorStore.addListener(this._onErrorChange);
  },

  componentWillUnmount(){
    this.token.remove();
  },

  _onChange(e){
    this.setState({[e.target.id]: e.target.value});
  },

  _onErrorChange(){
    this.setState({errors: ErrorStore.formErrors("new_comic")});
  },

  _uploadBanner(){
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result){
      if(error === null){
        const url = result[0].url;
        this.props.imageChange("banner_url", url);
      }
    }.bind(this));
  },

  _uploadThumb(){
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result){
      if(error === null){
        const url = result[0].url;
        this.props.imageChange("thumb_url", url);
      }
    }.bind(this));
  },

  _createComic(){
    // TODO: also make pages
    //       and require at least one page
    //       is this that inverse of stuff?

    const comic = {
      title: this.state.title,
      shortname: this.state.shortname,
      banner_url: this.context.banner_url,
      thumb_url: this.context.thumb_url
    };
    ComicActions.createComic(comic);
  },

  render(){
    return(
      // pass in _onChange as prop
      // remember to bind somehow!

      <section className="form-inputs">
        <form onSubmit={this._createComic}>
          <label className="form-element"><span>Comic Title:</span>
            <input type="text" onChange={this._onChange}
                   id="title" value={this.state.title}></input>
          </label>

          <label className="form-element"><span>Shortname:</span>
            <input type="text" onChange={this._onChange}
                   id="shortname" value={this.state.shortname}></input>
          </label>

          <div onClick={this._uploadBanner} className="form-element">
          Thumbnail Image:<br></br>
          Banner Image:
          </div>
          <input type="submit" value="Create Comic"></input>
        </form>
      </section>
    )
  }
});
