const express = require("express");
const taskRouter = express.Router();
const pool = require("../modules/pool");



// POST
taskRouter.post('/', (req, res) => {
    console.log('sent:', req.body);

    // prep command for  database
    // protect database from user
    let queryText = `
        INSERT INTO "checklist"
            ("task")
        VALUES
            ($1);
    `;

    // prep task
    let queryParams = [
        req.body.task
    ];

    // tell database insert task
    pool.query(queryText, queryParams)
        .then((dbRes) => {
            // tell client success
            res.sendStatus(201);
        })
        .catch((err) => {
            // tell client failure
            console.log('POST failed!', err);
            res.sendStatus(500);
        })
});



// GET
taskRouter.get('/', (req, res) => {
    console.log('in GET');
    // res.send(artistList); dont need
    
    // prep sql command for database
    const queryText = 'SELECT * FROM "checklist";';
    // send sql query to database
    pool.query(queryText)
        .then((dbRes) => {
            console.log(dbRes.rows);
            // send data back to the client
            res.send(dbRes.rows);
        })
        .catch((err) => {
            console.log('GET failed!', err);
            // tell client of failure
            res.sendStatus(500);
        })
});







module.exports = taskRouter;