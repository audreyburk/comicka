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
      <div onClick={this._uploadThumb} className="upload-thumb">
        <img src={this.props.comic.thumb_url}></img>
        <div>
          <span>Change thumbnail image</span>
        </div>
      </div> :
      <div onClick={this._uploadThumb} className="upload-thumb" id="thumb-placeholder">
        <div>
          <span>Upload thumbnail image</span>
        </div>
      </div>;

    return(
      <section className="form-images">
        {thumb}
      </section>
    )
  }
});
