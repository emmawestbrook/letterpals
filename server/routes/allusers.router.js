const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT "id", "username", "name", "avatar" FROM "user";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        // catch for query
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log("user id in get one user", req.params.id);
    const queryText = `SELECT "id", "username", "name", "avatar" FROM "user" WHERE "id"=$1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            console.log('results.rows', result.rows)
            res.send(result.rows[0]);
        })
        // catch for query
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;
