const React = require('react');

const ComicActions = require('./../../actions/comic_actions');
// const PageActions = require('./../../actions/page_actions');

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
      shortname: ""
    };
  },

  _onComicStoreChange(){
    const comic = ComicStore.get(this.props.params.shortname);
    console.log(comic);
    this.setState( comic );
  },

  onChange(e){
    this.setState({[e.target.id]: e.target.value});
  },

  imageChange(type, url){
    this.setState({[type]: url});
  },

  updateComic(e){
    e.preventDefault();
    const comic = {
      title: this.state.title,
      shortname: this.state.shortname,
      banner_url: this.state.banner_url,
      thumb_url: this.state.thumb_url,
      id: this.state.id
    };
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
