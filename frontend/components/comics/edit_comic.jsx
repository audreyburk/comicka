const React = require('react');

const ComicActions = require('./../../actions/comic_actions');

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

  getInitialState(){
    return {
      banner_url: "",
      thumb_url: "",
      title: "",
      shortname: "",
      pages: {}
    };
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

  addPage(url, thumb_url){
    console.log("adding a page!");
  },

  updateComic(){
    const comic = {
      title: this.state.title,
      shortname: this.state.shortname,
      banner_url: this.context.banner_url,
      thumb_url: this.context.thumb_url
    };
    ComicActions.updateComic(comic);
    //on success, update pages!
  },

  render(){
    return(
      <article className="content">
        <div className="form-container">
          <FormInputs onChange={this.onChange}
                      doComic={this.updateComic}
                      comic={this.state} />
          <FormImages imageChange={this.imageChange}
                      comic={this.state} />
        </div>
        <FormAddPages onChange={this.onChange} comic={this.state} />
      </article>
    );
  }
});
