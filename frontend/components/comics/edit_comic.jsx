const React = require('react');

const ComicActions = require('./../../actions/comic_actions');
const PageActions = require('./../../actions/page_actions');

const FormInputs = require('./form_inputs');
const FormImages = require('./form_images');
const FormAddPages = require('./form_add_pages');

module.exports = React.createClass({

  // TODO: alert when navigate from page
  //       without saving changes
  //       when pages is not empty

  componentDidMount(){
    ComicActions.fetchComic(this.props.params.shortname);
    this.token = ComicStore.addListener(this._onComicStoreChange);
  },

  componentWillUnmount(){
    this.token.remove();
  },

  getInitialState(){
    return {
      banner_url: "",
      thumb_url: "",
      title: "",
      shortname: "",
      pages: {},
      newPages: [],     // takes full page object
      deletedPages: [], // takes ids
      updatedPages: []  // takes ids
    };
    // {title:"title", comic_id:2, page_number:10000, thumb_url:"d", image_url:"f"}
  },

  contextTypes: {
    comic: React.PropTypes.object
  },

  _onComicStoreChange(){
    const comic = ComicStore.get(this.props.params.shortname);
    this.setState( comic );
  },

  onChange(e){
    this.setState({[e.target.id]: e.target.value});
  },

  imageChange(type, url){
    this.setState({[type]: url});
  },

  addPage(url){
    const page = {
      page_number: (Object.keys(this.state.pages).length + 1),
      image_url: url,
      thumb_url: url,
      comic_id: this.state.id
    };

    this.state.pages[page.page_number] = page;
    this.state.newPages.push(page);

    this.setState({pages: this.state.pages, newPages: this.state.newPages});
  },

  updateComic(){
    console.log(this.state);
    const comic = {
      title: this.state.title,
      shortname: this.state.shortname,
      banner_url: this.state.banner_url,
      thumb_url: this.state.thumb_url,
      id: this.state.id
    };
    const newPages = this.state.newPages;
    debugger
    PageActions.addPages(newPages);
    ComicActions.updateComic(comic);
  },

  render(){
    return(
      <article className="content">
        <div className="form-container">
          <FormInputs onChange={this.onChange}
                      doComic={this.updateComic}
                      comic={this.state}
                      buttonName="Update Comic" />
          <FormImages imageChange={this.imageChange}
                      comic={this.state} />
        </div>
        <FormAddPages addPage={this.addPage} comic={this.state} />
      </article>
    );
  }
});
