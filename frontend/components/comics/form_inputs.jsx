const React = require('react');
const ComicActions = require('./../../actions/comic_actions');

module.exports = React.createClass({
  getInitialState(){
    return {title: "",
            shortname: "",
            errors: ErrorStore.formErrors("new")};
  },

  componentDidMount(){
    this.token = ErrorStore.addListener(this._onErrorChange);
  },

  componentWillUnmount(){
    this.token.remove();
  },

  _onChange(e){
    this.setState({[e.target.id]: e.target.value});
  },

  _onErrorChange(){
    this.setState({errors: ErrorStore.formErrors("new_comic")});
  },

  _createComic(){
    // TODO: also make pages
    //       and require at least one page
    //       is this that inverse of stuff?

    // TODO: disable button until all fields are set!

    const comic = {
      title: this.state.title,
      shortname: this.state.shortname,
      banner_url: this.context.banner_url,
      thumb_url: this.context.thumb_url
    };
    ComicActions.createComic(comic);
  },

  render(){
    return(
      <section className="form-inputs">
        <h2>Create Comic:</h2>
        <form onSubmit={this._createComic}>
          <label className="form-element" htmlFor="title">Comic Title:</label>
          <input type="text" onChange={this._onChange} className="form-element"
            id="title" value={this.state.title}></input>

          <label className="form-element" htmlFor="shortname">Shortname:</label>
            <input type="text" onChange={this._onChange} className="form-element"
                   id="shortname" value={this.state.shortname}></input>

          <input type="submit" value="Create Comic"></input>
        </form>
      </section>
    )
  }
});
