const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

const ErrorStore = new Store(Dispatcher);

let _errors = {};
let _form = "";

function _setErrors(payload){
  _errors = payload.errors;
  _form = payload.form;
  ErrorStore.__emitChange();
}

function _clearErrors(){
  _errors = {};
  _form = "";
  ErrorStore.__emitChange();
}

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      _setErrors(payload);
      break;
    case ErrorConstants.CLEAR_ERRORS:
      _clearErrors();
      break;
  }
};

ErrorStore.formErrors = function (form) {
  if (form !== _form) {
    return {};
  }

  // copies the _errors object into a new object
  const result = {};
  for (let field in _errors) {
    result[field] = Array.from(_errors[field]);
  }

  return result;
};

ErrorStore.form = function() {
  return _form;
};

module.exports = ErrorStore;
