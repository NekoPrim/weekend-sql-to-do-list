**technical tasks**
[X] basic installs
    [X] init
    [X] express
    [X] nodemon
        [X] modify .json "start"
    [X] bodyParser
    [X] pg
    [X] sweetalert2
    <!-- [ ] heroku -->
[X] API setup
    [X] .gitignore 
    [X] server folder
        [X] server.js
            [X] express, bodyParser, and router require
            [X] static files
            [X] port local host
            [X] source router
        [X] public folder
            [X] index.html
                [X] source css, jquery, and js
                [X] input
                [X] button
                [X] table
            [X] scripts folder
                [X] client.js
                    [X] jquery setup
            [X] venders folder
                [X] jquery.js
            [X] styles folder
                [X] style.css
            [X] modules folder
                [X] pool.js
                    [X] pg and pool require
                    [X] module.exports
            [X] routers folder
                [X] task.router.js
                    [X] express, router, and pool require
                    [X] module.exports
    [X] database.sql
        [X] create database `weekend-to-do-app`
        [X] sql code copy
            [X] CREATE TABLE
            [X] INSERT INTO
    [X] postico
        [X] enter sql code
[ ] API communication
    [ ] client.js
        [X] button function
            [X] capture input value
        [X] ajax POST
            [X] method
            [X] url
            [X] data
            [X] .then
                [X] clear input value
            [X] .catch
        [X] ajax GET
            [X] method
            [X] url
            [X] .then
            [X] .catch
        [X] append to DOM
            [X] empty table
            [X] loop and append
            [X] complete button
            [X] delete button
        [ ] complete button function
            [ ] capture id value
            [ ] capture completed boolean
        [ ] ajax PUT
            [ ] method
            [ ] url
            [ ] data: true
            [ ] .then
            [ ] .catch
        [X] delete button function
            [X] capture id value
        [ ] ajax DELETE
            [ ] method
            [ ] url
            [ ] .then
            [ ] .catch
    [ ] task.router.js
        [X] POST
            [X] queryText
            [X] queryParams
            [X] pool
                [X] .then
                [X] .catch
        [X] GET
            [X] queryText
            [X] pool
                [X] .then
                [X] .catch
        [ ] PUT
            [ ] queryText
            [ ] queryParams
            [ ] pool
                [ ] .then
                [ ] .catch
        [ ] DELETE
            [ ] queryText
            [ ] queryParams
            [ ] pool
                [ ] .then
                [ ] .catch
    [ ] style.css
        [ ] bootstrap and sweet alert
    [ ] update README.md
