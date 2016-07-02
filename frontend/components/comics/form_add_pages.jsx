const React = require('react');

const PageThumb = require('./page_thumb');

module.exports = React.createClass({
  contextTypes: {
    comic: React.PropTypes.object
  },

  renderThumbs(){
    const pages = this.props.comic.pages;
    const pageThumbs = []
    for( let i = Object.keys(pages).length; i > 0; i-- ){
      pageThumbs.push(pages[i]);
    }

    return pageThumbs.map( page => {
      return <PageThumb page={page} key={page.page_number}/>
    })
  },

  _addPage(){
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result){
      if(error === null){
        this.props.addPage(result[0].url);
      }
    }.bind(this));
  },

  render(){
    return(
      <section className="form-add-pages">
        <div className="page-upload" onClick={this._addPage}></div>
        { this.context.comic ? this.renderThumbs() : "" }
      </section>
    );
  }
});
