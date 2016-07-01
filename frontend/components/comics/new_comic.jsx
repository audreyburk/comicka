const React = require('react');

const ErrorStore = require('./../../stores/error_store');

const FormInputs = require('./form_inputs');
const FormImages = require('./form_images');

module.exports = React.createClass({

  // TODO: alert when navigate from page
  //       without saving changes
  //       when pages is not empty

  getInitialState(){
    return {banner_url: "", thumb_url: "", pages: {}};
  },

  getChildContext() {
    return {banner_url: this.state.banner_url,
      thumb_url: this.state.thumb_url};
  },

  childContextTypes: {
    banner_url: React.PropTypes.string,
    thumb_url: React.PropTypes.string
  },

  imageChange(type, url){
    this.setState({[type]: url});
  },

  addPage(result){
    console.log(result);
  },

  render(){
    return(
      <article className="content">
        <section className="form-head">
          <h3>Create Comic</h3>
        </section>

        <div className="form-container">
          <FormInputs addPage = {this.addPage}/>
          <FormImages imageChange={this.imageChange} />
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
