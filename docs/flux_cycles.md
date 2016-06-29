## Flux Cycles
  - [Comic Cycle](#comic-cycle)
  - [Page Cycle](#page-cycle)
  - [Search Suggestion Cycle](#search-cycle)

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
    Bookshelf listens to SessionStore
    Header listens to SessionStore

<a name="page-cycle"></a>
#### Page Cycles

    fetchPages (small chunk at a time)
      1. invoked from ReadComic componentDidMount or willReceiveProps
      2. GET /api/comics/:comic_id
      3. callback ComicAPI.receiveSingleComic

    fetchAllPages
      1. invoked from edit comic componentDidMount or willReceiveProps
      2. GET /api/comics/:comic_id
      3. callback ComicAPI.receiveSingleComic

    createPage
      1. invoked from new/edit comic addPage
      2. POST /api/pages
      3. callback ComicAPI.receiveSingleComic

    updatePage
      1. invoked from edit comic onSubmit
      2. PATCH /api/pages/:page_id
      3. callback ComicAPI.receiveSingleComic

    destroyPage
      1. invoked from edit comic onSubmit
      2. DELETE /api/pages/:page_id
      3. callback ComicAPI.receiveSingleComic

    fetchPage (only if implementing comments and fancy captions)
      1. invoked from ComicPanel componentDidMount or willReceiveProps
      2. GET /api/comics/:comic_id/:page_id
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
