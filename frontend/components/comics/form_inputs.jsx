const React = require('react');
const hashHistory = require('react-router').hashHistory;

const ErrorStore = require('./../../stores/error_store');

module.exports = React.createClass({
  componentDidMount(){
    this.token = ErrorStore.addListener(this._onErrorStoreChange);
  },

  componentWillUnmount(){
    this.token.remove();
  },

  getInitialState(){
    return { errors: ErrorStore.formErrors("comic") };
  },

  _onErrorStoreChange(){
    const errors = ErrorStore.formErrors("comic");
    this.setState({errors: errors});
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
    let titleErrors = "", shortnameErrors = "", thumbErrors = "";

    if(!$.isEmptyObject(this.state.errors)){
      titleErrors = <div className="form-error">{this.state.errors.title}</div>
      shortnameErrors = <div className="form-error">{this.state.errors.shortname}</div>
      thumbErrors = <div className="form-error">{this.state.errors.thumb_url}</div>
    }

    const name = this.props.buttonName;
    return(
      <section className="form-inputs">
        <h2>{name}:</h2>
        <form onSubmit={this.props.doComic}>
          <label className="form-element" htmlFor="title">Comic Title:</label>
          <input type="text" onChange={this.props.onChange} className="form-element"
                 id="title" value={this.props.comic.title}></input>
          {titleErrors}

          <label className="form-element" htmlFor="shortname">Shortname:</label>
          <input type="text" onChange={this.props.onChange} className="form-element"
                 id="shortname" value={this.props.comic.shortname}></input>
          {shortnameErrors}
          {thumbErrors}
          <div className="form-buttons">
                 {name === "Update Comic" ?
                   <input type="submit" id="other-go"
                          value="Go to Comic"
                          onClick={this._go}></input> : ""}

            <input type="submit" value={name} id="main-button"></input>
          </div>
        </form>
      </section>
    )
  }
});
