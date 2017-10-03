'use strict';

var app = app || {};

(function(module) {
  let subredditJSON = [];
  let allSubreddits = [];
  let titlesJSON = [];
  let subredditTitles = [];
  let oneBigString = '';
  let searchMe;

  let getSubreddits = function(callback, callback2) {
    $.get('/api/getSubreddits/')
      .then(results => {
        subredditJSON = results;
        subredditJSON.data.children.forEach(item => allSubreddits.push(item.data.display_name));
        callback();
        callback2();
      }, err => {
        console.error(err);
      });
  };

  let getSubredditTitles = function(selectedSubreddit) {
    $.get(`/api/getTitles/${selectedSubreddit}`).then(results => {
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

  let fillTableWithSubredditNames = function() {
    let subredditNamesObject = {};
    allSubreddits.forEach(function(subRedditName) {
      let key = subRedditName;
      subredditNamesObject[key] = subRedditName;
    });
    $.post('/API/subredditNames',
      subredditNamesObject
    );
  };

  module.getSubreddits = getSubreddits;
  module.getSubredditTitles = getSubredditTitles;
  module.fillTableWithSubredditNames = fillTableWithSubredditNames;

})(app);
