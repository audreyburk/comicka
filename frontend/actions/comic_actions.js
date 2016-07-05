const Dispatcher = require('./../dispatcher/dispatcher');
const ComicUtil = require('./../utils/comic_util');
const ErrorActions = require('./../actions/error_actions');
const ComicConstants = require('./../constants/comic_constants');

module.exports = {
  // TODO: any reason to set errors on fetches??

  fetchAllComics: function(shortname){
    ComicUtil.fetchAllComics(this.receiveAllComics, ErrorActions.setErrors);
  },

  fetchComic: function(shortname){
    ComicUtil.fetchComic(shortname, this.receiveComic, ErrorActions.setErrors);
  },

  createComic: function(comic, cb){
    ComicUtil.createComic(comic, response => this.receiveComic(response, cb), ErrorActions.setErrors);
  },

  updateComic: function(comic, pages){
    ComicUtil.updateComic(comic, this.receiveComic, ErrorActions.setErrors);
  },

  receiveComic: function(comic, cb){
    ErrorActions.clearErrors();
    Dispatcher.dispatch({
      actionType: ComicConstants.RECEIVE_COMIC,
      comic: comic
    });
    cb();
  },

  receiveAllComics: function(comics){
    ErrorActions.clearErrors();
    Dispatcher.dispatch({
      actionType: ComicConstants.RECEIVE_ALL_COMICS,
      comics: comics
    });
  },


};
