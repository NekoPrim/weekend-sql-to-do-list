const express = require("express");
const taskRouter = express.Router();
const pool = require("../modules/pool");



// POST
taskRouter.post('/', (req, res) => {
    console.log('sent:', req.body);

    // prep insert task into database
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







module.exports = taskRouter;