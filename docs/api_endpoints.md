## API Endpoints

#### HTML API

    GET     /              loads App
    POST    api/users      sign up
    PATCH   api/users      update user?
    POST    api/session    sign in
    DELETE  api/session    sign out
    GET     api/session

#### JSON API

    GET     /api/comics             returns all comics
    GET     /api/comics/bookshelf   returns followed comics
    GET     /api/comics/:comic_id   returns all pages
    POST    /api/comics             create comic
    PATCH   /api/comics             update comic
    DELETE  /api/comics             destroy comic
