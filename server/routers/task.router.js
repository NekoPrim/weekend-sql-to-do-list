const express = require("express");
const taskRouter = express.Router();
const pool = require("../modules/pool");



// POST
taskRouter.post('/', (req, res) => {
    console.log('sent:', req.body);

    // prep sql command for  database
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
        });
});// end POST



// GET
taskRouter.get('/', (req, res) => {
    console.log('in GET');
    // res.send(artistList); dont need
    
    // prep sql command for database
    const queryText = 'SELECT * FROM "checklist" ORDER BY "id" ASC;';

    // tell database to select all tasks
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
        });
});// end GET



// PUT
taskRouter.put('/:taskId', (req, res) => {
    console.log('in PUT', req.body);

    // prep sql command for database
    // always protect the database
    let queryText = `
        UPDATE "checklist"
        SET "completed" = $1
        WHERE "id" = $2;
    `;

    // prep id and completed
    let queryParams = [
        req.body.completed,
        req.params.taskId
    ];

    console.log('update:', queryParams);

    // tell database to update task
    pool.query(queryText, queryParams)
        .then((dbRes) => {
            // tell client of success
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('PUT failed');
            // tell client of failure
            res.sendStatus(500);
        });
});



// DELETE
taskRouter.delete('/:taskId', (req, res) => {
    console.log('in DELETE');

    // check task id
    console.log('task id:', req.params.taskId);

    // prep sql command for database
    // always protect the database
    let queryText = `
        DELETE FROM "checklist"
        WHERE id = $1;
    `;

    // ready task id
    let queryParams = [req.params.taskId];

    // tell database to delete task
    pool.query(queryText, queryParams)
        .then((dbRes) => {
            // tell client of success
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('DELETE failed');
            // tell client of failure
            res.sendStatus(500);
        });
});// end DELETE



module.exports = taskRouter;