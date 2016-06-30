# Capstone: Comicka <a name="top"></a>
- [Comicka [Live Site]](https://comicka.herokuapp.com/)
- [Minimum Viable Product](#mvp)
- [Bonus Features](#bonus)
- [Design Documents](#design)
- [Production Timeline](#timeline)

<a name="mvp"></a>
## Minimum Viable Product [[top]](#top)
Comicka is a web application inspired by DeviantArt and Hiveworks that will allow users to upload webcomics, read and follow webcomics, and interact via comments. It will be built on a Ruby-on-Rails backend, PostgreSQL database, and React/Flux frontend.

By the end of week nine, this app will satisfy the following criteria:

1. [x] Hosted on Heroku
2. [ ] Production README to replace this file

3. [ ] Site overview:
  - [ ] Adequate seed data
  - [ ] Free of bugs and console logs
  - [ ] Gorgeous!

4. [ ] Account creation and authorization:
  - [x] Sign up, sign in, demo user!
  - [ ] Guests may browse full site
  - [ ] Users may upload comics

5. [ ] Comics:
  - [ ] Displays comic and caption
  - [ ] Appropriate, intuitive navigation
  - [ ] Adequate styling

6. [ ] New / Update Comic
  - [ ] Upload page and captions
  - [ ] Appropriate, intuitive navigation
  - [ ] Adequate styling

7. [ ] Index:
  - [ ] Shows all comics
  - [ ] Read or follow in one click
  - [ ] Adequate styling

<a name="bonus"></a>
## Bonus Features [[top]](#top)

1. [ ] Please let me have time for a Bookshelf:
  - [ ] Shows all comics user is following
  - [ ] Appropriate, intuitive navigation
  - [ ] Adequate styling

2. Semi-Important Bonus Features:
  - [ ] Search/sort functionality
  - [ ] Comments
  - [ ] Bookmarking of readers' place in each comic
  - [ ] Keyboard navigation: forward, backward
  - [ ] Only loads some pages at once

3. Super-bonus Bonus Features
  - [ ] Multiple creators
  - [ ] Improved search: by genre, creator, etc.
  - [ ] Creator styling of comic pages
  - [ ] Nested comments
  - [ ] Moderator accounts for trimming comments, etc.
  - [ ] Recommended/similar comics per user and per comic
  - [ ] Comics have chapter/section markers
  - [ ] Comment upvotes/downvotes; comment hiding
  - [ ] Featured comments
  - [ ] Organizable/draggable bookshelf items
  - [ ] Multiple view options: tiles, list style, etc.
  - [ ] Fancy, comment-style captions
  - [ ] Update schedules

<a name="design"></a>
## Design Documents [[top]](#top)
- [Wireframes](docs/wireframes.md)
- [React Routes](docs/routes.md)
- [React Components](docs/components.md)
- [Flux Cycles](docs/flux_cycles.md)
- [Database Schema](docs/schema.md)
- [API Endpoints](docs/api.md)

<a name="timeline"></a>
## Production Timeline [[top]](#top)

#### Phase 1: We can log in to something!
###### W8D2 (1 day)
- [x] New project!
- [x] User model
- [x] Session/user create/destroy api routes
- [x] Frontend Auth, however that works...
- [x] Blank landing page after sign-in
- [x] Hosted on Heroku!

#### Phase 2: The server knows what to do!
###### W8D3 (1 day)
- [x] Comic model
- [x] Page model
- [x] ComicsController and Rails routes
- [x] PagesController and Rails routes
- [x] Comic JBuilder views
- [x] Test all controller actions
- [x] Seed a bit of test data

#### Phase 3: Oh wow, a React router AND a comic view!?
###### W8D5 (2 days)
- [x] Initialize React router
- [x] Set up React directories
- [x] Make a header
- [x] Read Comic page!
  - [x] No comments yet
  - [ ] Displays page and caption
  - [ ] Vaguely styled

#### Phase 4: We can totally upload comics now!
###### W8D7 (1 weekend)
- [ ] New comic form
  - [ ] Image uploading O_O
  - [ ] Title, shortname, etc.
  - [ ] Vaguely styled

#### Phase 5: They can even be updated!
###### W9D1 (1 day)
- [ ] Edit comic form
  - [ ] Edit all fields but shortname
  - [ ] Change out any images
  - [ ] Insert and remove pages
  - [ ] Vaguely styled

#### Phase 6: Things are starting to look sleek and shiny!
###### W9D2 (1 day)
- [ ] Finalize basic styling
  - [ ] Solidify color palette
  - [ ] Get logo put together
  - [ ] Make everything pretty!

#### Phase 7: It's a never-ending deluge of comics!
###### W9D3 (1 day)
- [ ] Put together an index page
  - [ ] Tiles that link to comic page
  - [ ] Uses all the right Flux bits
  - [ ] Fully styled

#### Phase 8: This is now the sexiest site!
###### W9D4 (1 day)
- [ ] Touch up/finish all styles
- [ ] Add transitions
- [ ] Make sure index page has OOMPH (large tiles, etc)
- [ ] Make it stunning

#### Phase 9: Time to make this house a home!
###### W9D5 (1 day)
- [ ] Ugh figure out how to get all the comics
- [ ] Seed all the comics
- [ ] Custom domain
- [ ] Clean out logs, etc.
  - [ ] window-mounted stores, etc.
- [ ] Ensure HTML/JS injection security
- [ ] Do whatever else needs doing

#### Bonus Phase 1: Oh my god I'm so burnt out!
###### W9D6 (1 day)
- [ ] shortname only available for New Comic, not Edit
- [ ] Readerships model
  - [ ] Including bookmarking
- [ ] Follow button on index tiles and on ReadComic header
- [ ] Bookshelf!
  - [ ] Displays all followed comics
  - [ ] Fancy little nav pane
  - [ ] Shows progress through each comic

#### Bonus Phase 2: Please please just let me sleep!
###### W9D7 (1 day)
- [ ] Set up search flux loop
- [ ] Add search bar to index/bookshelf
- [ ] Add pagination to index
- [ ] Sort by title, creator, amount read, length
