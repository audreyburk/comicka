<a name="top"></a>
# Capstone: Comicka
- [Comicka [Live Site [soon]]](#top)
- [Minimum Viable Product](#mvp)
- [React Routes](#routes)
- [React Components](#components)
  - [Index](#index)
  - [Read Comic](#comic)
  - [Bookshelf](#bookshelf)
  - [New/Edit Comic](#new)
- [Flux Cycles](#flux)
  - [Comic Cycle](#comic-cycle)
  - [Page Cycle](#page-cycle)
  - [Search Suggestion Cycle](#search-cycle)
- [Production Timeline](#timeline)

<a name="mvp"></a>
## Minimum Viable Product [[top]](#top)
Comicka is a web application inspired by DeviantArt and Hiveworks that will allow users to upload webcomics, read and follow webcomics, and interact via comments. It will be built on a Ruby-on-Rails backend, PostgreSQL database, and React/Flux frontend.

By the end of week nine, this app will satisfy the following criteria:

    1. Hosted on Heroku
    2. Production README to replace this file

    3. Site overview:
      - Appropriate, intuitive navigation
      - Adequate seed data
      - Free of bugs and console logs
      - Gorgeous!

    4. Account creation and authorization:
      - Sign up, sign in, demo user!
      - Guests may browse full site
      - Users may comment, upload comics, have bookshelf

    5. Comics:
      - Displays comic, caption, and comments
      - Keyboard navigation: forward, backward

    6. Index:
      - Shows all comics
      - Searchable/sortable
      - Read or follow in one click

    7. Bookshelf:
      - Shows all comics user is following
      - Sortable/searchable

    8. New / Update Comic
      - Upload page and captions

    9. Bonus Features:
    - Improved search: by genre, creator, etc.
      - Bookmarking of readers' place in each comic
      - Creator styling of comic pages
      - Nested comments
      - Moderator accounts for trimming comments, etc.
      - Recommended/similar comics per user and per comic
      - Comics have chapter/section markers
      - Comment upvotes/downvotes; comment hiding
      - Featured comments
      - Organizable/draggable bookshelf items
      - Multiple view options: tiles, list style, etc.

<a name="routes"></a>
## Routes [[top]](#top)
    <Route path="/" component={App}>
      <IndexRoute component={ComicIndex} />
      <Route path=":comicID/:pageID" component={ComicPage} />
      <Route path="new" component={NewComic} />
      <Route path=":comicID/edit" component={EditComic} />
      <Route path="bookshelf" component={Bookshelf} />
    </Route>


<a name="components"></a>
## Components [[top]](#top)

<a name="index"></a>
#### Index
    App
      Header
        Logo
        HeaderButtons
        Search
        ProfilePic / LogIn
      ComicGrid
        ComicTiles
          TileImg
          TileTitle
          TileNav
        NavFooter
          First
          Prev
          PaginationNavButton
          Next
      Footer

<a name="comic"></a>
#### Comic
    App
      Header
        Logo
        Buttons: First, Previous
        Progress
        Buttons: Next, Latest
        ProfilePic / LogIn
      ReadComic
        ComicPanel
          BannerImg
          ComicImg
          CaptionPanel
            Captions
              CreatorPic
              CaptionContent
        CommentPanel
          Comments
            CommenterPic
            CommentContent
      Footer

<a name="bookshelf"></a>
#### Bookshelf
    App
      Header
        Logo
        HeaderButtons
        Search
        ProfilePic / LogIn
      Bookshelf
        BookshelfStats
        BookshelfGrid
          BookshelfTiles
            BookshelfThumb
            BookshelfTileInfo
            BookshelfTileProgress
            BookshelfTileNav
      Footer

<a name="new"></a>
#### New/Edit Comic
    App
      Header
        Logo
        HeaderButtons
        Search
        ProfilePic / LogIn
      NewComic
        ComicForm
          Title
          ShortName
          Creators
          Pages
          AddPage
      Footer


<a name="flux"></a>
## Flux Cycles

<a name="comic-cycle"></a>
#### Comic Cycles

###### Comic API Request Actions

    fetchAllComics
      1. invoked from ComicIndex componentDidMount
      2. GET /api/comics
      3. callback receiveAllComics

    fetchBookshelfComics
      1. invoked from Bookshelf componentDidMount
      2. GET /api/comics/bookshelf
      3. callback receiveBookshelfComics

    createComic
      1. invoked from new comic onSubmit
      2. POST /api/comics
      3. callback receiveSingleComic

    updateComic
      1. invoked from edit comic onSubmit
      2. PATCH /api/comics
      3. callback receiveSingleComic

    destroyComic
      1. invoked from edit comic delete button onSubmit
      2. DELETE /api/comics/:comic_id
      3. callback removeNote

###### Comic API Response Actions

    receiveAllComics
    receiveBookshelfComics
    receiveSingleComic
    removeComic
      - ComicStore updates and emits change

###### Store Listeners

    ComicIndex listens to ComicStore
    Bookshelf listens to ComicStore
    ??? On unfollow, how to remove from Bookshelf?

<a name="page-cycle"></a>
#### Page Cycles

    fetchPages (small chunk at a time)
      1. invoked from ReadComic componentDidMount or willReceiveProps
      2. GET /api/:comic_id
      3. callback ComicAPI.receiveSingleComic

    fetchAllPages
      1. invoked from edit comic componentDidMount or willReceiveProps
      2. GET /api/:comic_id
      3. callback ComicAPI.receiveSingleComic

    updatePage
      1. invoked from edit comic onSubmit
      2. PATCH /api/:comic_id/:page_id
      3. callback ComicAPI.receiveSingleComic

    destroyPage
      1. invoked from edit comic onSubmit
      2. DELETE /api/:comic_id/:page_id
      3. callback ComicAPI.receiveSingleComic

<a name="search-cycle"></a>
#### SearchSuggestions Cycles

    fetchSearchSuggestions
      1. invoked from Search onChange with input text
      2. GET /api/comics
      3. callback receiveSearchSuggestions

    receiveSearchSuggestions
      - SearchSuggestionStore updates and emits change

###### Store Listeners

    SearchResultPane listens to SearchSuggestionStore

<a name="timeline"></a>
## Production Timeline [[top]](#top)

    W8D2:
    - New project!
    - User model
    - session/user create/destroy api routes
    - contentless index page after sign-in
    - hosted on heroku!

    W8D3:
    - Comic model
    - Comic api controller
    - Comic api views
