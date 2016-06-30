const React = require('react');

module.exports = React.createClass({
  contextTypes: {
    banner_url: React.PropTypes.string,
    thumb_url: React.PropTypes.string
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

  render(){
    const banner = this.context.banner_url ?
      <img src={this.context.banner_url} className="full-img"></img> :
      <div onClick={this._uploadBanner} id="banner-placeholder">banner will go here</div>;

    const thumb = this.context.thumb_url ?
      <img src={this.context.thumb_url}></img> :
      <div onClick={this._uploadThumb} id="thumb-placeholder">thumb will go here</div>;

    return(
      <section className="form-images">
        {banner}
        {thumb}
      </section>
    )
  }
});
