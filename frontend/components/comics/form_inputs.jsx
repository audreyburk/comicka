const React = require('react');

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

  render(){
    // TODO: can't submit updates till comic fetched
    //       can't press any button till all fields valid?

    //onSubmit taken care of
    //button value needs to change


    return(
      <section className="form-inputs">
        <h2>{this.props.buttonName}:</h2>
        <form onSubmit={this.props.doComic}>
          <label className="form-element" htmlFor="title">Comic Title:</label>
          <input type="text" onChange={this.props.onChange} className="form-element"
            id="title" value={this.props.comic.title}></input>

          <label className="form-element" htmlFor="shortname">Shortname:</label>
            <input type="text" onChange={this.props.onChange} className="form-element"
                   id="shortname" value={this.props.comic.shortname}></input>

          <input type="submit" value={this.props.buttonName}></input>
        </form>
      </section>
    )
  }
});
