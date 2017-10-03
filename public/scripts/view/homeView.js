'use strict';

var app = app || {};

(function(module) {
  let subredditJSON = [];
  let allSubreddits = [];
  let titlesJSON = [];
  let subredditTitles = [];
  let oneBigString = '';
  let searchMe;

  // $.get('/authorize/').then(console.log);
  let getSubreddits = function(callback) {
    $.get('/api/getSubreddits/')
      .then(results => {
        subredditJSON = results;
        subredditJSON.data.children.forEach(item => allSubreddits.push(item.data.display_name));
        callback();
      }, err => {
        console.error(err);
      });
  };

  let getSubredditTitles = function() {
    $.get(`/api/getTitles/${allSubreddits[0]}`).then(results => {
      titlesJSON = results;
      titlesJSON.data.children.forEach(item => {
        subredditTitles.push(item.data.title);
      });
    }, err =>{
      // console.error(err);
    }).then(function(){
      oneBigString = subredditTitles.reduce(function(acc, cur){return acc.concat(cur) + ' ';});
      searchMe = JSON.stringify(oneBigString);
    });
  };

})(app);


// $.get(`/api/getTitles/${allSubreddits[0]}`).then(results => {
//   titlesJSON = results;
//
// }, err =>{
//   // console.error(err);
// });

//
// $.get('/authorize/').then(results => {
//   subredditJSON = results;
//   subredditJSON.data.children.forEach(item => allSubreddits.push(item.data.display_name));
// }, err =>{
//   console.error(err);
// });
