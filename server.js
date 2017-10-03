'use strict';


const EXPRESS = require('express');
const PG = require('pg');
const PARSER = require('body-parser');
const PROXY = require('express-request-proxy');
// const HTTP = require('http');
// const REQUEST_LIB = require('request');

const CON_STRING = process.env.DATABASE_URL || 'postgres://localhost:5432/trendywrds';
const PORT = process.env.PORT || 3000;
const APP = EXPRESS();
const CLIENT = new PG.Client(CON_STRING);
CLIENT.connect();

CLIENT.on('error', err => console.error(err));

APP.use(PARSER.json());
APP.use(PARSER.urlencoded({ extended: true }));
APP.use(EXPRESS.static('./public'));


APP.get('/', function(request, response){
  response.sendFile('./index.html');
});

APP.get('/api/getSubreddits/', getReddit);

function getReddit (request, response) {
  (PROXY ({
    url: `http://reddit.com/reddits.json`
  }))(request, response);}

APP.get('/api/getTitles/:title', getTitles);

function getTitles (request, response) {
  (PROXY ({
    url: `http://reddit.com/r/${request.params.title}/.json`
  }))(request, response);}

// var settings = {
//   'url': 'https://api.textrazor.com/',
//   'method': 'POST',
//   'headers': {
//     'x-textrazor-key': 'fb48909b03e33ac72c8c87bf368d84dd8ac41a3ba4032f4a7a2b4586',
//     'content-type': 'application/x-www-form-urlencoded',
//   },
//   'data': {
//     'url': 'data/killMeData.json',
//     'extractors': 'words'
//   }
// };
//
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

function loadSubredditDB() {
  CLIENT.query(`
    CREATE TABLE IF NOT EXISTS
    subredditNames (
      subreddit_id SERIAL PRIMARY KEY,
      subredditName VARCHAR(100) NOT NULL
    )`
  );
}

APP.post('/API/subredditNames', function(request, response) {
  CLIENT.query(
    `DELETE * FROM subredditNames;`
  ).then(
    Object.keys(request.body.subredditNamesObject).forEach(function(key) {
      CLIENT.query(
        `INSERT INTO subredditNames(subredditName)
    VALUES ($1);`,
        [
          request.body.subredditNamesObject[key]
        ]
      );
    }
    )
  );
});

APP.listen(PORT);
