const React = require('react');
const hashHistory = require('react-router').hashHistory;

const ErrorStore = require('./../../stores/error_store');
const ComicActions = require('./../../actions/comic_actions');

const FormInputs = require('./form_inputs');
const FormImages = require('./form_images');

module.exports = React.createClass({
  getInitialState(){
    return {
      thumb_url: "",
      title: "",
      shortname: "",
    };
  },

  imageChange(type, url){
    this.setState({[type]: url});
  },

  onChange(e){
    this.setState({[e.target.id]: e.target.value});
  },

  createComic(e){
    e.preventDefault();
    // TODO: disable button until all fields are set!

    const comic = {
      title: this.state.title,
      shortname: this.state.shortname,
      thumb_url: this.state.thumb_url
    };
    ComicActions.createComic(comic, this._edit);
  },

  _edit(){
    const url = `/${this.state.shortname}/edit`;
    hashHistory.push(url);
  },

  render(){
    return(
      <article className="content">
        <div className="form-container">
          <FormInputs onChange={this.onChange}
                      doComic={this.createComic}
                      comic={this.state}
                      buttonName="Create Comic" />
          <FormImages imageChange={this.imageChange}
                      comic={this.state} />
        </div>
      </article>
    );
  }
});
