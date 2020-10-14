const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

router.put('/', rejectUnauthenticated, (req, res) => {
  console.log(req.body.name, req.body.avatar, req.body.about, req.body.address, req.user.id);

  const queryText = `UPDATE "user" 
  SET "name" = COALESCE( $1 , "name"),
    "avatar" = COALESCE( $2 , "avatar"),
    "about" = COALESCE( $3 , "about"),
    "address" = COALESCE( $4 , "address")
  
  WHERE "id"=$5;`;


  pool.query(queryText, [req.body.name, req.body.avatar, req.body.about, req.body.address, req.user.id])
    .then((result) => {
      res.send(200);
    })
    // catch for query
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const name = req.body.name;

  const queryText = `INSERT INTO "user" (username, password, name)
    VALUES ($1, $2, $3) RETURNING id`;
  pool
    .query(queryText, [username, password, name])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
