const express = require('express');
const pool = require('../modules/pool');

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

const router = express.Router();

router.get('/to', rejectUnauthenticated, (req, res) => {
    console.log('req.user.id:', req.user.id);
    //This query is for all the info of the two tables joined together
    const queryText = `SELECT 	"letter"."id" AS "letter_id",
                                "from"."id" AS "from_id", 
                                "to"."id"AS "to_id",
                                "from"."name" AS "from_name", 
                                "to"."name" AS "to_name",
                                "letter"."postmark" AS "postmark",
                                "letter"."recieved" AS "recieved" 
                                
                        FROM "letter" AS "letter"
                        JOIN "user" "from" ON "from"."id"="letter"."from_id"
                        JOIN "user" "to" ON "to"."id"="letter"."to_id" 
                        WHERE "to_id"=$1;`;
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

router.get('/from', rejectUnauthenticated, (req, res) => {
    console.log('req.user.id:', req.user.id);
    //This query is for all the info of the two tables joined together
    const queryText = `SELECT 	"letter"."id" AS "letter_id",
                                "from"."id" AS "from_id", 
                                "to"."id"AS "to_id",
                                "from"."name" AS "from_name", 
                                "to"."name" AS "to_name",
                                "letter"."postmark" AS "postmark",
                                "letter"."recieved" AS "recieved" 
                                
                        FROM "letter" AS "letter"
                        JOIN "user" "from" ON "from"."id"="letter"."from_id"
                        JOIN "user" "to" ON "to"."id"="letter"."to_id" 
                        WHERE "from_id"=$1`;
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
