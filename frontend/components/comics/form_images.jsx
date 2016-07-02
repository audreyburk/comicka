const React = require('react');

module.exports = React.createClass({
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

  render(){
    const banner = this.props.comic.banner_url ?
      <img onClick={this._uploadBanner} src={this.props.comic.banner_url} className="full-img"></img> :
      <div onClick={this._uploadBanner} id="banner-placeholder">banner will go here</div>;

    const thumb = this.props.comic.thumb_url ?
      <img onClick={this._uploadThumb} src={this.props.comic.thumb_url}></img> :
      <div onClick={this._uploadThumb} id="thumb-placeholder">thumb will go here</div>;

    return(
      <section className="form-images">
        {banner}
        {thumb}
      </section>
    )
  }
});
