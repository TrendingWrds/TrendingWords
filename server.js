'use strict';


const EXPRESS = require('express');
const PG = require('pg');
const PARSER = require('body-parser');
const PROXY = require('express-request-proxy');
const AGENT = require('superagent');
const LIST = require('badwords-list');
let array = LIST.array;

// const HTTP = require('http');
// const REQUEST_LIB = require('request');

const CON_STRING = process.env.DATABASE_URL || 'postgres://localhost:5432/trendingwrds';

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
    url: `https://www.reddit.com/subreddits/.json`
  }))(request, response);}

APP.get('/api/getTitles/:title', getTitles);

function getTitles (request, response) {
  // clearTableRows();
  (PROXY ({
    url: `http://reddit.com/r/${request.params.title}/.json`
  }))(request, response);}

function loadSubredditDB() {
  CLIENT.query(`
    CREATE TABLE IF NOT EXISTS
    subredditNames (
      subreddit_id SERIAL PRIMARY KEY,
      subredditName VARCHAR(255) UNIQUE NOT NULL
    );`
  );
}

loadSubredditDB();

APP.post('/API/subredditNames', function(request, response) {
  // CLIENT.query(
  //   `DELETE * FROM subredditNames;`
  // ).then(
  Object.keys(request.body).forEach(function(key) {
    console.log(key);
    CLIENT.query(
      `INSERT INTO subredditNames(subredditName) VALUES ($1) ON CONFLICT DO NOTHING;`,
      [
        request.body[key]
      ]
    );
  }
  );
  response.send('inserted');
  // );
});

// let clearTableRows = function() {
//   CLIENT.query(
//     `DELETE * FROM subredditNames;`
//   );
// };

// APP.listen(PORT);

var headers = {

  'x-textrazor-key': 'fb48909b03e33ac72c8c87bf368d84dd8ac41a3ba4032f4a7a2b4586',
  'content-type': 'application/x-www-form-urlencoded',
  'cache-control': 'no-cache',
};

// var data =
//   {
//     'text': 'the quick brown fox jumped over the lazy dog',
//     'extractors': 'words'
//   };

APP.post('/api/postRazor', function(req, res) {
  AGENT.post('https://api.textrazor.com/')
    // .send({text: `${req.text}`, extractors: `${req.extractors}` })
    // .set('x-textrazor-key: fb48909b03e33ac72c8c87bf368d84dd8ac41a3ba4032f4a7a2b4586')
    // .set('content-type: application/x-www-form-urlencoded')
    // .set('accept', 'json')
    .set(headers)
    .send(req.body)
    // .send('text=This is a potato&extractors=words')
    .end((err, response) => {
      if (err) console.error('anonymous agent function ' + err);
      console.log(req.body);
      res.send(response.text);
    });
});

var WCHeaders = {
  'X-Mashape-Key': 'N2lDipMwTzmsh2doGsEE4a54hmHWp1eo0KOjsnYEvYtcImOhqs',
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

// These code snippets use an open-source library.
APP.post('/api/postWordCloud', function(request, res){
  request.body.width = parseInt(request.body.width);
  request.body.height = parseInt(request.body.height);
  request.body.f_min = parseInt(request.body.f_min);
  AGENT.post('https://wordcloudservice.p.mashape.com/generate_wc')
    .set(WCHeaders)
    .send(request.body)
    .end((err, response) => {
      if (err) console.error('anonymous agent function ' + err);
      console.log(response.body.url);
      res.send(response.body.url);
    });
});
APP.get('*', (request, response) => {
  response.sendFile('index.html', {root: './public'});
});

APP.listen(PORT, () => console.log(`server started on port ${PORT}!`));
