## Routes
    <Route path="/" component={App}>
      <IndexRoute component={ComicIndex} />
      <Route path=":comicID/:pageID" component={ComicPage} />
      <Route path="new" component={NewComic} />
      <Route path=":comicID/edit" component={EditComic} />
      <Route path="bookshelf" component={Bookshelf} />
    </Route>
