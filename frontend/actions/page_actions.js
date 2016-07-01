const Dispatcher = require('./../dispatcher/dispatcher');
const PageUtil = require('./../utils/page_util');
const ErrorActions = require('./../actions/error_actions');
const ComicConstants = require('./../constants/comic_constants');
const ComicActions = require('./../actions/comic_actions');

module.exports = {
  addPages: function(pages){
    PageUtil.addPages(
      pages,
      ComicActions.receivePage,
      ErrorActions.setErrors
    );
  }
};
