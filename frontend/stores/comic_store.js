const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');
const ComicConstants = require('../constants/comic_constants');

const ErrorStore = new Store(Dispatcher);
let _comics = {};


ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ComicConstants.RECEIVE_COMIC:
      addComic(payload.comic);
      break;
  }
};

ErrorStore.get = function(shortname){
  return _comics[shortname];
}

ErrorStore.all = function(){
  return _comics;
}

function addComic(comic){
  _comics[comic.shortname] = comic;
  ComicStore.__emitChange();
}

module.exports = ErrorStore;
