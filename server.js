'use strict';


const EXPRESS = require('express');
const PG = require('pg');
const PARSER = require('body-parser');
// const PROXY = require('express-request-proxy');
// const HTTP = require('http');
// const REQUEST_LIB = require('request');

const APP = EXPRESS();
const CON_STRING = process.env.DATABASE_URL || 'postgres://localhost:5432/trendywords';
const PORT = process.env.PORT || 3000;
const CLIENT = new PG.Client(CON_STRING);
CLIENT.connect();

APP.use(PARSER.json());
APP.use(PARSER.urlencoded({ extended: true }));
APP.use(EXPRESS.static('./public'));


APP.get('/', function(request, response){
  response.sendFile('./index.html')
})

APP.get('/authorize', function(request, response){
  console.log(request);
})
APP.listen(PORT);
