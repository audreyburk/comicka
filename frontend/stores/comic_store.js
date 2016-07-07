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
    case ComicConstants.RECEIVE_ALL_COMICS:
      addAllComics(payload.comics);
      break;
  }
};

ComicStore.get = function(shortname){
  return _comics[shortname];
};

ComicStore.all = function(){
  const keys = Object.keys(_comics);
  const result = [];
  keys.forEach( key => {
    result.push(_comics[key]);
  });
  return result;
};

function addAllComics(comics){
  const keys = Object.keys(comics);
  keys.forEach( key => {
    if(!_comics[key]){
      _comics[key] = comics[key];
    }
  });
  ComicStore.__emitChange();
}

function addComic(comic){
  _comics[comic.shortname] = comic;
  ComicStore.__emitChange();
}

module.exports = ComicStore;
