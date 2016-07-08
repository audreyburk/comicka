const Dispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionUtil = require('../utils/session_util');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;

const SessionActions = {

  signUp(formData, cb){
    SessionUtil.signUp(
      formData,
      response => SessionActions.receiveCurrentUser(response, cb),
      ErrorActions.setErrors);
  },

  logIn(formData, cb){
    SessionUtil.logIn(
      formData,
      response => SessionActions.receiveCurrentUser(response, cb),
      ErrorActions.setErrors);
  },

  logOut() {
    SessionUtil.logOut(SessionActions.removeCurrentUser);
    hashHistory.push('/');
  },

  fetchCurrentUser(complete){
    SessionUtil.fetchCurrentUser(
      SessionActions.receiveCurrentUser, complete);
  },

  receiveCurrentUser(currentUser, cb) {
    ErrorActions.clearErrors();
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
    if(cb !== "success" && cb !== undefined) cb();
  },

  removeCurrentUser() {
    ErrorActions.clearErrors();
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    // hashHistory.push("/login");
  }

};

module.exports = SessionActions;
