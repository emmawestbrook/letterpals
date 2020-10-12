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
    "pal2"."name" AS "pal2_name"

    FROM "pal" AS "pal"
        JOIN "user" "pal1" ON "pal1"."id"="pal"."pal1_id"
        JOIN "user" "pal2" ON "pal2"."id"="pal"."pal2_id"
    WHERE "pal1_id"=$1 OR "pal2_id"=$1;`;
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




module.exports = router;
