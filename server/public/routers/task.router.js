const express = require("express");
const taskRouter = express.Router();
const pool = require("../modules/pool");

// store tasks
checklist = [];

// POST
taskRouter.post('/', (req, res) => {
    console.log('sent:', req.body);

    // prep insert task into database
    // protect database from user
    let queryText = `
        INSERT INTO "tasks"
            ("task")
        VALUES
            ($1);
    `;

    // prep task
    let queryParams = [
        req.body
    ];

    // tell database insert task
    pool.query(queryText, queryParams)
        .then((dbRes) => {
            // tell client success
            res.sendStatus(201);
        })
        .catch((err) => {
            // tell client failure
            console.log('POST failed!');
            res.sendStatus(500);
        })
})







module.exports = taskRouter;