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
        [X] update function
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
        [ ] append to DOM
            [X] empty table
            [X] loop and append
            [ ] complete option
            [ ] delete option
        [ ] complete option function
            [X] capture id value
            [X] capture completed boolean
        [X] ajax PUT
            [X] method
            [X] url
            [X] data: true
            [X] .then
            [X] .catch
        [ ] delete option function
            [X] capture id value
        [X] ajax DELETE
            [X] method
            [X] url
            [X] .then
            [X] .catch
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
        [X] PUT
            [X] queryText
            [X] queryParams
            [X] pool
                [X] .then
                [X] .catch
        [X] DELETE
            [X] queryText
            [X] queryParams
            [X] pool
                [X] .then
                [X] .catch
    [ ] style.css
        [ ] bootstrap and sweet alert
        [ ] complete option changes background to green
    [ ] update README.md
