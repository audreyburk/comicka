// React
const React = require('react');
const ReactDOM = require('react-dom');

// Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const IndexRedirect = ReactRouter.IndexRedirect;
const hashHistory = ReactRouter.hashHistory;

// Local files
const App = require('./components/app');
const SessionActions = require('./actions/session_actions');
const ShowComic = require('./components/comics/show_comic');
const NewComic = require('./components/comics/new_comic');
const EditComic = require('./components/comics/edit_comic');
const ComicIndex = require('./components/comics/comic_index');
const SessionStore = require('./stores/session_store');
const ComicStore = require('./stores/comic_store');


// For testing only
window.SessionActions = SessionActions;
window.SessionStore = SessionStore;
window.ComicStore = ComicStore;
window.ComicActions = require('./actions/comic_actions');
window.ErrorStore = require('./stores/error_store');

// Actual code
const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ComicIndex} />
      <Route path="index" component={ComicIndex} />
      <Route path="new" component={NewComic} onEnter={_ensureLoggedIn} />
      <Route path=":shortname">
        <IndexRedirect to="1" />
      </Route>
      <Route path=":shortname/edit" component={EditComic} onEnter={_ensureCreator} />
      <Route path=":shortname/:page" component={ShowComic} />
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace){
  if(!SessionStore.isUserLoggedIn()){
    replace('/');
  }
}

// TODO: make sure this works if not navigating from comic page?
function _ensureCreator(nextState, replace){
  const comic = ComicStore.get(nextState.params.shortname);
  if(!SessionStore.isUserLoggedIn() || (comic && SessionStore.currentUser().id !== comic.creator_id)){
    const url = `/${nextState.params.shortname}`;
    replace(url);
  }
}

$( () => {
  if(window.currentUser){
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById("root");
  ReactDOM.render(router, root);
});
