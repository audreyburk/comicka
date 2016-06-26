<a name="top"></a>
# Capstone: Comicka
- [Comicka [Live Site [soon]]](#mvp)
- [Minimum Viable Product](#mvp)
- [React Routes](#routes)
- [React Components](#components)
  - [Index](#index)
  - [Read Comic](#comic)
  - [Bookshelf](#bookshelf)
  - [New Comic](#new)
- [Production Timeline](#timeline)

<a name="mvp"></a>
## Minimum Viable Product [[top]](#top)
Comicka is a web application inspired by DeviantArt and Hiveworks that will allow users to upload webcomics, read and follow webcomics, and interact via comments. It will be built on a Ruby*on*Rails backend, PostgreSQL database, and React/Flux frontend.

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
        - Bookmarking of readers' place in each comic
        - Creator styling of comic pages
        - Moderator accounts for trimming comments, etc.
        - Recommended/similar comics per user and per comic
        - Comics have chapter/section markers
        - Nested comments
        - Comment upvotes/downvotes; comment hiding
        - Featured comments
        - Improved search: by genre, creator, etc.
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
### Index
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
### Comic
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
### Bookshelf
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
### New Comic
    App
      Header
        Logo
        HeaderButtons
        Search
        ProfilePic / LogIn
      NewComic
        ???
      Footer


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
