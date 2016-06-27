## API Endpoints

#### HTML API

    GET     /           loads App
    POST    /users      sign up
    PATCH   /users      update user?
    POST    /session    sign in
    DELETE  /session    sign out

#### JSON API

    GET     /api/comics             returns all comics
    GET     /api/comics/bookshelf   returns followed comics
    GET     /api/comics/:comic_id   returns all pages
    POST    /api/comics             create comic
    PATCH   /api/comics             update comic
    DELETE  /api/comics             destroy comic
