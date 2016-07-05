const React = require('react');

module.exports = React.createClass({
  _uploadThumb(){
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result){
      if(error === null){
        const url = result[0].url;
        this.props.imageChange("thumb_url", url);
      }
    }.bind(this));
  },

  render(){
    const thumb = this.props.comic.thumb_url ?
      <img onClick={this._uploadThumb} src={this.props.comic.thumb_url}></img> :
      <div onClick={this._uploadThumb} id="thumb-placeholder">thumb will go here</div>;

    return(
      <section className="form-images">
        {thumb}
      </section>
    )
  }
});
