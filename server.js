'use strict';


const EXPRESS = require('express');
// const PG = require('pg');
const PARSER = require('body-parser');
const PROXY = require('express-request-proxy');
// const HTTP = require('http');
// const REQUEST_LIB = require('request');

// const CON_STRING = process.env.DATABASE_URL || 'postgres://localhost:5432/trendywords';
const PORT = process.env.PORT || 3000;
const APP = EXPRESS();
// const CLIENT = new PG.Client(CON_STRING);
// CLIENT.connect();
//
// CLIENT.on('error', err => console.error(err));

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
  console.log(request.params.title);
  (PROXY ({
    url: `http://reddit.com/r/${request.params.title}/.json`
  }))(request, response);}

// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://www.reddit.com/reddits.json",
//   "method": "GET",
//   "headers": {
//     "cache-control": "no-cache",
//     "postman-token": "115e0bf8-5322-f515-7d42-6732c5f3b8ab"
//   }
// };
//
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

APP.listen(PORT);
