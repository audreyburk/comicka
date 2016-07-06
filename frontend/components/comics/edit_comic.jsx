const React = require('react');

const FormInputs = require('./form_inputs');
const FormImages = require('./form_images');
const FormAddPages = require('./form_add_pages');

module.exports = React.createClass({

  // TODO: alert when navigate from page
  //       without saving changes
  //       when pages is not empty

  componentDidMount(){
    this.tokenA = ComicStore.addListener(this._onComicStoreChange);
  },

  componentWillUnmount(){
    this.tokenA.remove();
  },

  getInitialState(){
    return {
      thumb_url: "",
      title: "",
      shortname: ""
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

  updateComic(e){
    e.preventDefault();
    const comic = {
      title: this.state.title,
      shortname: this.state.shortname,
      thumb_url: this.state.thumb_url,
      id: this.state.id
    };
    ComicActions.updateComic(comic);
  },

  render(){
    return(
      this.state.thumb_url ?
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
        </article> : <article className="content"></article>
    );
  }
});
