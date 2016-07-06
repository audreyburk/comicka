const React = require('react');
const hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  componentDidMount(){
    this.token = ErrorStore.addListener(this._onErrorChange);
  },

  componentWillUnmount(){
    this.token.remove();
  },

  _onErrorChange(){
    this.setState({errors: ErrorStore.formErrors("new_comic")});
  },

  _addPage(){
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result){
      if(error === null){
        const url = result[0].url;
        const thumb_url = result[0].thumb_url;
        this.props.addPage(url, thumb_url);
      }
    }.bind(this));
  },

  _go(){
    const url = `/${this.props.comic.shortname}`;
    hashHistory.push(url);
  },

  _prevent(e){
    e.preventDefault();
  },

  render(){
    // TODO: can't submit updates till comic fetched
    //       can't press any button till all fields valid?

    //onSubmit taken care of
    //button value needs to change


    const name = this.props.buttonName;
    return(
      <section className="form-inputs">
        <h2>{name}:</h2>
        <form onSubmit={this._prevent}>
          <label className="form-element" htmlFor="title">Comic Title:</label>
          <input type="text" onChange={this.props.onChange} className="form-element"
            id="title" value={this.props.comic.title}></input>

          <label className="form-element" htmlFor="shortname">Shortname:</label>
            <input type="text" onChange={this.props.onChange} className="form-element"
                   id="shortname" value={this.props.comic.shortname}></input>

                 {name === "Update Comic" ?
                   <input type="submit"
                          value="Go to Comic"
                          onClick={this._go}></input> : ""}

          <input type="submit" value={name} onClick={this.props.doComic}></input>
        </form>
      </section>
    )
  }
});
