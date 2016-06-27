## Database Schema

#### comics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
shortname   | string    | not null
creator_id  | integer   | not null
thumb_url   | string    | not null
banner_url  | string    | not null

#### pages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
comic_id    | integer   | not null, foreign key (references comics), indexed
image_url   | string    | not null
thumb_url   | string    | not null
title       | string    |
caption     | text      |

#### comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
page_id     | integer   | not null, foreign key, indexed
title       | string    | not null [body]
body        | text      |

#### readerships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
bookmark    | integer   | not null, default 1
reader_id   | integer   | not null, foreign key, indexed, unique [comic_id]
comic_id    | integer   | not null, foreign key, indexed

#### users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
