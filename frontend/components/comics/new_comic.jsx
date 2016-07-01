const React = require('react');

const ErrorStore = require('./../../stores/error_store');
const ComicActions = require('./../../actions/comic_actions');

const FormInputs = require('./form_inputs');
const FormImages = require('./form_images');

module.exports = React.createClass({
  getInitialState(){
    return {
      banner_url: "",
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

  createComic(){
    // TODO: disable button until all fields are set!

    const comic = {
      title: this.state.title,
      shortname: this.state.shortname,
      banner_url: this.state.banner_url,
      thumb_url: this.state.thumb_url
    };
    debugger
    ComicActions.createComic(comic);
  },

  render(){
    return(
      <article className="content">
        <section className="form-head">
          <h3>Create Comic</h3>
        </section>

        <div className="form-container">
          <FormInputs onChange={this.onChange}
                      doComic={this.createComic}
                      comic={this.state}
                      buttonName="Create Comic" />
          <FormImages imageChange={this.imageChange}
                      comic={this.state} />
        </div>

        <section className="form-pages">
          <h3>Create Comic</h3>
        </section>

        <section className="form-end">
          <h3>Create Comic</h3>
        </section>
      </article>
    );
  }
});
