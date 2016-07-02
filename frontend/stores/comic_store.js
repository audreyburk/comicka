const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');
const ComicConstants = require('../constants/comic_constants');

const ComicStore = new Store(Dispatcher);
let _comics = {};

ComicStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ComicConstants.RECEIVE_COMIC:
      addComic(payload.comic);
      break;
  }
};

ComicStore.get = function(shortname){
  return _comics[shortname];
};

ComicStore.all = function(){
  return _comics;
};

function addComic(comic){
  _comics[comic.shortname] = comic;
  ComicStore.__emitChange();
}

module.exports = ComicStore;
