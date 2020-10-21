const express = require('express');
const pool = require('../modules/pool');

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


const router = express.Router();

//This database query returns the list of all pals where the user is either pal1 or pal2. 
//If an unauthenticated user navigates to this page, they get a 403 (forbidden) error and are shown the login page.
//As it is, the user's pals are in both pal_1 and pal_2 columns.
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('req.user.id:', req.user.id);
    console.log('in pals router.get,');
    //This query is for all the info of the two tables joined together
    const queryText = `SELECT "pal"."id" AS "friendship_id",
    "pal1"."id" AS "pal1_id",
    "pal2"."id"AS "pal2_id",
    "pal1"."name" AS "pal1_name",
    "pal2"."name" AS "pal2_name",
    "pal1"."avatar" AS "pal1_avatar",
    "pal2"."avatar" AS "pal2_avatar"

    FROM "pal" AS "pal"
        JOIN "user" "pal1" ON "pal1"."id"="pal"."pal1_id"
        JOIN "user" "pal2" ON "pal2"."id"="pal"."pal2_id"
    WHERE ("pal1_id"=$1 OR "pal2_id"=$1) AND "status"='ACCEPTED';`;
    pool.query(queryText, [req.user.id])
        .then((result) => {
            res.send(result.rows);
        })
        // catch for query
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

router.get('/pending', rejectUnauthenticated, (req, res) => {
    console.log('req.user.id:', req.user.id);
    console.log('in pals router.get,');
    //This query is for all the info of the two tables joined together
    const queryText = `SELECT "pal"."id" AS "friendship_id",
    "pal1"."id" AS "pal1_id",
    "pal2"."id"AS "pal2_id",
    "pal1"."name" AS "pal1_name",
    "pal2"."name" AS "pal2_name",
    "pal1"."avatar" AS "pal1_avatar",
    "pal2"."avatar" AS "pal2_avatar"

    FROM "pal" AS "pal"
        JOIN "user" "pal1" ON "pal1"."id"="pal"."pal1_id"
        JOIN "user" "pal2" ON "pal2"."id"="pal"."pal2_id"
    WHERE "pal2_id"=$1 AND "status"='PENDING';`;
    pool.query(queryText, [req.user.id])
        .then((result) => {
            res.send(result.rows);
        })
        // catch for query
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

// get selected pal's details from the database
router.get('/:id', (req, res) => {
    console.log('in pal router. getting pal:', req.params.id);
    let palId = req.params.id
    const queryText = `SELECT "id", "username", "name", "avatar", "about", "address" FROM "user"
    WHERE "user"."id" = $1;`;
    pool.query(queryText, [palId])
        .then((results) => {
            res.send(results.rows[0]);
        })
        // catch for query
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in pal router. deleting pal:', req.params.id);
    console.log('req.user.id:', req.user.id);
    let userId = req.user.id;
    let palId = req.params.id;
    const queryText = `DELETE FROM "pal" WHERE ("pal1_id"=$1 AND "pal2_id"=$2) OR ("pal2_id"=$1 AND "pal1_id"=$2);`;
    pool.query(queryText, [palId, userId])
        .then((results) => {
            res.sendStatus(200);
        })
        // catch for query
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('req.body in pal router post', req.body.id);
    const queryText = `INSERT INTO "pal" ("pal1_id", "pal2_id")
    VALUES ($1, $2);`;
    pool.query(queryText, [req.user.id, req.body.id])
        .then((result) => {
            res.sendStatus(200);
        })
        // catch for query
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    console.log('req.body.pal_id in pal router post', req.body.pal_id);
    const queryText = `UPDATE "pal" 
    SET "status"='ACCEPTED'
    WHERE ("pal1_id"=$1 AND "pal2_id"=$2) OR ("pal2_id"=$1 AND "pal1_id"=$2);`;
    pool.query(queryText, [req.user.id, req.body.pal_id])
        .then((result) => {
            res.sendStatus(200);
        })
        // catch for query
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});



module.exports = router;
