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

// For testing only
window.SessionActions = SessionActions;
window.SessionStore = require('./stores/session_store');
window.ErrorStore = require('./stores/error_store');
window.ComicStore = require('./stores/comic_store');

// Actual code
const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path=":shortname">
        <IndexRedirect to="1" />
      </Route>
      <Route path=":shortname/:page" component={ShowComic}/>
    </Route>
  </Router>
);

$( () => {
  if(window.currentUser){
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById("root");
  ReactDOM.render(router, root);
});
