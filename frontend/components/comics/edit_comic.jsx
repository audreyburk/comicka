const React = require('react');

const ComicActions = require('./../../actions/comic_actions');

const EditFormInputs = require('./edit_form_inputs');
const FormImages = require('./form_images');
const FormAddPages = require('./form_add_pages');

module.exports = React.createClass({
  // getChildContext() {
  //   return {
  //     banner_url: this.state.banner_url,
  //     thumb_url: this.state.thumb_url,
  //     pages: this.state.pages
  //   };
  // },
  //
  // componentWillUpdate(){
  //   this.setState({
  //     banner_url: this.context.comic.banner_url,
  //     thumb_url: this.context.comic.thumb_url,
  //     pages: this.context.comic.pages
  //   });
  // },
  //
  // childContextTypes: {
  //   banner_url: React.PropTypes.string,
  //   thumb_url: React.PropTypes.string,
  //   pages: React.PropTypes.object
  // },

  componentDidMount(){
    ComicActions.fetchComic(this.props.params.shortname);
    this.token = ComicStore.addListener(this._onComicStoreChange);
  },

  getInitialState(){
    return {banner_url: "", thumb_url: "", pages: {}};
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

  render(){
    return(
      <article className="content">
        <div className="form-container">
          <EditFormInputs onChange={this.onChange} comic={this.state} />
          <FormImages onChange={this.onChange} comic={this.state} imageChange={this.imageChange} />
        </div>
        <FormAddPages onChange={this.onChange} comic={this.state} />
      </article>
    );
  }
});
