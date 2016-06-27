# Capstone: Comicka <a name="top"></a>
- [Comicka [Live Site [soon]]](#top)
- [Minimum Viable Product](#mvp)
- [Design Documents](#design)
- [Production Timeline](#timeline)

<a name="mvp"></a>
## Minimum Viable Product [[top]](#top)
Comicka is a web application inspired by DeviantArt and Hiveworks that will allow users to upload webcomics, read and follow webcomics, and interact via comments. It will be built on a Ruby-on-Rails backend, PostgreSQL database, and React/Flux frontend.

By the end of week nine, this app will satisfy the following criteria:

1. [ ] Hosted on Heroku
2. [ ] Production README to replace this file

3. [ ] Site overview:
  - [ ] Adequate seed data
  - [ ] Free of bugs and console logs
  - [ ] Gorgeous!

4. [ ] Account creation and authorization:
  - [ ] Sign up, sign in, demo user!
  - [ ] Guests may browse full site
  - [ ] Users may upload comics, have bookshelf

5. [ ] Comics:
  - [ ] Displays comic and caption
  - [ ] Keyboard navigation: forward, backward
  - [ ] Appropriate, intuitive navigation
  - [ ] Adequate styling

6. [ ] Index:
  - [ ] Shows all comics
  - [ ] Read or follow in one click
  - [ ] Adequate styling

7. [ ] Bookshelf:
  - [ ] Shows all comics user is following
  - [ ] Appropriate, intuitive navigation
  - [ ] Adequate styling

8. [ ] New / Update Comic
  - [ ] Upload page and captions
  - [ ] Appropriate, intuitive navigation
  - [ ] Adequate styling

9. Semi-Important Bonus Features:
  - [ ] Comments
  - [ ] Multiple creators
  - [ ] Bookmarking of readers' place in each comic
  - [ ] Search/sort functionality

10. Super-bonus Bonus Features
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

#### Phase 1: Functioning site with Auth
###### W8D2 (1 day)
    - New project!
    - User model
    - Session/user create/destroy api routes
    - Frontend Auth, however that works...
    - Blank landing page after sign-in
    - Hosted on heroku!

#### Phase 2: Backend can handle pages and comics
###### W8D3 (1 day)
    - Comic model
    - Page model
    - ComicsController and Rails routes
      - shortname only available for New
    - Comic JBuilder views
    - Test all controller actions
    - Seed some data

#### Phase 3: Functional React router and index page
###### W8D5 (2 days)
    - Initialize React router
    - Set up React directories
    - Index page!
      - Header (sans search)
      - Tiles that link to comic page
      - Uses all the right Flux bits
      - Vaguely styled

#### Phase 4: You can read comics now!
###### W8D7 (1 weekend)
    - Read Comic page!
      - No comments yet
      - Displays page and caption
      - Keyboard navigation
      - Vaguely styled

#### Phase 5: New/Edit comic pages
###### W9D1 (1 day)
    - New comic and edit comic forms
      - Image uploading O_O
      - Title, creators, etc.
      - Page insertion
      - Page deletion
      - Vaguely styled

#### Phase 6: Bookshelf and readerships
###### W9D2 (1 day)
    - Readerships model
    - Implement bookmarking
    - Follow button on index tiles, ReadComic header
    - Bookshelf!
      - Displays all followed comics
      - Fancy little nav pane
      - Shows progress through each comic

#### Phase 7: Searchability and organization
###### W9D3 (1 day)
    - Set up search flux loop
    - Add search bar to index/bookshelf
    - Add username search to new/edit page
    - Add pagination to index
    - Sort by title, creator, amount read, length

#### Phase 8: Styling
###### W9D4 (1 day)
    - Touch up/finish all styles
    - Add transitions
    - Make it gorgeous

#### Phase 9: Seeding and Cleanup
###### W9D4 (1 day)
    - Ugh figure out how to get all the comics
    - Seed all the comics
    - Clean out logs, etc.
    - Ensure HTML/JS injection security
    - Do whatever else needs doing
