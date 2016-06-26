# Live Project

# Minimum Viable Product
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

# Routes
    <Route path="/" component={App}>
      <IndexRoute component={ComicIndex} />
      <Route path=":comicID/:pageID" component={ComicPage} />
      <Route path="new" component={NewComic} />
      <Route path=":comicID/edit" component={EditComic} />
      <Route path="bookshelf" component={Bookshelf} />
    </Route>


# Components

### Index
    App
      Header
        HeaderContent
          Logo
          HeaderButtons
          Search
            Results Modal
              children SearchResults
      ComicGrid
        children ComicTiles
          TileImg
          TileTitle
          TileNav
            children TileButtons
        NavFooter
          Prev
          children PageLinks
          Next
      Footer
        children InfoColumns
          children InfoLinks

### Comic
    App
      Header
        HeaderContent
          Left
            Logo (FAR left)
            PreviousColumn
          Center
            Buttons: First, Previous
            Progress
            Buttons: Next, Latest
          Right
            (blank)
            NextColumn
      ComicPanel
        BannerImg
        ComicImg
        CaptionPanel
          children Caption
            CreatorPic
            CaptionContent
      CommentPanel
        children Comments
          CommenterPic
          CommentContent
      Footer
        children InfoColumns
          children InfoLinks

### Bookshelf
    App
      Header
        HeaderContent
          Logo
          HeaderButtons
          Search
            Results Modal
              Toggle (search all/search bookshelf)
              children SearchResults
      Bookshelf
        children ComicTiles
          TileImg
          TileTitle
          TileProgress (Count of unread pages, small progress bar)
          TileNav
            children TileButtons
      Footer
        children InfoColumns
          children InfoLinks




# Production Timeline

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
