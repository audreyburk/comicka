const React = require('react');

const PageThumb = require('./page_thumb');
const PageActions = require('./../../actions/page_actions');
const EditPageModal = require('./edit_page_modal');

module.exports = React.createClass({
  contextTypes: {
    comic: React.PropTypes.object
  },

  getInitialState(){
    return {modal: false};
  },

  openModal(page){
    this.setState({modal: page});
  },

  closeModal(){
    this.setState({modal: false});
  },

  _addPage(){
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result){
      if(error === null){
        const page = {
          comic_id: this.context.comic.id,
          page_number: this.context.comic.length + 1,
          thumb_url: result[0].url,
          image_url: result[0].url
        };
        PageActions.createPage(page);
        // this.props.addPage(result[0].url);
      }
    }.bind(this));
  },

  renderThumbs(){
    const pages = this.props.comic.pages;
    const pageThumbs = []
    for( let i = Object.keys(pages).length; i > 0; i-- ){
      pageThumbs.push(pages[i]);
    }

    return pageThumbs.map( page => {
      return <PageThumb page={page}
        openModal={this.openModal}
        closeModal={this.closeModal}
        key={page.page_number}/>
    })
  },

  render(){
    return(
      <section className="form-add-pages">
        { this.state.modal ? <EditPageModal page={this.state.modal} closeModal={this.closeModal} /> : "" }
        <div className="form-add-pages-header">
          <h2>Edit Pages:</h2>
          <input type="submit" value="Add Page" className="page-upload" onClick={this._addPage}></input>
        </div>
        <div className="page-thumb-container">
          { this.context.comic ? this.renderThumbs() : "" }
        </div>
      </section>
    );
  }
});
